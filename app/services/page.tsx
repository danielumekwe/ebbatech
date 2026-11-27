import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { services } from "@/lib/data/services";
import { pageMetadata } from "@/lib/seo";
import page from "@/content/pages/services.json";

export const metadata: Metadata = pageMetadata("services");

export default function ServicesPage() {
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
          <p className="text-xs text-slate-405 font-light max-w-xl mx-auto leading-relaxed">
            {page.header.subtitle}
          </p>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-6 space-y-16">
        {services.map((service, idx) => (
          <div
            key={service.id}
            id={service.slug}
            data-reveal
            className="space-y-6 scroll-mt-24 pb-16 border-b border-slate-100 dark:border-slate-855 last:border-b-0 last:pb-0"
          >
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
              0{idx + 1}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-955 dark:text-white leading-tight">
              {service.name}
            </h2>

            <div className="space-y-4 text-xs text-slate-555 dark:text-slate-400 leading-relaxed font-light">
              {service.body.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {service.images.map((image, iIdx) => (
                <div
                  key={image}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-150 dark:border-slate-800"
                >
                  <Image
                    src={image}
                    alt={`${service.name} ${iIdx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {service.bullets && (
              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                  {page.bulletsHeading}
                </h3>
                {service.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-xs font-light text-slate-655 dark:text-slate-400">
                    <div className="w-5 h-5 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] dark:text-[#ff8a6f] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-2">
              <Link
                href={`/contact?type=${encodeURIComponent(service.enquiryType)}`}
                className="bg-[#1B4D3E] hover:bg-[#276a55] text-white text-xs font-bold px-8 py-3.5 rounded-xl transition-all shadow-sm inline-flex items-center gap-1.5"
              >
                {service.ctaLabel} &rarr;
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
