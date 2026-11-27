import type { Metadata } from "next";
import ClientLogoWall from "@/components/client-logo-wall";
import CtaBanner from "@/components/cta-banner";
import { sectorsServed } from "@/lib/data/clients";
import { pageMetadata } from "@/lib/seo";
import page from "@/content/pages/clients.json";

export const metadata: Metadata = pageMetadata("clients");

export default function ClientsPage() {
  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-[#0f241d] text-white py-20 relative">
        <div data-reveal className="max-w-7xl mx-auto px-6 space-y-4 text-center">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            {page.header.eyebrow}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            {page.header.title}
          </h1>
          <p className="text-xs text-slate-404 font-light max-w-xl mx-auto leading-relaxed">
            {page.header.subtitle}
          </p>
        </div>
      </section>

      {/* Body + Client Logo Wall */}
      <section className="py-20 max-w-7xl mx-auto px-6 space-y-16">
        <div data-reveal className="text-center space-y-3 max-w-2xl mx-auto">
          {page.intro.map((paragraph) => (
            <p key={paragraph} className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <ClientLogoWall />
      </section>

      {/* Sectors We Serve */}
      <section className="py-16 bg-slate-50 dark:bg-[#0a0f0d] border-y border-slate-100 dark:border-slate-900">
        <div data-reveal className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            {page.sectorsHeading}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {sectorsServed.map((sector) => (
              <span
                key={sector}
                className="bg-white dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 text-slate-655 dark:text-slate-350 text-xs font-semibold px-4 py-2 rounded-full"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <CtaBanner {...page.cta} />
      </section>
    </div>
  );
}
