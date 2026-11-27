import clientData from "@/content/clients.json";
import sectorData from "@/content/sectors.json";
export interface Client {
  name: string;
  logo?: string;
}

export const clients: Client[] = clientData;

export const sectorsServed = sectorData.map((sector) => sector.name);
