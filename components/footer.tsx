import Link from "next/link";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import navigation from "@/content/navigation.json";
import site from "@/content/site.json";

export default function Footer() {
  const { columns, legalLinks, copyright } = navigation.footer;

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
              <span>{site.address.full}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#F27052] flex-shrink-0" />
              <span>{site.phones.join(" · ")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#F27052] flex-shrink-0" />
              <span>{site.emails.general} · {site.emails.sales}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#F27052] flex-shrink-0" />
              <span>{site.website}</span>
            </div>
          </div>
        </div>

        {/* Company */}
        <div className="space-y-4 text-xs font-bold uppercase tracking-wider">
          <h4 className="text-white text-sm font-extrabold normal-case tracking-normal">{columns.company.title}</h4>
          <div className="flex flex-col gap-2.5">
            {columns.company.links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>

        {/* Services & Products */}
        <div className="space-y-8">
          <div className="space-y-4 text-xs font-bold uppercase tracking-wider">
            <h4 className="text-white text-sm font-extrabold normal-case tracking-normal">{columns.services.title}</h4>
            <div className="flex flex-col gap-2.5">
              {columns.services.links.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
              ))}
            </div>
          </div>
          <div className="space-y-4 text-xs font-bold uppercase tracking-wider">
            <h4 className="text-white text-sm font-extrabold normal-case tracking-normal">{columns.products.title}</h4>
            <div className="flex flex-col gap-2.5">
              {columns.products.links.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-slate-900 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-slate-600">
        <span>© {new Date().getFullYear()} {copyright}</span>
        <div className="flex flex-wrap items-center gap-6">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-slate-450 transition-colors">{link.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
