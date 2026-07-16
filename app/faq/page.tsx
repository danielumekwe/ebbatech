import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle } from "lucide-react";
import FaqAccordion from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "FAQ | Ebbatech Nigeria Limited",
  description: "Find answers to SEMA compliance, spatial planning audits, and compactor specifications.",
};

export default function FAQPage() {
  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 to-[#0f241d] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-4 text-center">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            Frequently Asked Questions
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Safety, Specs & Logistics Inquiries
          </h1>
          <p className="text-xs text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
            Find answers to SEMA compliance, spatial planning audits, and compactor specifications.
          </p>
        </div>
      </section>

      <FaqAccordion />

      {/* Need Help Box */}
      <section className="py-12 bg-slate-50 dark:bg-[#0a0f0d] border-t border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-2xl mx-auto px-6 text-center space-y-4">
          <HelpCircle className="w-8 h-8 text-[#F27052] mx-auto" />
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
            Have a Different Layout Inquiry?
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-sm mx-auto">
            Contact our technical representatives directly to schedule a warehouse laser space audit.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="bg-[#1B4D3E] hover:bg-[#276a55] text-white text-xs font-bold px-6 py-3 rounded-xl transition-all shadow-sm"
            >
              Contact Technical Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
