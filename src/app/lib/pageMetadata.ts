import type { Metadata } from "next";
import { siteConfig } from "../siteConfig";

export const buyerShareImage = {
  url: "/images/brand/lury-private-label-concept-v2.webp",
  width: 1122,
  height: 1402,
  alt: "AI-generated Lury Beauty private-label lash packaging concept; not actual stock or a product photograph",
};

export function pageMetadata({ title, description, path, absoluteTitle = false }: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.brandName}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      type: "website",
      locale: "en_US",
      siteName: siteConfig.brandName,
      images: [buyerShareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: buyerShareImage.url, alt: buyerShareImage.alt }],
    },
  };
}
