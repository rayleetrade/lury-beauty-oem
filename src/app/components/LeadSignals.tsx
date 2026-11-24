"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { leadEvent, pageView, readAttribution } from "../lib/attribution";
export function LeadSignals() {
  const pathname = usePathname();
  useEffect(() => {
    readAttribution(); pageView(pathname); leadEvent("landing_view");
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element)?.closest?.("a"); if (!anchor) return;
      const url = new URL(anchor.href, window.location.origin);
      if (url.hostname === "wa.me") {
        const source = readAttribution();
        if (!anchor.dataset.inquiry && !url.searchParams.get("text")?.includes("Source page:")) {
          const tags = Object.entries(source).map(([key, value]) => `${key}: ${value}`).join("\n");
          url.searchParams.set("text", `${url.searchParams.get("text") || "Hello Lury Beauty"}\nSource page: ${pathname}\n${tags}`); anchor.href = url.toString();
        }
        leadEvent("whatsapp_click", { cta_id: anchor.dataset.cta || "whatsapp" });
      } else if (url.protocol === "mailto:") leadEvent("email_click");
      else if (url.pathname === "/sample-kit") leadEvent("sample_cta", { cta_id: anchor.dataset.cta || "sample-link" });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);
  return null;
}
