import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Check,
  ChevronRight,
  Clock3,
  Mail,
  MessageCircle,
  PackageCheck,
  Send,
  Ship,
  Tags,
} from "lucide-react";
import { CtaLink } from "../components/CtaLink";
import { FaqJsonLd } from "../components/FaqJsonLd";
import { FloatingWhatsapp, SiteFooter, SiteHeader } from "../components/SiteChrome";
import { geoTopicSlugs, getGeoTopic } from "../data/geoTopics";
import { siteConfig } from "../siteConfig";

type TopicPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const noteIcons: Record<string, LucideIcon> = {
  sample: PackageCheck,
  packaging: Tags,
  leadTime: Clock3,
  shipping: Ship,
};

export function generateStaticParams() {
  return geoTopicSlugs.filter((slug) => slug !== "false-eyelash-oem-faq").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: TopicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getGeoTopic(slug);

  if (!topic) {
    return {};
  }

  return {
    title: topic.title,
    description: topic.description,
    alternates: {
      canonical: `/${topic.slug}`,
    },
    openGraph: {
      title: topic.title,
      description: topic.description,
      url: `/${topic.slug}`,
      type: "website",
      images: [
        {
          url: topic.image,
          width: 1200,
          height: 630,
          alt: topic.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: topic.title,
      description: topic.description,
      images: [topic.image],
    },
  };
}

function buildWhatsappLink(title: string, intent: string) {
  const text = encodeURIComponent(
    `Hello, I am interested in ${title}. Please send ${intent}, sample options, packaging details and quotation information.`,
  );

  return `https://wa.me/${siteConfig.whatsappPhone}?text=${text}`;
}

function SectionIntro({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p
        className={`mb-4 text-xs font-semibold uppercase tracking-[0.18em] ${
          light ? "text-[#f2d18e]" : "text-[#9c6a47]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display text-4xl leading-[1.05] md:text-5xl ${
          light ? "text-[#fff8f2]" : "text-[#1e1716]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 text-base leading-8 md:text-lg ${
          light ? "text-[#eaded0]" : "text-[#6b5d58]"
        }`}
      >
        {copy}
      </p>
    </div>
  );
}

export default async function GeoTopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const topic = getGeoTopic(slug);

  if (!topic) {
    notFound();
  }

  const catalogLink = buildWhatsappLink(topic.title, "your product catalog");
  const quoteLink = buildWhatsappLink(topic.title, "OEM quote details");
  const sampleLink = buildWhatsappLink(topic.title, "sample details");
  const emailLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    `${topic.title} Inquiry`,
  )}`;

  return (
    <main className="min-h-screen bg-[#fff9f6] text-[#1e1716]">
      <FaqJsonLd faqs={topic.faqs} />
      <SiteHeader ctaHref={quoteLink} />

      <section className="relative isolate overflow-hidden bg-[#171111] px-4 py-20 text-white md:px-8 md:py-28">
        <div className="absolute inset-0 -z-20">
          <Image
            src={topic.image}
            alt={topic.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-[0.82]"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(18,12,12,0.97)_0%,rgba(30,17,18,0.78)_48%,rgba(30,17,18,0.28)_100%)]" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#f2d18e] backdrop-blur">
              {siteConfig.brandName}
              <span className="text-white/50">|</span>
              {topic.eyebrow}
            </p>
            <h1 className="font-display text-5xl leading-[0.96] text-[#fff8f2] md:text-7xl">
              {topic.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f4e6dc]">
              {topic.directAnswer}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CtaLink
                href={catalogLink}
                label="Request Catalog"
                icon={Send}
                variant="gold"
                external
              />
              <CtaLink
                href={quoteLink}
                label="Get OEM Quote"
                icon={MessageCircle}
                variant="light"
                external
              />
              <CtaLink
                href={sampleLink}
                label="Ask for Samples"
                icon={PackageCheck}
                variant="light"
                external
              />
            </div>
          </div>

          <div className="rounded-xl border border-white/18 bg-white/12 p-5 backdrop-blur md:p-6">
            <h2 className="font-display text-3xl leading-tight text-[#fff8f2]">
              Built for practical OEM decisions.
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {["Samples", "Packaging", "Lead time", "Shipping"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/16 bg-white/12 p-4 text-sm font-semibold text-[#fff8f2]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionIntro
              eyebrow="Suitable customers"
              title="Who this page is for"
              copy="These pages are written for global beauty brands, wholesale buyers, lash distributors, TikTok and Amazon sellers who need clear product, packaging and order information before starting a private label lash project."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {topic.suitableCustomers.map((customer) => (
                <article
                  key={customer}
                  className="rounded-lg border border-[#eadbd2] bg-[linear-gradient(145deg,#ffffff_0%,#fff7f3_100%)] p-5 shadow-[0_16px_50px_rgba(45,26,24,0.08)]"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#e4d4cb] bg-[#fff9f5] text-[#9c6a47]">
                    <Check size={18} strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-4 text-base font-semibold leading-7 text-[#1e1716]">
                    {customer}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#eadbd2] bg-[linear-gradient(135deg,#fff8f7_0%,#f5e1e7_48%,#ffffff_100%)] px-4 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionIntro
              eyebrow="Custom options"
              title="What can be customized"
              copy="Customization should match the buyer stage. Some projects only need a style and private label box, while others need a complete launch set with samples, labels and bundle planning."
            />
            <CtaLink
              href={sampleLink}
              label="Ask for Samples"
              icon={PackageCheck}
              variant="outline"
              external
            />
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topic.customizableContent.map((item) => (
              <article
                key={item}
                className="rounded-lg border border-white/80 bg-white/90 p-6 shadow-[0_18px_55px_rgba(45,26,24,0.08)]"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#211716] text-[#f2d18e]">
                    <ChevronRight size={16} strokeWidth={2} />
                  </span>
                  <h3 className="font-display text-2xl leading-tight text-[#1e1716]">
                    {item}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1b1412] px-4 py-20 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionIntro
              eyebrow="Order details"
              title="Samples, packaging, lead time and shipping"
              copy="Before quoting or producing, it is important to align the commercial details that affect product presentation, timeline and shipping arrangement."
              light
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {Object.entries(topic.notes).map(([key, value]) => {
                const Icon = noteIcons[key] || Boxes;

                return (
                  <article
                    key={key}
                    className="rounded-lg border border-[#6f5140] bg-[#241b18] p-6 shadow-[0_18px_55px_rgba(0,0,0,0.2)]"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#6f5140] bg-[#2e2320] text-[#f2d18e]">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-5 font-display text-2xl capitalize text-[#fff8f2]">
                      {key === "leadTime" ? "Lead time" : key}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#eaded0]">
                      {value}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#eadbd2] bg-[linear-gradient(135deg,#fff8f7_0%,#f1ead7_48%,#ffffff_100%)] px-4 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <SectionIntro
            eyebrow="Buyer preparation"
            title={topic.checklistTitle}
            copy="A more prepared inquiry usually leads to better sample selection, clearer packaging discussion and a faster quotation."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {topic.checklistItems.map((item) => (
              <article
                key={item}
                className="rounded-lg border border-white bg-white/90 p-5 shadow-[0_16px_50px_rgba(45,26,24,0.08)]"
              >
                <div className="flex gap-3">
                  <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#211716] text-[#f2d18e]">
                    <Check size={16} />
                  </span>
                  <h3 className="text-base font-semibold leading-7 text-[#1e1716]">
                    {item}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <SectionIntro
              eyebrow="OEM path"
              title="A practical way to start"
              copy="The best OEM projects usually begin with a simple brief. Once product and packaging direction are clear, samples and quotation details become much easier to confirm."
            />

            <div className="space-y-3">
              {topic.process.map((step, index) => (
                <article
                  key={step}
                  className="grid gap-4 rounded-lg border border-[#eadbd2] bg-[#fffaf7] p-5 shadow-[0_14px_42px_rgba(45,26,24,0.06)] sm:grid-cols-[auto_1fr] sm:items-start"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#211716] text-sm font-semibold text-[#f2d18e]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#1e1716]">
                      Step {index + 1}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#6b5d58]">
                      {step}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="border-y border-[#eadbd2] bg-[#fff6f2] px-4 py-20 md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-5xl">
          <SectionIntro
            eyebrow="FAQ"
            title="Questions buyers usually ask"
            copy="These answers are intentionally practical. Final MOQ, sample timing and bulk timing depend on the product, packaging and order details."
          />

          <div className="mt-10 divide-y divide-[#eadbd2] rounded-lg border border-[#eadbd2] bg-white shadow-[0_18px_55px_rgba(45,26,24,0.08)]">
            {topic.faqs.map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5">
                  <h3 className="text-base font-semibold leading-7 text-[#1e1716]">
                    {faq.question}
                  </h3>
                  <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#e4d4cb] text-[#9c6a47] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#6b5d58]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#191211] px-4 py-16 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-xl border border-[#6f5140] bg-[linear-gradient(135deg,#241917_0%,#120d0c_100%)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)] md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f2d18e]">
              Start your OEM inquiry
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-[#fff8f2] md:text-5xl">
              Send your lash idea, quantity and packaging direction.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#eaded0]">
              We will reply through WhatsApp or email with practical next steps
              for catalog, samples, packaging and quotation details.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm text-[#eaded0] sm:flex-row sm:gap-6">
              <a href={quoteLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                <MessageCircle size={16} />
                {siteConfig.whatsappDisplay}
              </a>
              <a href={emailLink} className="inline-flex items-center gap-2 hover:text-white">
                <Mail size={16} />
                {siteConfig.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <CtaLink
              href={catalogLink}
              label="Request Catalog"
              icon={Send}
              variant="gold"
              external
            />
            <CtaLink
              href={quoteLink}
              label="Get OEM Quote"
              icon={MessageCircle}
              variant="light"
              external
            />
            <CtaLink
              href={sampleLink}
              label="Ask for Samples"
              icon={PackageCheck}
              variant="light"
              external
            />
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsapp href={quoteLink} />
    </main>
  );
}
