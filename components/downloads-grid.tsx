import { FileText, Download, ShieldCheck, Database, HardDrive } from "lucide-react";

function brochureMailto(title: string) {
  return `mailto:hello@ebbatech.com.ng?subject=${encodeURIComponent(
    `Brochure request: ${title}`
  )}&body=${encodeURIComponent(`Please send me a copy of the "${title}" brochure.`)}`;
}

const downloads = [
  {
    icon: <Database className="w-8 h-8 text-[#1B4D3E]" />,
    title: "Warehouse Racking Catalogue",
    description: "Technical load limits, upright dimensions, beam spans, and safety accessory specifications for adjustable racking.",
    size: "4.2 MB",
    format: "PDF Document"
  },
  {
    icon: <HardDrive className="w-8 h-8 text-[#1B4D3E]" />,
    title: "Mobile Compactor Brochure",
    description: "Archive space optimization metrics, rolling file layouts, bank vault storage specifications, and locking mechanisms.",
    size: "2.8 MB",
    format: "PDF Document"
  },
  {
    icon: <FileText className="w-8 h-8 text-[#1B4D3E]" />,
    title: "Industrial Shelving Sheet",
    description: "Medium-duty and longspan steel shelving dimensions, steel panel thicknesses, and load capacity charts.",
    size: "1.5 MB",
    format: "PDF Document"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#1B4D3E]" />,
    title: "SEMA Racking Safety Checklist",
    description: "Ebbatech standard checklist for routine warehouse structural safety, baseplate inspection, and frame verticality checks.",
    size: "820 KB",
    format: "PDF Document"
  }
];

export default function DownloadsGrid() {
  return (
    <section className="py-20 max-w-5xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {downloads.map((d, idx) => (
          <div
            key={idx}
            className="bg-slate-50 dark:bg-[#0c1410] border border-slate-150 dark:border-slate-800 rounded-3xl p-6 flex flex-col justify-between group hover:border-[#1B4D3E] transition-all"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 bg-white dark:bg-[#080d0a] border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-center">
                {d.icon}
              </div>
              <div>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white group-hover:text-[#1B4D3E] dark:group-hover:text-[#ff8a6f] transition-colors">
                  {d.title}
                </h3>
                <p className="text-xs text-slate-555 dark:text-slate-450 leading-relaxed font-light mt-1.5">
                  {d.description}
                </p>
              </div>
            </div>

            <div className="border-t border-slate-200/60 dark:border-slate-800 pt-4 mt-6 flex items-center justify-between">
              <span className="text-[10px] font-semibold text-slate-400 uppercase">
                {d.format} • {d.size}
              </span>
              <a
                href={brochureMailto(d.title)}
                className="bg-[#1B4D3E] hover:bg-[#276a55] text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> Request Copy
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
