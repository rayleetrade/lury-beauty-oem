import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Globe2,
  Home,
  MessageCircle,
  PackageCheck,
  ReceiptText,
  ShieldCheck,
  Tags,
} from "lucide-react";
import { CtaLink } from "../../components/CtaLink";
import { FaqJsonLd } from "../../components/FaqJsonLd";
import { InquiryForm } from "../../components/InquiryForm";
import { JsonLd } from "../../components/JsonLd";
import { FloatingWhatsapp, SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { getMarket, marketSlugs } from "../../data/markets";
import { products } from "../../data/products";
import { absoluteUrl, siteConfig, whatsappLink } from "../../siteConfig";

type MarketPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return marketSlugs.filter((slug) => slug !== "united-kingdom").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: MarketPageProps): Promise<Metadata> {
  const { slug } = await params;
  const market = getMarket(slug);
  if (!market) return {};

  return {
    title: market.metaTitle,
    description: market.metaDescription,
    keywords: [
      `false eyelash supplier ${market.country}`,
      `private label lashes ${market.country}`,
      `OEM eyelashes ${market.country}`,
      `wholesale cluster lashes ${market.country}`,
      "false eyelash supplier China",
    ],
    alternates: { canonical: `/markets/${market.slug}` },
    openGraph: {
      title: market.metaTitle,
      description: market.metaDescription,
      url: `/markets/${market.slug}`,
      type: "website",
      images: [{ url: "/images/products/b02.webp", width: 1200, height: 1200, alt: `Private label cluster lashes for ${market.country} buyers` }],
    },
  };
}

