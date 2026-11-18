import crypto from "node:crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RESEND_API = "https://api.resend.com";
const TOLERANCE_SECONDS = 5 * 60;
const MAX_ATTACHMENT_BYTES = 4 * 1024 * 1024;

type Attachment = {
  id: string;
  filename?: string;
  content_type: string;
  content_disposition?: string;
  content_id?: string;
  download_url: string;
};

const json = (data: object, status: number) =>
  Response.json(data, { status, headers: { "Cache-Control": "no-store" } });

function verifySignature(payload: string, headers: Headers, secret: string) {
  const id = headers.get("webhook-id");
  const timestamp = headers.get("webhook-timestamp");
  const signature = headers.get("webhook-signature");
  if (!id || !timestamp || !signature) return false;
  const age = Math.abs(Date.now() / 1000 - Number(timestamp));
  if (!Number.isFinite(age) || age > TOLERANCE_SECONDS) return false;
  const key = Buffer.from(secret.replace(/^whsec_/, ""), "base64");
  const expected = crypto
    .createHmac("sha256", key)
    .update(`${id}.${timestamp}.${payload}`)
    .digest();
  return signature.split(" ").some((part) => {
    const [version, value] = part.split(",");
    if (version !== "v1" || !value) return false;
    const given = Buffer.from(value, "base64");
    return given.length === expected.length && crypto.timingSafeEqual(given, expected);
  });
}

function debugSignature(payload: string, headers: Headers, secret: string) {
  const id = headers.get("webhook-id") || "";
  const timestamp = headers.get("webhook-timestamp") || "";
  const signature = headers.get("webhook-signature") || "";
  const key = Buffer.from(secret.replace(/^whsec_/, ""), "base64");
  const expected = crypto.createHmac("sha256", key).update(id + "." + timestamp + "." + payload).digest("base64");
  return {
    hasId: Boolean(id), hasTs: Boolean(timestamp), hasSig: Boolean(signature),
    age: timestamp ? Math.round(Date.now() / 1000 - Number(timestamp)) : null,
    keyLen: key.length, secretHead: secret.slice(0, 12),
    payloadLen: payload.length, payloadHead: payload.slice(0, 40),
    givenHead: signature.slice(0, 20), expectedHead: expected.slice(0, 20),
    givenCount: signature.split(" ").length,
  };
}

async function resend(path: string, key: string, init: RequestInit = {}) {
  const res = await fetch(`${RESEND_API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
    signal: AbortSignal.timeout(15000),
  });
  const text = await res.text();
  let body: unknown = null;
  try { body = text ? JSON.parse(text) : null; } catch { body = text; }
  return { ok: res.ok, status: res.status, body };
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));

// Webhook retries and duplicate deliveries are expected; keep a short-lived memo.
const seen = new Map<string, number>();
function alreadyHandled(id: string) {
  const now = Date.now();
  for (const [key, at] of seen) if (now - at > 60 * 60 * 1000) seen.delete(key);
  if (seen.has(id)) return true;
  seen.set(id, now);
  return false;
}

export async function POST(request: Request) {
  const key = process.env.RESEND_API_KEY;
  const secret = process.env.RESEND_WEBHOOK_SECRET;
  const forwardTo = (process.env.INBOUND_FORWARD_TO || "")
    .split(",").map((v) => v.trim()).filter(Boolean);
  const forwardFrom = process.env.INBOUND_FORWARD_FROM || "Lury Beauty <info@lurybeauty.com>";
  if (!key || !secret || !forwardTo.length) return json({ error: "Not configured" }, 503);

  const payload = await request.text();
  if (payload.length > 512 * 1024) return json({ error: "Payload too large" }, 413);
  if (!verifySignature(payload, request.headers, secret)) return json({ error: "Invalid signature", debug: debugSignature(payload, request.headers, secret) }, 401);

  let event: { type?: string; data?: { email_id?: string } };
  try { event = JSON.parse(payload); } catch { return json({ error: "Invalid JSON" }, 400); }
  if (event.type !== "email.received" || !event.data?.email_id) return json({ accepted: true, ignored: true }, 200);

  const emailId = event.data.email_id;
  if (alreadyHandled(emailId)) return json({ accepted: true, duplicate: true }, 200);

  const received = await resend(`/emails/receiving/${emailId}`, key);
  if (!received.ok || !received.body || typeof received.body !== "object") return json({ error: "Could not load email" }, 502);
  const email = received.body as {
    from?: string; to?: string[]; subject?: string; text?: string; html?: string;
    reply_to?: string[]; attachments?: Attachment[]; created_at?: string;
  };

  const originalFrom = email.from || "unknown";
  const subject = email.subject?.trim() || "(no subject)";
  const envelopeTo = (email.to || []).join(", ");

  // Copy attachments across, within a size budget that stays under the
  // platform's response/request limits.
  // Signed download URLs live on the dedicated attachments endpoint.
  const listed = await resend(`/emails/receiving/${emailId}/attachments`, key);
  const listedItems =
    listed.ok && listed.body && typeof listed.body === "object"
      ? ((listed.body as { data?: Attachment[] }).data || [])
      : [];
  const source = listedItems.length ? listedItems : (email.attachments || []);

  const attachments: { filename: string; content: string; content_type?: string; content_id?: string }[] = [];
  let budget = MAX_ATTACHMENT_BYTES;
  let skipped = 0;
  for (const item of source) {
    try {
      const head = await fetch(item.download_url, { method: "HEAD", signal: AbortSignal.timeout(10000) });
      const size = Number(head.headers.get("content-length") || 0);
      if (size && size > budget) { skipped += 1; continue; }
      const file = await fetch(item.download_url, { signal: AbortSignal.timeout(15000) });
      if (!file.ok) { skipped += 1; continue; }
      const buffer = Buffer.from(await file.arrayBuffer());
      if (buffer.length > budget) { skipped += 1; continue; }
      budget -= buffer.length;
      attachments.push({
        filename: item.filename || "attachment",
        content: buffer.toString("base64"),
        content_type: item.content_type || undefined,
        content_id: item.content_id || undefined,
      });
    } catch { skipped += 1; }
  }

  const notice = skipped
    ? `\n\n[${skipped} attachment(s) were too large to forward. Open the original in Resend to download them.]`
    : "";
  const text = (email.text || "(This message has no plain-text body.)") + notice;
  const html = email.html
    ? `${email.html}${skipped ? `<p style="font-family:system-ui,sans-serif;font-size:12px;color:#b00">${escapeHtml(`${skipped} attachment(s) were too large to forward.`)}</p>` : ""}`
    : `<pre style="white-space:pre-wrap;font-family:ui-monospace,Menlo,monospace">${escapeHtml(text)}</pre>`;

  const sent = await resend("/emails", key, {
    method: "POST",
    headers: { "Idempotency-Key": `fwd-${emailId}` },
    body: JSON.stringify({
      from: forwardFrom,
      to: forwardTo,
      reply_to: originalFrom,
      subject,
      text,
      html,
      attachments: attachments.length ? attachments : undefined,
      headers: {
        "X-Forwarded-To": envelopeTo,
        "X-Forwarded-From": originalFrom,
        "X-Original-Message-Id": `received:${emailId}`,
      },
    }),
  });

  if (!sent.ok) return json({ error: "Forward failed", detail: sent.body }, 502);
  return json({ accepted: true, forwarded_to: forwardTo }, 200);
}

export async function GET() {
  return json({ ok: true, service: "lury-inbound" }, 200);
}