import type { MetadataRoute } from "next";
import { absoluteUrl } from "./siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "OAI-SearchBot",
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "PerplexityBot",
        ],
        allow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
