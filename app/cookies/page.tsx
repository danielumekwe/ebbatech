import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";
import content from "@/content/pages/cookies.json";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("cookies");

export default function CookiesPage() {
  return <LegalPage {...content} />;
}
