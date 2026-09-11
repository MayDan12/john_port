"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles, Layers, Compass } from "lucide-react";
import { DESIGNER } from "@/data/designer";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-8 pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Ambient Purple Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] sm:h-[450px] bg-purple-600/15 dark:bg-purple-600/20 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-indigo-500/10 dark:bg-purple-900/30 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-8 relative">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800/60 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
          </span>
          <span className="text-xs font-medium text-purple-900 dark:text-purple-200 tracking-wide">
            {DESIGNER.availability}
          </span>
        </motion.div>

        {/* Hero Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-950 dark:text-white leading-[1.1] max-w-4xl"
        >
          Designing brands and digital experiences that{" "}
          <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 dark:from-purple-400 dark:via-purple-300 dark:to-indigo-300 bg-clip-text text-transparent italic font-serif">
            people remember.
          </span>
        </motion.h1>

        {/* Hero Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl font-normal leading-relaxed"
        >
          {DESIGNER.heroBio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto"
        >
          <Link
            href="/#work"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-purple-600 text-white font-medium text-sm hover:bg-purple-500 transition-all shadow-lg shadow-purple-600/25 flex items-center justify-center gap-2 group"
          >
            <span>View My Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </Link>
          <Link
            href="/#contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-medium text-sm hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 transition-all flex items-center justify-center gap-2"
          >
            <span>Let's Work Together</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Floating Creative Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="hidden lg:flex items-center justify-between w-full max-w-5xl absolute -bottom-12 left-0 right-0 pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md text-xs text-zinc-700 dark:text-zinc-300 backdrop-blur-sm pointer-events-auto"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-500" />
            <span>Graphics & UI/UX</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md text-xs text-zinc-700 dark:text-zinc-300 backdrop-blur-sm pointer-events-auto"
          >
            <Compass className="w-3.5 h-3.5 text-purple-500" />
            <span>Brand Strategy</span>
          </motion.div>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-md text-xs text-zinc-700 dark:text-zinc-300 backdrop-blur-sm pointer-events-auto"
          >
            <Layers className="w-3.5 h-3.5 text-purple-500" />
            <span>Design Systems</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
