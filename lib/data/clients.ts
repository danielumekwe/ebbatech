export interface Client {
  name: string;
  logo?: string;
}

export const clients: Client[] = [
  { name: "RCCG", logo: "/images/clients/logos/rccg.png" },
  { name: "FedEx Express", logo: "/images/clients/logos/fedex-express.png" },
  { name: "FCMB", logo: "/images/clients/logos/fcmb.png" },
  { name: "Jumia" },
  { name: "Total", logo: "/images/clients/logos/total.png" },
  { name: "House of Tara International" },
  { name: "PZ Cussons", logo: "/images/clients/logos/pz-cussons.png" },
  { name: "Schneider Electric" },
  { name: "UAC", logo: "/images/clients/logos/uac.png" },
  { name: "Union Bank", logo: "/images/clients/logos/union-bank.png" },
  { name: "GTBank" },
  { name: "Fidelity Bank" },
  { name: "Nigerian Bottling Company Plc" },
  { name: "Cadbury" },
  { name: "House on the Rock" },
  { name: "Dangote" }
];

export const sectorsServed = [
  "Banking & Finance",
  "Government Agencies",
  "Data Centres",
  "Oil and Gas",
  "Multinational Companies",
  "Records & Archiving",
  "Retail",
  "FMCG & Manufacturing",
  "Logistics"
];
