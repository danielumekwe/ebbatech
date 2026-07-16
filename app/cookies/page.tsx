import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Ebbatech Nigeria Limited",
  description: "How Ebbatech Nigeria Limited uses browser cookies and tracking tags to optimize B2B portal operations and remember preferences.",
};

export default function CookiesPage() {
  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-6 text-xs leading-relaxed font-light">
        <h1 className="text-3xl font-extrabold text-[#1B4D3E] dark:text-[#ff8a6f]">Cookie Policy</h1>
        <p className="text-slate-500">Last updated: July 15, 2026</p>
        
        <p>
          This Cookie Policy explains how Ebbatech Nigeria Limited uses browser cookies and tracking tags to optimize B2B portal operations, store layout wizards, and remember preferences.
        </p>

        <h3 className="font-bold text-sm text-slate-950 dark:text-white">Types of Cookies Used</h3>
        <p>
          We use essential cookies to maintain quotation progress in the RFQ wizard, and preference cookies to save dark theme preferences. We also track PDF downloads (such as catalog brochures) anonymously for site optimization.
        </p>

        <h3 className="font-bold text-sm text-slate-950 dark:text-white">Adjusting Preferences</h3>
        <p>
          You can disable cookies in your browser settings. However, doing so may affect interactive features (such as comparison selections or RFQ steps).
        </p>
      </div>
    </div>
  );
}