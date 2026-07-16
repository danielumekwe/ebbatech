"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, ArrowUp } from "lucide-react";

export default function FloatActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const whatsappNumber = "2348034484931";
  const whatsappMessage = encodeURIComponent(
    "Hello Ebbatech, I would like to make an inquiry about your storage and racking solutions."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 rounded-full flex items-center justify-center shadow-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:-translate-y-1 animate-in fade-in zoom-in duration-200 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-emerald-500/20 transition-all hover:-translate-y-1 group cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
      </a>
    </div>
  );
}