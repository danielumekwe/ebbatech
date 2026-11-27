import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";
import content from "@/content/pages/privacy.json";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("privacy");

export default function PrivacyPage() {
  return <LegalPage {...content} />;
}
