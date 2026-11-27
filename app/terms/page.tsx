import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";
import content from "@/content/pages/terms.json";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("terms");

export default function TermsPage() {
  return <LegalPage {...content} />;
}
