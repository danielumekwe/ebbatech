"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, AlertTriangle, Lightbulb } from "lucide-react";
import { caseStudies } from "@/lib/data/projects";

interface ProjectContentProps {
  slug: string;
}

export default function ProjectDetailContent({ slug }: ProjectContentProps) {
  const project = caseStudies.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">Case Study Not Found</h2>
        <Link href="/projects" className="text-sm font-bold text-[#F27052] hover:underline">
          &larr; Back to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        
        {/* Back Link */}
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B4D3E] dark:text-[#ff8a6f] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Case Studies
        </Link>

        {/* Header Title */}
        <div className="space-y-3">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            Installation Record
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-955 dark:text-white leading-tight">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-[#1B4D3E] dark:text-[#ff8a6f]">Client: {project.client}</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#F27052]" /> {project.location}
            </span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-t border-b border-slate-100 dark:border-slate-855">
          {project.stats.map((st, idx) => (
            <div key={idx} className="text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#1B4D3E] dark:text-[#ff8a6f] block">
                {st.value}
              </span>
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">
                {st.label}
              </span>
            </div>
          ))}
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Challenge */}
          <div className="space-y-4">
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
              <AlertTriangle className="w-4.5 h-4.5 text-[#F27052]" /> The Challenge
            </h3>
            <p className="text-xs text-slate-555 dark:text-slate-400 leading-relaxed font-light">
              {project.challenge}
            </p>
          </div>

          {/* Solution & Result */}
          <div className="space-y-4">
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
              <Lightbulb className="w-4.5 h-4.5 text-[#F27052]" /> Ebbatech Solution
            </h3>
            <p className="text-xs text-slate-555 dark:text-slate-400 leading-relaxed font-light mb-4">
              {project.solution}
            </p>
            
            <h4 className="font-extrabold text-xs text-slate-900 dark:text-white mt-4">Project Result</h4>
            <p className="text-xs text-slate-555 dark:text-slate-400 leading-relaxed font-light">
              {project.result}
            </p>
          </div>

        </div>

        {/* Products Used */}
        <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-855">
          <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">
            Systems Implemented
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {project.productsUsed.map((p, idx) => (
              <span 
                key={idx}
                className="bg-slate-50 dark:bg-[#0c1410] border border-slate-200 dark:border-slate-800 text-slate-655 dark:text-slate-350 text-[10px] font-semibold px-3 py-1 rounded-md uppercase"
              >
                {p.replace("-", " ")}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Proposals Box */}
        <div className="bg-[#1B4D3E] text-white rounded-3xl p-8 md:p-10 text-center space-y-4 shadow-md">
          <h3 className="text-xl font-extrabold text-white">
            Need Similar Results for Your Facility?
          </h3>
          <p className="text-xs text-slate-350 font-light max-w-sm mx-auto leading-relaxed">
            Consult our structural engineers to double your pallet capacity or optimize records compactors.
          </p>
          <div className="pt-2">
            <Link
              href="/quote"
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