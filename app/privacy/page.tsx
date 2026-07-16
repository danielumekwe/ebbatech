import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Ebbatech Nigeria Limited",
  description: "How Ebbatech Nigeria Limited collects, uses, and protects B2B data gathered during site surveys, CAD design requests, and quote submissions.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-6 text-xs leading-relaxed font-light">
        <h1 className="text-3xl font-extrabold text-[#1B4D3E] dark:text-[#ff8a6f]">Privacy Policy</h1>
        <p className="text-slate-500">Last updated: July 15, 2026</p>
        
        <p>
          Ebbatech Nigeria Limited is committed to protecting your corporate and personal privacy. This Privacy Policy explains what B2B datasets we collect during site surveys, CAD design requests, and quote submissions, and how we handle them.
        </p>
        
        <h3 className="font-bold text-sm text-slate-950 dark:text-white">Information We Collect</h3>
        <p>
          When you request a quotation or consultation, we collect company names, emails, direct telephone hotlines, installation locations, and warehouse spatial metrics (such as ceiling heights, dimensions, and SKU details).
        </p>

        <h3 className="font-bold text-sm text-slate-950 dark:text-white">Use of Data</h3>
        <p>
          Your layout specifications and dimensions are used exclusively to draft structural proposals, calculate load capacities, design 2D/3D CAD plans, and coordinate operations. We do not sell or lease corporate information to third parties.
        </p>

        <h3 className="font-bold text-sm text-slate-950 dark:text-white">Security Controls</h3>
        <p>
          Ebbatech maintains technical and physical access controls to protect your site blueprints and corporate contact details.
        </p>
      </div>
    </div>
  );
}