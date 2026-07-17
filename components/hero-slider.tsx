"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { productCategories } from "@/lib/data/products";

interface Slide {
  image: string;
  badge: string;
  heading: React.ReactNode;
  description: string;
  cta: { label: string; href: string };
}

const slides: Slide[] = [
  {
    image: "/images/hero_warehouse.png",
    badge: "Storage, Racking & Shelving Solutions",
    heading: (
      <>
        Nigeria&apos;s One-Stop Shop <br />
        <span className="text-[#F27052]">for Storage Solutions</span>
      </>
    ),
    description: "Ebbatech is the leading storage, material handling and space-making company of choice — designing, manufacturing and installing industrial storage that helps your business do more with the space you already have.",
    cta: { label: "Get a Free Quote", href: "/contact" }
  },
  ...productCategories.map((cat) => ({
    image: cat.image,
    badge: cat.name,
    heading: <>{cat.name}</>,
    description: cat.description,
    cta: { label: cat.ctaLabel, href: `/contact?type=${encodeURIComponent(cat.name)}` }
  }))
];

const AUTOPLAY_MS = 7000;

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused]);

  const goTo = (idx: number) => setActive((idx + slides.length) % slides.length);

  return (
    <section
      className="relative h-[92vh] min-h-[620px] sm:min-h-[600px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, idx) => (
        <div
          key={idx}
          aria-hidden={idx !== active}
          className={`absolute inset-0 flex items-center bg-cover bg-center transition-opacity duration-700 ease-in-out ${
            idx === active ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/65" />

          <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10 text-white pb-16">
            <div className="max-w-4xl space-y-5 sm:space-y-7">
              <span className="inline-flex items-center gap-2 bg-[#F27052]/20 border border-[#F27052]/40 px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-bold text-[#ff8a6f] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                {slide.badge}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
                {slide.heading}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-200 font-light leading-relaxed max-w-2xl">
                {slide.description}
              </p>

              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href={slide.cta.href}
                  className="inline-block bg-[#F27052] hover:bg-[#ff8a6f] text-white text-sm sm:text-base font-bold px-8 sm:px-10 py-4 rounded-xl transition-all text-center shadow-lg shadow-black/20"
                >
                  {slide.cta.label}
                </Link>
                {idx === 0 && (
                  <Link
                    href="/products"
                    className="inline-block bg-transparent border border-white/30 hover:border-white hover:bg-white/10 text-white text-sm sm:text-base font-bold px-8 sm:px-10 py-4 rounded-xl transition-all text-center"
                  >
                    Explore Our Products
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Prev / Next Arrows */}
      <button
        onClick={() => goTo(active - 1)}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => goTo(active + 1)}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}: ${slide.badge}`}
            aria-current={idx === active}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              idx === active ? "w-8 bg-[#F27052]" : "w-1.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
