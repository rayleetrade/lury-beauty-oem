import { InquiryFormClient } from "./InquiryFormClient";
import type { InquiryMode } from "../lib/lead";
export function InquiryForm({ mode = "sample", country = "", interest = "", samplePlanner = false }: { mode?: InquiryMode; country?: string; interest?: string; samplePlanner?: boolean }) {
  const deliveryEnabled = Boolean(process.env.RESEND_API_KEY || (process.env.CALLMEBOT_PHONE && process.env.CALLMEBOT_APIKEY));
  return <InquiryFormClient mode={mode} country={country} interest={interest} deliveryEnabled={deliveryEnabled} samplePlanner={samplePlanner} />;
}