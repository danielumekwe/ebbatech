import type { Metadata } from "next";
import { Suspense } from "react";
import QuoteForm from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Request a Quote | Ebbatech Nigeria Limited",
  description: "Submit your warehouse heights, spatial area, and weight load profiles to obtain engineered CAD recommendations.",
};

export default function QuotePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#080d0a] text-xs font-bold text-slate-400">
        Loading quotation configurations...
      </div>
    }>
      <QuoteForm />
    </Suspense>
  );
}
