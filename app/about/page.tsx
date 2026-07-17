import type { Metadata } from "next";
import Link from "next/link";
import { Layers, Globe2, Factory, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Ebbatech | Leading Storage Systems Company in Nigeria",
  description: "Ebbatech Nigeria Limited is a leading provider of industrial storage and shelving, working with clients from planning through installation and on-going support.",
};

const differentiators = [
  {
    icon: Layers,
    title: "Complete Lifecycle Partnership",
    desc: "Planning, design, manufacture, installation, support."
  },
  {
    icon: Globe2,
    title: "Global Expertise, Local Delivery",
    desc: "International standards, applied to Nigerian facilities."
  },
  {
    icon: Factory,
    title: "In-House Manufacturing",
    desc: "We make what we sell and stand behind it."
  },
  {
    icon: Building2,
    title: "Sectors Served",
    desc: "Banks, government agencies, data centres, oil and gas, multinationals, records and archiving, retail, logistics and more."
  }
];

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-[#0f241d] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-4 text-center">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            About Ebbatech
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            About Ebbatech
          </h1>
          <p className="text-xs text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
            The leading storage, material handling and space-making company of choice.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            Our Story
          </span>
          <div className="space-y-4 text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-light">
            <p>
              Ebbatech Nigeria Limited is one of the leading companies in the storage systems market, providing industrial storage and shelving that is expertly designed and engineered to enable businesses to increase capacity, productivity and efficiency.
            </p>
            <p>
              We specialise in the design, manufacturing, sales and servicing of metal racking, mobile archive systems and other storage solutions &mdash; making us a genuine one-stop shop for storage.
            </p>
            <p>
              We have helped some of Nigeria&apos;s leading brands and pioneering SMEs, providing them with access to global expertise and support. We work with our customers through the complete lifecycle of their storage needs, from initial planning through to installation and on-going service and support.
            </p>
          </div>
        </div>
        <div
          className="lg:col-span-6 h-96 rounded-3xl bg-cover bg-center border border-slate-200 dark:border-slate-800 shadow-sm"
          style={{ backgroundImage: `url('/images/research_collaboration.png')` }}
        />
      </section>

      {/* Our Mission */}
      <section id="mission" className="bg-slate-50 dark:bg-[#0a0f0d] py-20 border-y border-slate-100 dark:border-slate-900 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            Our Mission
          </span>
          <blockquote className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
            &ldquo;To become a leading provider of industrial storage and shelving, expertly designed and engineered to enable businesses to increase capacity, productivity, and efficiency.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3 max-w-lg mx-auto">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            What Sets Us Apart
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Why Businesses Choose Ebbatech
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="bg-slate-50 dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 p-8 rounded-3xl shadow-sm space-y-4"
            >
              <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-100 dark:border-slate-800">
                <item.icon className="w-5 h-5 text-[#F27052]" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center space-y-6 max-w-3xl mx-auto px-6">
        <div className="pt-2">
          <Link
            href="/contact"
            className="bg-[#F27052] hover:bg-[#ff8a6f] text-white text-xs font-bold px-8 py-3.5 rounded-xl transition-all shadow-md"
          >
            Talk to our team
          </Link>
        </div>
      </section>
    </div>
  );
}
