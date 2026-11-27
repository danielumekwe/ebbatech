import type { Metadata } from "next";
import { Fragment, Suspense } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/contact-form";
import { pageMetadata } from "@/lib/seo";
import page from "@/content/pages/contact.json";
import site from "@/content/site.json";

export const metadata: Metadata = pageMetadata("contact");

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-[#0f241d] text-white py-20 relative">
        <div data-reveal className="max-w-7xl mx-auto px-6 space-y-4 text-center">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            {page.header.eyebrow}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            {page.header.title}
          </h1>
          <p className="text-xs text-slate-404 font-light max-w-xl mx-auto leading-relaxed">
            {page.header.subtitle}
          </p>
        </div>
      </section>

      {/* Workspace Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

        {/* Left Side: Contact Details */}
        <div data-reveal className="lg:col-span-5 bg-slate-50 dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-3xl p-8 flex flex-col justify-between space-y-8 shadow-sm">
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-[#1B4D3E] dark:text-[#ff8a6f]">
              {page.details.title}
            </h2>

            <div className="space-y-4 text-xs font-light text-slate-555 dark:text-slate-400 leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F27052] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block mb-0.5">{page.details.addressLabel}</strong>
                  <span>
                    {site.address.lines.map((line, idx) => (
                      <Fragment key={line}>
                        {idx > 0 && <br />}
                        {line}
                      </Fragment>
                    ))}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#F27052] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block mb-0.5">{page.details.emailLabel}</strong>
                  <span>{page.details.generalEmailLabel}: {site.emails.general}</span> <br />
                  <span>{page.details.salesEmailLabel}: {site.emails.sales}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#F27052] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block mb-0.5">{page.details.phoneLabel}</strong>
                  {site.phones.map((phone, idx) => (
                    <Fragment key={phone}>
                      {idx > 0 && <br />}
                      <span>{phone}</span>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Enquiry Form */}
        <div data-reveal data-reveal-delay={120} className="lg:col-span-7 bg-[#1B4D3E] text-white rounded-3xl p-8 md:p-10 shadow-lg flex flex-col justify-center">
          <h2 className="text-2xl font-extrabold text-white mb-2">
            {page.form.title}
          </h2>
          <p className="text-xs text-slate-350 font-light mb-8">
            {page.form.intro}
          </p>

          <Suspense fallback={<div className="text-xs font-light text-slate-300">Loading form&hellip;</div>}>
            <ContactForm />
          </Suspense>
        </div>

      </section>
    </div>
  );
}
