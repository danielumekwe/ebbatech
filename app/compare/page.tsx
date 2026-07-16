import type { Metadata } from "next";
import CompareContent from "@/components/compare-content";

export const metadata: Metadata = {
  title: "Product Comparison Tool | Ebbatech Nigeria Limited",
  description: "Compare mechanical dimensions, SEMA load capacity thresholds, and structural finishes side by side.",
};

export default function ComparePage() {
  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 to-[#0f241d] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-4 text-center">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            System Analysis
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Product Comparison Tool
          </h1>
          <p className="text-xs text-slate-404 font-light max-w-xl mx-auto leading-relaxed">
            Compare mechanical dimensions, SEMA load capacity thresholds, and structural finishes side by side.
          </p>
        </div>
      </section>

      <CompareContent />
    </div>
  );
}
