import Link from "next/link";
import { Compass, Layers, TrendingUp, ArrowRight } from "lucide-react";
import HeroSlider from "@/components/hero-slider";
import ClientLogoMarquee from "@/components/client-logo-marquee";
import { productCategories } from "@/lib/data/products";
import { services } from "@/lib/data/services";

const valueProps = [
  {
    icon: Compass,
    title: "Design & Engineering",
    desc: "Storage systems expertly designed around your facility, not off a generic shelf."
  },
  {
    icon: Layers,
    title: "End-to-End Delivery",
    desc: "From initial planning through to installation, service and on-going support."
  },
  {
    icon: TrendingUp,
    title: "Proven at Scale",
    desc: "Trusted by Nigeria's leading brands and its most ambitious SMEs."
  }
];

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen">
      {/* 1. HERO SLIDER */}
      <HeroSlider />

      {/* 2. VALUE PROPOSITION STRIP */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((item, idx) => (
            <div
              key={item.title}
              data-reveal
              data-reveal-delay={idx * 100}
              className="bg-slate-50 dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-3xl p-8 space-y-4"
            >
              <div className="w-12 h-12 bg-white dark:bg-[#080d0a] border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-center">
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

      {/* 3. WELCOME NOTE */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Column 1: Summary */}
          <div data-reveal className="lg:col-span-6 space-y-6">
            <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
              Welcome to Ebbatech
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Who We Are
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              <p>
                Ebbatech Nigeria Limited is one of the leading companies in the storage systems market, providing industrial storage and shelving that is expertly designed and engineered to enable businesses to increase capacity, productivity and efficiency.
              </p>
              <p>
                We specialise in the design, manufacturing, sales and servicing of metal racking, mobile archive systems and other storage solutions &mdash; making us a genuine one-stop shop for storage.
              </p>
              <p>
                We have helped some of Nigeria&apos;s leading brands and pioneering SMEs, providing them with access to global expertise and support, from initial planning through to installation and on-going service and support.
              </p>
            </div>
            <Link
              href="/about"
              className="text-xs font-bold text-[#1B4D3E] dark:text-[#ff8a6f] hover:underline inline-flex items-center gap-1.5"
            >
              More about us <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Column 2: Image */}
          <div
            data-reveal
            data-reveal-delay={120}
            className="lg:col-span-6 h-80 sm:h-96 rounded-3xl bg-cover bg-center border border-slate-200 dark:border-slate-800 shadow-sm"
            style={{ backgroundImage: `url('/images/hero_warehouse.png')` }}
          />
        </div>
      </section>

      {/* 4. OUR SOLUTIONS */}
      <section className="bg-slate-50 dark:bg-[#0a0f0d] py-20 border-y border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div data-reveal className="mb-12 max-w-2xl">
            <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block mb-2">
              Ebbatech Range
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
              Our Solutions
            </h2>
            <p className="text-sm text-slate-555 dark:text-slate-400 font-light leading-relaxed">
              From heavy duty warehouse racking to high-density mobile shelving, our systems are engineered around your facility &mdash; not off a generic shelf.
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
                    View Specifications &rarr;
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
              View all products <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SERVICES PREVIEW */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div data-reveal className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            How We Work
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
            We Don&apos;t Just Sell Racking
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
              See how we work <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CLIENTS BAND */}
      <section className="bg-slate-50 dark:bg-[#0a0f0d] py-20 border-y border-slate-100 dark:border-slate-900 overflow-hidden">
        <div data-reveal className="max-w-2xl mx-auto px-6 text-center space-y-4 mb-12">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            Trusted Across Nigeria
          </span>
          <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            Every year we help scores of companies become more efficient and more productive.
          </p>
        </div>

        <ClientLogoMarquee />
      </section>

      {/* 7. CLOSING CTA */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div data-reveal className="bg-[#1B4D3E] text-white rounded-3xl p-10 md:p-14 text-center space-y-5 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to reclaim your space?
          </h2>
          <p className="text-sm text-slate-300 font-light max-w-lg mx-auto leading-relaxed">
            Tell us about your warehouse, office or archive and we&apos;ll come back with a solution and a quotation.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="bg-[#F27052] hover:bg-[#ff8a6f] text-white text-sm font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg inline-flex items-center gap-1.5"
            >
              Contact Us Today <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
