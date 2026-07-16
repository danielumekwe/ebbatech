export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  category: "warehouse-racking" | "shelving-systems" | "mobile-shelving" | "storage-solutions";
  categoryLabel: string;
  name: string;
  headline: string;
  overview: string;
  benefits: string[];
  features: string[];
  applications: string[];
  industries: string[];
  specifications: ProductSpecification[];
  images: string[];
  brochureUrl: string;
  relatedSlugs: string[];
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  headline: string;
  overview: string;
  benefits: string[];
  features: string[];
  howItWorks: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  images: string[];
}

export interface Industry {
  id: string;
  slug: string;
  name: string;
  headline: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  benefits: string[];
  featuredProductSlugs: string[];
  image: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  challenge: string;
  solution: string;
  result: string;
  stats: { label: string; value: string }[];
  productsUsed: string[];
  images: { before?: string; after?: string; gallery?: string[] };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: { name: string; role: string; avatar: string };
  publishedAt: string;
  readTime: string;
  image: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string; // e.g. Full-time, Contract
  description: string;
  requirements: string[];
  responsibilities: string[];
}