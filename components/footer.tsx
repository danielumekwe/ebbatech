"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand & Address */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <svg className="w-9 h-9 rounded-xl" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="20" fill="#1B4D3E" />
              <path d="M25 22h37l5 9H20z" fill="#F27052" />
              <path d="M35 45h41l-5 9H30z" fill="#F27052" />
              <path d="M25 68h37l5 9H20z" fill="#F27052" />
            </svg>
            <div className="flex flex-col">
              <span className="font-extrabold text-base leading-none tracking-wider text-white group-hover:text-[#F27052] transition-colors uppercase">
                EBBATECH
              </span>
              <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest leading-none mt-1">
                Nigeria Limited
              </span>
            </div>
          </Link>
          <p className="text-xs leading-relaxed text-slate-500">
            Nigeria&apos;s leading provider of industrial storage systems, warehouse racking, shelving compactor systems, and space optimization solutions.
          </p>
          <div className="space-y-3 pt-2 text-xs font-light">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#F27052] flex-shrink-0 mt-0.5" />
              <span>22 Alhaja Kofoworola Crescent, Off Awolowo Way, Ikeja, Lagos, Nigeria.</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#F27052] flex-shrink-0" />
              <span>+234 803 448 4931, +234 905 559 7922</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#F27052] flex-shrink-0" />
              <span>hello@ebbatech.com.ng</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 text-xs font-bold uppercase tracking-wider">
          <h4 className="text-white text-sm font-extrabold normal-case tracking-normal">Product Catalog</h4>
          <div className="flex flex-col gap-2.5">
            <Link href="/products/warehouse-racking" className="hover:text-white transition-colors">Warehouse Racking</Link>
            <Link href="/products/mobile-shelving" className="hover:text-white transition-colors">Mobile Archive compactors</Link>
            <Link href="/products/shelving-systems" className="hover:text-white transition-colors">Shelving Systems</Link>
            <Link href="/compare" className="hover:text-white transition-colors">Product Comparison</Link>
          </div>
        </div>

        {/* Resources */}
        <div className="space-y-4 text-xs font-bold uppercase tracking-wider">
          <h4 className="text-white text-sm font-extrabold normal-case tracking-normal">Company Links</h4>
          <div className="flex flex-col gap-2.5">
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
            <Link href="/faq" className="hover:text-white transition-colors">FAQs</Link>
          </div>
        </div>

        {/* Newsletter subscription */}
        <div className="space-y-4">
          <h4 className="text-white text-sm font-extrabold">Newsletter Subscribe</h4>
          <p className="text-xs text-slate-500 font-light leading-relaxed">
            Get technical updates, SEMA racking guidelines, and spatial auditing resources directly in your inbox.
          </p>
          {submitted ? (
            <div className="bg-emerald-950/20 text-emerald-400 border border-emerald-900/40 p-4 rounded-xl text-xs flex items-center gap-2">
              <Check className="w-4 h-4" /> Subscribed successfully!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex items-stretch bg-slate-900 border border-slate-800 rounded-xl overflow-hidden text-xs">
              <input
                type="email"
                required
                placeholder="Enter work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent px-4 py-2.5 outline-none text-white w-full"
              />
              <button
                type="submit"
                className="bg-[#1B4D3E] hover:bg-[#276a55] text-white px-4 flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-slate-900 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-slate-600">
        <span>© {new Date().getFullYear()} Ebbatech Nigeria Limited. All Rights Reserved.</span>
        <div className="flex flex-wrap items-center gap-6">
          <Link href="/privacy" className="hover:text-slate-450 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-slate-450 transition-colors">Terms of Service</Link>
          <Link href="/cookies" className="hover:text-slate-450 transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}