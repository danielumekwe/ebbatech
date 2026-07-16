import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "pallet-racking",
    slug: "pallet-racking",
    category: "warehouse-racking",
    categoryLabel: "Warehouse Racking",
    name: "Adjustable Pallet Racking",
    headline: "SEMA-compliant heavy-duty selective steel storage racking systems",
    overview: "Ebbatech Adjustable Pallet Racking is the most versatile and widely implemented storage system for palletized loads in Nigerian logistics. It provides direct, individual access to every single pallet. Built using high-tensile steel, our frames are laser-plumbed and anchored to concrete floors to support heavy payloads.",
    benefits: [
      "100% direct access to every pallet slot, optimizing retrieval routes",
      "Easily adjustable beam levels on a 50mm pitch to accommodate shifting load heights",
      "SEMA-compliant structural configuration maximizing warehouse safety factors",
      "Highly scalable from simple rows to high-bay storage configurations"
    ],
    features: [
      "Vertical column heights from 2.0 to 15 meters built to spec",
      "Pay-load limits from 1,000 kg to 4,500 kg per beam level",
      "Durable epoxy powder coat finish or hot-dip galvanized for cold rooms",
      "Includes structural safety locks, shims, floor expansion anchors, and upright protectors"
    ],
    applications: [
      "FMCG warehouse distribution centers with high stock rotation rates",
      "Industrial manufacturing spare parts storage registries",
      "Cold-chain refrigerated storage vaults",
      "Third-Party Logistics (3PL) warehousing facilities"
    ],
    industries: ["logistics", "retail", "manufacturing"],
    specifications: [
      { label: "Load Capacity", value: "Up to 4,500 kg/level" },
      { label: "Frame Heights", value: "2,000 mm to 15,000 mm" },
      { label: "Beam Spans", value: "1,200 mm to 4,500 mm" },
      { label: "Upright Section Widths", value: "80 mm, 90 mm, 100 mm, 120 mm" },
      { label: "Finish", value: "Epoxy Powder Coated or Hot-Dip Galvanized" }
    ],
    images: ["/images/pallet_racking.png"],
    brochureUrl: "/downloads/pallet-racking-brochure.pdf",
    relatedSlugs: ["pallet-shuttle-system", "long-span-shelving"]
  },
  {
    id: "pallet-shuttle-system",
    slug: "pallet-shuttle-system",
    category: "warehouse-racking",
    categoryLabel: "Warehouse Racking",
    name: "Radio Pallet Shuttle System",
    headline: "Semi-automated high-density storage shuttle cart systems",
    overview: "Our Radio Pallet Shuttle System is a semi-automated storage solution that utilizes self-propelled shuttle carts riding on steel rails in compact channels. Forklifts place the shuttle inside the channel, and it moves pallets deep into the lane, eliminating forklift drive paths and dramatically increasing storage density.",
    benefits: [
      "Maximizes volume by eliminating forklift lanes and access aisles",
      "Dramatically reduces pallet load and retrieval times",
      "Enhances warehouse operator safety and protects structural frames",
      "Ideal for both LIFO (Last-in, First-out) and FIFO operations"
    ],
    features: [
      "Autonomous radio-controlled shuttle carts with long battery lives",
      "High precision position sensors for automatic alignment",
      "Carries loads up to 1,500 kg per pallet safely",
      "Integrates with standard warehouse management system layouts"
    ],
    applications: [
      "Food and beverage bulk storage facilities",
      "High-density cold storage where airspace is premium",
      "High-volume identical SKU distributions"
    ],
    industries: ["logistics", "retail"],
    specifications: [
      { label: "Load Capacity", value: "Up to 1,500 kg per pallet" },
      { label: "Shuttle Speed", value: "Up to 1.1 m/s (loaded)" },
      { label: "Battery Type", value: "Lithium-Iron Phosphate (LiFePO4)" },
      { label: "Operational Temp", value: "-30°C to +45°C" },
      { label: "Control System", value: "Wireless Radio Remote Command" }
    ],
    images: ["/images/pallet_shuttle.png"],
    brochureUrl: "/downloads/pallet-shuttle-brochure.pdf",
    relatedSlugs: ["pallet-racking"]
  },
  {
    id: "mobile-archive-shelving",
    slug: "mobile-archive-shelving",
    category: "mobile-shelving",
    categoryLabel: "Mobile Archive Compactor",
    name: "Mobile Archive Compactor Shelving",
    headline: "High-density mechanical roll-away mobile compactors",
    overview: "Ebbatech Mobile Archive Compactor Shelving is the ultimate solution for registry space constraints. By mounting storage bays onto rolling floor steel rails, we eliminate multiple static access aisles, consolidating them into one mobile aisle. This system reclaims up to 85% of vault spaces.",
    benefits: [
      "Reclaims up to 85% of office floor space or doubles storage capacity",
      "Lockable bays and bays compression guard confidential record folders",
      "Ergonomically engineered hand-crank wheel allows single-finger operation",
      "Protects historical assets from dust, humidity, and fire exposure"
    ],
    features: [
      "Durable mechanical hand-crank gear chain systems",
      "Modular bay extensions matching standard banking vaults",
      "Heavy-duty anti-tilt safety floor rails",
      "Double-sided storage panels with adjustable document shelves"
    ],
    applications: [
      "Bank vault credit records and collateral files storage",
      "Hospital patient record archiving files",
      "Government agency registries and land deed repositories",
      "Corporate finance document archive systems"
    ],
    industries: ["banks", "government"],
    specifications: [
      { label: "Space Savings", value: "Up to 85% vs static shelves" },
      { label: "Load Capacity", value: "80 kg to 120 kg per shelf level" },
      { label: "Drive Type", value: "Mechanical hand-crank / gear ratio" },
      { label: "Locking", value: "Centralized combination/keys lock" },
      { label: "Finish", value: "Anti-corrosion powder coated steel" }
    ],
    images: ["/images/mobile_shelving.png"],
    brochureUrl: "/downloads/mobile-shelving-brochure.pdf",
    relatedSlugs: ["long-span-shelving"]
  },
  {
    id: "long-span-shelving",
    slug: "long-span-shelving",
    category: "shelving-systems",
    categoryLabel: "Shelving Systems",
    name: "Longspan Steel Shelving",
    headline: "Medium-duty industrial adjustable steel shelf systems",
    overview: "Ebbatech Longspan Steel Shelving is a medium-duty storage system ideal for hand-loaded items, boxes, and archive boxes. Highly adjustable on a 50mm vertical pitch, this shelving is simple to assemble and can support weights up to 800 kg per shelf level.",
    benefits: [
      "Optimized for manual picking operations and box filing configurations",
      "Extremely robust compared to light slotted angles",
      "Fast, boltless assembly saving installation project timelines",
      "Excellent visibility and direct accessibility to stock items"
    ],
    features: [
      "Payload limits from 300 kg to 800 kg per shelf level",
      "Adjustable levels with high-grade steel decking panels",
      "Clean epoxy powder coat paint finish protecting steel frames",
      "Modular components for multi-tier picking walkways"
    ],
    applications: [
      "Retail backroom stock storage rooms",
      "E-commerce fulfillment centers for manual item picks",
      "Office record archiving storage box rows",
      "Automotive parts sorting facilities"
    ],
    industries: ["retail", "logistics", "government"],
    specifications: [
      { label: "Load Capacity", value: "300 kg to 800 kg per level" },
      { label: "Frame Heights", value: "1,500 mm to 6,000 mm" },
      { label: "Shelf Spans", value: "900 mm to 2,700 mm" },
      { label: "Shelf Depth", value: "400 mm to 1,200 mm" },
      { label: "Decking Material", value: "Steel Panels or high-grade plywood" }
    ],
    images: ["/images/shelving_system.png"],
    brochureUrl: "/downloads/longspan-shelving-brochure.pdf",
    relatedSlugs: ["pallet-racking", "mobile-archive-shelving"]
  }
];