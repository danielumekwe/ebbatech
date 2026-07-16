import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailContent from "./product-content";
import { products } from "@/lib/data/products";

export async function generateStaticParams() {
  return products.map((p) => ({
    category: p.category,
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const product = products.find((p) => p.slug === slug && p.category === category);
  if (!product) return {};
  return {
    title: `${product.name} | Ebbatech Nigeria Limited`,
    description: product.headline,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const product = products.find((p) => p.slug === slug && p.category === category);
  if (!product) notFound();
  return <ProductDetailContent slug={slug} />;
}
