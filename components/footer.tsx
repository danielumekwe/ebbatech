import Link from "next/link";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand & Address */}
        <div className="space-y-4 lg:col-span-2">
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
          <div className="space-y-3 pt-2 text-xs font-light max-w-sm">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#F27052] flex-shrink-0 mt-0.5" />
              <span>22 Alhaja Kofoworola Crescent, Off Awolowo Way, Ikeja, Lagos.</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#F27052] flex-shrink-0" />
              <span>(+234) 803 448 4931 · (+234) 905 559 7922</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#F27052] flex-shrink-0" />
              <span>hello@ebbatech.com.ng · sales@ebbatech.com.ng</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#F27052] flex-shrink-0" />
              <span>www.ebbatech.com.ng</span>
            </div>
          </div>
        </div>

        {/* Company */}
        <div className="space-y-4 text-xs font-bold uppercase tracking-wider">
          <h4 className="text-white text-sm font-extrabold normal-case tracking-normal">Company</h4>
          <div className="flex flex-col gap-2.5">
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/about#mission" className="hover:text-white transition-colors">Our Mission</Link>
            <Link href="/clients" className="hover:text-white transition-colors">Our Clients</Link>
          </div>
        </div>

        {/* Services & Products */}
        <div className="space-y-8">
          <div className="space-y-4 text-xs font-bold uppercase tracking-wider">
            <h4 className="text-white text-sm font-extrabold normal-case tracking-normal">Services</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/services#consulting-service" className="hover:text-white transition-colors">Consulting</Link>
              <Link href="/services#analysis-and-advice" className="hover:text-white transition-colors">Analysis & Advice</Link>
              <Link href="/services#installation-and-relocation" className="hover:text-white transition-colors">Installation & Relocation</Link>
            </div>
          </div>
          <div className="space-y-4 text-xs font-bold uppercase tracking-wider">
            <h4 className="text-white text-sm font-extrabold normal-case tracking-normal">Products</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/products#warehouse-racking" className="hover:text-white transition-colors">Heavy Duty Racking</Link>
              <Link href="/products#shelving-systems" className="hover:text-white transition-colors">Shelving Systems</Link>
              <Link href="/products#storage-solutions" className="hover:text-white transition-colors">Storage Solutions</Link>
              <Link href="/products#mobile-shelving" className="hover:text-white transition-colors">Mobile Shelving</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-slate-900 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-slate-600">
        <span>© {new Date().getFullYear()} Ebbatech Nigeria Limited. All rights reserved.</span>
        <div className="flex flex-wrap items-center gap-6">
          <Link href="/privacy" className="hover:text-slate-450 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-slate-450 transition-colors">Terms of Service</Link>
          <Link href="/cookies" className="hover:text-slate-450 transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
