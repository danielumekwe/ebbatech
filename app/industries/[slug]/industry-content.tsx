"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Check, AlertTriangle, Lightbulb } from "lucide-react";
import { industries } from "@/lib/data/industries";

interface IndustryContentProps {
  slug: string;
}

export default function IndustryDetailContent({ slug }: IndustryContentProps) {
  const ind = industries.find((i) => i.slug === slug);

  if (!ind) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">Industry Sector Not Found</h2>
        <Link href="/industries" className="text-sm font-bold text-[#F27052] hover:underline">
          &larr; Back to Sectors
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        
        {/* Back Link */}
        <Link 
          href="/industries" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B4D3E] dark:text-[#ff8a6f] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Sectors
        </Link>

        {/* Header Block */}
        <div className="space-y-3">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            Sector Application
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-955 dark:text-white leading-tight">
            {ind.name}
          </h1>
          <p className="text-base text-[#1B4D3E] dark:text-[#ff8a6f] font-semibold">
            {ind.headline}
          </p>
        </div>

        {/* Overview Paragraph */}
        <div className="text-xs text-slate-555 dark:text-slate-400 font-light leading-relaxed border-t border-slate-100 dark:border-slate-855 pt-6">
          <p>{ind.overview}</p>
        </div>

        {/* Challenges & Solutions Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {/* Challenges */}
          <div className="bg-red-50/50 dark:bg-red-950/5 border border-red-100 dark:border-red-900/30 p-8 rounded-3xl space-y-4">
            <h3 className="font-extrabold text-sm text-red-900 dark:text-red-400 flex items-center gap-2">
              <AlertTriangle className="w-4.5 h-4.5" /> Industry Challenges
            </h3>
            <ul className="space-y-3 text-xs leading-relaxed font-light text-slate-650 dark:text-slate-450">
              {ind.challenges.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-emerald-50/50 dark:bg-emerald-950/5 border border-emerald-100 dark:border-emerald-900/30 p-8 rounded-3xl space-y-4">
            <h3 className="font-extrabold text-sm text-emerald-900 dark:text-emerald-400 flex items-center gap-2">
              <Lightbulb className="w-4.5 h-4.5" /> Ebbatech Solutions
            </h3>
            <ul className="space-y-3 text-xs leading-relaxed font-light text-slate-650 dark:text-slate-455">
              {ind.solutions.map((s, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-1.5" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Benefits Grid */}
        <div className="space-y-6 pt-6">
          <h3 className="text-lg font-extrabold text-slate-900 dark:text-white border-l-4 border-[#F27052] pl-3">
            Expected B2B Benefits
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ind.benefits.map((b, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 p-5 rounded-2xl flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded bg-[#1B4D3E]/10 text-[#1B4D3E] dark:text-[#ff8a6f] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs text-slate-555 dark:text-slate-400 leading-normal font-light">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#1B4D3E] text-white rounded-3xl p-8 md:p-10 text-center space-y-4 shadow-md">
          <h3 className="text-xl font-extrabold text-white">
            Need a Custom Proposal for {ind.name}?
          </h3>
          <p className="text-xs text-slate-350 font-light max-w-md mx-auto leading-relaxed">
            Ebbatech engineers will prepare B2B space optimization calculations and site survey dates based on your requirements.
          </p>
          <div className="pt-2">
            <Link
              href={`/quote?sector=${ind.slug}`}
              className="bg-[#F27052] hover:bg-[#ff8a6f] text-white text-xs font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg"
            >
              Get Custom Proposition &rarr;
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}