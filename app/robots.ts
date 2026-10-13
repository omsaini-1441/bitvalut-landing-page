import { getSiteUrl } from "@/lib/env";
import type { MetadataRoute } from "next";

const privatePaths = ["/account", "/download", "/login", "/api/", "/auth/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/sitemap.xml", "/robots.txt", "/llms.txt", "/"],
      disallow: privatePaths,
    },
    sitemap: `${getSiteUrl().replace(/\/$/, "")}/sitemap.xml`,
  };
}
