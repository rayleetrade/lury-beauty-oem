export const siteConfig = {
  brandName: "Lury Beauty",
  brandTagline: "Private Label Lash Supply",
  name: "Lury Beauty",
  siteUrl: "https://www.lurybeauty.com",
  description:
    "Private label false eyelash sourcing in Qingdao, China. Sample selection, packaging and order coordination with manufacturing partners in Pingdu for brands and wholesale buyers.",
  location: "Qingdao, Shandong, China",
  productionBase: "Pingdu, Shandong, China",
  paymentMethod: "USD bank transfer against a proforma invoice",
  // Shown to buyers on the site.
  whatsappDisplay: "+86 183 6665 6532",
  // Number that actually receives wa.me conversations.
  whatsappPhone: "8618366656532",
  email: "2826347155@qq.com",
  logo: "/images/logo/lury-beauty-oem-logo.png",
  logoMark: "/images/logo/lury-beauty-oem-mark.svg",
  favicon: "/images/logo/lury-beauty-oem-mark.svg",
  ogImage: "/images/logo/lury-beauty-oem-logo.png",
  defaultWhatsappMessage:
    "Hello, I am looking for private label false eyelashes. Please share sample options and private label packaging information. My destination and target quantity are to be discussed. Please confirm the exact product, MOQ, pricing and timing.",
  sampleInvoiceMessage:
    "Hello, I would like to place a paid lash sample order. Please quote the sample items and freight, then send a USD proforma invoice. My destination country and postcode are:",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function whatsappLink(message = siteConfig.defaultWhatsappMessage) {
  return `https://wa.me/${siteConfig.whatsappPhone}?text=${encodeURIComponent(
    message,
  )}`;
}

export function emailLink(subject = "Private Label False Eyelash Inquiry") {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`;
}
