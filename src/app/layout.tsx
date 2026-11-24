import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteJsonLd } from "./components/SiteJsonLd";
import { siteConfig } from "./siteConfig";
import "./globals.css";
import { LeadSignals } from "./components/LeadSignals";
import { buyerShareImage } from "./lib/pageMetadata";
import Script from "next/script";

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Private Label False Eyelash Supplier | Lury Beauty",
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.description,
  keywords: [
    "false eyelash supplier China",
    "OEM false eyelashes supplier",
    "ODM false eyelashes supplier",
    "private label lashes",
    "lash sample kit",
    "custom eyelash packaging",
    "Qingdao eyelash supplier",
    "Pingdu false eyelashes",
  ],
  openGraph: {
    title: "Private Label False Eyelash Supplier | Lury Beauty",
    description: siteConfig.description,
    url: "/",
    type: "website",
    locale: "en_US",
    siteName: siteConfig.brandName,
    images: [buyerShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Label False Eyelash Supplier | Lury Beauty",
    description: siteConfig.description,
    images: [{ url: buyerShareImage.url, alt: buyerShareImage.alt }],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    ...(process.env.BING_SITE_VERIFICATION ? { other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION } } : {}),
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: siteConfig.favicon, type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body>
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        ) : null}
        {gtmId ? (
          <Script id="gtm-init" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}</Script>
        ) : null}
        {ga4Id ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${ga4Id}',{send_page_view:false});(window.__luryGaQueue||[]).forEach(function(a){gtag.apply(null,a);});window.__luryGaQueue=[];`}</Script>
          </>
        ) : null}
        <SiteJsonLd />
        <LeadSignals />
        {children}
      </body>
    </html>
  );
}
