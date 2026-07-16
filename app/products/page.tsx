import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Product Catalog | Ebbatech Nigeria Limited",
  description: "Discover our SEMA safety-compliant heavy racking, high-density compact shelving, and automated shuttle systems.",
};

export default function ProductsPage() {
  const categories = [
    {
      id: "warehouse-racking",
      name: "Warehouse Racking Systems",
      description: "Heavy-duty selective pallet racking, drive-in storage racks, cantilever structural frames, and radio pallet shuttles.",
      image: "/images/pallet_racking.png",
      link: "/products/warehouse-racking",
      specs: ["Load Capacity: Up to 4,500 kg/level", "SEMA Plumb Compliant", "Heights up to 15 meters"]
    },
    {
      id: "mobile-shelving",
      name: "Mobile Compactor Shelving",
      description: "High-density hand-crank mechanical rolling file compactors for office archives, registries, and bank vault collateral storage.",
      image: "/images/mobile_shelving.png",
      link: "/products/mobile-shelving",
      specs: ["Saves up to 85% floor space", "Centralized lockable security", "Heavy-duty anti-tilt rails"]
    },
    {
      id: "shelving-systems",
      name: "Industrial Shelving Systems",
      description: "Slotted angle shelving panels, medium-duty shelving layout configurations, and longspan racks for manual e-commerce picking.",
      image: "/images/shelving_system.png",
      link: "/products/shelving-systems",
      specs: ["Load limits: 200 - 800 kg/shelf", "Adjustable levels on 50mm pitch", "Pre-galvanized steel panels"]
    },
    {
      id: "storage-solutions",
      name: "Space Storage Solutions",
      description: "Turnkey warehouse layout engineering calculations, safety verticality plumb audits, and CAD warehouse drawing designs.",
      image: "/images/hero_warehouse.png",
      link: "/services",
      specs: ["Custom CAD layout blueprints", "SEMA capacity safety plaques", "Floor anchor inspections"]
    }
  ];

  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 to-[#0f241d] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-4 text-center">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            Ebbatech Systems
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Industrial Storage Catalog
          </h1>
          <p className="text-xs text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
            Discover our SEMA safety-compliant heavy racking, high-density compact shelving, and automated shuttle systems.
          </p>
        </div>
      </section>

      {/* Categories Banners List */}
      <section className="py-20 max-w-5xl mx-auto px-6 space-y-12">
        {categories.map((cat, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={cat.id}
              className={`flex flex-col lg:flex-row items-stretch border border-slate-150 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm group hover:border-[#1B4D3E] dark:hover:border-[#276a55] transition-all duration-300 ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image Banner */}
              <div 
                className="w-full lg:w-1/2 h-64 lg:h-auto min-h-[250px] bg-cover bg-center"
                style={{ backgroundImage: `url('${cat.image}')` }}
              />
              
              {/* Content Panel */}
              <div className="w-full lg:w-1/2 p-8 md:p-10 flex flex-col justify-between space-y-6 bg-slate-50/50 dark:bg-[#0c1410]">
                <div className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-extrabold text-slate-955 dark:text-white group-hover:text-[#1B4D3E] dark:group-hover:text-[#ff8a6f] transition-colors">
                    {cat.name}
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-455 leading-relaxed font-light">
                    {cat.description}
                  </p>
                  
                  {/* Specs Bullets */}
                  <ul className="space-y-2 pt-2">
                    {cat.specs.map((spec, specIdx) => (
                      <li key={specIdx} className="flex items-center gap-2 text-[11px] text-slate-655 dark:text-slate-400 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F27052] flex-shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Ebbatech Engineered
                  </span>
                  <Link
                    href={cat.link}
                    className="bg-[#1B4D3E] hover:bg-[#276a55] text-white text-xs font-bold px-6 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    View Systems <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}