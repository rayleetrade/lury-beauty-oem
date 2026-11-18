import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe2, MessageCircle, PackageCheck } from "lucide-react";
import { CtaLink } from "../components/CtaLink";
import { FloatingWhatsapp, SiteFooter, SiteHeader } from "../components/SiteChrome";
import { markets } from "../data/markets";
import { siteConfig, whatsappLink } from "../siteConfig";

export const metadata: Metadata = {
  title: "Global False Eyelash OEM Supply by Market",
  description:
    "Country-specific false eyelash sourcing guides for the UK, USA, Thailand, Malaysia and Singapore, including samples, private label packaging, freight and buyer checks.",
  alternates: { canonical: "/markets" },
};

export default function MarketsPage() {
  const sampleWhatsapp = whatsappLink(siteConfig.sampleInvoiceMessage);

  return (
    <main className="min-h-screen bg-[#fff9f6] text-[#1e1716]">
      <SiteHeader />
      <section className="bg-[radial-gradient(circle_at_78%_18%,rgba(240,201,136,0.35),transparent_28%),linear-gradient(135deg,#fffaf6,#f0e4d8)] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#211716] text-[#f0c988]"><Globe2 size={22} /></span>
          <h1 className="mt-6 max-w-5xl font-display text-5xl leading-[0.96] md:text-7xl">False eyelash OEM sourcing for your destination market.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#62534e]">Start with actual samples and a destination freight quote, then align product format, packaging and buyer responsibilities before bulk production.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><CtaLink href="/products" label="Explore custom lash designs" icon={PackageCheck} variant="dark" /><CtaLink href={sampleWhatsapp} label="Request sample invoice" icon={MessageCircle} variant="gold" external /></div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {markets.map((market) => (
              <Link key={market.slug} href={`/markets/${market.slug}`} className="group flex h-full flex-col rounded-2xl border border-[#eadbd2] bg-white p-7 shadow-[0_18px_55px_rgba(45,26,24,0.08)] transition hover:-translate-y-1 hover:border-[#d0a060]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9c6a47]">{market.eyebrow}</p>
                <h2 className="mt-4 font-display text-3xl leading-tight">{market.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-7 text-[#6b5d58]">{market.directAnswer}</p>
                <span className="mt-7 inline-flex items-center gap-2 font-semibold text-[#5f402b]">Open {market.country} guide <ArrowRight className="transition group-hover:translate-x-1" size={18} /></span>
              </Link>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-[#eadbd2] bg-[#211716] p-7 text-white md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f0c988]">Another destination?</p>
            <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div><h2 className="font-display text-3xl md:text-4xl">We can quote samples worldwide.</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-[#d8cac4]">Send the country, city and postcode. We will confirm sample availability, freight and the USD invoice before payment.</p></div>
              <CtaLink href={sampleWhatsapp} label={`WhatsApp ${siteConfig.whatsappDisplay}`} icon={MessageCircle} variant="gold" external />
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
      <FloatingWhatsapp href={sampleWhatsapp} />
    </main>
  );
}