export default async function MarketPage({ params }: MarketPageProps) {
  const { slug } = await params;
  const market = getMarket(slug);
  if (!market) notFound();

  const marketWhatsapp = whatsappLink(market.whatsappMessage);
  const pageUrl = absoluteUrl(`/markets/${market.slug}`);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: market.title,
      url: pageUrl,
      description: market.directAnswer,
      serviceType: "False eyelash sample, private label and OEM/ODM supply coordination",
      provider: {
        "@type": "Organization",
        name: siteConfig.brandName,
        url: absoluteUrl("/"),
      },
      areaServed: { "@type": "Country", name: market.country },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: pageUrl,
        servicePhone: siteConfig.whatsappDisplay,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Markets", item: absoluteUrl("/markets") },
        { "@type": "ListItem", position: 3, name: market.country, item: pageUrl },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#fff9f6] text-[#1e1716]">
      <JsonLd data={structuredData} />
      <FaqJsonLd faqs={market.faqs} />
      <SiteHeader />

      <section className="overflow-hidden bg-[radial-gradient(circle_at_78%_16%,rgba(240,201,136,0.38),transparent_28%),linear-gradient(135deg,#fffaf6,#f0e4d8)] px-4 py-12 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#7c6a62]">
            <Link href="/" aria-label="Home"><Home size={15} /></Link><ChevronRight size={14} /><Link href="/markets">Markets</Link><ChevronRight size={14} /><span>{market.country}</span>
          </nav>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9c6a47]">{market.eyebrow}</p>
              <h1 className="mt-4 font-display text-5xl leading-[0.96] md:text-7xl">{market.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#62534e]">{market.directAnswer}</p>
              {market.localIntro ? <p lang="th" className="mt-5 max-w-3xl rounded-xl border border-[#d8b56f] bg-white/72 p-4 text-base leading-8 text-[#4f403b]">{market.localIntro}</p> : null}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><CtaLink href={marketWhatsapp} label="Request sample + freight quote" icon={MessageCircle} variant="dark" external /><CtaLink href="/sample-kit" label="Review sample options" icon={PackageCheck} variant="outline" /></div>
            </div>
            <aside className="rounded-2xl border border-white/80 bg-white/88 p-6 shadow-[0_25px_80px_rgba(58,37,30,0.13)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9c6a47]">Quote-ready checklist</p>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-[#554842]">
                {["Photographed sample or preferred style reference", `${market.country} delivery city and postcode`, "Target sales channel", "Stock pack, logo label or custom box", "Expected quantity after testing"].map((item) => <li key={item} className="flex items-start gap-3"><Check className="mt-0.5 shrink-0 text-[#31501d]" size={17} />{item}</li>)}
              </ul>
              <p className="mt-6 border-t border-[#eadbd2] pt-5 text-xs leading-6 text-[#7c6a62]">Payment route: confirmed items + freight → USD proforma invoice → company bank transfer.</p>
            </aside>
          </div>
        </div>
      </section>

      {market.localTitle && market.localPoints ? (
        <section lang="th" className="border-y border-[#eadbd2] bg-[#211716] px-4 py-10 text-white md:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f0c988]">ข้อมูลสำหรับผู้ซื้อในประเทศไทย</p><h2 className="mt-3 text-3xl font-semibold leading-tight">{market.localTitle}</h2></div>
            <ul className="grid gap-3 sm:grid-cols-2">{market.localPoints.map((point) => <li key={point} className="flex items-start gap-3 rounded-lg border border-white/12 bg-white/[0.055] p-4 text-sm leading-7 text-[#eaded8]"><Check className="mt-1 shrink-0 text-[#f0c988]" size={17} />{point}</li>)}</ul>
          </div>
        </section>
      ) : null}

      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9c6a47]">Who this route serves</p><h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">Buyer profiles in {market.country}</h2></div>
            <div className="grid gap-4 sm:grid-cols-2">{market.buyerTypes.map((buyer) => <div key={buyer} className="flex gap-3 rounded-xl border border-[#eadbd2] bg-white p-5"><Check className="mt-0.5 shrink-0 text-[#31501d]" size={18} /><p className="text-sm leading-7 text-[#554842]">{buyer}</p></div>)}</div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#eadbd2] bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9c6a47]">Product and packaging direction</p><h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">Build the range after seeing the actual lashes.</h2></div>
          <div className="mt-9 grid gap-5 lg:grid-cols-3">{market.productDirections.map((item, index) => <article key={item.title} className="rounded-xl border border-[#eadbd2] bg-[#fffaf7] p-6"><span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#211716] text-[#f0c988]">{index === 0 ? <Globe2 size={20} /> : index === 1 ? <Tags size={20} /> : <ReceiptText size={20} />}</span><h3 className="mt-5 text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-[#6b5d58]">{item.copy}</p></article>)}</div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">{products.map((product) => <Link key={product.slug} href={`/products/${product.slug}`} className="rounded-lg border border-[#eadbd2] bg-white p-3 text-center transition hover:border-[#d0a060]"><p className="text-xs font-bold text-[#9c6a47]">{product.model}</p><p className="mt-1 text-[11px] leading-4 text-[#6b5d58]">{product.group.replace(" styles", "")}</p></Link>)}</div>
        </div>
      </section>

      <section className="bg-[#211716] px-4 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f0c988]">Recommended buying sequence</p>
          <h2 className="mt-3 max-w-4xl font-display text-4xl leading-tight md:text-5xl">A safer path from China sample to {market.country} launch.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{market.buyingPlan.map((item, index) => <article key={item.title} className="rounded-xl border border-white/12 bg-white/[0.055] p-6"><span className="font-display text-3xl text-[#f0c988]">0{index + 1}</span><h3 className="mt-5 text-lg font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-[#d8cac4]">{item.copy}</p></article>)}</div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff0e8] text-[#9c6a47]"><ShieldCheck size={22} /></span>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">Compliance starts with the exact product format.</h2>
            <p className="mt-5 text-base leading-8 text-[#6b5d58]">{market.complianceNote}</p>
            <p className="mt-5 rounded-xl border border-[#d8b56f] bg-[#fffaf0] p-4 text-sm leading-7 text-[#5b493d]">This is sourcing guidance, not legal or regulatory approval. Confirm current requirements with the relevant authority, importer or qualified adviser before sale.</p>
            <a href={market.authorityUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#5f402b] underline decoration-[#d0a060] underline-offset-4">Check {market.authorityLabel} <ArrowRight size={16} /></a>
          </div>
          <InquiryForm mode="sample" country={market.country} />
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl"><h2 className="text-center font-display text-4xl">{market.country} buyer questions</h2><div className="mt-8 divide-y divide-[#eadbd2] border-y border-[#eadbd2]">{market.faqs.map((faq) => <details key={faq.question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">{faq.question}<span className="text-2xl font-light text-[#9c6a47] group-open:rotate-45">+</span></summary><p className="mt-4 pr-8 text-sm leading-7 text-[#6b5d58]">{faq.answer}</p></details>)}</div><CtaLink href={marketWhatsapp} label={`Request a ${market.country} sample quote`} icon={MessageCircle} variant="gold" external className="mx-auto mt-8 flex max-w-lg" /></div>
      </section>

      <section className="border-t border-[#eadbd2] px-4 py-10 md:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between"><Link href="/markets" className="inline-flex items-center gap-2 font-semibold text-[#5f402b]">View all market guides <ArrowRight size={17} /></Link><span className="text-[#6b5d58]">Sales contact: {siteConfig.whatsappDisplay}</span></div></section>
      <SiteFooter />
      <FloatingWhatsapp href={marketWhatsapp} />
    </main>
  );
}
