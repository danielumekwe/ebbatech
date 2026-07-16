import type { Metadata } from "next";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Ebbatech Nigeria Limited",
  description: "Reach out to our B2B sales representatives, request site laser inspections, or file planning guidelines.",
};

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 to-[#0f241d] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-4 text-center">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Contact Ebbatech Office
          </h1>
          <p className="text-xs text-slate-404 font-light max-w-xl mx-auto leading-relaxed">
            Reach out to our B2B sales representatives, request site laser inspections, or file planning guidelines.
          </p>
        </div>
      </section>

      {/* Workspace Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

        {/* Left Side: Address Details */}
        <div className="lg:col-span-5 bg-slate-50 dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-3xl p-8 flex flex-col justify-between space-y-8 shadow-sm">
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-[#1B4D3E] dark:text-[#ff8a6f]">
              Headquarters Info
            </h2>

            <div className="space-y-4 text-xs font-light text-slate-555 dark:text-slate-400 leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F27052] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block mb-0.5">Office Address</strong>
                  <span>22 Alhaja Kofoworola Crescent, Off Awolowo Way, Ikeja, Lagos, Nigeria.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#F27052] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block mb-0.5">Hotlines & Sales Support</strong>
                  <span>+234 803 448 4931</span> <br />
                  <span>+234 905 559 7922</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#F27052] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block mb-0.5">Corporate Correspondence</strong>
                  <span>hello@ebbatech.com.ng</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1B4D3E]/10 p-5 rounded-2xl border border-[#1B4D3E]/20 text-xs">
            <h4 className="font-bold text-[#1B4D3E] dark:text-[#ff8a6f] mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Nationwide Deployments
            </h4>
            <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              We coordinate freight deliveries, baseplate mechanical anchoring, and safety plumb inspections throughout Nigeria.
            </p>
          </div>
        </div>

        {/* Right Side: Message Form */}
        <div className="lg:col-span-7 bg-[#1B4D3E] text-white rounded-3xl p-8 md:p-10 shadow-lg flex flex-col justify-center">
          <h2 className="text-2xl font-extrabold text-white mb-2">
            Send an Enquiry
          </h2>
          <p className="text-xs text-slate-350 font-light mb-8">
            Submit your warehouse parameters and an operations manager will contact you.
          </p>

          <ContactForm />
        </div>

      </section>
    </div>
  );
}
