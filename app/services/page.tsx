import type { Metadata } from "next";
import Link from "next/link";
import { Settings } from "lucide-react";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services | Ebbatech Nigeria Limited",
  description: "From initial site surveys and CAD drafts to transportation, laser rigging, and routine SEMA safety inspections.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 to-[#0f241d] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-4 text-center">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            Engineering Support
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Our Lifecycle Services
          </h1>
          <p className="text-xs text-slate-405 font-light max-w-xl mx-auto leading-relaxed">
            From initial site surveys and CAD drafts to transportation, laser rigging, and routine SEMA safety inspections.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-slate-50 dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-3xl p-8 flex flex-col justify-between group hover:border-[#1B4D3E] transition-all"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-white dark:bg-[#080d0a] border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-center text-[#1B4D3E] dark:text-[#ff8a6f]">
                  <Settings className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base md:text-lg text-slate-900 dark:text-white group-hover:text-[#1B4D3E] dark:group-hover:text-[#ff8a6f] transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-xs text-[#F27052] font-semibold mt-1">
                    {s.headline}
                  </p>
                  <p className="text-xs text-slate-555 dark:text-slate-400 leading-relaxed font-light mt-3 line-clamp-3">
                    {s.overview}
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-200/60 dark:border-slate-800 pt-4 mt-6">
                <Link
                  href={`/services/${s.slug}`}
                  className="text-xs font-bold text-[#1B4D3E] dark:text-[#ff8a6f] hover:underline flex items-center gap-1.5"
                >
                  View Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}