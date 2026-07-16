"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { services } from "@/lib/data/services";

interface ServiceContentProps {
  slug: string;
}

export default function ServiceDetailContent({ slug }: ServiceContentProps) {
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">Service Not Found</h2>
        <Link href="/services" className="text-sm font-bold text-[#F27052] hover:underline">
          &larr; Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        
        {/* Back Link */}
        <Link 
          href="/services" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B4D3E] dark:text-[#ff8a6f] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Services
        </Link>

        {/* Service Header */}
        <div className="space-y-3">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            Engineering Service
          </span>
          <h1 className="text-3xl font-extrabold text-slate-955 dark:text-white leading-tight">
            {service.name}
          </h1>
          <p className="text-base text-[#1B4D3E] dark:text-[#ff8a6f] font-semibold">
            {service.headline}
          </p>
        </div>

        {/* Overview */}
        <div className="text-xs text-slate-555 dark:text-slate-400 font-light leading-relaxed border-t border-slate-100 dark:border-slate-855 pt-6">
          <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mb-2">Service Overview</h3>
          <p>{service.overview}</p>
        </div>

        {/* Benefits & Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          
          {/* Benefits */}
          <div className="space-y-4">
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white border-l-4 border-[#F27052] pl-3">
              Key Benefits
            </h3>
            <div className="space-y-3">
              {service.benefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs font-light text-slate-655 dark:text-slate-400">
                  <div className="w-5 h-5 rounded-full bg-[#1B4D3E]/10 text-[#1B4D3E] dark:text-[#ff8a6f] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white border-l-4 border-[#F27052] pl-3">
              Service Features
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-xs leading-relaxed font-light text-slate-655 dark:text-slate-400">
              {service.features.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Process Timeline */}
        <div className="space-y-6 pt-6 border-t border-slate-100 dark:border-slate-855">
          <h3 className="text-lg font-extrabold text-slate-900 dark:text-white border-l-4 border-[#F27052] pl-3">
            Execution Strategy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
            {service.howItWorks.map((step) => (
              <div key={step.step} className="space-y-2">
                <span className="text-3xl font-extrabold text-[#F27052] block">
                  0{step.step}
                </span>
                <h4 className="font-extrabold text-slate-900 dark:text-white">
                  {step.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Proposals Box */}
        <div className="bg-[#1B4D3E] text-white rounded-3xl p-8 md:p-10 text-center space-y-4 shadow-md">
          <h3 className="text-xl font-extrabold text-white">
            Schedule {service.name} today
          </h3>
          <p className="text-xs text-slate-350 font-light max-w-sm mx-auto leading-relaxed">
            Consult our structural engineers to setup site visits or custom blueprints calibrations.
          </p>
          <div className="pt-2">
            <Link
              href="/quote"
              className="bg-[#F27052] hover:bg-[#ff8a6f] text-white text-xs font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg"
            >
              Request Layout Consultation &rarr;
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}