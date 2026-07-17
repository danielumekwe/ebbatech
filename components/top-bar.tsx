import { Mail, Phone, MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden md:block bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-center gap-8 text-[11px] font-semibold text-[#F27052]">
        <a
          href="mailto:hello@ebbatech.com.ng"
          className="flex items-center gap-1.5 hover:text-[#1B4D3E] transition-colors"
        >
          <Mail className="w-3.5 h-3.5 flex-shrink-0" />
          hello@ebbatech.com.ng
        </a>
        <a
          href="tel:+2348034484931"
          className="flex items-center gap-1.5 hover:text-[#1B4D3E] transition-colors"
        >
          <Phone className="w-3.5 h-3.5 flex-shrink-0" />
          (+234) 803 448 4931
        </a>
        <span className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
          22 Alhaja Kofoworola Crescent, Ikeja, Lagos
        </span>
      </div>
    </div>
  );
}
