import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "fmcg-logistics-lagos",
    slug: "fmcg-logistics-lagos",
    title: "Doubling Storage Capacity for a Leading FMCG Distributor in Lagos",
    client: "Chinedu Logistics & Distribution Ltd",
    industry: "Logistics & Distribution",
    location: "Apapa, Lagos, Nigeria",
    challenge: "The client was facing severe storage capacity limitations in their 5,000 square meter Apapa warehouse. Because they were block-stacking pallets on the floor, their vertical space was completely wasted, pallets were frequently damaged, and retrieving items was slow and dangerous.",
    solution: "Ebbatech designed and installed an Adjustable Selective Pallet Racking system utilizing vertical height up to 10.5 meters. We created a 5-level racking layout with heavy-duty collision upright guards and safety wire mesh decks to protect pedestrian picking paths.",
    result: "The project doubled their storage capacity from 1,800 pallet slots to 3,600 pallet slots within the exact same building footprint. It also reduced SKU picking times by 40% due to direct accessibility to every pallet.",
    stats: [
      { label: "Pallet Capacity", value: "+100%" },
      { label: "Picking Speed", value: "+40%" },
      { label: "Installation Time", value: "14 Days" },
      { label: "Pallet Slots Created", value: "3,600 Slots" }
    ],
    productsUsed: ["pallet-racking"],
    images: {}
  },
  {
    id: "bank-records-compactor-ikeja",
    slug: "bank-records-compactor-ikeja",
    title: "Securing Auditable Credit File Archives for a Tier-1 Bank",
    client: "Apex Trust Bank PLC",
    industry: "Banking & Finance",
    location: "Ikeja, Lagos, Nigeria",
    challenge: "The credit risk audit registry department was run out of space inside the vault registry. Active credit file folders were spilling into corridors, causing long audit retrieval delays and risk exposures of sensitive borrower details.",
    solution: "We replaced their static shelves with a double-sided mechanical hand-crank Mobile Archive Compactor Shelving system. Each bay was fitted with centralized lockable cabinets and custom folder hanging racks.",
    result: "Reclaimed 82% of the vault floor area, creating space for another 20,000 credit files within the exact same secured room. The single-aisle setup streamlined file access speed, lowering audit retrieval delays from 45 minutes to 3 minutes.",
    stats: [
      { label: "Vault Space Reclaimed", value: "82%" },
      { label: "Archiving Capacity", value: "+120%" },
      { label: "File Retrieval Time", value: "-90%" },
      { label: "Files Accommodated", value: "+20,000" }
    ],
    productsUsed: ["mobile-archive-shelving"],
    images: {}
  }
];