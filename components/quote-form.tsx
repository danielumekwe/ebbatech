"use client";

import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Check } from "lucide-react";

export default function QuoteForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialProduct = searchParams.get("product") || "";

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    systemType: initialProduct || "pallet-racking",
    warehouseHeight: "",
    floorArea: "",
    loadPerLevel: "1000",
    clientName: "",
    companyName: "",
    clientEmail: "",
    clientPhone: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `System Type: ${formData.systemType}`,
      `Ceiling Height: ${formData.warehouseHeight}m`,
      `Floor Area: ${formData.floorArea}sqm`,
      `Load Per Level: ${formData.loadPerLevel}kg`,
      `Company: ${formData.companyName}`,
      `Contact: ${formData.clientName}`,
      `Phone: ${formData.clientPhone}`,
      "",
      formData.message,
    ].join("\n");
    const mailto = `mailto:hello@ebbatech.com.ng?subject=${encodeURIComponent(
      `Storage layout RFQ from ${formData.companyName || formData.clientName}`
    )}&body=${encodeURIComponent(body)}${formData.clientEmail ? `&cc=${encodeURIComponent(formData.clientEmail)}` : ""}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header Block */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            Proposal RFQ Wizard
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight">
            Request Storage Layout Quotation
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-light max-w-md mx-auto leading-relaxed">
            Submit your warehouse heights, spatial area, and weight load profiles to obtain engineered CAD recommendations.
          </p>
        </div>

        {submitted ? (
          <div className="bg-slate-50 dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-sm">
            <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-100 dark:border-emerald-900/40">
              <Check className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Technical RFQ Logged
              </h2>
              <p className="text-xs text-slate-550 dark:text-slate-400 font-light leading-relaxed max-w-sm mx-auto">
                Thank you, {formData.clientName}. Ebbatech spatial designers will prepare 2D layout recommendations and load parameters for {formData.companyName} within 24 hours.
              </p>
            </div>
            <button
              onClick={() => router.push("/")}
              className="bg-[#1B4D3E] hover:bg-[#276a55] text-white text-xs font-bold px-8 py-3 rounded-xl transition-all shadow-md"
            >
              Return to Homepage
            </button>
          </div>
        ) : (
          <div className="bg-slate-50 dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-3xl p-6 md:p-10 shadow-sm">

            {/* Step Indicators */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-6 mb-8 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              <span className={step >= 1 ? "text-[#1B4D3E] dark:text-[#ff8a6f]" : ""}>1. Parameters</span>
              <span className="h-px bg-slate-200 dark:bg-slate-800 flex-grow mx-4" />
              <span className={step >= 2 ? "text-[#1B4D3E] dark:text-[#ff8a6f]" : ""}>2. Contact Info</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 text-xs">
              {step === 1 && (
                <div className="space-y-6">
                  {/* System selection */}
                  <div>
                    <label className="block text-slate-700 dark:text-slate-350 font-bold mb-1.5 uppercase tracking-wide">
                      Select Storage Configuration
                    </label>
                    <select
                      name="systemType"
                      value={formData.systemType}
                      onChange={handleInputChange}
                      className="w-full bg-white dark:bg-[#080d0a] border border-slate-200 dark:border-slate-750 px-4 py-3 rounded-xl text-slate-900 dark:text-white outline-none focus:border-[#F27052] font-semibold"
                    >
                      <option value="pallet-racking">Adjustable Pallet Racking (Heavy-duty)</option>
                      <option value="mobile-shelving">Mobile Archive Compactor Shelving (High-density)</option>
                      <option value="longspan-shelving">Longspan Shelving (Medium-duty)</option>
                      <option value="cantilever-racking">Cantilever Racking (Long loads/pipes)</option>
                    </select>
                  </div>

                  {/* Dimensions grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-700 dark:text-slate-350 font-bold mb-1.5 uppercase tracking-wide">
                        Available Ceiling Height (Meters)
                      </label>
                      <input
                        type="number"
                        name="warehouseHeight"
                        required
                        placeholder="e.g. 8.5"
                        value={formData.warehouseHeight}
                        onChange={handleInputChange}
                        className="w-full bg-white dark:bg-[#080d0a] border border-slate-200 dark:border-slate-750 px-4 py-3 rounded-xl text-slate-900 dark:text-white outline-none focus:border-[#F27052]"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 dark:text-slate-350 font-bold mb-1.5 uppercase tracking-wide">
                        Total Floor Area (Sqm)
                      </label>
                      <input
                        type="number"
                        name="floorArea"
                        required
                        placeholder="e.g. 1500"
                        value={formData.floorArea}
                        onChange={handleInputChange}
                        className="w-full bg-white dark:bg-[#080d0a] border border-slate-200 dark:border-slate-750 px-4 py-3 rounded-xl text-slate-900 dark:text-white outline-none focus:border-[#F27052]"
                      />
                    </div>
                  </div>

                  {/* Load weights */}
                  <div>
                    <label className="block text-slate-700 dark:text-slate-350 font-bold mb-1.5 uppercase tracking-wide">
                      Estimated Weight Load limits (Kg per level)
                    </label>
                    <select
                      name="loadPerLevel"
                      value={formData.loadPerLevel}
                      onChange={handleInputChange}
                      className="w-full bg-white dark:bg-[#080d0a] border border-slate-200 dark:border-slate-750 px-4 py-3 rounded-xl text-slate-900 dark:text-white outline-none focus:border-[#F27052] font-semibold"
                    >
                      <option value="500">Under 500 Kg (Medium duty shelving)</option>
                      <option value="1500">500 Kg - 1,500 Kg (Standard pallet loads)</option>
                      <option value="3000">1,500 Kg - 3,000 Kg (Heavy machinery/metals)</option>
                      <option value="4500">3,000 Kg - 4,500 Kg (Extra heavy duty upright frames)</option>
                    </select>
                  </div>

                  {/* Next Button */}
                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="bg-[#1B4D3E] hover:bg-[#276a55] text-white text-xs font-bold px-8 py-3 rounded-xl transition-all shadow-md cursor-pointer"
                    >
                      Continue to Contact Info &rarr;
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  {/* Name fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-700 dark:text-slate-355 font-bold mb-1.5 uppercase tracking-wide">
                        Contact Person
                      </label>
                      <input
                        type="text"
                        name="clientName"
                        required
                        placeholder="Enter full name"
                        value={formData.clientName}
                        onChange={handleInputChange}
                        className="w-full bg-white dark:bg-[#080d0a] border border-slate-200 dark:border-slate-750 px-4 py-3 rounded-xl text-slate-900 dark:text-white outline-none focus:border-[#F27052]"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 dark:text-slate-355 font-bold mb-1.5 uppercase tracking-wide">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        placeholder="Corporate enterprise"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full bg-white dark:bg-[#080d0a] border border-slate-200 dark:border-slate-750 px-4 py-3 rounded-xl text-slate-900 dark:text-white outline-none focus:border-[#F27052]"
                      />
                    </div>
                  </div>

                  {/* Contact channels */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-700 dark:text-slate-355 font-bold mb-1.5 uppercase tracking-wide">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="clientEmail"
                        required
                        placeholder="email@company.com"
                        value={formData.clientEmail}
                        onChange={handleInputChange}
                        className="w-full bg-white dark:bg-[#080d0a] border border-slate-200 dark:border-slate-750 px-4 py-3 rounded-xl text-slate-900 dark:text-white outline-none focus:border-[#F27052]"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 dark:text-slate-355 font-bold mb-1.5 uppercase tracking-wide">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="clientPhone"
                        required
                        placeholder="+234..."
                        value={formData.clientPhone}
                        onChange={handleInputChange}
                        className="w-full bg-white dark:bg-[#080d0a] border border-slate-200 dark:border-slate-750 px-4 py-3 rounded-xl text-slate-900 dark:text-white outline-none focus:border-[#F27052]"
                      />
                    </div>
                  </div>

                  {/* Special requests */}
                  <div>
                    <label className="block text-slate-700 dark:text-slate-355 font-bold mb-1.5 uppercase tracking-wide">
                      Additional Spatial or Access Requests (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Specify material handling types (reach trucks, counterbalanced forklifts), temperature requirements (freezer vaults), or file compactor parameters..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-white dark:bg-[#080d0a] border border-slate-200 dark:border-slate-750 px-4 py-3 rounded-xl text-slate-900 dark:text-white outline-none focus:border-[#F27052] resize-none"
                    />
                  </div>

                  {/* Actions Buttons */}
                  <div className="pt-4 flex justify-between gap-4">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold px-8 py-3 rounded-xl transition-all hover:bg-slate-300"
                    >
                      &larr; Back
                    </button>
                    <button
                      type="submit"
                      className="bg-[#F27052] hover:bg-[#ff8a6f] text-white text-xs font-bold px-8 py-3 rounded-xl transition-all shadow-md cursor-pointer"
                    >
                      Submit Technical RFQ
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
