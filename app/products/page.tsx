import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productCategories } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Warehouse Racking, Shelving & Mobile Storage | Ebbatech Nigeria",
  description: "Pallet racking, long span shelving, mobile archive shelving, lockers, work benches and storage solutions engineered for your business.",
};

export default function ProductsPage() {
  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-[#0f241d] text-white py-20 relative">
        <div data-reveal className="max-w-7xl mx-auto px-6 space-y-4 text-center">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            Our Products
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Our Products
          </h1>
          <p className="text-xs text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
            Storage, racking and shelving engineered around your business.
          </p>
        </div>
      </section>

      {/* Categories Banners List */}
      <section className="py-20 max-w-5xl mx-auto px-6 space-y-12">
        {productCategories.map((cat, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={cat.slug}
              id={cat.slug}
              data-reveal
              className={`scroll-mt-24 flex flex-col lg:flex-row items-stretch border border-slate-150 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm group hover:border-[#1B4D3E] dark:hover:border-[#276a55] transition-all duration-300 ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image Banner */}
              <div
                className="w-full lg:w-1/2 h-64 lg:h-auto min-h-[250px] bg-cover bg-center"
                style={{ backgroundImage: `url('${cat.image}')` }}
              />

              {/* Content Panel */}
              <div className="w-full lg:w-1/2 p-8 md:p-10 flex flex-col justify-between space-y-6 bg-slate-50/50 dark:bg-[#0c1410]">
                <div className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-extrabold text-slate-955 dark:text-white group-hover:text-[#1B4D3E] dark:group-hover:text-[#ff8a6f] transition-colors">
                    {cat.name}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-455 leading-relaxed font-light">
                    {cat.description}
                  </p>

                  {cat.items && (
                    <ul className="space-y-2 pt-2">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-[11px] text-slate-655 dark:text-slate-400 font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F27052] flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {cat.bestFor && (
                    <div className="pt-2 space-y-2">
                      <span className="text-[10px] font-extrabold text-slate-900 dark:text-white uppercase tracking-wider block">
                        Best for
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {cat.bestFor.map((sector) => (
                          <span
                            key={sector}
                            className="bg-white dark:bg-[#080d0a] border border-slate-200 dark:border-slate-800 text-slate-655 dark:text-slate-350 text-[10px] font-semibold px-3 py-1 rounded-md"
                          >
                            {sector}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Ebbatech Engineered
                  </span>
                  <Link
                    href={`/contact?type=${encodeURIComponent(cat.name)}`}
                    className="bg-[#1B4D3E] hover:bg-[#276a55] text-white text-xs font-bold px-6 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {cat.ctaLabel} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
