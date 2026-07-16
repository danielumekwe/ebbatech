"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Are Ebbatech racking systems SEMA compliant?",
    a: "Yes. All our adjustable pallet racking systems, cantilever uprights, and automated pallet shuttles are engineered and installed in compliance with SEMA guidelines (Storage Equipment Manufacturers Association) and British Standards, ensuring safe load limits and configurations."
  },
  {
    q: "How much space can a mobile compactor shelving system save?",
    a: "A mobile archive compactor shelving system eliminates fixed access aisles, saving up to 85% of office floor space or doubling record storage capacities in registries, clinics, and banks."
  },
  {
    q: "Do you provide custom CAD blueprints and design audits?",
    a: "Yes. Ebbatech design engineers perform detailed site surveys using laser distance meters and generate customized 2D and 3D floor layout plans. This includes structural calculations and forklift clearances."
  },
  {
    q: "What is the typical weight limit of your longspan shelving?",
    a: "Our longspan shelving is designed for manual loading and carries between 300 kg and 800 kg per shelf level depending on the beam width and steel panel profiles selected."
  },
  {
    q: "Do your in-house teams install and anchor racks across Nigeria?",
    a: "Yes. We maintain professional rigging teams who handle freight shipping, laser plumb alignment, and baseplate anchoring to the concrete floor anywhere in Nigeria, including Lagos, Abuja, Port Harcourt, and Kano."
  },
  {
    q: "What warranty do you offer on industrial storage racks?",
    a: "We offer a 10-year structural warranty on all steel frames, vertical columns, and load beams under standard operating procedures and warehouse loading constraints."
  }
];

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 max-w-3xl mx-auto px-6 space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className="bg-slate-50 dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-3xl overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full text-left p-6 flex items-center justify-between font-extrabold text-xs sm:text-sm text-slate-950 dark:text-white outline-none cursor-pointer"
            >
              <span className="pr-4">{faq.q}</span>
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white dark:bg-[#080d0a] border border-slate-100 dark:border-slate-800 flex items-center justify-center text-[#F27052]">
                {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-0 border-t border-slate-100 dark:border-slate-850 text-xs text-slate-550 dark:text-slate-400 font-light leading-relaxed animate-in fade-in slide-in-from-top-1 duration-150">
                <p className="pt-4">{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
