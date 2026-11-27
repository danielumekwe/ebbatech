import React from "react";
import { LegalContent } from "@/types";

export default function LegalPage({ title, lastUpdated, intro, sections }: LegalContent) {
  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-6 text-xs leading-relaxed font-light">
        <h1 className="text-3xl font-extrabold text-[#1B4D3E] dark:text-[#ff8a6f]">{title}</h1>
        <p className="text-slate-500">Last updated: {lastUpdated}</p>

        <p>{intro}</p>

        {sections.map((section) => (
          <React.Fragment key={section.heading}>
            <h3 className="font-bold text-sm text-slate-950 dark:text-white">{section.heading}</h3>
            <p>{section.body}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
