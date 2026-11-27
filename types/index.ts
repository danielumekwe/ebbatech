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
  enquiryType: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  body: string[];
  bullets?: string[];
  images: string[];
  ctaLabel: string;
  enquiryType: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
}

export interface HeroSlide {
  image: string;
  badge: string;
  heading: string;
  headingHighlight?: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export interface SeoEntry {
  title: string;
  description: string;
  shareImage?: string;
}

export interface LegalContent {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: { heading: string; body: string }[];
}
