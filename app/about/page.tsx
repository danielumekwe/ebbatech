import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Compass, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Ebbatech Nigeria Limited | Industrial Storage Engineers",
  description: "Ebbatech Nigeria Limited is Nigeria's leading provider of industrial racking, compactors, shelving, and space planning, serving banks, oil companies, and FMCG warehouses.",
};

export default function AboutPage() {
  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#F27052]" />,
      title: "SEMA Safety Standards",
      desc: "Every upright frame, support beam, and anchor is built to SEMA codes of practice and British Standards."
    },
    {
      icon: <Compass className="w-6 h-6 text-[#F27052]" />,
      title: "CAD Spatial Precision",
      desc: "We run advanced 2D & 3D space layouts to verify structural clearance and optimize forklift turning limits."
    },
    {
      icon: <Award className="w-6 h-6 text-[#F27052]" />,
      title: "Engineering Excellence",
      desc: "We supply industrial storage racks and archives constructed from high-tensile steel for extreme load limits."
    },
    {
      icon: <Users className="w-6 h-6 text-[#F27052]" />,
      title: "Turnkey Installations",
      desc: "Our in-house riggers manage everything from laser leveling to baseplate floor anchoring across Nigeria."
    }
  ];

  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 to-[#0f241d] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-4 text-center">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            About Our Company
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Engineering Storage Capacity & Safety
          </h1>
          <p className="text-xs text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
            Ebbatech Nigeria Limited is Nigeria&apos;s leading provider of industrial racking, compactors, shelving, and space planning.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            Ebbatech Story
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Transforming Warehouses & Registries Across West Africa
          </h2>
          <div className="space-y-4 text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-light">
            <p>
              Founded with the goal of solving logistics inefficiencies and storage shortages in Nigerian enterprises, Ebbatech has grown into a leading space-optimization engineering provider. We do not simply supply shelving racks; we engineer spaces to double capacity and secure records registries.
            </p>
            <p>
              Our specialists collaborate with major banks, oil companies, and FMCG warehouses to ensure their loading docks, racking beams, and vault compactors conform to strict international standards (SGS, ISO, and SEMA codes).
            </p>
          </div>
        </div>
        <div 
          className="lg:col-span-6 h-96 rounded-3xl bg-cover bg-center border border-slate-200 dark:border-slate-800 shadow-sm"
          style={{ backgroundImage: `url('/images/research_collaboration.png')` }}
        />
      </section>

      {/* Core Values Section */}
      <section className="bg-slate-50 dark:bg-[#0a0f0d] py-20 border-y border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-3 max-w-lg mx-auto">
            <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
              Core Principles
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Built on Trust & Safety Compliance
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              Every warehouse layout configuration and shelving system we install stands on four core Ebbatech pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 p-8 rounded-3xl shadow-sm space-y-4"
              >
                <div className="w-12 h-12 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-100 dark:border-slate-800">
                  {v.icon}
                </div>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  {v.title}
                </h3>
                <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-light">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center space-y-6 max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
          Ready to Work with Ebbatech Engineers?
        </h2>
        <p className="text-xs text-slate-555 dark:text-slate-400 font-light leading-relaxed max-w-lg mx-auto">
          Contact our structural consultants today to discuss your warehouse layout blueprints or mobile archiving compactors parameters.
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <Link
            href="/quote"
            className="bg-[#F27052] hover:bg-[#ff8a6f] text-white text-xs font-bold px-8 py-3.5 rounded-xl transition-all shadow-md"
          >
            Request Quotation
          </Link>
          <Link
            href="/contact"
            className="bg-[#1B4D3E] hover:bg-[#276a55] text-white text-xs font-bold px-8 py-3.5 rounded-xl transition-all shadow-md"
          >
            Contact Office
          </Link>
        </div>
      </section>
    </div>
  );
}