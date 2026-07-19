import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaBannerProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export default function CtaBanner({
  eyebrow = "Get Started",
  title,
  subtitle,
  image,
  buttonLabel = "Request a Quote",
  buttonHref = "/contact",
}: CtaBannerProps) {
  return (
    <div
      data-reveal
      className="relative rounded-3xl overflow-hidden shadow-lg bg-cover bg-center"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-[#0f241d]/90 to-[#1B4D3E]/85" />
      <div className="relative px-8 py-16 md:py-20 text-center space-y-5">
        <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
          {eyebrow}
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight max-w-2xl mx-auto">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-slate-300 font-light max-w-lg mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="pt-2">
          <Link
            href={buttonHref}
            className="bg-[#F27052] hover:bg-[#ff8a6f] text-white text-sm font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg inline-flex items-center gap-1.5"
          >
            {buttonLabel} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
