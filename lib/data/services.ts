import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "consulting-services",
    slug: "consulting-services",
    name: "Consulting Services",
    headline: "Expert industrial storage guidance backed by global expertise",
    overview: "Finding the right storage solution can be complex. Ebbatech provides professional, end-to-end storage consultation to help businesses align their warehousing infrastructure with their long-term growth. Our experienced design and consulting team gives you a world-class blend of valuable insights, industry compliance, and practical recommendations.",
    benefits: [
      "Mitigates capital expenditure risks through precise pre-planning",
      "Ensures absolute safety and regulatory compliance from day one",
      "Optimizes product flows and warehouse layout efficiency",
      "Provides access to global storage engineering best practices"
    ],
    features: [
      "Custom storage feasibility reports and ROI assessments",
      "Evaluation of manual versus semi-automated handling equipment",
      "Analysis of space capacity based on SKU growth projections",
      "Supply chain integration advice"
    ],
    howItWorks: [
      { step: 1, title: "Initial Inquiry & Briefing", description: "We conduct an in-depth alignment call to understand your business objectives, SKU profiles, and material handling methods." },
      { step: 2, title: "On-site Storage Assessment", description: "Our engineering consultants perform a comprehensive site survey, recording accurate measurements, floor levels, and obstruction locations." },
      { step: 3, title: "Drafting Recommendations", description: "We develop architectural concepts comparing selective racking, drive-in systems, or mobile compactor layouts depending on your operational goals." },
      { step: 4, title: "Final Strategy & Delivery", description: "We deliver a comprehensive feasibility report detailing optimal layout designs, cost estimations, and structural specifications." }
    ],
    faqs: [
      { question: "Why is space consulting critical?", answer: "Consulting ensures that you do not spend capital on building expansions when a simple racking re-layout could solve your capacity storage needs." }
    ],
    images: []
  },
  {
    id: "site-surveys",
    slug: "site-surveys",
    name: "Site Surveys & CAD Layout Planning",
    headline: "Laser-accurate warehouse measurements and spatial calculations",
    overview: "Ebbatech design engineers utilize advanced laser measure technology and 3D space scanners to map your facility with millimeter precision. We then translate these records into optimized 2D/3D CAD floor blueprints showing layout spacing, safety paths, and forklift tolerances.",
    benefits: [
      "Prevents costly building measurement collision errors",
      "Optimizes rack column placement around concrete roof pillars",
      "Visualizes final storage capacity layout before structural metal assembly"
    ],
    features: [
      "Millimeter-precision laser range-finding measurements",
      "Structural floor level and concrete thickness verification",
      "Clear 2D layouts and 3D spatial renders"
    ],
    howItWorks: [
      { step: 1, title: "Laser Mapping", description: "Our field team maps the layout boundaries, identifying columns, conduits, and doors." },
      { step: 2, title: "CAD Blueprint Drafting", description: "We configure structural upright bays and load beams inside 2D CAD layouts." },
      { step: 3, title: "Tolerance Verification", description: "We run forklift turning simulations to verify safety aisle boundaries." }
    ],
    faqs: [],
    images: []
  },
  {
    id: "racking-installation",
    slug: "racking-installation",
    name: "Racking Installation & Rigging Services",
    headline: "Turnkey structural assembly and mechanical concrete anchoring",
    overview: "Our professional in-house rigging crews assemble, plumb-line, level, and anchor heavy steel uprights and beams nationwide. We follow strict HSE guidelines and work-at-height safety procedures to guarantee structural integrity.",
    benefits: [
      "Guarantees that racking stands vertical within international plumb tolerances",
      "Reduces on-site layout installation timelines through professional assembly",
      "Ensures rigid chemical or mechanical anchoring into concrete floor slabs"
    ],
    features: [
      "Rigid baseplate chemical and mechanical anchoring",
      "Rack leveling using high-strength steel shims",
      "Installation of column guards, shelf wire decks, and safety pins"
    ],
    howItWorks: [
      { step: 1, title: "Floor Marking", description: "We chalk-line the structural grids onto the concrete floor according to CAD blueprints." },
      { step: 2, title: "Frame Assembly", description: "We pre-assemble structural vertical frames and connect pallet load beams." },
      { step: 3, title: "Leveling & Anchoring", description: "We level the racks using precision laser levels, apply shims, and drill floor expansion anchors." }
    ],
    faqs: [],
    images: []
  },
  {
    id: "safety-audits",
    slug: "safety-audits",
    name: "SEMA Racking Safety Audits",
    headline: "Certified safety structural integrity checking and damage plaques",
    overview: "Safety guidelines dictate that all warehouse storage configurations undergo routine structural inspections. Ebbatech certified racking inspectors survey upright columns for forklift impact damage, verify beam deflection clearances, check connector locks, and issue safety certification plaques.",
    benefits: [
      "Mitigates structural rack collapse risks and employee liabilities",
      "Maintains compliance with industrial HSE and SEMA regulatory audits",
      "Identifies column deflections before they cause catastrophic inventory losses"
    ],
    features: [
      "Comprehensive inspection of baseplate anchors, beams, and uprights",
      "Evaluation of deflection loads and structural plumb verticality",
      "Installation of capacity warning plaques and traffic signal decals"
    ],
    howItWorks: [
      { step: 1, title: "Site Inspection", description: "We physically audit every bay row, identifying damaged columns, bent beams, and loose bolts." },
      { step: 2, title: "Deflection Logging", description: "We measure vertical beam deflections and column alignment tolerances." },
      { step: 3, title: "Safety Reporting", description: "We deliver a traffic-light report marking critical issues and supply safety load plaques." }
    ],
    faqs: [],
    images: []
  }
];