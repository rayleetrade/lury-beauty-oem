import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { CtaLink } from "./CtaLink";
import { emailLink, siteConfig, whatsappLink } from "../siteConfig";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Sample Kit", href: "/sample-kit" },
  { label: "OEM Service", href: "/oem" },
  { label: "Markets", href: "/markets" },
  { label: "FAQ", href: "/false-eyelash-oem-faq" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader({
  ctaLabel = "Request Samples",
  ctaHref = "/sample-kit#inquiry",
}: {
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#eadbd2]/80 bg-[#fffaf6]/88 shadow-[0_8px_30px_rgba(41,26,24,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-8 md:py-4">
        <BrandLogo compact />
        <nav
          className="hidden items-center gap-5 text-sm font-medium text-[#5d514d] xl:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#1e1716]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <CtaLink
          href={ctaHref}
          label={ctaLabel}
          icon={MessageCircle}
          external={ctaHref.startsWith("https://")}
          className="whitespace-nowrap px-3 text-xs sm:px-4 sm:text-sm [&>svg:last-child]:hidden sm:[&>svg:last-child]:block"
        />
      </div>
      <nav
        aria-label="Mobile navigation"
        className="mx-auto flex max-w-7xl gap-5 overflow-x-auto border-t border-[#eadbd2]/70 px-4 py-2.5 text-xs font-semibold text-[#5d514d] md:px-8 xl:hidden"
      >
        {navItems.slice(1).map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0 py-1">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#eadbd2] bg-white px-4 py-10 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.4fr_0.7fr_0.9fr]">
        <div className="max-w-xl">
          <BrandLogo compact />
          <p className="mt-4 text-sm leading-7 text-[#6b5d58]">
            {siteConfig.description}
          </p>
          <p className="mt-2 text-sm font-semibold text-[#382b27]">
            {siteConfig.location} · {siteConfig.paymentMethod}
          </p>
        </div>
        <nav aria-label="Footer navigation" className="grid content-start gap-2 text-sm text-[#6b5d58]">
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-[#9c6a47]">Buyer routes</p>
          <Link href="/sample-kit">Sample references</Link>
          <Link href="/oem">OEM / ODM service</Link>
          <Link href="/markets">Market guides</Link>
          <Link href="/products">Product catalog</Link>
          <Link href="/materials">Materials & finishes</Link>
          <Link href="/sampling-and-quality">Sample approval checklist</Link>
          <Link href="/packaging-options">Packaging options</Link>
          <Link href="/procurement-examples">Procurement planning examples</Link>
          <Link href="/market-style-research">Market research references</Link>
          <Link href="/about">About Lury Beauty</Link>
          <Link href="/privacy">Inquiry privacy</Link>
        </nav>
        <div className="flex flex-col gap-2 text-sm text-[#6b5d58] md:text-right">
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-[#9c6a47]">Sales contact</p>
          <a href={whatsappLink()} target="_blank" rel="noreferrer">
            WhatsApp: {siteConfig.whatsappDisplay}
          </a>
          <a href={emailLink()}>Email: {siteConfig.email}</a>
          <Link href="/markets/thailand">Thailand buyers</Link>
          <Link href="/markets/united-kingdom">UK buyers</Link>
          <Link href="/markets/united-states">US buyers</Link>
          <Link href="/markets/malaysia">Malaysia buyers</Link>
          <Link href="/markets/singapore">Singapore buyers</Link>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsapp({
  href = whatsappLink(),
}: {
  href?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Lury Beauty on WhatsApp for lash OEM and wholesale"
      className="fixed bottom-3 right-3 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-[#168452] text-white shadow-[0_18px_45px_rgba(22,132,82,0.34)] transition hover:-translate-y-0.5 hover:bg-[#126d43] sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
    >
      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
    </a>
  );
}

export function ContactStrip({
  dark = false,
}: {
  dark?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-2 text-sm ${dark ? "text-[#eaded0]" : "text-[#6b5d58]"}`}>
      <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[#1e1716]">
        <MessageCircle size={16} />
        {siteConfig.whatsappDisplay}
      </a>
      <a href={emailLink()} className="inline-flex items-center gap-2 hover:text-[#1e1716]">
        <Mail size={16} />
        {siteConfig.email}
      </a>
    </div>
  );
}
