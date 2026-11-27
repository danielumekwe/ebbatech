import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroSlider from "@/components/hero-slider";
import ClientLogoMarquee from "@/components/client-logo-marquee";
import CtaBanner from "@/components/cta-banner";
import { productCategories } from "@/lib/data/products";
import { services } from "@/lib/data/services";
import home from "@/content/home.json";
import { iconFor } from "@/lib/icons";

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen">
      {/* 1. HERO SLIDER */}
      <HeroSlider />

      {/* 2. VALUE PROPOSITION STRIP */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {home.valueProps.map((item, idx) => {
            const Icon = iconFor(item.icon);
            return (
              <div
                key={item.title}
                data-reveal
                data-reveal-delay={idx * 100}
                className="bg-slate-50 dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-3xl p-8 space-y-4"
              >
                <div className="w-12 h-12 bg-white dark:bg-[#080d0a] border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-center">
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

      {/* 3. WELCOME NOTE */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Column 1: Summary */}
          <div data-reveal className="lg:col-span-6 space-y-6">
            <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
              {home.welcome.eyebrow}
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {home.welcome.title}
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              {home.welcome.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link
              href="/about"
              className="text-xs font-bold text-[#1B4D3E] dark:text-[#ff8a6f] hover:underline inline-flex items-center gap-1.5"
            >
              {home.welcome.linkLabel} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Column 2: Image */}
          <div
            data-reveal
            data-reveal-delay={120}
            className="lg:col-span-6 h-80 sm:h-96 rounded-3xl bg-cover bg-center border border-slate-200 dark:border-slate-800 shadow-sm"
            style={{ backgroundImage: `url('${home.welcome.image}')` }}
          />
        </div>
      </section>

      {/* 4. OUR SOLUTIONS */}
      <section className="bg-slate-50 dark:bg-[#0a0f0d] py-20 border-y border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div data-reveal className="mb-12 max-w-2xl">
            <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block mb-2">
              {home.solutions.eyebrow}
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
              {home.solutions.title}
            </h2>
            <p className="text-sm text-slate-555 dark:text-slate-400 font-light leading-relaxed">
              {home.solutions.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((cat, idx) => (
              <div
                key={cat.slug}
                data-reveal
                data-reveal-delay={(idx % 4) * 100}
                className="bg-white dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group hover:border-[#1B4D3E] dark:hover:border-[#276a55] transition-all duration-300"
              >
                <div>
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url('${cat.image}')` }}
                  />
                  <div className="p-6">
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-white mb-2 group-hover:text-[#1B4D3E] dark:group-hover:text-[#ff8a6f] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-550 dark:text-slate-455 leading-relaxed font-light">
                      {cat.previewDescription}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={`/products#${cat.slug}`}
                    className="text-xs font-bold text-[#F27052] hover:underline inline-flex items-center gap-1"
                  >
                    {home.solutions.cardLinkLabel} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="text-xs font-bold text-[#1B4D3E] dark:text-[#ff8a6f] hover:underline inline-flex items-center gap-1.5"
            >
              {home.solutions.allLinkLabel} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SERVICES PREVIEW */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div data-reveal className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            {home.servicesPreview.eyebrow}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {home.servicesPreview.title}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-350">
            {services.map((service, idx) => (
              <span key={service.id} className="flex items-center gap-3">
                {service.name}
                {idx < services.length - 1 && (
                  <span className="text-[#F27052]">&middot;</span>
                )}
              </span>
            ))}
          </div>
          <div className="pt-2">
            <Link
              href="/services"
              className="text-xs font-bold text-[#1B4D3E] dark:text-[#ff8a6f] hover:underline inline-flex items-center gap-1.5"
            >
              {home.servicesPreview.linkLabel} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CLIENTS BAND */}
      <section className="bg-slate-50 dark:bg-[#0a0f0d] py-20 border-y border-slate-100 dark:border-slate-900 overflow-hidden">
        <div data-reveal className="max-w-2xl mx-auto px-6 text-center space-y-4 mb-12">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            {home.clientsBand.eyebrow}
          </span>
          <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            {home.clientsBand.text}
          </p>
        </div>

        <ClientLogoMarquee />
      </section>

      {/* 7. CLOSING CTA */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <CtaBanner {...home.cta} />
      </section>
    </div>
  );
}
