import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Compass, Award } from "lucide-react";
import ContactForm from "@/components/contact-form";
import HeroSlider from "@/components/hero-slider";

const welcomeHighlights = [
  {
    icon: ShieldCheck,
    title: "SEMA Compliant",
    desc: "Every frame and beam engineered to SEMA codes of practice and British Standards."
  },
  {
    icon: Compass,
    title: "Nationwide Installation",
    desc: "In-house rigging teams handle freight, laser leveling, and floor anchoring across Nigeria."
  },
  {
    icon: Award,
    title: "10-Year Warranty",
    desc: "Structural warranty on all steel frames, columns, and load beams we install."
  }
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "85%", label: "Average Space Saved" },
  { value: "10+ Yrs", label: "Structural Warranty" },
  { value: "100%", label: "SEMA Compliant" }
];

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

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen">
      {/* 1. HERO SLIDER */}
      <HeroSlider />

      {/* 2. WELCOME NOTE */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
              Welcome to Ebbatech
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Nigeria&apos;s Partner for Industrial Storage & Space Engineering
            </h2>
            <p className="text-xs text-slate-555 dark:text-slate-400 leading-relaxed font-light">
              Ebbatech Nigeria Limited engineers space, not just shelves. We design, supply, and install SEMA-compliant pallet racking, mobile archive compactors, and industrial shelving for warehouses, banks, and registries across the country &mdash; backed by laser site surveys, CAD layout planning, and in-house rigging teams that anchor every system to international safety standards.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="text-xs font-bold text-[#1B4D3E] dark:text-[#ff8a6f] hover:underline inline-flex items-center gap-1.5"
              >
                Learn Our Story &rarr;
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {welcomeHighlights.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-slate-50 dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-2xl p-5"
              >
                <div className="w-10 h-10 flex-shrink-0 bg-white dark:bg-[#080d0a] border border-slate-100 dark:border-slate-800 rounded-xl flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[#F27052]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-550 dark:text-slate-400 font-light leading-relaxed mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR PRODUCTS SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="mb-12 border-l-4 border-[#F27052] pl-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
            Ebbatech Range
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Our Products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pallet Racking */}
          <div className="bg-white dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group hover:border-[#1B4D3E] dark:hover:border-[#276a55] transition-all duration-300">
            <div>
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('/images/pallet_racking.png')` }}
              />
              <div className="p-6">
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white mb-2 group-hover:text-[#1B4D3E] dark:group-hover:text-[#ff8a6f] transition-colors">
                  Pallet Racking Systems
                </h3>
                <p className="text-xs text-slate-550 dark:text-slate-455 leading-relaxed font-light">
                  Heavy-duty steel warehouse pallet storage racks, adjustable and engineered for intense warehouse turnover.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2">
              <Link
                href="/products/warehouse-racking/pallet-racking"
                className="text-xs font-bold text-[#F27052] hover:underline inline-flex items-center gap-1"
              >
                View Specifications &rarr;
              </Link>
            </div>
          </div>

          {/* Mobile Archive Compactor */}
          <div className="bg-white dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group hover:border-[#1B4D3E] dark:hover:border-[#276a55] transition-all duration-300">
            <div>
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('/images/mobile_shelving.png')` }}
              />
              <div className="p-6">
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white mb-2 group-hover:text-[#1B4D3E] dark:group-hover:text-[#ff8a6f] transition-colors">
                  Mobile Archive Shelving
                </h3>
                <p className="text-xs text-slate-555 dark:text-slate-455 leading-relaxed font-light">
                  High-density rolling compactors saving up to 85% of office floor space, ideal for financial files and registries.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2">
              <Link
                href="/products/mobile-shelving/mobile-archive-shelving"
                className="text-xs font-bold text-[#F27052] hover:underline inline-flex items-center gap-1"
              >
                View Specifications &rarr;
              </Link>
            </div>
          </div>

          {/* Longspan Shelving */}
          <div className="bg-white dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group hover:border-[#1B4D3E] dark:hover:border-[#276a55] transition-all duration-300">
            <div>
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('/images/shelving_system.png')` }}
              />
              <div className="p-6">
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white mb-2 group-hover:text-[#1B4D3E] dark:group-hover:text-[#ff8a6f] transition-colors">
                  Longspan Shelving Systems
                </h3>
                <p className="text-xs text-slate-555 dark:text-slate-455 leading-relaxed font-light">
                  Versatile medium-duty shelving designed for manual load picking in retail, e-commerce, and stockrooms.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2">
              <Link
                href="/products/shelving-systems/long-span-shelving"
                className="text-xs font-bold text-[#F27052] hover:underline inline-flex items-center gap-1"
              >
                View Specifications &rarr;
              </Link>
            </div>
          </div>

          {/* Pallet Shuttle */}
          <div className="bg-white dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group hover:border-[#1B4D3E] dark:hover:border-[#276a55] transition-all duration-300">
            <div>
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('/images/pallet_shuttle.png')` }}
              />
              <div className="p-6">
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white mb-2 group-hover:text-[#1B4D3E] dark:group-hover:text-[#ff8a6f] transition-colors">
                  Radio Pallet Shuttle
                </h3>
                <p className="text-xs text-slate-555 dark:text-slate-455 leading-relaxed font-light">
                  Semiautomated high-density compact storage shuttle carts carrying pallets on structural steel rails.
                </p>
              </div>
            </div>
            <div className="px-6 pb-6 pt-2">
              <Link
                href="/products/warehouse-racking/pallet-shuttle-system"
                className="text-xs font-bold text-[#F27052] hover:underline inline-flex items-center gap-1"
              >
                View Specifications &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COLLABORATION SECTION */}
      <section className="bg-slate-50 dark:bg-[#0a0f0d] py-16 border-y border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
              Ebbatech Design & Engineering
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Ebbatech CAD & Safety Collaboration
            </h2>
            <p className="text-xs text-slate-555 dark:text-slate-400 leading-relaxed font-light">
              We work in partnership with facility managers across Nigeria. From initial structural SEMA safety load calculations to professional spatial CAD layouts, we ensure your warehouse storage configuration complies with international tolerances.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="bg-[#1B4D3E] hover:bg-[#276a55] text-white text-xs font-bold px-6 py-3 rounded-xl transition-all shadow-md"
              >
                Schedule CAD Consultation
              </Link>
            </div>
          </div>
          <div
            className="lg:col-span-6 h-80 rounded-3xl bg-cover bg-center border border-slate-200 dark:border-slate-800 shadow-sm"
            style={{ backgroundImage: `url('/images/research_collaboration.png')` }}
          />
        </div>
      </section>

      {/* 5. STATISTICS */}
      <section className="py-16 bg-white dark:bg-[#080d0a] max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-2">
              <span className="text-4xl md:text-5xl font-extrabold text-[#1B4D3E] dark:text-[#ff8a6f]">
                {stat.value}
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-450">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. INFINITE LOGO MARQUEE CAROUSEL */}
      <section className="bg-slate-50 dark:bg-[#0a0f0d] py-12 border-t border-slate-100 dark:border-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[10px] font-bold text-slate-450 uppercase tracking-widest block mb-8">
            Trusted by Leaders in Nigeria
          </span>
          <div className="relative w-full overflow-hidden flex items-center justify-center">
            {/* Left and Right Fade Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 to-transparent dark:from-[#0a0f0d] z-10 hidden sm:block" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 to-transparent dark:from-[#0a0f0d] z-10 hidden sm:block" />

            <div className="animate-infinite-scroll">
              {clientLogos.map((logo, idx) => (
                <div key={idx} className="h-12 w-28 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={logo}
                    alt={`Client logo ${idx + 1}`}
                    width={112}
                    height={48}
                    className="max-h-full max-w-full w-auto h-auto object-contain filter grayscale dark:invert dark:opacity-85 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
              {/* Duplicate track to complete scrolling loop */}
              {clientLogos.map((logo, idx) => (
                <div key={`dup-${idx}`} className="h-12 w-28 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={logo}
                    alt={`Client logo dup ${idx + 1}`}
                    width={112}
                    height={48}
                    className="max-h-full max-w-full w-auto h-auto object-contain filter grayscale dark:invert dark:opacity-85 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT FORM & LOCATOR */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Side: Address Details */}
        <div className="lg:col-span-5 bg-slate-50 dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-3xl p-8 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
              Office Location
            </h3>
            <div className="space-y-4 text-xs text-slate-555 dark:text-slate-400 leading-relaxed font-light">
              <p>
                <strong>Headquarters:</strong> <br />
                22 Alhaja Kofoworola Crescent, <br />
                Off Awolowo Way, Ikeja, Lagos.
              </p>
              <p>
                <strong>Email:</strong> hello@ebbatech.com.ng
              </p>
              <p>
                <strong>Hotlines:</strong> <br />
                +234 803 448 4931 <br />
                +234 905 559 7922
              </p>
            </div>
          </div>

          <div className="bg-[#1B4D3E]/10 p-5 rounded-2xl border border-[#1B4D3E]/20 text-xs mt-8">
            <h4 className="font-bold text-[#1B4D3E] dark:text-[#ff8a6f] mb-1">
              Laser site audits
            </h4>
            <p className="text-slate-555 dark:text-slate-400 font-light leading-normal">
              We dispatch professional engineers equipped with 3D scanning equipment for structural calculations.
            </p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-7 bg-[#1B4D3E] text-white rounded-3xl p-8 md:p-10 shadow-lg">
          <h3 className="text-xl font-extrabold text-white mb-2">
            Send an Enquiry
          </h3>
          <p className="text-xs text-slate-300 font-light mb-6">
            Submit your space planning requirements and obtain a response within 24 hours.
          </p>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
