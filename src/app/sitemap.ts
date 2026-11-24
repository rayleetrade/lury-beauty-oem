import type { MetadataRoute } from "next";
import { styleFamilies } from "./data/catalog";
import { geoTopicSlugs } from "./data/geoTopics";
import { marketSlugs } from "./data/markets";
import { productSlugs } from "./data/products";
import { absoluteUrl } from "./siteConfig";
import { procurementExamples } from "./data/procurementExamples";
import { materialGuides } from "./data/materialGuides";

const routes = [
  "/",
  "/products",
  "/procurement-examples",
  ...procurementExamples.map((item) => `/procurement-examples/${item.slug}`),
  "/materials",
  ...materialGuides.map((item) => `/materials/${item.slug}`),
  "/sampling-and-quality",
  "/packaging-options",
  "/market-style-research",
  "/collections",
  ...styleFamilies.map((family) => `/collections/${family.slug}`),
  ...productSlugs.map((slug) => `/products/${slug}`),
  "/sample-kit",
  "/oem",
  "/about",
  "/markets",
  ...marketSlugs.map((slug) => `/markets/${slug}`),
  "/contact",
  "/privacy",
  ...geoTopicSlugs.map((slug) => `/${slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
