"use client";

import React, { useState } from "react";
import Link from "next/link";
import { products } from "@/lib/data/products";

export default function CompareContent() {
  const [prod1Slug, setProd1Slug] = useState(products[0]?.slug || "");
  const [prod2Slug, setProd2Slug] = useState(products[2]?.slug || products[0]?.slug || "");

  const prod1 = products.find((p) => p.slug === prod1Slug);
  const prod2 = products.find((p) => p.slug === prod2Slug);

  const specLabels = [
    "Load Capacity",
    "Frame Heights",
    "Beam Spans",
    "Upright Section Widths",
    "Finish"
  ];

  const getSpecValue = (prod: typeof products[0] | undefined, label: string) => {
    if (!prod) return "N/A";
    const spec = prod.specifications.find((s) => s.label.toLowerCase() === label.toLowerCase());
    return spec ? spec.value : "N/A";
  };

  return (
    <section className="py-20 max-w-5xl mx-auto px-6 space-y-12">
      {/* Dropdowns Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-slate-50 dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 p-8 rounded-3xl">
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-655 dark:text-slate-400 uppercase tracking-wider">Select Product A</label>
          <select
            value={prod1Slug}
            onChange={(e) => setProd1Slug(e.target.value)}
            className="w-full bg-white dark:bg-[#080d0a] border border-slate-200 dark:border-slate-700 px-4 py-3 rounded-xl text-slate-900 dark:text-white font-semibold text-xs outline-none focus:border-[#F27052]"
          >
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>{p.name}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-655 dark:text-slate-400 uppercase tracking-wider">Select Product B</label>
          <select
            value={prod2Slug}
            onChange={(e) => setProd2Slug(e.target.value)}
            className="w-full bg-white dark:bg-[#080d0a] border border-slate-200 dark:border-slate-700 px-4 py-3 rounded-xl text-slate-900 dark:text-white font-semibold text-xs outline-none focus:border-[#F27052]"
          >
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>{p.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Side-by-Side Comparison Table */}
      <div className="border border-slate-150 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm bg-white dark:bg-[#0c1410] text-xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-[#0c1410] border-b border-slate-200 dark:border-slate-800">
              <th className="p-6 font-extrabold text-slate-900 dark:text-white w-1/3">Technical Parameters</th>
              <th className="p-6 font-extrabold text-[#1B4D3E] dark:text-[#ff8a6f] w-1/3">{prod1?.name || "System A"}</th>
              <th className="p-6 font-extrabold text-[#1B4D3E] dark:text-[#ff8a6f] w-1/3">{prod2?.name || "System B"}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-155 dark:divide-slate-800 leading-relaxed font-light">

            {/* Category */}
            <tr>
              <td className="p-6 font-bold text-slate-600 dark:text-slate-400">Category</td>
              <td className="p-6">{prod1?.categoryLabel || "N/A"}</td>
              <td className="p-6">{prod2?.categoryLabel || "N/A"}</td>
            </tr>

            {/* Specs parameters */}
            {specLabels.map((label, idx) => (
              <tr key={idx}>
                <td className="p-6 font-bold text-slate-600 dark:text-slate-400">{label}</td>
                <td className="p-6">{getSpecValue(prod1, label)}</td>
                <td className="p-6">{getSpecValue(prod2, label)}</td>
              </tr>
            ))}

            {/* System Benefits */}
            <tr>
              <td className="p-6 font-bold text-slate-600 dark:text-slate-400">Key Benefit</td>
              <td className="p-6">{prod1?.benefits[0] || "N/A"}</td>
              <td className="p-6">{prod2?.benefits[0] || "N/A"}</td>
            </tr>

            {/* Core Application */}
            <tr>
              <td className="p-6 font-bold text-slate-600 dark:text-slate-400">Featured Application</td>
              <td className="p-6">{prod1?.applications[0] || "N/A"}</td>
              <td className="p-6">{prod2?.applications[0] || "N/A"}</td>
            </tr>

            {/* CTAs Row */}
            <tr className="bg-slate-50/50 dark:bg-[#0c1410]">
              <td className="p-6"></td>
              <td className="p-6">
                {prod1 && (
                  <Link
                    href={`/quote?product=${prod1.slug}`}
                    className="bg-[#1B4D3E] hover:bg-[#276a55] text-white text-[11px] font-bold px-4 py-2 rounded-xl inline-flex items-center gap-1 transition-colors"
                  >
                    Request Quote &rarr;
                  </Link>
                )}
              </td>
              <td className="p-6">
                {prod2 && (
                  <Link
                    href={`/quote?product=${prod2.slug}`}
                    className="bg-[#1B4D3E] hover:bg-[#276a55] text-white text-[11px] font-bold px-4 py-2 rounded-xl inline-flex items-center gap-1 transition-colors"
                  >
                    Request Quote &rarr;
                  </Link>
                )}
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </section>
  );
}
