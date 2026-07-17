import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "consulting-service",
    slug: "consulting-service",
    name: "Consulting Service",
    body: [
      "When finding the right storage solution, it's always reassuring to have an expert by your side. Our experienced and knowledgeable sales and design team give you a world-class blend of valuable insight, guidance and practical assistance.",
      "Looking for a much more in-depth review of your warehouse or storage facility? Ebbatech Nig. Ltd. provides analysis, advice and on-going support to give you just that."
    ],
    ctaLabel: "Book a consultation"
  },
  {
    id: "analysis-and-advice",
    slug: "analysis-and-advice",
    name: "Analysis and Advice",
    body: [
      "We don't just offer general advice and guidance about your storage requirements; we go further to provide you with practical assistance and support."
    ],
    bullets: [
      "A detailed review of your current warehouse or storage facility",
      "Recommendations matched to your capacity, workflow and growth plans",
      "Practical, hands-on support through implementation"
    ],
    ctaLabel: "Request a facility review"
  },
  {
    id: "installation-and-relocation",
    slug: "installation-and-relocation",
    name: "Installation and Relocation Services",
    body: [
      "Are you moving premises? Or do you need to move the racking around in your current warehouse?",
      "Ebbatech Nigeria Limited provides installation teams for the relocation, removal and reconfiguration of your pallet racking.",
      "Contact us today for a quotation, or send us an email."
    ],
    ctaLabel: "Get a quotation"
  }
];
