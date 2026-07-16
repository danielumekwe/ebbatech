import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryDetailContent from "./industry-content";
import { industries } from "@/lib/data/industries";

export async function generateStaticParams() {
  return industries.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return {};
  return {
    title: `${ind.name} | Ebbatech Nigeria Limited`,
    description: ind.headline,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) notFound();
  return <IndustryDetailContent slug={slug} />;
}
