import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ebbatech.com.ng";

  const routes = [
    "",
    "/about",
    "/services",
    "/products",
    "/projects",
    "/clients",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
