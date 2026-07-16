import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JobDetailContent from "./job-content";
import { jobOpenings } from "@/lib/data/careers";

export async function generateStaticParams() {
  return jobOpenings.map((job) => ({
    id: job.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const job = jobOpenings.find((j) => j.id === id);
  if (!job) return {};
  return {
    title: `${job.title} | Careers at Ebbatech Nigeria Limited`,
    description: job.description,
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = jobOpenings.find((j) => j.id === id);
  if (!job) notFound();
  return <JobDetailContent id={id} />;
}
