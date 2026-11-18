import { absoluteUrl, siteConfig } from "../siteConfig";

export function SiteJsonLd() {
  const organizationId = `${absoluteUrl("/")}#organization`;
  const websiteId = `${absoluteUrl("/")}#website`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": organizationId,
      name: siteConfig.brandName,
      url: absoluteUrl("/"),
      logo: absoluteUrl(siteConfig.logo),
      description: siteConfig.description,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Qingdao",
        addressRegion: "Shandong",
        addressCountry: "CN",
      },
      areaServed: "Worldwide",
      knowsAbout: [
        "Private label false eyelashes",
        "Cluster lash sample development",
        "False eyelash sample kits",
        "OEM and ODM lash packaging",
        "International B2B lash supply",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: siteConfig.whatsappDisplay,
          email: siteConfig.email,
          availableLanguage: ["English"],
          areaServed: "Worldwide",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": websiteId,
      name: siteConfig.brandName,
      url: absoluteUrl("/"),
      description: siteConfig.description,
      publisher: {
        "@id": organizationId,
      },
      inLanguage: "en",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
