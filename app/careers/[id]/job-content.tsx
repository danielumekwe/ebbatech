"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Check } from "lucide-react";
import { jobOpenings } from "@/lib/data/careers";

interface JobContentProps {
  id: string;
}

export default function JobDetailContent({ id }: JobContentProps) {
  const job = jobOpenings.find((j) => j.id === id);
  const [applied, setApplied] = useState(false);

  if (!job) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">Job Listing Not Found</h2>
        <Link href="/careers" className="text-sm font-bold text-[#F27052] hover:underline">
          &larr; Back to Careers
        </Link>
      </div>
    );
  }

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Job Specs */}
        <div className="lg:col-span-7 space-y-8">
          <Link 
            href="/careers" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B4D3E] dark:text-[#ff8a6f] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Active Roles
          </Link>

          <div className="space-y-4">
            <span className="inline-block bg-[#1B4D3E]/10 text-[#1B4D3E] dark:text-[#ff8a6f] text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
              {job.department}
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-955 dark:text-white leading-tight">
              {job.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#F27052]" /> {job.location}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#F27052]" /> {job.type}
              </span>
            </div>
          </div>

          <div className="space-y-6 text-xs leading-relaxed font-light text-slate-555 dark:text-slate-400 border-t border-slate-100 dark:border-slate-855 pt-6">
            <div className="space-y-2">
              <h3 className="font-extrabold text-sm text-slate-955 dark:text-white">Role Overview</h3>
              <p>{job.description}</p>
            </div>

            <div className="space-y-3">
              <h3 className="font-extrabold text-sm text-slate-955 dark:text-white">Requirements & Prerequisites</h3>
              <ul className="list-disc pl-4 space-y-1">
                {job.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-extrabold text-sm text-slate-955 dark:text-white">Key Responsibilities</h3>
              <ul className="list-disc pl-4 space-y-1">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side: Apply Form */}
        <div className="lg:col-span-5 bg-slate-50 dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm">
          {applied ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 bg-[#1B4D3E]/10 text-[#1B4D3E] rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                Application Received
              </h3>
              <p className="text-[11px] text-slate-555 dark:text-slate-400 font-light leading-relaxed">
                Thank you for applying. Our operations team will review your resume parameters and contact you.
              </p>
            </div>
          ) : (
            <form onSubmit={handleApplySubmit} className="space-y-4 text-xs">
              <h3 className="text-sm font-extrabold text-slate-955 dark:text-white mb-4">
                Apply for this Role
              </h3>

              <div>
                <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  className="w-full bg-white dark:bg-[#080d0a] border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-xl text-slate-900 dark:text-white outline-none focus:border-[#F27052]"
                />
              </div>

              <div>
                <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="email@domain.com"
                  className="w-full bg-white dark:bg-[#080d0a] border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-xl text-slate-900 dark:text-white outline-none focus:border-[#F27052]"
                />
              </div>

              <div>
                <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">Resume Link (PDF/Drive)</label>
                <input
                  type="url"
                  required
                  placeholder="https://drive.google.com/..."
                  className="w-full bg-white dark:bg-[#080d0a] border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-xl text-slate-900 dark:text-white outline-none focus:border-[#F27052]"
                />
              </div>

              <div>
                <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">Short Cover Note</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Briefly state your structural metal fabrication or B2B sales experience..."
                  className="w-full bg-white dark:bg-[#080d0a] border border-slate-200 dark:border-slate-700 px-3.5 py-2.5 rounded-xl text-slate-900 dark:text-white outline-none focus:border-[#F27052] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#F27052] hover:bg-[#ff8a6f] text-white font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}