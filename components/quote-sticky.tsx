"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FileEdit } from "lucide-react";
import { usePathname } from "next/navigation";

export default function QuoteSticky() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show only after scrolling a bit and not on the quote page itself
    const handleScroll = () => {
      if (window.scrollY > 200 && pathname !== "/quote") {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 animate-in fade-in slide-in-from-left duration-200">
      <Link
        href="/quote"
        className="bg-[#F27052] hover:bg-[#ff8a6f] text-white font-bold text-xs px-4 py-3 rounded-full flex items-center gap-2 shadow-2xl transition-all hover:-translate-y-1 hover:scale-105 cursor-pointer"
      >
        <FileEdit className="w-4 h-4" />
        <span>Request Quote</span>
      </Link>
    </div>
  );
}