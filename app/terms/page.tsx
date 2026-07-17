import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Ebbatech Nigeria Limited",
  description: "Terms of service governing enquiries, quotations, and installation and relocation services provided by Ebbatech Nigeria Limited.",
};

export default function TermsPage() {
  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-6 text-xs leading-relaxed font-light">
        <h1 className="text-3xl font-extrabold text-[#1B4D3E] dark:text-[#ff8a6f]">Terms of Service</h1>
        <p className="text-slate-500">Last updated: July 15, 2026</p>

        <p>
          Welcome to the website of Ebbatech Nigeria Limited. By submitting an enquiry, requesting a quotation, or otherwise using this site, you agree to be bound by the following terms.
        </p>

        <h3 className="font-bold text-sm text-slate-950 dark:text-white">Quotations & Proposals</h3>
        <p>
          Quotations, consultations, and facility recommendations provided by Ebbatech are estimates based on the information you supply and are subject to confirmation following a site review where applicable.
        </p>

        <h3 className="font-bold text-sm text-slate-950 dark:text-white">Installation & Relocation Services</h3>
        <p>
          Where Ebbatech provides installation, relocation or reconfiguration services, the scope of work, timelines and costs will be agreed with the client in writing prior to commencement.
        </p>

        <h3 className="font-bold text-sm text-slate-950 dark:text-white">Site Access</h3>
        <p>
          During site surveys and installations, client facilities must provide safe access for our teams. Ebbatech personnel comply with standard occupational health and safety practices while on site.
        </p>
      </div>
    </div>
  );
}
