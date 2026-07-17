"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { productCategories } from "@/lib/data/products";

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center gap-1.5 hover:text-[#1B4D3E] dark:hover:text-[#ff8a6f] cursor-pointer transition-colors outline-none h-20 uppercase font-bold text-xs"
        aria-expanded={isOpen}
      >
        PRODUCTS <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] bg-white dark:bg-[#0c1410] border border-slate-200 dark:border-slate-800 shadow-2xl rounded-3xl p-8 grid grid-cols-2 gap-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150 text-xs">
          {productCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products#${cat.slug}`}
              onClick={() => setIsOpen(false)}
              className="space-y-1.5 group"
            >
              <h4 className="font-extrabold text-sm text-[#1B4D3E] dark:text-[#ff8a6f] group-hover:text-[#F27052] transition-colors">
                {cat.name}
              </h4>
              <p className="text-slate-550 dark:text-slate-350 font-light leading-relaxed">
                {cat.previewDescription}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
