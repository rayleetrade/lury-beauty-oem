import { pageMetadata } from "../lib/pageMetadata";
import { BuyerShell, BuyerIntro, BuyerCta, BuyerFaq } from "../components/BuyerUI";
import { b2bFaqs } from "../data/faqs";
export const metadata = pageMetadata({
  title: "Private Label Lash FAQ | Samples, MOQ & Packaging",
  description: "Direct answers about Lury Beauty sourcing, lash samples, order minimums, custom packaging, timing and destination documents.",
  path: "/false-eyelash-oem-faq",
});
export default function FaqPage(){return <BuyerShell><BuyerIntro eyebrow="Before you place an order" title="The questions lash buyers ask first."><p>Clear answers on samples, minimum orders, packaging and how we work. Product-specific terms are confirmed in your quotation.</p><div className="buyer-actions"><BuyerCta>Request sample options</BuyerCta></div></BuyerIntro><BuyerFaq faqs={b2bFaqs} /></BuyerShell>;}
