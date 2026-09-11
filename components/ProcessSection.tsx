"use client";

import { motion } from "motion/react";
import { Sparkles, Layers, Compass, Palette, Send, Search } from "lucide-react";
import { DESIGNER } from "@/data/designer";

const STEP_ICONS = [Search, Compass, Layers, Palette, Send];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex flex-col gap-4 mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-600 dark:text-purple-400 uppercase">
          <Sparkles className="w-3.5 h-3.5" /> Workflow
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white">
          The Design Process
        </h2>
        <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
          A structured 5-step methodology that ensures every creative solution is backed by strategic clarity and executed to perfection.
        </p>
      </div>

      {/* Process Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {DESIGNER.process.map((step, idx) => {
          const Icon = STEP_ICONS[idx % STEP_ICONS.length];
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-purple-500/50 transition-all duration-300 group hover:shadow-xl hover:shadow-purple-500/5"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-950/80 px-2.5 py-1 rounded-md border border-purple-200 dark:border-purple-800/50">
                    {step.number}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 text-[11px] text-zinc-500 dark:text-zinc-400 font-mono leading-normal">
                {step.details}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
