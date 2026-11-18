import Image from "next/image";
import Link from "next/link";
import { MessageCircle, PackageCheck, Send } from "lucide-react";
import type { Product } from "../data/products";
import { whatsappLink } from "../siteConfig";
import { CtaLink } from "./CtaLink";

export function ProductCard({
  product,
  compact = false,
}: {
  product: Product;
  compact?: boolean;
}) {
  const productWhatsapp = whatsappLink(
    `Hello, I would like a paid sample of ${product.model} - ${product.name}. Please quote the sample and freight, then send a USD proforma invoice. My destination country and postcode are:`,
  );

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#eadbd2] bg-white shadow-[0_18px_55px_rgba(45,26,24,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(45,26,24,0.14)]">
      <Link href={`/products/${product.slug}`} className="relative block aspect-[1/1] overflow-hidden bg-[#f7efe8]">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="p-2 object-contain transition duration-700 group-hover:scale-[1.02]"
        />
        <span className="absolute left-4 top-4 rounded-md border border-white/70 bg-white/86 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#31501d] backdrop-blur">
          {product.model}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9c6a47]">
          {product.group}
        </p>
        <h3 className="mt-3 font-display text-2xl leading-tight text-[#1e1716]">
          <Link href={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className={`mt-3 text-sm leading-7 text-[#6b5d58] ${compact ? "line-clamp-3" : ""}`}>
          {product.shortDescription}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {product.suitableFor.slice(0, 3).map((item) => (
            <span
              key={item}
              className="rounded-md border border-[#eadbd2] bg-[#fff9f6] px-3 py-2 text-xs font-semibold text-[#76625b]"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6 grid gap-3">
          <CtaLink
            href={productWhatsapp}
            label="Request Sample Invoice"
            icon={PackageCheck}
            variant="dark"
            external
            className="w-full px-3"
          />
          <CtaLink
            href="/oem"
            label="Private Label Options"
            icon={MessageCircle}
            variant="gold"
            className="w-full px-3"
          />
        </div>
        <CtaLink
          href={`/products/${product.slug}`}
          label="View Details"
          icon={Send}
          variant="ghost"
          className="mt-3 w-full"
        />
      </div>
    </article>
  );
}
