"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Check, Info } from "lucide-react";
import { products } from "@/lib/data/products";

interface ProductContentProps {
  slug: string;
}

export default function ProductDetailContent({ slug }: ProductContentProps) {
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">Product System Not Found</h2>
        <Link href="/products" className="text-sm font-bold text-[#F27052] hover:underline">
          &larr; Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        
        {/* Back Link */}
        <Link 
          href="/products" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B4D3E] dark:text-[#ff8a6f] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Catalog
        </Link>

        {/* Product Heading */}
        <div className="space-y-3">
          <span className="inline-block bg-[#1B4D3E]/10 text-[#1B4D3E] dark:text-[#ff8a6f] text-[9px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
            {product.categoryLabel}
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-955 dark:text-white leading-tight">
            {product.name}
          </h1>
          <p className="text-sm text-slate-555 dark:text-slate-400 font-light leading-relaxed">
            {product.headline}
          </p>
        </div>

        {/* Overview */}
        <div className="text-xs text-slate-555 dark:text-slate-400 font-light leading-relaxed border-t border-slate-100 dark:border-slate-855 pt-6">
          <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mb-2">System Overview</h3>
          <p>{product.overview}</p>
        </div>

        {/* Specs & Benefits split grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          
          {/* Key Benefits */}
          <div className="space-y-4">
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white border-l-4 border-[#F27052] pl-3">
              System Benefits
            </h3>
            <div className="space-y-3">
              {product.benefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs font-light text-slate-650 dark:text-slate-400">
                  <div className="w-5 h-5 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] dark:text-[#ff8a6f] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-slate-50 dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-3xl p-6 space-y-4">
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
              <Info className="w-4 h-4 text-[#F27052]" /> Technical Parameters
            </h3>
            <div className="border-t border-slate-200 dark:border-slate-800 divide-y divide-slate-200 dark:divide-slate-800 text-xs">
              {product.specifications.map((spec, idx) => (
                <div key={idx} className="py-2.5 flex justify-between gap-4 font-light">
                  <span className="font-semibold text-slate-600 dark:text-slate-400">{spec.label}</span>
                  <span className="text-slate-850 dark:text-slate-255 text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Features & Applications List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {/* System Features */}
          <div className="space-y-4">
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white border-l-4 border-[#F27052] pl-3">
              Key Features
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-xs leading-relaxed font-light text-slate-655 dark:text-slate-400">
              {product.features.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div className="space-y-4">
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white border-l-4 border-[#F27052] pl-3">
              Application Fields
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-xs leading-relaxed font-light text-slate-655 dark:text-slate-400">
              {product.applications.map((app, idx) => (
                <li key={idx}>{app}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* RFQ proposal redirect */}
        <div className="bg-[#1B4D3E] text-white rounded-3xl p-8 md:p-10 text-center space-y-4 shadow-md">
          <h3 className="text-xl font-extrabold text-white">
            Request pricing for {product.name}
          </h3>
          <p className="text-xs text-slate-350 font-light max-w-sm mx-auto leading-relaxed">
            Enter your floor dimensions and load parameters to receive a technical structural quotation.
          </p>
          <div className="pt-2">
            <Link
              href={`/quote?product=${product.slug}`}
              className="bg-[#F27052] hover:bg-[#ff8a6f] text-white text-xs font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg"
            >
              Request Layout Proposal &rarr;
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}