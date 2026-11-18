"use client";
import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { siteConfig } from "../siteConfig";
import { fieldLimits, inquiryText, newInquiryId, validateInquiry, type InquiryMode, type InquiryValues } from "../lib/lead";
import { leadEvent, readAttribution } from "../lib/attribution";
import { samplePlans } from "../data/samplePlans";

export function InquiryFormClient({ mode, country, interest, deliveryEnabled, samplePlanner = false }: { mode: InquiryMode; country: string; interest: string; deliveryEnabled: boolean; samplePlanner?: boolean }) {
  const [values, setValues] = useState<InquiryValues>({ name: "", company: "", country, contact: "", interest: interest || (mode === "sample" ? "Please recommend sample options" : "Private label / OEM options"), quantity: "", packaging: "", postcode: "", channel: "", message: "", website: "", samplePlan: samplePlanner ? samplePlans[0].name : "", sampleQuantity: "", requiredBy: "", specification: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [prepared, setPrepared] = useState<{ text: string; id: string } | null>(null);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const started = useRef(false);
  const requestId = useRef("");
  const resultRef = useRef<HTMLDivElement>(null);
  const prefix = `inquiry-${mode}`;
  function update(field: keyof InquiryValues, value: string) {
    setValues(current => ({ ...current, [field]: value }));
    setPrepared(null); setStatus(""); requestId.current = "";
    setErrors(current => { const next = { ...current }; delete next[field]; return next; });
  }
  function begin() { if (!started.current) { leadEvent("form_start", { mode }); started.current = true; } }
  function choosePlan(plan: typeof samplePlans[number]) {
    setValues(current => ({ ...current, samplePlan: plan.name, interest: plan.interest }));
    setPrepared(null); setStatus(""); requestId.current = "";
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const validation = validateInquiry(values); setErrors(validation);
    const first = Object.keys(validation)[0];
    if (first) { document.getElementById(`${prefix}-${first}`)?.focus(); return; }
    if (values.website) return;
    const id = requestId.current || newInquiryId(); requestId.current = id;
    const attribution = readAttribution(); const page = window.location.pathname;
    const text = inquiryText(values, mode, id, attribution, page);
    setPrepared({ id, text }); leadEvent("form_prepare", { mode });
    if (deliveryEnabled) {
      setBusy(true); setStatus("Sending your request…");
      try {
        const res = await fetch("/api/inquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, mode, values, attribution, page }), signal: AbortSignal.timeout(12000) });
        const data = await res.json();
        if (!res.ok || data.accepted !== true || data.id !== id) throw new Error("Delivery not confirmed");
        setStatus(`Request received. Reference: ${id}. We will use your contact details to reply.`); leadEvent("form_submit", { mode });
      } catch { setStatus("Website delivery was not confirmed. Your details are ready below—send them by WhatsApp or email. If you retry, keep the same reference."); }
      finally { setBusy(false); }
    } else setStatus("Your request is ready, but has not been sent. Choose WhatsApp or email below, then press Send in that app.");
    setTimeout(() => resultRef.current?.focus(), 0);
  }
  function input(field: keyof InquiryValues, label: string, placeholder: string, required = false, autocomplete?: string) {
    return <div className="buyer-field"><label htmlFor={`${prefix}-${field}`}>{label}{required ? " *" : ""}</label><input id={`${prefix}-${field}`} name={field} autoComplete={autocomplete} autoCapitalize={field === "contact" ? "none" : undefined} autoCorrect={field === "contact" ? "off" : undefined} spellCheck={field === "contact" ? false : undefined} disabled={busy} required={required} maxLength={fieldLimits[field]} value={values[field]} onChange={e => update(field, e.target.value)} placeholder={placeholder} className="field-control" aria-invalid={Boolean(errors[field])} aria-describedby={errors[field] ? `${prefix}-${field}-error` : undefined} />{errors[field] ? <small id={`${prefix}-${field}-error`} className="field-error">{errors[field]}</small> : null}</div>;
  }
  return <form className={`buyer-form${samplePlanner ? " sample-planner" : ""}`} onSubmit={submit} onFocus={begin} noValidate aria-label={mode === "sample" ? "Sample request" : "OEM inquiry"}>
    <p className="buyer-eyebrow">{mode === "sample" ? "Start with samples" : "Tell us about your brand"}</p>
    <h2>{mode === "sample" ? "Request sample options" : "Request a private label quote"}</h2>
    <p className="buyer-note">Tell us where you sell and what you need. Three required fields; add order details if you have them.</p>
    {samplePlanner ? <fieldset className="sample-plan-options" disabled={busy}><legend>Choose your sample route</legend><div className="sample-plan-grid">{samplePlans.map((plan, index) => <label className={`sample-plan-card${values.samplePlan === plan.name ? " is-selected" : ""}`} key={plan.name}><span className="sample-plan-top"><span>0{index + 1}</span><input type="radio" name="samplePlan" value={plan.name} checked={values.samplePlan === plan.name} onChange={() => choosePlan(plan)} /></span><strong>{plan.name}</strong><span>{plan.description}</span></label>)}</div><p className="buyer-note" aria-live="polite">{samplePlans.find(plan => plan.name === values.samplePlan)?.next}</p></fieldset> : null}
    <div className="buyer-form-grid">
      {input("name", "Your name", "Name", true, "name")}
      {input("country", "Destination country", "e.g. United Kingdom", true, "country-name")}
      <div className="buyer-full">{input("contact", "Email or WhatsApp", "Email, or phone number with country code", true)}</div>
      {input("company", "Company / brand", "Your business name", false, "organization")}
      {input("quantity", "Planned order quantity", "e.g. 100 boxes after sample approval")}
      {mode === "sample" ? input("sampleQuantity", "Requested sample quantity", "e.g. 1 box, or 1 box per selected style") : null}
      {samplePlanner ? input("postcode", "Delivery city / postcode", "For your freight quote", false, "postal-code") : null}
      {!samplePlanner ? <label className="buyer-field buyer-full" htmlFor={`${prefix}-interest`}><span>What are you looking for?</span><select disabled={busy} className="field-control" id={`${prefix}-interest`} value={values.interest} onChange={e => update("interest", e.target.value)}>{Array.from(new Set([values.interest, "Please recommend sample options", "Photographed Girl Group 1.0 sample", "Private label / OEM options", "Cluster lash styles", "Strip / half lash development", "Custom packaging"])).map(value => <option key={value}>{value}</option>)}</select></label> : <div className="buyer-full">{input("specification", "Style references / preferred specification", "e.g. W02 reference; natural look; preferred length, curl or pack contents")}</div>}
    </div>
    <details className="buyer-form-more"><summary>Add packaging, delivery or other details <span>Optional +</span></summary><div className="buyer-form-grid">
      {input("packaging", "Packaging", "Stock pack, logo label or custom box")}
      {!samplePlanner ? input("postcode", "City / postcode", "For your freight quote", false, "postal-code") : null}
      {input("requiredBy", "Target arrival / launch date", "e.g. samples needed by 15 October")}
      {!samplePlanner ? <div className="buyer-full">{input("specification", "Preferred product specification", "Length mix, curl, material, band or kit contents you need")}</div> : null}
      <div className="buyer-full">{input("channel", "Website / sales channel", "Brand website, beauty store, salon, marketplace…")}</div>
      <label className="buyer-field buyer-full" htmlFor={`${prefix}-message`}><span>Additional requirements</span><textarea disabled={busy} className="field-control" id={`${prefix}-message`} maxLength={1800} rows={3} value={values.message} onChange={e => update("message", e.target.value)} placeholder="Style reference, launch date or a question for us" /></label>
    </div></details>
    <div className="inquiry-honeypot" aria-hidden="true"><label htmlFor={`${prefix}-website`}>Leave this empty</label><input tabIndex={-1} autoComplete="off" id={`${prefix}-website`} value={values.website} onChange={e => update("website", e.target.value)} /></div>
    {Object.keys(errors).length ? <p role="alert" className="field-error">Please check the highlighted fields.</p> : null}
    <button type="submit" disabled={busy} className="buyer-button buyer-form-submit">{busy ? "Sending…" : deliveryEnabled ? "Send my inquiry" : "Prepare my request"}<span aria-hidden="true">↗</span></button>
    <p className="buyer-note">{deliveryEnabled ? "We use your details to respond to this request." : "Prepare once, then send with WhatsApp or your email app."} No payment is taken here. <Link href="/privacy">Privacy information</Link>.</p>
    {prepared ? <div ref={resultRef} tabIndex={-1} className="inquiry-result" aria-live="polite"><p role="status">{status}</p><p className="buyer-note">Reference: {prepared.id}</p><div className="buyer-actions"><a className="buyer-button" data-inquiry="true" data-cta="prepared-whatsapp" href={`https://wa.me/${siteConfig.whatsappPhone}?text=${encodeURIComponent(prepared.text)}`} target="_blank" rel="noreferrer">Send with WhatsApp ↗</a><a className="buyer-button buyer-button-secondary" href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Lash ${mode} inquiry ${prepared.id}`)}&body=${encodeURIComponent(prepared.text)}`}>Open email draft ↗</a></div><button type="button" className="buyer-text-link" onClick={async () => { try { await navigator.clipboard.writeText(prepared.text); setStatus("Request copied. Paste it into your preferred email or messaging app and send it to us."); leadEvent("inquiry_copy", { mode }); } catch { setStatus("Copy is unavailable in this browser. Select the request text below, then copy it manually."); } }}>Copy request text</button><details className="mt-3"><summary>View request text</summary><pre className="inquiry-preview">{prepared.text}</pre></details></div> : null}
  </form>;
}
