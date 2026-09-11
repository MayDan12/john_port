"use client";

import { motion } from "motion/react";
import { CATEGORIES } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectFilterProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  counts: Record<string, number>;
}

export default function ProjectFilter({
  activeCategory,
  onSelectCategory,
  counts,
}: ProjectFilterProps) {
  return (
    <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar py-2 gap-2 w-full">
      {CATEGORIES.map((category) => {
        const isActive = activeCategory === category;
        const count = counts[category] || 0;

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={cn(
              "relative px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 whitespace-nowrap flex items-center gap-2",
              isActive
                ? "text-white dark:text-zinc-950 font-semibold shadow-md shadow-purple-600/20"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="activeFilterPill"
                className="absolute inset-0 bg-purple-600 dark:bg-purple-400 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span>{category}</span>
            <span
              className={cn(
                "text-[10px] font-mono px-1.5 py-0.5 rounded-full",
                isActive
                  ? "bg-purple-700/60 dark:bg-purple-200/60 text-white dark:text-purple-950"
                  : "bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
              )}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
