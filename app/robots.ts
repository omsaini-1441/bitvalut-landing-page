import { getSiteUrl } from "@/lib/env";
import type { MetadataRoute } from "next";

const privatePaths = ["/account", "/download", "/login", "/api/", "/auth/"];

const agentCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "Google-Extended",
  "Googlebot",
  "Bingbot",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "CCBot",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  const rule = {
    allow: ["/", "/llms.txt"],
    disallow: privatePaths,
  };

  return {
    rules: [
      { userAgent: "*", ...rule },
      ...agentCrawlers.map((userAgent) => ({ userAgent, ...rule })),
    ],
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
