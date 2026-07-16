import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { products } from "@/lib/data/products";

const categoryInfo: Record<string, { name: string; description: string }> = {
  "warehouse-racking": {
    name: "Warehouse Racking Systems",
    description: "Heavy-duty selective pallet racking, drive-in storage racks, cantilever structural frames, and radio pallet shuttles.",
  },
  "mobile-shelving": {
    name: "Mobile Compactor Shelving",
    description: "High-density hand-crank mechanical rolling file compactors for office archives, registries, and bank vault collateral storage.",
  },
  "shelving-systems": {
    name: "Industrial Shelving Systems",
    description: "Slotted angle shelving panels, medium-duty shelving layout configurations, and longspan racks for manual e-commerce picking.",
  },
};

export async function generateStaticParams() {
  return Object.keys(categoryInfo).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const info = categoryInfo[category];
  if (!info) return {};
  return {
    title: `${info.name} | Ebbatech Nigeria Limited`,
    description: info.description,
  };
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const info = categoryInfo[category];
  if (!info) notFound();

  const categoryProducts = products.filter((p) => p.category === category);

  return (
    <div className="bg-white dark:bg-[#080d0a] text-slate-900 dark:text-slate-100 min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 to-[#0f241d] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-4 text-center">
          <span className="text-[10px] font-bold text-[#F27052] uppercase tracking-widest block">
            Ebbatech Systems
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            {info.name}
          </h1>
          <p className="text-xs text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
            {info.description}
          </p>
        </div>
      </section>

      <section className="py-20 max-w-5xl mx-auto px-6 space-y-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B4D3E] dark:text-[#ff8a6f] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Catalog
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categoryProducts.map((product) => (
            <div
              key={product.slug}
              className="border border-slate-150 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm group hover:border-[#1B4D3E] dark:hover:border-[#276a55] transition-all duration-300 bg-slate-50/50 dark:bg-[#0c1410]"
            >
              <div
                className="w-full h-56 bg-cover bg-center"
                style={{ backgroundImage: `url('${product.images[0]}')` }}
              />
              <div className="p-8 space-y-4">
                <h2 className="text-xl font-extrabold text-slate-955 dark:text-white group-hover:text-[#1B4D3E] dark:group-hover:text-[#ff8a6f] transition-colors">
                  {product.name}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-455 leading-relaxed font-light">
                  {product.headline}
                </p>
                <Link
                  href={`/products/${product.category}/${product.slug}`}
                  className="bg-[#1B4D3E] hover:bg-[#276a55] text-white text-xs font-bold px-6 py-2.5 rounded-xl inline-flex items-center gap-1.5 transition-colors"
                >
                  View System <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
