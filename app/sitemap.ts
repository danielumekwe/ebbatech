import { MetadataRoute } from "next";
import { products } from "@/lib/data/products";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { caseStudies } from "@/lib/data/projects";
import { blogPosts } from "@/lib/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ebbatech.com.ng";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/services",
    "/industries",
    "/projects",
    "/blog",
    "/contact",
    "/quote",
    "/downloads",
    "/careers",
    "/faq",
    "/compare",
    "/clients",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Product dynamic routes
  const productRoutes = products.map((p) => ({
    url: `${baseUrl}/products/${p.category}/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Service dynamic routes
  const serviceRoutes = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Industry dynamic routes
  const industryRoutes = industries.map((i) => ({
    url: `${baseUrl}/industries/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Case study dynamic routes
  const projectRoutes = caseStudies.map((proj) => ({
    url: `${baseUrl}/projects/${proj.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Blog dynamic routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...projectRoutes,
    ...blogRoutes,
  ];
}