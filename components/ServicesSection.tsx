"use client";

import { motion } from "motion/react";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { DESIGNER } from "@/data/designer";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex flex-col gap-4 mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-600 dark:text-purple-400 uppercase">
          <Sparkles className="w-3.5 h-3.5" /> Capabilities
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white">
          Services & Expertise
        </h2>
        <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
          Comprehensive design capabilities tailored for modern tech startups, luxury lifestyle brands, and digital platforms.
        </p>
      </div>

      {/* Services List */}
      <div className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
        {DESIGNER.services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-purple-50/30 dark:hover:bg-purple-950/10 transition-colors px-2 sm:px-6 rounded-2xl"
          >
            {/* Number 01 / 02 / 03 / 04 / 05 */}
            <div className="md:col-span-2 text-2xl font-bold font-mono text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform origin-left">
              {service.number}
            </div>

            {/* Title */}
            <div className="md:col-span-4 flex items-center justify-between">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {service.title}
              </h3>
            </div>

            {/* Description & Skill Tags */}
            <div className="md:col-span-6 flex flex-col gap-4">
              <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 group-hover:border-purple-300 dark:group-hover:border-purple-800 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
