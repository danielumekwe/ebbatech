import { Building2, Compass, Factory, Globe2, Layers, TrendingUp, type LucideIcon } from "lucide-react";

// Icons that content files may refer to by name.
const icons: Record<string, LucideIcon> = { Building2, Compass, Factory, Globe2, Layers, TrendingUp };

export const iconFor = (name: string): LucideIcon => icons[name] ?? Layers;
