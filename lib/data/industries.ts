import { Industry } from "@/types";

export const industries: Industry[] = [
  {
    id: "banks",
    slug: "banks",
    name: "Banking & Financial Institutions",
    headline: "Maximum security archiving for financial audits and secure assets",
    overview: "Financial institutions require extreme-security archiving for physical credit files, loan collateral certificates, and active customer registries. Ebbatech delivers high-density mobile compactor solutions that fit inside secure bank vaults, doubling storage capacity while providing auditable access control and fire-resistant security.",
    challenges: [
      "High cost of vault floor space, limiting archiving capacity",
      "Stricter regulatory compliance requirements for audit retrieval speeds",
      "Need to safeguard sensitive customer data from unauthorized access",
      "Heavy load requirements of dense, compressed paper record folders"
    ],
    solutions: [
      "Custom installation of Bank Vault Compactor Systems",
      "Integration of biometric and card RFID locks onto compactor cabinets",
      "Optimized document suspension systems for quick files indexing",
      "Installation of heavy-duty vaults records shelving"
    ],
    benefits: [
      "Reclaims up to 85% of valuable vault floor space",
      "Enables immediate retrieval of loan files during audits",
      "Provides full audit trails for security compliance",
      "Carries heavy paper weights with no structural deflection"
    ],
    featuredProductSlugs: ["mobile-archive-shelving", "long-span-shelving"],
    image: "/images/research_collaboration.png"
  },
  {
    id: "government",
    slug: "government",
    name: "Government Agencies & Ministries",
    headline: "Scale archiving systems for national registries and land deeds",
    overview: "Government ministries and agencies manage massive quantities of public records, registries, land deeds, and administrative files. We deliver long-term mobile archives that double vault capacities and prevent document decay.",
    challenges: [
      "Rapidly expanding paper trail and limited registry rooms",
      "Protecting records from pest destruction, dust, and dampness",
      "Ensuring employee ergonomics during heavy filing rotations"
    ],
    solutions: [
      "Central mechanical hand-crank compactor installations",
      "Double-sided mobile shelving arrays with anti-tilt stabilizers",
      "Galvanized powder-coat finishes resisting humidity"
    ],
    benefits: [
      "Doubles document filing storage in the same room footprint",
      "Keeps historical files closed, secure, and dust-protected",
      "Smooth mechanical gear ratios allowing single-finger rolling operations"
    ],
    featuredProductSlugs: ["mobile-archive-shelving", "long-span-shelving"],
    image: "/images/mobile_shelving.png"
  },
  {
    id: "logistics",
    slug: "logistics",
    name: "FMCG Logistics & Distribution",
    headline: "Heavy-duty racking designed for high warehouse stock turnover",
    overview: "High-volume distributors require fast pallet rotation and high loading dock efficiency. Ebbatech designs and anchors selective pallet racking systems to utilize vertical airspace while keeping every pallet individual and directly accessible.",
    challenges: [
      "Pallets stack damages due to bulk stacking on floor levels",
      "Inefficient retrieval paths slowing down delivery trucks load times",
      "Racking upright collisions by lift truck operators"
    ],
    solutions: [
      "Adjustable Selective Pallet Racking configuration layout",
      "Installation of steel column protector guides and guide rails",
      "SEMA-compliant weight load capacity indicator plaques"
    ],
    benefits: [
      "100% direct pallet selectivity for picking operations",
      "Substantially reduced pallet crash damages and employee injury risks",
      "Reclaims vertical headspace up to 15 meters in height"
    ],
    featuredProductSlugs: ["pallet-racking", "pallet-shuttle-system"],
    image: "/images/hero_warehouse.png"
  }
];