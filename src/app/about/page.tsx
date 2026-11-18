import type { Metadata } from "next";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { BadgeCheck, MapPin, MessageCircle, PackageCheck, ReceiptText, SearchCheck } from "lucide-react";
import { CtaLink } from "../components/CtaLink";
import { JsonLd } from "../components/JsonLd";
import { FloatingWhatsapp, SiteFooter, SiteHeader } from "../components/SiteChrome";
import { absoluteUrl, siteConfig, whatsappLink } from "../siteConfig";

export const metadata: Metadata = {
  title: "About Lury Beauty OEM in Qingdao",
  description:
    "Learn how Lury Beauty coordinates false eyelash samples, private label packaging, production and global shipping from Qingdao with manufacturing partners in Pingdu.",
  alternates: { canonical: "/about" },
};

const facts = [
  ["Business role", "Trading and sourcing supplier"],
  ["Sales base", "Qingdao, Shandong, China"],
  ["Production network", "Manufacturing partners in Pingdu, Shandong"],
  ["Display & custom scope", "Eight original display references plus custom style briefs"],
  ["Private label scope", "Logo label, tray card, box and bundle discussion"],
  ["Sample payment", "USD company bank transfer against a proforma invoice"],
  ["Service area", "Worldwide"],
  ["Sales WhatsApp", siteConfig.whatsappDisplay],
];

const coordinationCards: { icon: LucideIcon; title: string; copy: string }[] = [
  {
    icon: SearchCheck,
    title: "Product matching",
    copy: "Match the buyer brief and target channel with ready samples or a custom development discussion.",
  },
  {
    icon: PackageCheck,
    title: "Sample confirmation",
    copy: "Confirm model codes, destination freight and the sample invoice before payment.",
  },
  {
    icon: BadgeCheck,
    title: "Order detail control",
    copy: "Align artwork, packaging, quantities and production details before the bulk order.",
  },
  {
    icon: ReceiptText,
    title: "Commercial coordination",
    copy: "Issue the proforma invoice and coordinate packing, shipping information and follow-up.",
  },
];

export default function AboutPage() {
  const sampleWhatsapp = whatsappLink(siteConfig.sampleInvoiceMessage);
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Lury Beauty OEM",
    url: absoluteUrl("/about"),
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.brandName,
      url: absoluteUrl("/"),
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Qingdao",
        addressRegion: "Shandong",
        addressCountry: "CN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: siteConfig.whatsappDisplay,
        email: siteConfig.email,
      },
    },
  };

  return (
    <main className="min-h-screen bg-[#fff9f6] text-[#1e1716]">
      <JsonLd data={schema} />
      <SiteHeader />
      <section className="bg-[radial-gradient(circle_at_78%_18%,rgba(240,201,136,0.35),transparent_28%),linear-gradient(135deg,#fffaf6,#f0e4d8)] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9c6a47]"><MapPin size={16} /> Qingdao, China</p>
            <h1 className="mt-4 font-display text-5xl leading-[0.96] md:text-7xl">A transparent sourcing partner for private label lashes.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#62534e]">Lury Beauty is a trading and sourcing supplier based in Qingdao. We connect buyer requirements with false eyelash manufacturing partners in Pingdu and coordinate the work from samples through packing and shipping.</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#6b5d58]">We describe this model clearly because overseas buyers need to know who is managing the order. Lury Beauty is your sales and coordination contact; production is completed through matched manufacturing partners.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><CtaLink href="/sample-kit" label="See ready samples" icon={PackageCheck} variant="dark" /><CtaLink href={sampleWhatsapp} label="Contact on WhatsApp" icon={MessageCircle} variant="gold" external /></div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white bg-white shadow-[0_30px_90px_rgba(58,37,30,0.16)]"><Image src="/images/real-samples/girl-group-1-open.jpg" alt="Actual Girl Group 1.0 sample photographed for Lury Beauty" fill priority sizes="(min-width: 1024px) 40vw, 90vw" className="object-contain p-7" /></div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.68fr_1.32fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9c6a47]">Verifiable business facts</p><h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">What buyers can expect from us.</h2></div>
          <dl className="overflow-hidden rounded-2xl border border-[#eadbd2] bg-white shadow-[0_18px_55px_rgba(45,26,24,0.07)]">{facts.map(([term, detail]) => <div key={term} className="grid gap-2 border-b border-[#eadbd2] px-5 py-4 last:border-b-0 sm:grid-cols-[0.42fr_0.58fr] sm:px-7"><dt className="text-sm font-semibold text-[#382b27]">{term}</dt><dd className="text-sm leading-6 text-[#6b5d58]">{detail}</dd></div>)}</dl>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl"><div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9c6a47]">Our role in the order</p><h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">Four things we coordinate.</h2></div><div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{coordinationCards.map(({ icon: Icon, title, copy }) => <article key={title} className="rounded-xl border border-[#eadbd2] bg-[#fffaf7] p-6"><span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#211716] text-[#f0c988]"><Icon size={20} /></span><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-[#6b5d58]">{copy}</p></article>)}</div></div>
      </section>

      <section className="bg-[#211716] px-4 py-12 text-white md:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f0c988]">Start with the products</p><h2 className="mt-2 font-display text-3xl md:text-4xl">Request the eight-style sample invoice.</h2></div><CtaLink href={sampleWhatsapp} label={`WhatsApp ${siteConfig.whatsappDisplay}`} icon={MessageCircle} variant="gold" external /></div></section>
      <SiteFooter />
      <FloatingWhatsapp href={sampleWhatsapp} />
    </main>
  );
}
