import { Mail, Phone, MapPin } from "lucide-react";
import site from "@/content/site.json";
import { telHref } from "@/lib/utils";

export default function TopBar() {
  return (
    <div className="hidden md:block bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-center gap-8 text-[11px] font-semibold text-[#F27052]">
        <a
          href={`mailto:${site.emails.general}`}
          className="flex items-center gap-1.5 hover:text-[#1B4D3E] transition-colors"
        >
          <Mail className="w-3.5 h-3.5 flex-shrink-0" />
          {site.emails.general}
        </a>
        <a
          href={telHref(site.phones[0])}
          className="flex items-center gap-1.5 hover:text-[#1B4D3E] transition-colors"
        >
          <Phone className="w-3.5 h-3.5 flex-shrink-0" />
          {site.phones[0]}
        </a>
        <span className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
          {site.address.short}
        </span>
      </div>
    </div>
  );
}
