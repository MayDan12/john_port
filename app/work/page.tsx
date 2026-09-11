"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Search, Sparkles, Filter } from "lucide-react";
import { PROJECTS, CATEGORIES } from "@/data/projects";
import ProjectFilter from "@/components/ProjectFilter";

export default function WorkArchivePage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

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
    return PROJECTS.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.allCategories.includes(activeCategory);
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.services.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-12">
      {/* Archive Page Header */}
      <div className="flex flex-col gap-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-400 uppercase">
          <Sparkles className="w-3.5 h-3.5" /> Complete Archive
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
          Portfolio Archive
        </h1>
        <p className="text-base text-zinc-400 font-normal leading-relaxed">
          An extensive collection of selected client works, brand identity systems, product interfaces, and experimental design explorations.
        </p>
      </div>

      {/* Controls Bar: Search & Category Tabs */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 pb-6 border-b border-zinc-800">
        <div className="flex-1 max-w-md relative">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search projects, services, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>

        <ProjectFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          counts={counts}
        />
      </div>

      {/* Masonry / Editorial Project Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="group relative flex flex-col rounded-2xl bg-zinc-900/60 border border-zinc-800 overflow-hidden hover:border-purple-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-purple-500/10"
            >
              <Link
                href={`/work/${project.slug}`}
                className="relative aspect-[16/11] w-full overflow-hidden bg-zinc-950 block"
              >
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-white">{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-purple-400" />
                  </div>
                  <p className="text-xs text-zinc-300 line-clamp-2">{project.description}</p>
                </div>
              </Link>

              <div className="p-5 flex items-center justify-between border-t border-zinc-800/60 bg-zinc-900/40">
                <div className="flex flex-col gap-0.5">
                  <span className="text-base font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </span>
                  <span className="text-xs text-zinc-400">{project.category}</span>
                </div>
                <span className="text-xs font-mono text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded-md border border-purple-800/40">
                  {project.year}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-24 flex flex-col items-center gap-3">
          <p className="text-lg text-zinc-400 font-mono">No matching projects found.</p>
          <button
            onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
            className="text-xs text-purple-400 underline"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
