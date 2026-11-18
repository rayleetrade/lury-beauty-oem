export type InquiryMode = "sample" | "oem";
export type InquiryValues = { name: string; company: string; country: string; contact: string; interest: string; quantity: string; packaging: string; postcode: string; channel: string; message: string; website: string; samplePlan: string; sampleQuantity: string; requiredBy: string; specification: string };
export type Attribution = { landing_page: string; source: string; utm_source?: string; utm_medium?: string; utm_campaign?: string; utm_content?: string };
export const fieldLimits: Record<keyof InquiryValues, number> = { name: 100, company: 160, country: 80, contact: 180, interest: 180, quantity: 80, packaging: 160, postcode: 80, channel: 160, message: 1800, website: 200, samplePlan: 100, sampleQuantity: 80, requiredBy: 100, specification: 300 };
export function validateInquiry(values: InquiryValues): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const field of ["name", "country", "contact"] as const) if (!values[field]?.trim()) errors[field] = "Please complete this field.";
  const contact = values.contact?.trim() || "";
  const phoneDigits = contact.replace(/\D/g, "");
  const validPhone = /^\+?[\d\s().-]{7,30}$/.test(contact) && phoneDigits.length >= 7 && phoneDigits.length <= 15;
  if (contact && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact) && !validPhone) errors.contact = "Use an email address or a phone number with country code.";
  for (const field of Object.keys(fieldLimits) as (keyof InquiryValues)[]) if (typeof values[field] !== "string" || values[field].length > fieldLimits[field]) errors[field] = "Please shorten this field.";
  return errors;
}
export function newInquiryId() { return `LB-${new Date().toISOString().slice(0, 10).replaceAll("-", "")}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`; }
export function inquiryText(values: InquiryValues, mode: InquiryMode, id: string, attribution: Attribution, page: string) {
  return [`Hello Lury Beauty, I would like ${mode === "sample" ? "sample options and a sample + freight quote" : "a private label / OEM quote"}.`, `Request reference: ${id}`, `Name: ${values.name.trim()}`, `Company / brand: ${values.company.trim() || "To discuss"}`, `Country: ${values.country.trim()}`, `Reply to: ${values.contact.trim()}`, values.samplePlan && `Sample route: ${values.samplePlan}`, `Product: ${values.interest || "Please recommend sample options"}`, values.sampleQuantity && `Requested sample quantity: ${values.sampleQuantity}`, `Planned order quantity: ${values.quantity || "To discuss"}`, `Packaging: ${values.packaging || "To discuss"}`, `City / postcode: ${values.postcode || "To follow"}`, values.requiredBy && `Requested arrival / launch timing: ${values.requiredBy}`, values.specification && `Requested specification: ${values.specification}`, `Sales channel: ${values.channel || "To discuss"}`, values.message && `Requirements: ${values.message.trim()}`, "Please confirm the exact product, pack contents, MOQ, itemized sample and packaging fees, freight, tax inclusion and separate preparation / transit timing before I order.", `Source page: ${page}`, `First page: ${attribution.landing_page}`, `Source: ${attribution.source}`, ...["utm_source", "utm_medium", "utm_campaign", "utm_content"].flatMap(key => attribution[key as keyof Attribution] ? [`${key}: ${attribution[key as keyof Attribution]}`] : [])].filter(Boolean).join("\n");
}
