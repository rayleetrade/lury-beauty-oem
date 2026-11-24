import type { Attribution } from "./lead";
const storageKey = "lury-source-v1";
const allowedToken = /^[a-zA-Z0-9_.-]{1,80}$/;
export function readAttribution(): Attribution {
  if (typeof window === "undefined") return { landing_page: "/", source: "direct" };
  let source = "direct";
  try {
    const host = new URL(document.referrer).hostname;
    if (/^(www\.)?(chatgpt\.com|chat\.openai\.com)$/.test(host)) source = "chatgpt";
    else if (/^(www\.)?perplexity\.ai$/.test(host)) source = "perplexity";
    else if (/(^|\.)google\.[a-z.]+$/.test(host)) source = "google";
    else if (/(^|\.)bing\.com$/.test(host)) source = "bing";
    else if (host !== window.location.hostname) source = "referral";
  } catch { /* Direct visit. */ }
  const current: Attribution = { landing_page: window.location.pathname, source };
  const params = new URLSearchParams(window.location.search);
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const) { const value = params.get(key); if (value && allowedToken.test(value)) current[key] = value; }
  if (current.utm_source) current.source = current.utm_source;
  try {
    const saved = sessionStorage.getItem(storageKey);
    if (saved) { const parsed = JSON.parse(saved) as Attribution; if (typeof parsed.landing_page === "string" && parsed.landing_page.startsWith("/") && typeof parsed.source === "string") return parsed; }
    sessionStorage.setItem(storageKey, JSON.stringify(current));
  } catch { /* The inquiry works even if browser storage is unavailable. */ }
  return current;
}
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function leadEvent(event: string, parameters: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const payload = { page_path: window.location.pathname, ...parameters };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
  // GA4 direct (used when NEXT_PUBLIC_GA4_ID is configured).
  window.gtag?.("event", event, payload);
}

export function pageView(path: string) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
