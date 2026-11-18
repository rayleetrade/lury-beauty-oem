import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../siteConfig";

export function BrandLogo({
  dark = false,
  compact = false,
}: {
  dark?: boolean;
  compact?: boolean;
}) {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-3" aria-label={`${siteConfig.brandName} home`}>
      <span
        className={`relative shrink-0 overflow-hidden rounded-md border shadow-[0_10px_25px_rgba(33,23,22,0.12)] ${
          compact ? "h-10 w-10 md:h-11 md:w-11" : "h-11 w-11 md:h-12 md:w-12"
        } ${dark ? "border-white/18 bg-white" : "border-[#d8b56f] bg-white"}`}
      >
        <Image
          src={siteConfig.logoMark}
          alt="Lury Beauty OEM private label lash supply logo"
          fill
          sizes="44px"
          className="p-1.5 object-contain"
          priority
          unoptimized
        />
      </span>
      <span className="min-w-0 leading-tight">
        <span
          className={`block truncate font-display text-lg md:text-xl ${
            dark ? "text-[#fff8f2]" : "text-[#1e1716]"
          }`}
        >
          {siteConfig.brandName}
        </span>
        <span
          className={`block truncate text-[10px] font-semibold uppercase tracking-[0.16em] md:text-[11px] ${
            dark ? "text-[#eaded0]" : "text-[#7c6a62]"
          }`}
        >
          {siteConfig.brandTagline}
        </span>
      </span>
    </Link>
  );
}
