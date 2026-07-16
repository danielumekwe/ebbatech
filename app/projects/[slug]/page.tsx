import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailContent from "./project-content";
import { caseStudies } from "@/lib/data/projects";

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Ebbatech Nigeria Limited`,
    description: project.challenge,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectDetailContent slug={slug} />;
}
