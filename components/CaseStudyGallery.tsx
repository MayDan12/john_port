"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Maximize2, Layers } from "lucide-react";

interface GalleryItem {
  src: string;
  caption: string;
  layout: "full" | "half" | "third";
}

interface CaseStudyGalleryProps {
  gallery: GalleryItem[];
  projectTitle: string;
}

export default function CaseStudyGallery({
  gallery,
  projectTitle,
}: CaseStudyGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === 0 ? gallery.length - 1 : (prev as number) - 1,
    );
  }, [selectedIndex, gallery.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === gallery.length - 1 ? 0 : (prev as number) + 1,
    );
  }, [selectedIndex, gallery.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <section className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-zinc-800">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" /> Curated Assets
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Project Showcase Gallery
          </h2>
        </div>
        <span className="text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full w-fit">
          {gallery.length} Creative Deliverables
        </span>
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {gallery.map((img, i) => {
          const isHalf = img.layout === "half";
          const isFull = img.layout === "full";

          const colSpan = isFull
            ? "col-span-full aspect-[16/9]"
            : isHalf
              ? "sm:col-span-2 aspect-[16/10] sm:aspect-[16/9]"
              : "col-span-1 aspect-square";

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              onClick={() => handleOpen(i)}
              className={`group relative ${colSpan} rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-purple-600/10 hover:border-purple-500/50 transition-all duration-300`}
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                sizes={
                  isFull
                    ? "100vw"
                    : isHalf
                      ? "(max-width: 640px) 100vw, 80vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                }
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-zinc-900/80 backdrop-blur-md text-white border border-white/10">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs font-mono text-zinc-200 truncate">
                    {img.caption}
                  </p>
                  <span className="text-[10px] font-mono text-purple-300 shrink-0 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800/40">
                    #{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/95 backdrop-blur-xl p-4 sm:p-8"
          >
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-10 bg-gradient-to-b from-zinc-950 to-transparent">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider">
                  {projectTitle}
                </span>
                <span className="text-xs font-mono text-zinc-500">•</span>
                <span className="text-xs font-mono text-zinc-300">
                  {selectedIndex + 1} / {gallery.length}
                </span>
              </div>

              <button
                onClick={handleClose}
                className="p-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 transition-colors"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700 transition-colors z-10"
              aria-label="Previous creative"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700 transition-colors z-10"
              aria-label="Next creative"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Image Container */}
            <div
              className="relative max-w-5xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[70vh] flex items-center justify-center">
                <Image
                  src={gallery[selectedIndex].src}
                  alt={gallery[selectedIndex].caption}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Caption */}
              <div className="mt-4 text-center">
                <p className="text-sm font-medium text-white">
                  {gallery[selectedIndex].caption}
                </p>
                <p className="text-xs font-mono text-zinc-400 mt-1">
                  Use arrow keys or buttons to navigate • Press Esc to close
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
