import type { Metadata } from "next";
import Link from "next/link";
import { Handshake, ArrowRight } from "lucide-react";
import ClientLogoWall from "@/components/client-logo-wall";
import { sectorsServed } from "@/lib/data/clients";

export const metadata: Metadata = {
  title: "Our Clients | Ebbatech Nigeria Limited",
  description: "Ebbatech works with banks, government agencies, data centres, oil and gas firms and multinationals across Nigeria.",
};

export default function ClientsPage() {
  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-[#0f241d] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-4 text-center">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            Our Clients
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Our Clients
          </h1>
          <p className="text-xs text-slate-404 font-light max-w-xl mx-auto leading-relaxed">
            Trusted by Nigeria&apos;s leading brands and pioneering SMEs.
          </p>
        </div>
      </section>

      {/* Body + Client Logo Wall */}
      <section className="py-20 max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
            Every year we help scores of companies to become more efficient and more productive.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
            We provide storage products that provide long-term solutions to clients in every type of business, and they are delighted with the result.
          </p>
        </div>

        <ClientLogoWall />
      </section>

      {/* Sectors We Serve */}
      <section className="py-16 bg-slate-50 dark:bg-[#0a0f0d] border-y border-slate-100 dark:border-slate-900">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            Sectors We Serve
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {sectorsServed.map((sector) => (
              <span
                key={sector}
                className="bg-white dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 text-slate-655 dark:text-slate-350 text-xs font-semibold px-4 py-2 rounded-full"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
          <Handshake className="w-8 h-8 text-[#F27052] mx-auto" />
          <div className="pt-2">
            <Link
              href="/contact"
              className="bg-[#1B4D3E] hover:bg-[#276a55] text-white text-xs font-bold px-6 py-3.5 rounded-xl transition-all shadow-sm inline-flex items-center gap-1.5"
            >
              Join them &mdash; start a conversation <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
