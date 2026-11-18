import { pageMetadata } from "../lib/pageMetadata";
import { BuyerShell, BuyerIntro, BuyerCta, RealSampleGallery, BuyerFaq } from "../components/BuyerUI";
import { InquiryForm } from "../components/InquiryForm";
import { SampleSpecifications, SampleQuoteBreakdown, SampleTimeline, sampleBuyingFaqs } from "../components/SampleBuyingGuide";
import { b2bFaqs } from "../data/faqs";

export const metadata = pageMetadata({
  title: "Lash Samples: Specifications, Sample Cost & Shipping Quotes",
  description: "See a real 48-cluster lash sample, compare three sampling routes and request an itemised sample, packaging and freight quote for your destination.",
  path: "/sample-kit",
});

export default function SamplePage() {
  return <BuyerShell>
    <BuyerIntro eyebrow="Try the product before planning the order" title="Find the right sample for your lash range.">
      <p>Start with our photographed 48-cluster tray, compare style options or plan branded packaging. Get the sample details and an itemised destination quote before you pay.</p>
      <div className="buyer-actions"><BuyerCta href="#inquiry">Choose your sample route</BuyerCta><BuyerCta href="#sample-photos" secondary>See real sample photos</BuyerCta></div>
      <nav className="sample-jump-links" aria-label="Sample buying guide"><a href="#sample-specifications">Sample specifications</a><a href="#sample-pricing">What the quote includes</a><a href="#sample-timing">Preparation & delivery</a></nav>
    </BuyerIntro>
    <RealSampleGallery />
    <SampleSpecifications />
    <section id="inquiry" className="buyer-section buyer-inquiry">
      <div className="buyer-wrap">
        <p className="buyer-eyebrow">Three ways to start</p>
        <h2>Choose a route.<br />Build your sample brief.</h2>
        <p className="buyer-copy">Choose what you want to evaluate. Your selection travels with your inquiry, together with the sample quantity, destination and any target arrival date you add.</p>
        <InquiryForm mode="sample" interest="Photographed Girl Group 1.0 sample" samplePlanner />
        <p className="buyer-note">Quantities entered here are your request, not a stated minimum order. The exact sample, availability, packaging options and charges are confirmed in the written quote.</p>
      </div>
    </section>
    <SampleQuoteBreakdown />
    <SampleTimeline />
    <BuyerFaq title="Sample specifications, costs and delivery" faqs={[...sampleBuyingFaqs, ...b2bFaqs.filter((_, i) => [1, 5, 10].includes(i))]} />
  </BuyerShell>;
}
