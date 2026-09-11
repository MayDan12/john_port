"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { DESIGNER } from "@/data/designer";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Designer Portrait & Backdrop */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-square w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-purple-600/10">
            <Image
              src={DESIGNER.portraitImage}
              alt={DESIGNER.name}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
            />
            {/* Ambient Purple Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Experience Badge */}
          <div className="absolute -bottom-6 -right-2 sm:right-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/15 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg font-mono">
              5+
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-950 dark:text-white">Years of Excellence</p>
              <p className="text-[11px] text-zinc-500 font-mono">Global Clients & Studios</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Bio Content & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-600 dark:text-purple-400 uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Biography & Vision
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white leading-tight">
            {DESIGNER.aboutBioTitle}
          </h2>

          <div className="flex flex-col gap-4 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {DESIGNER.aboutBioParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Disciplines Grid */}
          <div className="pt-2">
            <h4 className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3">
              Core Disciplines & Expertise
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {[
                "Brand Identity",
                "UI/UX Design",
                "Digital Products",
                "Graphic Design",
                "Art Direction",
                "Web Design",
              ].map((discipline) => (
                <div
                  key={discipline}
                  className="flex items-center gap-2 text-xs font-medium text-zinc-800 dark:text-zinc-200 px-3 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                  <span>{discipline}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Editable Statistics Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 mt-2">
            {DESIGNER.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-purple-600 dark:text-purple-400 tracking-tight font-mono">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 mt-1">
                  {stat.label}
                </span>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5 line-clamp-1">
                  {stat.description}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
