import type { Metadata } from "next";
import Image from "next/image";
import CtaBanner from "@/components/cta-banner";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Our Projects | Ebbatech Nigeria Limited",
  description: "A look at pallet racking, bulk storage and warehouse fit-out projects delivered by Ebbatech Nigeria Limited.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-[#0f241d] text-white py-20 relative">
        <div data-reveal className="max-w-7xl mx-auto px-6 space-y-4 text-center">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            Our Projects
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Our Projects
          </h1>
          <p className="text-xs text-slate-405 font-light max-w-xl mx-auto leading-relaxed">
            A look inside the warehouses and facilities we&apos;ve fitted out across Nigeria.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              data-reveal
              data-reveal-delay={(idx % 3) * 100}
              className="break-inside-avoid mb-6 rounded-2xl overflow-hidden border border-slate-150 dark:border-slate-800 shadow-sm group hover:border-[#1B4D3E] dark:hover:border-[#276a55] transition-colors"
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={900}
                  height={1080}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-1 bg-slate-50/50 dark:bg-[#0c1410]">
                <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
                  {project.category}
                </span>
                <h3 className="text-sm font-extrabold text-slate-955 dark:text-white leading-snug">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="pb-20 max-w-5xl mx-auto px-6">
        <CtaBanner
          image="/photos/eb5.jpeg"
          title="Ready to take your warehouse to the next level?"
          subtitle="Tell us about your project and we'll come back with a solution and a quotation."
        />
      </section>
    </div>
  );
}
