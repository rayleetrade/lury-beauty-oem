import { pageMetadata } from "../lib/pageMetadata";
import { BuyerShell, BuyerIntro } from "../components/BuyerUI";
import { InquiryForm } from "../components/InquiryForm";
import { siteConfig, whatsappLink, emailLink } from "../siteConfig";
export const metadata = pageMetadata({
  title: "Contact for Lash Samples & OEM Inquiries",
  description: "Contact Lury Beauty in Qingdao for lash sample options, private label packaging and wholesale sourcing. WhatsApp and email inquiry routes.",
  path: "/contact",
});
export default function ContactPage(){return <BuyerShell><BuyerIntro eyebrow="Let’s talk about your lash range" title="One brief. A practical next step."><p>Ask about samples, packaging or your next wholesale order. We first confirm what you need and which details should go into your quote.</p></BuyerIntro><section id="inquiry" className="buyer-section"><div className="buyer-wrap buyer-two"><div><h2>Contact Lury Beauty</h2><p className="buyer-copy">Qingdao, Shandong, China<br/>Working with manufacturing partners in Pingdu.</p><div className="contact-options"><a href={whatsappLink()} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>{siteConfig.whatsappDisplay} ↗</strong></a><a href={emailLink()}><span>Email</span><strong>{siteConfig.email} ↗</strong></a></div><p className="buyer-note">Include your country and product interest. If you need freight, add your city and postcode. Quoted sample orders are paid to the company account shown on the agreed proforma invoice.</p></div><InquiryForm mode="oem" /></div></section></BuyerShell>;}
