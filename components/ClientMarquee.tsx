"use client";

import { DESIGNER } from "@/data/designer";

export default function ClientMarquee() {
  const logos = [...DESIGNER.clientLogos, ...DESIGNER.clientLogos];

  return (
    <section className="py-16 border-y border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
          Trusted by ambitious brands worldwide
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 whitespace-nowrap">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-lg sm:text-xl font-bold font-mono text-zinc-400 dark:text-zinc-600 hover:text-purple-600 dark:hover:text-purple-400 transition-colors tracking-widest cursor-default uppercase"
            >
              <span>{logo}</span>
              <span className="text-purple-500/40 text-xs ml-4">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
