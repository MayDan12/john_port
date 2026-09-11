"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

export default function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const counts = useMemo(() => {
    const acc: Record<string, number> = { All: PROJECTS.length };
    PROJECTS.forEach((p) => {
      p.allCategories.forEach((cat) => {
        acc[cat] = (acc[cat] || 0) + 1;
      });
    });
    return acc;
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.allCategories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <section id="work" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-600 dark:text-purple-400 uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Selected Work
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Curated Design Showcase
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-xl font-normal">
            A collection of identities, interfaces, campaigns, and digital experiences created for ambitious brands.
          </p>
        </div>

        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-purple-600 dark:hover:bg-purple-400 dark:hover:text-zinc-950 transition-all shadow-sm group w-fit"
        >
          <span>View Full Archive</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Category Filters */}
      <div className="mb-12">
        <ProjectFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          counts={counts}
        />
      </div>

      {/* Dynamic Animated Project Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
            >
              <ProjectCard project={project} priority={idx < 3} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 text-zinc-500 font-mono text-sm">
          No projects found in this category.
        </div>
      )}
    </section>
  );
}
