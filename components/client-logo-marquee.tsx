import Image from "next/image";
import { clients } from "@/lib/data/clients";

function LogoTile({ client }: { client: (typeof clients)[number] }) {
  return (
    <div className="h-20 w-40 flex-shrink-0 bg-white rounded-2xl border border-slate-150 flex items-center justify-center px-5">
      {client.logo ? (
        <Image
          src={client.logo}
          alt={client.name}
          width={120}
          height={56}
          className="max-h-12 w-auto object-contain"
        />
      ) : (
        <span className="font-extrabold text-xs text-slate-700 text-center leading-tight">
          {client.name}
        </span>
      )}
    </div>
  );
}

export default function ClientLogoMarquee() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Left and Right Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 to-transparent dark:from-[#0a0f0d] z-10 hidden sm:block" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 to-transparent dark:from-[#0a0f0d] z-10 hidden sm:block" />

      <div className="animate-infinite-scroll">
        {clients.map((client) => (
          <LogoTile key={`a-${client.name}`} client={client} />
        ))}
        {/* Duplicate track for seamless looping */}
        {clients.map((client) => (
          <LogoTile key={`b-${client.name}`} client={client} />
        ))}
      </div>
    </div>
  );
}
