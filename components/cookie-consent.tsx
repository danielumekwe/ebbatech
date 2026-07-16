"use client";

import React, { useState, useEffect } from "react";
import { ShieldAlert, X } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("ebbatech_cookie_consent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("ebbatech_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("ebbatech_cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 left-6 md:right-auto md:max-w-md z-50 animate-in slide-in-from-bottom duration-300">
      <div className="bg-slate-900 text-white border border-slate-800 shadow-2xl rounded-2xl p-5 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-slate-400 hover:text-white cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3">
          <ShieldAlert className="w-6 h-6 text-[#F27052] flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-sm text-white">GDPR & Cookie Consent</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              We use cookies to optimize our website, analyze traffic, and improve user experiences. By clicking &quot;Accept All&quot;, you consent to our use of cookies in accordance with our <Link href="/privacy" className="underline text-slate-200">Privacy Policy</Link>.
            </p>
            <div className="flex items-center gap-2 mt-4 text-xs font-bold">
              <button
                onClick={handleAccept}
                className="bg-[#F27052] hover:bg-[#ff8a6f] text-white px-4 py-2 rounded-lg transition-colors cursor-pointer"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white px-4 py-2 rounded-lg transition-colors cursor-pointer"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}