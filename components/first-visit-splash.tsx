"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ebbatech-splash-seen";
const DURATION = 1400;
const FADE_MS = 500;

export default function FirstVisitSplash() {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) {
      setDone(true);
      return;
    }

    document.body.style.overflow = "hidden";

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const pct = Math.min(100, Math.round(((now - start) / DURATION) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem(STORAGE_KEY, "1");
        setLeaving(true);
        window.setTimeout(() => {
          setDone(true);
          document.body.style.overflow = "";
        }, FADE_MS);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  if (done) return null;

  return (
    <div
      id="first-visit-splash"
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-slate-900 to-[#0f241d] transition-opacity ease-out ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <svg className="w-16 h-16 rounded-2xl" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="20" fill="#1B4D3E" />
        <path d="M25 22h37l5 9H20z" fill="#F27052" />
        <path d="M35 45h41l-5 9H30z" fill="#F27052" />
        <path d="M25 68h37l5 9H20z" fill="#F27052" />
      </svg>

      <div className="text-center">
        <span className="block font-extrabold text-xl tracking-tight text-white uppercase">
          Ebbatech
        </span>
        <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">
          Nigeria Limited
        </span>
      </div>

      <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full bg-[#F27052] rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <span className="text-[10px] font-bold text-slate-400 tabular-nums">{progress}%</span>
    </div>
  );
}
