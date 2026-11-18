import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader, SiteFooter, FloatingWhatsapp } from "./SiteChrome";
import { FaqJsonLd } from "./FaqJsonLd";
export function BuyerShell({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main id="main-content" className="buyer-main">{children}</main><SiteFooter /><FloatingWhatsapp /></>;
}
export function BuyerIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="buyer-section buyer-intro"><div className="buyer-wrap"><p className="buyer-eyebrow">{eyebrow}</p><h1>{title}</h1><div className="buyer-intro-copy">{children}</div></div></section>;
}
export function PackagingConcept() {
  return <figure className="sample-photo packaging-concept"><div className="packaging-concept-image"><Image src="/images/brand/lury-private-label-concept-v2.webp" alt="AI-generated packaging concept with an ivory Lury Beauty box, illustrative lash trays and an applicator" fill sizes="(min-width: 500px) 460px, 92vw" className="object-contain" preload /></div><figcaption>A look for your future brand<span>AI-generated packaging concept · Final sample and pack to be agreed</span></figcaption></figure>;
}
export function SampleEvidenceStrip() {
  return <section className="sample-evidence-band" aria-label="Actual product evidence"><div className="buyer-wrap sample-evidence"><Link className="sample-evidence-image" href="/sample-kit#sample-photos"><Image src="/images/real-samples/girl-group-1-open.jpg" alt="Actual Girl Group 1.0 lash sample, photographed on 21 September 2026" fill sizes="110px" className="object-contain" /></Link><div><p className="buyer-eyebrow">See the actual product</p><h2>Real samples. Clear decisions.</h2><p>View the open tray, original packaging and back label before requesting a quote.</p></div><Link className="buyer-text-link" href="/sample-kit#sample-photos">View 3 real photos ↗</Link></div></section>;
}
export function SamplePhoto({ variant = "open", priority = false }: { variant?: "open" | "front" | "back"; priority?: boolean }) {
  const labels = { open: "Open sample tray", front: "Original sample packaging", back: "Back of the sample packaging" };
  const src = `/images/real-samples/girl-group-1-${variant}.jpg`;
  return <figure className="sample-photo"><a className="sample-photo-image" href={src} target="_blank" rel="noreferrer" aria-label={`View full-size photo: ${labels[variant]}`}><Image src={src} alt={`${labels[variant]} photographed for Lury Beauty on 21 September 2026; sample labelled Girl Group 1.0`} fill sizes="(min-width: 1200px) 560px, (min-width: 900px) 45vw, 90vw" className="object-contain object-center" preload={priority} /></a><figcaption>{labels[variant]} <span>Actual photo · 21 Sep 2026 · Open image ↗</span></figcaption></figure>;
}
export function RealSampleGallery() {
  return <section className="buyer-section" id="sample-photos"><div className="buyer-wrap"><p className="buyer-eyebrow">See the actual sample</p><h2>Front. Back. Open tray.</h2><p className="buyer-copy">Three photographs of the same sample, labelled “Girl Group 1.0” (女团1.0). Ask for this photographed sample, or send a reference for another style. Open any image to inspect the details.</p><div className="buyer-grid real-sample-grid">{(["open", "front", "back"] as const).map(variant => <SamplePhoto key={variant} variant={variant} />)}</div><div className="buyer-actions"><BuyerCta href="#inquiry">Get this sample + freight quote</BuyerCta></div><p className="buyer-note">We confirm the exact item before quoting. This sample has Vietnamese-language packaging; destination labels and product details are reviewed for your order. These real photos are separate from the W/B design references.</p></div></section>;
}
export const quoteFacts = [["Minimum order", "Quoted for your chosen style, quantity and packaging."], ["Sample cost & freight", "Confirmed together before payment. Share your country and postcode."], ["Production timing", "Confirmed after the sample, artwork and order details are agreed."], ["Who you work with", "Lury Beauty in Qingdao, coordinating with manufacturing partners in Pingdu."]];
export function QuoteFacts() {
  return <div className="quote-facts"><h2>What to expect before ordering</h2><dl>{quoteFacts.map(([title, answer]) => <div key={title}><dt>{title}</dt><dd>{answer}</dd></div>)}</dl></div>;
}
export function BuyingSteps() {
  const steps = [["Tell us your brief", "Your market, preferred look, approximate quantity and packaging idea."], ["Review samples & the quote", "Confirm the actual sample, sample fee, freight and the details to evaluate."], ["Approve your order", "Agree specifications, artwork, commercial terms and shipping before bulk production."]];
  return <section className="buyer-section buyer-olive"><div className="buyer-wrap"><p className="buyer-eyebrow">A clear path to your first order</p><h2>From your first question to an approved order.</h2><div className="buyer-grid buyer-grid-three">{steps.map(([title, copy], i) => <article key={title} className="buyer-step"><span>0{i + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>;
}
export function BuyerFaq({ faqs, title = "Straight answers for lash buyers" }: { faqs: { question: string; answer: string }[]; title?: string }) {
  return <section className="buyer-section"><div className="buyer-wrap buyer-narrow"><FaqJsonLd faqs={faqs} /><h2>{title}</h2><div className="buyer-faq">{faqs.map((faq, i) => <details key={faq.question} open={i === 0}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div><Link className="buyer-text-link" href="/sample-kit#inquiry">Ask about your sample →</Link></div></section>;
}
export function BuyerCta({ href = "/sample-kit#inquiry", children, secondary = false }: { href?: string; children: ReactNode; secondary?: boolean }) {
  const Target = href.includes("#") ? "a" : Link;
  return <Target href={href} className={secondary ? "buyer-button buyer-button-secondary" : "buyer-button"} data-cta="buyer-primary">{children}<span aria-hidden="true">↗</span></Target>;
}
