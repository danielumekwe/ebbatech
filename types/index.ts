export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  previewDescription: string;
  description: string;
  items?: string[];
  bestFor?: string[];
  image: string;
  ctaLabel: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  body: string[];
  bullets?: string[];
  images: string[];
  ctaLabel: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
}
