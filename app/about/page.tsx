import type { Metadata } from "next";
import CtaBanner from "@/components/cta-banner";
import { pageMetadata } from "@/lib/seo";
import page from "@/content/pages/about.json";
import { iconFor } from "@/lib/icons";

export const metadata: Metadata = pageMetadata("about");

export default function AboutPage() {
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
          <p className="text-xs text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
            {page.header.subtitle}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div data-reveal className="lg:col-span-6 space-y-6">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            {page.story.eyebrow}
          </span>
          <div className="space-y-4 text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-light">
            {page.story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div
          data-reveal
          data-reveal-delay={120}
          className="lg:col-span-6 h-96 rounded-3xl bg-cover bg-center border border-slate-200 dark:border-slate-800 shadow-sm"
          style={{ backgroundImage: `url('${page.story.image}')` }}
        />
      </section>

      {/* Our Mission */}
      <section id="mission" className="bg-slate-50 dark:bg-[#0a0f0d] py-20 border-y border-slate-100 dark:border-slate-900 scroll-mt-24">
        <div data-reveal className="max-w-3xl mx-auto px-6 text-center space-y-4">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            {page.mission.eyebrow}
          </span>
          <blockquote className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
            &ldquo;{page.mission.quote}&rdquo;
          </blockquote>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 max-w-7xl mx-auto px-6 space-y-12">
        <div data-reveal className="text-center space-y-3 max-w-lg mx-auto">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            {page.differentiators.eyebrow}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {page.differentiators.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {page.differentiators.items.map((item, idx) => {
            const Icon = iconFor(item.icon);
            return (
              <div
                key={item.title}
                data-reveal
                data-reveal-delay={(idx % 4) * 100}
                className="bg-slate-50 dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 p-8 rounded-3xl shadow-sm space-y-4"
              >
                <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-100 dark:border-slate-800">
                  <Icon className="w-5 h-5 text-[#F27052]" />
                </div>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <CtaBanner {...page.cta} />
      </section>
    </div>
  );
}
