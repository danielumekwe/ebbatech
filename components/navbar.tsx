"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import MegaMenu from "./mega-menu";
import TopBar from "./top-bar";
import { ThemeToggle } from "./theme-toggle";
import { productCategories } from "@/lib/data/products";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-40">
      <TopBar />
      <nav className="relative bg-white border-b border-slate-200 transition-colors">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3">
            <svg className="w-9 h-9 rounded-xl" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="20" fill="#1B4D3E" />
              <path d="M25 22h37l5 9H20z" fill="#F27052" />
              <path d="M35 45h41l-5 9H30z" fill="#F27052" />
              <path d="M25 68h37l5 9H20z" fill="#F27052" />
            </svg>
            <div>
              <span className="block font-extrabold text-lg tracking-tight text-[#1B4D3E] leading-none uppercase">
                Ebbatech
              </span>
              <span className="block text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                Nigeria Limited
              </span>
            </div>
          </Link>

          {/* Navigation Items (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 text-[10px] xl:text-xs font-bold uppercase tracking-wider text-[#F27052]">
            <Link href="/" className="hover:text-[#1B4D3E] transition-colors">
              HOME
            </Link>
            <Link href="/about" className="hover:text-[#1B4D3E] transition-colors whitespace-nowrap">
              ABOUT US
            </Link>
            <Link href="/services" className="hover:text-[#1B4D3E] transition-colors whitespace-nowrap">
              SERVICES
            </Link>

            {/* PRODUCTS (Mega Dropdown Menu) */}
            <MegaMenu />

            <Link href="/clients" className="hover:text-[#1B4D3E] transition-colors whitespace-nowrap">
              CLIENTS
            </Link>
            <Link href="/contact" className="hover:text-[#1B4D3E] transition-colors whitespace-nowrap">
              CONTACT
            </Link>
          </div>

          {/* Action CTAs (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/contact"
              className="bg-[#F27052] hover:bg-[#1B4D3E] text-white text-[10px] xl:text-xs font-bold px-5 py-3 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm whitespace-nowrap"
            >
              REQUEST A QUOTE <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Hamburger Trigger (Mobile) */}
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#F27052] cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Overlay */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-6 text-xs font-bold uppercase tracking-wider text-[#F27052] shadow-xl z-30 animate-in fade-in slide-in-from-top-2 duration-150">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-[#1B4D3E] transition-colors pb-3 border-b border-slate-100">
              HOME
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-[#1B4D3E] transition-colors pb-3 border-b border-slate-100">
              ABOUT US
            </Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-[#1B4D3E] transition-colors pb-3 border-b border-slate-100">
              SERVICES
            </Link>
            <div className="border-b border-slate-100 pb-3">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="w-full flex items-center justify-between hover:text-[#1B4D3E] transition-colors"
                aria-expanded={isProductsOpen}
              >
                PRODUCTS
                <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`} />
              </button>
              {isProductsOpen && (
                <div className="mt-3 flex flex-col gap-3 pl-3 border-l-2 border-slate-100 normal-case font-semibold text-[11px] tracking-normal">
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/products#${cat.slug}`}
                      onClick={() => {
                        setIsOpen(false);
                        setIsProductsOpen(false);
                      }}
                      className="hover:text-[#1B4D3E] transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                  <Link
                    href="/products"
                    onClick={() => {
                      setIsOpen(false);
                      setIsProductsOpen(false);
                    }}
                    className="text-[#1B4D3E] hover:text-[#F27052] transition-colors"
                  >
                    View All Products &rarr;
                  </Link>
                </div>
              )}
            </div>
            <Link href="/clients" onClick={() => setIsOpen(false)} className="hover:text-[#1B4D3E] transition-colors pb-3 border-b border-slate-100">
              CLIENTS
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#1B4D3E] transition-colors pb-3 border-b border-slate-100">
              CONTACT
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#F27052] hover:bg-[#1B4D3E] text-white text-center py-3.5 rounded-xl transition-all shadow-md"
            >
              REQUEST A QUOTE
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
