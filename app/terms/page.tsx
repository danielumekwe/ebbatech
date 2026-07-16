import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Ebbatech Nigeria Limited",
  description: "Terms of service governing use of the Ebbatech Nigeria Limited corporate portal, space planning calculators, and layout blueprint proprietary rights.",
};

export default function TermsPage() {
  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-6 text-xs leading-relaxed font-light">
        <h1 className="text-3xl font-extrabold text-[#1B4D3E] dark:text-[#ff8a6f]">Terms of Service</h1>
        <p className="text-slate-500">Last updated: July 15, 2026</p>
        
        <p>
          Welcome to the corporate portal of Ebbatech Nigeria Limited. By utilizing our space planning calculators, downloading catalogues, or requesting audits, you agree to be bound by the following terms.
        </p>

        <h3 className="font-bold text-sm text-slate-950 dark:text-white">Blueprints & Layout Proprietary Rights</h3>
        <p>
          All 2D and 3D CAD layout blueprints, vertical load estimations, and spatial optimization calculations drafted by our design teams remain Ebbatech&apos;s intellectual property until contracts are executed.
        </p>

        <h3 className="font-bold text-sm text-slate-950 dark:text-white">Structural Liability & Warranties</h3>
        <p>
          We build steel racking uprights and beams according to strict SEMA parameters. Racking systems must be operated according to maximum beam capacity plaques mounted on baseplates. Overloading racks voids structural verticality warranties.
        </p>

        <h3 className="font-bold text-sm text-slate-950 dark:text-white">Site Access & Plumb Surveys</h3>
        <p>
          During on-site laser surveys, client facilities must coordinate safe environments. Rigging technicians comply with standard occupational HSE regulations.
        </p>
      </div>
    </div>
  );
}