import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailContent from "./service-content";
import { services } from "@/lib/data/services";

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} | Ebbatech Nigeria Limited`,
    description: service.headline,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  return <ServiceDetailContent slug={slug} />;
}
