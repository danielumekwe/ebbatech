"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Check } from "lucide-react";

const enquiryTypes = [
  "Consulting",
  "Racking",
  "Shelving",
  "Storage Solutions",
  "Mobile Shelving",
  "Installation & Relocation",
  "Other"
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || "";

  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [enquiryType, setEnquiryType] = useState(
    enquiryTypes.includes(initialType) ? initialType : ""
  );
  const [location, setLocation] = useState("");
  const [project, setProject] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Full Name: ${fullName}`,
      `Company: ${company}`,
      `Phone Number: ${phone}`,
      `Enquiry Type: ${enquiryType || "Not specified"}`,
      `Location of facility: ${location}`,
      "",
      "Project details:",
      project
    ].join("\n");
    const mailto = `mailto:sales@ebbatech.com.ng?subject=${encodeURIComponent(
      `Enquiry from ${company || fullName}`
    )}&body=${encodeURIComponent(body)}${email ? `&cc=${encodeURIComponent(email)}` : ""}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center mx-auto border border-white/20">
          <Check className="w-7 h-7" />
        </div>
        <p className="text-sm font-light leading-relaxed max-w-sm mx-auto">
          Thank you &mdash; your enquiry has reached our team. We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-xs">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-slate-250 font-semibold mb-1">Full Name</label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter full name"
            className="w-full bg-white/10 border border-white/20 px-4 py-2.5 rounded-xl text-white outline-none focus:border-[#F27052] transition-colors"
          />
        </div>
        <div>
          <label className="block text-slate-250 font-semibold mb-1">Company</label>
          <input
            type="text"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Enter company name"
            className="w-full bg-white/10 border border-white/20 px-4 py-2.5 rounded-xl text-white outline-none focus:border-[#F27052] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-slate-250 font-semibold mb-1">Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@company.com"
            className="w-full bg-white/10 border border-white/20 px-4 py-2.5 rounded-xl text-white outline-none focus:border-[#F27052] transition-colors"
          />
        </div>
        <div>
          <label className="block text-slate-250 font-semibold mb-1">Phone Number</label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+234..."
            className="w-full bg-white/10 border border-white/20 px-4 py-2.5 rounded-xl text-white outline-none focus:border-[#F27052] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-slate-250 font-semibold mb-1">Enquiry Type</label>
          <select
            required
            value={enquiryType}
            onChange={(e) => setEnquiryType(e.target.value)}
            className="w-full bg-white/10 border border-white/20 px-4 py-2.5 rounded-xl text-white outline-none focus:border-[#F27052] transition-colors [&>option]:text-slate-900"
          >
            <option value="" disabled>Select an option</option>
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-slate-250 font-semibold mb-1">Location of Facility</label>
          <input
            type="text"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Ikeja, Lagos"
            className="w-full bg-white/10 border border-white/20 px-4 py-2.5 rounded-xl text-white outline-none focus:border-[#F27052] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-slate-250 font-semibold mb-1">Tell Us About Your Project</label>
        <textarea
          rows={4}
          required
          value={project}
          onChange={(e) => setProject(e.target.value)}
          placeholder="Briefly describe your storage requirements..."
          className="w-full bg-white/10 border border-white/20 px-4 py-2.5 rounded-xl text-white outline-none focus:border-[#F27052] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="bg-[#F27052] hover:bg-[#ff8a6f] text-white font-bold px-8 py-3.5 rounded-xl transition-all cursor-pointer shadow-md"
      >
        Send Enquiry &rarr;
      </button>
    </form>
  );
}
