"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Phone: ${phone}`,
      "",
      message,
    ].join("\n");
    const mailto = `mailto:hello@ebbatech.com.ng?subject=${encodeURIComponent(
      `Enquiry from ${company || name}`
    )}&body=${encodeURIComponent(body)}${email ? `&cc=${encodeURIComponent(email)}` : ""}`;
    window.location.href = mailto;
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-slate-250 font-semibold mb-1">Your Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter full name"
            className="w-full bg-white/10 border border-white/20 px-4 py-2.5 rounded-xl text-white outline-none focus:border-[#F27052] transition-colors"
          />
        </div>
        <div>
          <label className="block text-slate-250 font-semibold mb-1">Company Name</label>
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

      <div>
        <label className="block text-slate-250 font-semibold mb-1">Your Message</label>
        <textarea
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Briefly state your layout capacity requests, files compactor dimensions, or safety inspection requirements..."
          className="w-full bg-white/10 border border-white/20 px-4 py-2.5 rounded-xl text-white outline-none focus:border-[#F27052] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="bg-[#F27052] hover:bg-[#ff8a6f] text-white font-bold px-8 py-3.5 rounded-xl transition-all cursor-pointer shadow-md"
      >
        Submit Requirements &rarr;
      </button>
    </form>
  );
}
