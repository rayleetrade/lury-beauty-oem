import { BuyerCta } from "./BuyerUI";

const observedSpecifications = [
  ["Sample label", "Girl Group 1.0 (女团1.0)"],
  ["Product format", "Individual lash clusters arranged in a tray"],
  ["Visible tray count", "48 lash clusters: 6 rows × 8 clusters"],
  ["Original packaging", "Vietnamese-language packaging shown in the photos"],
] as const;

export function SampleSpecifications() {
  return (
    <section className="buyer-section buyer-white sample-specs" id="sample-specifications">
      <div className="buyer-wrap buyer-two">
        <div>
          <p className="buyer-eyebrow">The photographed sample</p>
          <h2>Know what you are comparing.</h2>
          <div className="buyer-table-scroll">
            <table className="buyer-table">
              <caption>Visible details from the sample photographed on 21 September 2026.</caption>
              <tbody>
                {observedSpecifications.map(([label, value]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="buyer-note">
            Your sample specification will identify the material, lengths, curl, attachment method
            and included items. Request these details alongside the sample quote; they cannot be
            confirmed from a photograph alone.
          </p>
        </div>
        <div className="quote-facts">
          <h2>Four checks before you approve</h2>
          <dl>
            <div>
              <dt>1. Lash appearance</dt>
              <dd>Compare the shape, density, spacing and consistency of the clusters with your agreed reference.</dd>
            </div>
            <div>
              <dt>2. Tray and pack condition</dt>
              <dd>Check that the tray holds the contents properly and the packaging arrives in acceptable condition.</dd>
            </div>
            <div>
              <dt>3. Written specification</dt>
              <dd>Match the sample reference, piece count, material, lengths, curl and attachment details to the written specification.</dd>
            </div>
            <div>
              <dt>4. Your brand presentation</dt>
              <dd>For custom packaging, review the logo, colour, layout, language and agreed label text before approving artwork.</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

const quoteItems = [
  {
    title: "Sample items",
    calculation: "Unit price × sample quantity",
    description: "Identify the exact sample reference, number of boxes and contents included in each box.",
  },
  {
    title: "Packaging & setup",
    calculation: "Quoted separately if requested",
    description: "List any artwork, printing, tooling or packaging sample charges separately from the lashes.",
  },
  {
    title: "Destination freight",
    calculation: "Address + packed weight + parcel size",
    description: "Confirm the delivery country, city and postcode, then agree the shipping service and charge.",
  },
  {
    title: "Taxes & duties",
    calculation: "Responsibility stated in the quote",
    description: "The written quote should explain which charges are included and which are payable by the buyer on arrival.",
  },
] as const;

export function SampleQuoteBreakdown() {
  return (
    <section className="buyer-section" id="sample-pricing">
      <div className="buyer-wrap">
        <p className="buyer-eyebrow">Plan the complete sample cost</p>
        <h2>A quote you can check, line by line.</h2>
        <p className="buyer-copy">
          Request the sample price and destination freight together. These four items make it easier
          to compare the total cost before payment.
        </p>
        <dl className="sample-quote-grid">
          {quoteItems.map((item) => (
            <div className="buyer-route" key={item.title}>
              <dt className="sample-quote-title">{item.title}</dt>
              <dd>
                <strong>{item.calculation}</strong>
                <p>{item.description}</p>
              </dd>
            </div>
          ))}
        </dl>
        <div className="buyer-actions">
          <BuyerCta href="#inquiry">Request an itemised sample quote</BuyerCta>
        </div>
      </div>
    </section>
  );
}

const timingStages = [
  {
    title: "Confirm the quote",
    description: "Agree the sample reference, quantity, destination, charges and preparation estimate.",
  },
  {
    title: "Prepare the sample",
    description: "Arrange the sample and its shipment. Custom packaging may need a separate artwork or packaging proof before sample dispatch.",
  },
  {
    title: "Review and approve",
    description: "After sample delivery, review the product and record the specification and packaging approved for your order.",
  },
  {
    title: "Produce and check the order",
    description: "Agree the bulk production schedule and quality checks with the order details. Sample preparation time is separate from bulk production time.",
  },
  {
    title: "Ship the bulk order",
    description: "Confirm the dispatch estimate and carrier transit estimate. Customs processing can affect the arrival date; sample freight and bulk freight are quoted separately.",
  },
] as const;

export function SampleTimeline() {
  return (
    <section className="buyer-section buyer-olive" id="sample-timing">
      <div className="buyer-wrap">
        <p className="buyer-eyebrow">From sample to first order</p>
        <h2>Plan each stage around your launch.</h2>
        <p className="sample-timeline-intro">
          Share your target arrival date in the inquiry. Sample preparation, your review, bulk production
          and transit are separate parts of the schedule.
        </p>
        <ol className="sample-timeline">
          {timingStages.map((stage, index) => (
            <li className="buyer-step" key={stage.title}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export const sampleBuyingFaqs = [
  {
    question: "How many lash clusters are in the photographed sample?",
    answer: "The open Girl Group 1.0 sample photographed on 21 September 2026 shows 48 lash clusters arranged in 6 rows of 8. Your quote will identify the exact sample and box contents being supplied.",
  },
  {
    question: "What is included in a lash sample quote?",
    answer: "Request the sample reference, unit price, quantity and included contents, plus any requested packaging or setup charges and destination freight. The written quote should also state whether taxes and duties are included or payable separately.",
  },
  {
    question: "How is the sample shipping cost calculated?",
    answer: "Freight depends on the delivery address, shipping service, packed weight and parcel dimensions. Include your country, city and postcode so the sample and shipping can be quoted together.",
  },
  {
    question: "How long does a private label lash order take?",
    answer: "The schedule is agreed for the exact sample, packaging and order. It separates sample preparation, buyer approval, bulk production and shipping. Share your target arrival date so the quote can address each stage; there is no single published lead time for every order.",
  },
];
