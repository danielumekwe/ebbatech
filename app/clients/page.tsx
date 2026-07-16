import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Handshake, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Clients | Ebbatech Nigeria Limited",
  description: "Ebbatech delivers space optimization audits, heavy-duty shelving, and mobile archives vault registries for Tier-1 banks, oil corporations, and ministries.",
};

export default function ClientsPage() {
  const clientLogos = [
    "/images/clients/extracted_img_15_1_Im224.png",
    "/images/clients/extracted_img_15_2_Im226.png",
    "/images/clients/extracted_img_15_3_Im229.png",
    "/images/clients/extracted_img_15_4_Im228.png",
    "/images/clients/extracted_img_15_5_Im231.png",
    "/images/clients/extracted_img_15_6_Im234.png",
    "/images/clients/extracted_img_15_7_Im233.png",
    "/images/clients/extracted_img_15_8_Im237.png",
    "/images/clients/extracted_img_15_9_Im236.png",
    "/images/clients/extracted_img_15_10_Im240.png",
    "/images/clients/extracted_img_15_11_Im239.png"
  ];

  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 to-[#0f241d] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-4 text-center">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            Our B2B Partners
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Trusted by Leaders in Nigeria
          </h1>
          <p className="text-xs text-slate-404 font-light max-w-xl mx-auto leading-relaxed">
            Ebbatech delivers space optimization audits, heavy-duty shelving, and mobile archives vault registries for Tier-1 banks, oil corporations, and ministries.
          </p>
        </div>
      </section>

      {/* Clients Logo Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-3">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            Client Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Organizations We Support
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-light max-w-md mx-auto leading-relaxed">
            We work with leading organizations across Nigeria to expand storage volumes and guarantee structural safety guidelines.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center items-center">
          {clientLogos.map((logo, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-2xl p-6 h-32 flex items-center justify-center hover:border-[#1B4D3E] transition-all group shadow-sm"
            >
              <Image
                src={logo}
                alt={`Client partner logo ${idx + 1}`}
                width={160}
                height={80}
                className="max-h-full max-w-full w-auto h-auto object-contain filter grayscale dark:invert dark:opacity-80 group-hover:grayscale-0 dark:group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Compliance CTA Banner */}
      <section className="py-12 bg-slate-50 dark:bg-[#0a0f0d] border-t border-b border-slate-100 dark:border-slate-900">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
          <Handshake className="w-8 h-8 text-[#F27052] mx-auto" />
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
            Join Nigeria&apos;s Most Productive Enterprises
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-md mx-auto">
            Schedule a workspace capacity audit with Ebbatech structural riggers to optimize your filing vaults or warehouse bays.
          </p>
          <div className="pt-2">
            <Link
              href="/quote"
              className="bg-[#1B4D3E] hover:bg-[#276a55] text-white text-xs font-bold px-6 py-3.5 rounded-xl transition-all shadow-sm inline-flex items-center gap-1.5"
            >
              Request Custom Proposal <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
