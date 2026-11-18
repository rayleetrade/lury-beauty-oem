import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

export type CtaLabel = string;

export function CtaLink({
  href,
  label,
  icon: Icon,
  variant = "dark",
  external = false,
  className = "",
}: {
  href: string;
  label: CtaLabel;
  icon: LucideIcon;
  variant?: "dark" | "light" | "outline" | "gold" | "ghost";
  external?: boolean;
  className?: string;
}) {
  const variants = {
    dark:
      "border-[#211716] bg-[#211716] text-white shadow-[0_18px_45px_rgba(33,23,22,0.22)] hover:bg-[#3a2924]",
    light:
      "border-white/70 bg-white/92 text-[#211716] shadow-[0_18px_45px_rgba(255,245,240,0.16)] hover:bg-white",
    outline:
      "border-[#211716] bg-transparent text-[#211716] hover:bg-[#211716] hover:text-white",
    gold:
      "border-[#d0a060] bg-[#d0a060] text-[#1c1412] shadow-[0_18px_45px_rgba(208,160,96,0.22)] hover:bg-[#e2bb7a]",
    ghost:
      "border-[#eadbd2] bg-white/72 text-[#211716] hover:border-[#211716] hover:bg-white",
  };

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-md border px-5 py-3 text-sm font-semibold transition duration-300 ${variants[variant]} ${className}`}
    >
      <Icon size={18} strokeWidth={1.9} />
      <span className="text-center">{label}</span>
      <ArrowRight
        size={17}
        strokeWidth={1.9}
        className="shrink-0 transition group-hover:translate-x-0.5"
      />
    </a>
  );
}
