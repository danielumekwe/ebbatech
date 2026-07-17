import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Ebbatech Nigeria | Ikeja, Lagos",
  description: "Contact Ebbatech Nigeria Limited in Ikeja, Lagos for storage quotations, consulting and installation.",
};

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-[#0f241d] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-4 text-center">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Get In Touch
          </h1>
          <p className="text-xs text-slate-404 font-light max-w-xl mx-auto leading-relaxed">
            Tell us about your space. We&apos;ll tell you what&apos;s possible.
          </p>
        </div>
      </section>

      {/* Workspace Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

        {/* Left Side: Contact Details */}
        <div className="lg:col-span-5 bg-slate-50 dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-3xl p-8 flex flex-col justify-between space-y-8 shadow-sm">
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-[#1B4D3E] dark:text-[#ff8a6f]">
              Contact Details
            </h2>

            <div className="space-y-4 text-xs font-light text-slate-555 dark:text-slate-400 leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F27052] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block mb-0.5">Address</strong>
                  <span>
                    Ebbatech Nigeria Limited <br />
                    22 Alhaja Kofoworola Crescent <br />
                    Off Awolowo Way <br />
                    Ikeja, Lagos
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#F27052] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block mb-0.5">Email</strong>
                  <span>General enquiries: hello@ebbatech.com.ng</span> <br />
                  <span>Sales and quotations: sales@ebbatech.com.ng</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#F27052] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block mb-0.5">Phone</strong>
                  <span>(+234) 803 448 4931</span> <br />
                  <span>(+234) 905 559 7922</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Enquiry Form */}
        <div className="lg:col-span-7 bg-[#1B4D3E] text-white rounded-3xl p-8 md:p-10 shadow-lg flex flex-col justify-center">
          <h2 className="text-2xl font-extrabold text-white mb-2">
            Enquiry Form
          </h2>
          <p className="text-xs text-slate-350 font-light mb-8">
            Tell us about your space. We&apos;ll tell you what&apos;s possible.
          </p>

          <Suspense fallback={<div className="text-xs font-light text-slate-300">Loading form&hellip;</div>}>
            <ContactForm />
          </Suspense>
        </div>

      </section>
    </div>
  );
}
