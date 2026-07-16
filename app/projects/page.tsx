import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Case Studies | Ebbatech Nigeria Limited",
  description: "See how Ebbatech space calculations, safety anchor rigging, and mobile compactors solved storage limits for Nigeria's leading firms.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 to-[#0f241d] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-4 text-center">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            Installation Records
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Completed Case Studies
          </h1>
          <p className="text-xs text-slate-404 font-light max-w-xl mx-auto leading-relaxed">
            See how Ebbatech space calculations, safety anchor rigging, and mobile compactors solved storage limits for Nigeria&apos;s leading firms.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((project) => (
            <div
              key={project.id}
              className="bg-slate-50 dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between group hover:border-[#1B4D3E] transition-all"
            >
              <div className="space-y-4">
                <span className="text-[9px] font-bold text-[#F27052] uppercase block">
                  {project.industry} • {project.location.split(",")[1] || "Nigeria"}
                </span>
                
                <h3 className="font-extrabold text-base md:text-lg text-slate-900 dark:text-white group-hover:text-[#1B4D3E] dark:group-hover:text-[#ff8a6f] transition-colors leading-snug">
                  {project.title}
                </h3>
                
                <p className="text-xs text-slate-555 dark:text-slate-450 leading-relaxed font-light line-clamp-3">
                  {project.challenge}
                </p>

                {/* Highlight Stats Row */}
                <div className="grid grid-cols-2 gap-4 py-3 border-t border-slate-200/50 dark:border-slate-800">
                  {project.stats.slice(0, 2).map((st, sidx) => (
                    <div key={sidx} className="space-y-1">
                      <span className="text-lg md:text-xl font-extrabold text-[#1B4D3E] dark:text-[#ff8a6f] block">
                        {st.value}
                      </span>
                      <span className="text-[9px] text-slate-404 font-bold uppercase tracking-wider block">
                        {st.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-200/50 dark:border-slate-800 pt-4 mt-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-xs font-bold text-[#1B4D3E] dark:text-[#ff8a6f] hover:underline flex items-center gap-1.5"
                >
                  Read Full Case Study <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}