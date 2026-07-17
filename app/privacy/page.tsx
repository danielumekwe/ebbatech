import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Ebbatech Nigeria Limited",
  description: "How Ebbatech Nigeria Limited collects, uses, and protects data submitted through our enquiry form and consultation requests.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-6 text-xs leading-relaxed font-light">
        <h1 className="text-3xl font-extrabold text-[#1B4D3E] dark:text-[#ff8a6f]">Privacy Policy</h1>
        <p className="text-slate-500">Last updated: July 15, 2026</p>
        
        <p>
          Ebbatech Nigeria Limited is committed to protecting your corporate and personal privacy. This Privacy Policy explains what data we collect through our Enquiry Form and other direct contact with our sales team, and how we handle it.
        </p>

        <h3 className="font-bold text-sm text-slate-950 dark:text-white">Information We Collect</h3>
        <p>
          When you submit an enquiry, we collect your full name, company name, email address, phone number, enquiry type, facility location, and any project details you provide.
        </p>

        <h3 className="font-bold text-sm text-slate-950 dark:text-white">Use of Data</h3>
        <p>
          Your information is used exclusively to respond to your enquiry, prepare quotations, and coordinate consultations, installations or facility reviews. We do not sell or lease corporate information to third parties.
        </p>

        <h3 className="font-bold text-sm text-slate-950 dark:text-white">Security Controls</h3>
        <p>
          Ebbatech maintains technical and physical access controls to protect your site blueprints and corporate contact details.
        </p>
      </div>
    </div>
  );
}