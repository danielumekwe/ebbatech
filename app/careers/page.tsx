import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { jobOpenings } from "@/lib/data/careers";

export const metadata: Metadata = {
  title: "Careers | Ebbatech Nigeria Limited",
  description: "We are looking for project managers, rigging technicians, and design engineers to optimize storage capacity in West Africa.",
};

export default function CareersPage() {
  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 to-[#0f241d] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-4 text-center">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            Careers at Ebbatech
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Join Our Engineering Team
          </h1>
          <p className="text-xs text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
            We are looking for project managers, rigging technicians, and design engineers to optimize storage capacity in West Africa.
          </p>
        </div>
      </section>

      {/* Vacancies List */}
      <section className="py-20 max-w-4xl mx-auto px-6 space-y-8">
        <div className="space-y-3 mb-10 text-center sm:text-left">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            Active Openings
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Current Vacancies
          </h2>
        </div>

        <div className="space-y-6">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="bg-slate-50 dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 group hover:border-[#1B4D3E] transition-all"
            >
              <div className="space-y-3 max-w-xl">
                <span className="text-[9px] font-bold text-[#F27052] uppercase block">
                  {job.department}
                </span>
                <h3 className="font-extrabold text-base md:text-lg text-slate-900 dark:text-white group-hover:text-[#1B4D3E] dark:group-hover:text-[#ff8a6f] transition-colors">
                  {job.title}
                </h3>
                <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-light">
                  {job.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-1 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#F27052]" /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#F27052]" /> {job.type}
                  </span>
                </div>
              </div>

              <div className="w-full sm:w-auto pt-2 sm:pt-0">
                <Link
                  href={`/careers/${job.id}`}
                  className="bg-[#1B4D3E] hover:bg-[#276a55] text-white text-xs font-bold px-6 py-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  Apply Role <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}