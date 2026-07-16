"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Warehouse, HardDrive, LayoutGrid } from "lucide-react";

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const rackingLinks = [
    { label: "Adjustable Pallet Racking", href: "/products/warehouse-racking/pallet-racking" },
    { label: "Radio Pallet Shuttle System", href: "/products/warehouse-racking/pallet-shuttle-system" }
  ];

  const archiveLinks = [
    { label: "Mobile Archive compactors", href: "/products/mobile-shelving/mobile-archive-shelving" }
  ];

  const shelvingLinks = [
    { label: "Longspan Steel Shelving", href: "/products/shelving-systems/long-span-shelving" }
  ];

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
        OUR PRODUCTS <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] bg-white dark:bg-[#0c1410] border border-slate-200 dark:border-slate-800 shadow-2xl rounded-3xl p-8 grid grid-cols-3 gap-8 z-50 animate-in fade-in slide-in-from-top-2 duration-150 text-xs">
          {/* Column 1: Racking */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-sm text-[#1B4D3E] dark:text-[#ff8a6f] flex items-center gap-2">
              <Warehouse className="w-4 h-4" /> Racking
            </h4>
            <div className="flex flex-col gap-2.5 font-semibold text-slate-550 dark:text-slate-350">
              {rackingLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#F27052] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Archive compactors */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-sm text-[#1B4D3E] dark:text-[#ff8a6f] flex items-center gap-2">
              <HardDrive className="w-4 h-4" /> Archiving
            </h4>
            <div className="flex flex-col gap-2.5 font-semibold text-slate-555 dark:text-slate-355">
              {archiveLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#F27052] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Shelving Systems */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-sm text-[#1B4D3E] dark:text-[#ff8a6f] flex items-center gap-2">
              <LayoutGrid className="w-4 h-4" /> Shelving
            </h4>
            <div className="flex flex-col gap-2.5 font-semibold text-slate-555 dark:text-slate-355">
              {shelvingLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#F27052] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}