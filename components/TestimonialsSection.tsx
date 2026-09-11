"use client";

import { motion } from "motion/react";
import { Quote, Sparkles, Star } from "lucide-react";
import { DESIGNER } from "@/data/designer";

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 mb-16 text-center items-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-600 dark:text-purple-400 uppercase">
          <Sparkles className="w-3.5 h-3.5" /> Endorsements
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white">
          Client Words & Impact
        </h2>
        <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
          What founders, product managers, and creative directors say about our collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {DESIGNER.testimonials.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col justify-between p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80 relative"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-1 text-purple-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-purple-600/30 dark:text-purple-400/30" />
              <p className="text-base text-zinc-800 dark:text-zinc-200 italic leading-relaxed font-serif">
                "{item.quote}"
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-zinc-950 dark:text-white">{item.author}</p>
                <p className="text-xs text-zinc-500 font-mono">{item.role}, {item.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
