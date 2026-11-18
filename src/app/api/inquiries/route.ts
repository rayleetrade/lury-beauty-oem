import { fieldLimits, inquiryText, validateInquiry, type Attribution, type InquiryMode, type InquiryValues } from "../../lib/lead";
import { siteConfig } from "../../siteConfig";
export const runtime = "nodejs";

const reply = (data: object, status: number) => Response.json(data, { status, headers: { "Cache-Control": "no-store" } });

// Best-effort throttle. Serverless instances are ephemeral, so this raises the
// cost of casual abuse without claiming to be a durable rate limiter.
const attempts = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
function throttled(key: string) {
  const now = Date.now();
  const recent = (attempts.get(key) ?? []).filter((at) => now - at < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) { attempts.set(key, recent); return true; }
  recent.push(now);
  attempts.set(key, recent);
  if (attempts.size > 5000) for (const [k, v] of attempts) if (!v.some((at) => now - at < WINDOW_MS)) attempts.delete(k);
  return false;
}

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));

function channels() {
  const resendKey = process.env.RESEND_API_KEY;
  const emailTo = (process.env.INQUIRY_EMAIL_TO || siteConfig.email).split(",").map((v) => v.trim()).filter(Boolean);
  const callmebotPhone = process.env.CALLMEBOT_PHONE;
  const callmebotKey = process.env.CALLMEBOT_APIKEY;
  return {
    email: Boolean(resendKey && emailTo.length),
    resendKey, emailTo,
    from: process.env.INQUIRY_EMAIL_FROM || "Lury Beauty Website <onboarding@resend.dev>",
    whatsapp: Boolean(callmebotPhone && callmebotKey),
    callmebotPhone, callmebotKey,
  };
}

async function sendEmail(id: string, mode: InquiryMode, values: InquiryValues, text: string, source: Record<string, string>) {
  const c = channels();
  if (!c.email) return false;
  const subject = `[Lury] ${mode === "sample" ? "Sample" : "OEM"} inquiry ${id} - ${values.country} - ${values.name}`;
  const html = `<div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;line-height:1.6;color:#1a1a1a"><p style="margin:0 0 16px">New ${mode === "sample" ? "sample request" : "OEM inquiry"} from ${escapeHtml(siteConfig.siteUrl)}</p><pre style="white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px;background:#f6f4f1;padding:16px;border-radius:8px;margin:0">${escapeHtml(text)}</pre><p style="margin:16px 0 0;font-size:12px;color:#666">Reference ${escapeHtml(id)} &middot; source ${escapeHtml(source.source || "direct")}</p></div>`;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${c.resendKey}`, "Idempotency-Key": id },
      body: JSON.stringify({ from: c.from, to: c.emailTo, reply_to: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.contact) ? values.contact : undefined, subject, text, html }),
      signal: AbortSignal.timeout(8000),
    });
    return res.ok;
  } catch { return false; }
}

async function sendWhatsApp(id: string, values: InquiryValues) {
  const c = channels();
  if (!c.whatsapp) return false;
  const body = `New Lury inquiry ${id}\n${values.name} - ${values.country}\n${values.contact}\nQty: ${values.quantity || "to discuss"}\n${values.interest}`.slice(0, 900);
  const url = new URL("https://api.callmebot.com/whatsapp.php");
  url.searchParams.set("phone", c.callmebotPhone as string);
  url.searchParams.set("text", body);
  url.searchParams.set("apikey", c.callmebotKey as string);
  try {
    const res = await fetch(url, { method: "GET", signal: AbortSignal.timeout(8000) });
    return res.ok;
  } catch { return false; }
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const ownOrigin = new URL(request.url).origin;
  if (!origin || ![ownOrigin, siteConfig.siteUrl].includes(origin)) return reply({ error: "Invalid origin" }, 403);
  if (!request.headers.get("content-type")?.startsWith("application/json")) return reply({ error: "JSON required" }, 415);
  if (Number(request.headers.get("content-length") || 0) > 16000) return reply({ error: "Request too large" }, 413);
  const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (throttled(ip)) return reply({ error: "Too many requests" }, 429);
  let body;
  try {
    // Bound the streamed body as well as Content-Length.
    const reader = request.body?.getReader(); if (!reader) return reply({ error: "Missing request" }, 400);
    const chunks: Uint8Array[] = []; let bytes = 0;
    while (true) { const { done, value } = await reader.read(); if (done) break; bytes += value.length; if (bytes > 16000) { await reader.cancel(); return reply({ error: "Request too large" }, 413); } chunks.push(value); }
    body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch { return reply({ error: "Invalid request" }, 400); }
  if (!body || typeof body !== "object" || !/^LB-\d{8}-[A-F0-9]{8}$/.test(body.id || "") || !["sample", "oem"].includes(body.mode) || !body.values || typeof body.values !== "object") return reply({ error: "Invalid request" }, 400);
  const values = Object.fromEntries(Object.keys(fieldLimits).map((key) => [key, typeof body.values[key] === "string" ? body.values[key].trim() : ""])) as InquiryValues;
  if (values.website || Object.keys(validateInquiry(values)).length) return reply({ error: "Check your request details" }, 400);
  const c = channels();
  if (!c.email && !c.whatsapp) return reply({ error: "Please use WhatsApp or email" }, 503);

  const source: Record<string, string> = {};
  for (const key of ["source", "utm_source", "utm_medium", "utm_campaign", "utm_content"]) { const value = body.attribution?.[key]; if (typeof value === "string" && /^[a-zA-Z0-9_.-]{1,80}$/.test(value)) source[key] = value; }
  for (const [key, value] of [["landing_page", body.attribution?.landing_page], ["page", body.page]]) if (typeof value === "string" && /^\/[a-zA-Z0-9/_-]{0,200}$/.test(value)) source[key as string] = value;

  const mode = body.mode as InquiryMode;
  const attribution: Attribution = {
    landing_page: source.landing_page || "/",
    source: source.source || "direct",
    utm_source: source.utm_source, utm_medium: source.utm_medium, utm_campaign: source.utm_campaign, utm_content: source.utm_content,
  };
  const text = inquiryText(values, mode, body.id, attribution, source.page || source.landing_page || "/");

  const [emailSent, whatsappSent] = await Promise.all([
    sendEmail(body.id, mode, values, text, source),
    sendWhatsApp(body.id, values),
  ]);
  // One confirmed channel is enough: the other is a convenience copy.
  if (!emailSent && !whatsappSent) return reply({ error: "Delivery not confirmed" }, 502);
  return reply({ accepted: true, id: body.id, channels: { email: emailSent, whatsapp: whatsappSent } }, 200);
}