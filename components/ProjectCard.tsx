"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden hover:border-purple-500/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-purple-500/5"
    >
      {/* Project Cover Image Container */}
      <Link href={`/work/${project.slug}`} className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900 block">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Hover Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-zinc-900/90 text-zinc-950 dark:text-white font-medium text-xs backdrop-blur-md shadow-lg">
            <span>View Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-purple-600" />
          </span>
          <span className="text-xs font-mono text-purple-300 bg-purple-950/80 px-2.5 py-1 rounded-md border border-purple-800/50">
            {project.year}
          </span>
        </div>

        {/* Category Pill Tag top left */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950/70 text-white font-medium text-xs backdrop-blur-md border border-white/10">
            <Sparkles className="w-3 h-3 text-purple-400" />
            {project.category}
          </span>
        </div>
      </Link>

      {/* Project Content Meta */}
      <div className="flex flex-col flex-1 p-6 sm:p-7 justify-between gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <Link href={`/work/${project.slug}`}>
              <h3 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
            </Link>
            <span className="text-xs font-mono text-zinc-500">{project.year}</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Services Badges */}
        <div className="flex flex-wrap items-center justify-between pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 gap-2">
          <div className="flex flex-wrap gap-1.5">
            {project.services.slice(0, 3).map((service) => (
              <span
                key={service}
                className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-zinc-100 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50"
              >
                {service}
              </span>
            ))}
          </div>

          <Link
            href={`/work/${project.slug}`}
            className="text-xs font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center gap-1 group/link"
          >
            <span>Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
