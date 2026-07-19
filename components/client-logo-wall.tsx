import Image from "next/image";
import { clients } from "@/lib/data/clients";

export default function ClientLogoWall() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {clients.map((client, idx) => (
        <div
          key={client.name}
          data-reveal
          data-reveal-delay={(idx % 8) * 60}
          className="bg-white dark:bg-white border border-slate-150 dark:border-slate-800 rounded-2xl h-24 flex items-center justify-center px-6 text-center hover:border-[#1B4D3E] transition-colors"
        >
          {client.logo ? (
            <Image
              src={client.logo}
              alt={client.name}
              width={140}
              height={64}
              className="max-h-14 w-auto object-contain"
            />
          ) : (
            <span className="font-extrabold text-sm text-slate-700">
              {client.name}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
