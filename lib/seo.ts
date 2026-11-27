import type { Metadata } from "next";
import seo from "@/content/seo.json";
import site from "@/content/site.json";
import { SeoEntry } from "@/types";

const entries: Record<keyof typeof seo, SeoEntry> = seo;

export function pageMetadata(page: keyof typeof seo): Metadata {
  const { title, description, shareImage } = entries[page];
  // Pages without their own share image use the homepage one.
  const image = shareImage || entries.home.shareImage;
  const images = image ? [image] : undefined;

  return {
    title,
    description,
    openGraph: { type: "website", siteName: site.companyName, title, description, images },
    twitter: { card: image ? "summary_large_image" : "summary", title, description, images },
  };
}
