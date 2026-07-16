"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

const images = [
  {
    src: "/images/hero_warehouse.png",
    category: "racking",
    title: "High-Density Pallet Racking",
    desc: "Adjustable heavy-duty pallet load beams with forklift lanes."
  },
  {
    src: "/images/mobile_shelving.png",
    category: "mobile",
    title: "Mobile Archive Compactor",
    desc: "Manual mechanical compactors in a client filing facility."
  },
  {
    src: "/images/pallet_racking.png",
    category: "racking",
    title: "Heavy-Duty Pallet Racking",
    desc: "SEMA-compliant vertical steel frames and orange load beams."
  },
  {
    src: "/images/shelving_system.png",
    category: "shelving",
    title: "Longspan Steel Shelving",
    desc: "Medium-duty storage configuration optimized for stockrooms."
  },
  {
    src: "/images/pallet_shuttle.png",
    category: "racking",
    title: "Automated Radio Pallet Shuttle",
    desc: "Automated space-saving cart riding on structural steel rails."
  },
  {
    src: "/images/research_collaboration.png",
    category: "design",
    title: "Safety Plumb and CAD Audit",
    desc: "Rigging engineers analyzing spatial warehouse dimensions."
  }
];

export default function GalleryGrid() {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
    <>
      {/* Gallery Filter Tabs */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 text-xs font-bold uppercase">
          {[
            { id: "all", label: "All Photos" },
            { id: "racking", label: "Racking Systems" },
            { id: "mobile", label: "Mobile Archive" },
            { id: "shelving", label: "Shelving Systems" },
            { id: "design", label: "CAD Planning & Safety" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-6 py-2.5 rounded-full border transition-all cursor-pointer ${
                filter === tab.id
                  ? "bg-[#1B4D3E] text-white border-[#1B4D3E]"
                  : "bg-transparent border-slate-200 dark:border-slate-800 text-slate-550 hover:border-slate-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(img.src)}
              className="group bg-slate-50 dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm cursor-pointer hover:border-[#1B4D3E] transition-all duration-300"
            >
              <div
                className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                style={{ backgroundImage: `url('${img.src}')` }}
              />
              <div className="p-6">
                <span className="text-[9px] font-bold text-[#F27052] uppercase tracking-wider block mb-1">
                  {img.category}
                </span>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  {img.title}
                </h3>
                <p className="text-xs text-slate-555 dark:text-slate-450 leading-relaxed font-light mt-1.5">
                  {img.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6 animate-in fade-in duration-200">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-[#F27052] transition-colors bg-white/10 p-2 rounded-full cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="max-w-5xl max-h-[85vh] w-full h-full bg-contain bg-center bg-no-repeat rounded-2xl"
            style={{ backgroundImage: `url('${selectedImage}')` }}
          />
        </div>
      )}
    </>
  );
}
