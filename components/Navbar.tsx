"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { DESIGNER } from "@/data/designer";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Work", href: "/#work" },
  { name: "Archive", href: "/work" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Process", href: "/#process" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 py-4",
          scrolled
            ? "glass-nav shadow-sm border-b border-zinc-200/50 dark:border-zinc-800/50 py-3"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Designer Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-lg font-bold tracking-tight text-zinc-900 dark:text-white"
          >
            <span className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {DESIGNER.name}
            </span>
            <span className="hidden sm:inline-block text-xs px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-mono border border-purple-200 dark:border-purple-800/50">
              Studio
            </span>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-100/70 dark:bg-zinc-900/70 px-4 py-1.5 rounded-full border border-zinc-200/60 dark:border-zinc-800/60 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 relative",
                    isActive
                      ? "text-zinc-950 dark:text-white font-semibold"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-purple-600 dark:hover:bg-purple-400 dark:hover:text-zinc-950 transition-all shadow-sm hover:shadow-purple-500/20"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" /> Navigation
                </span>
                <span className="text-xs text-zinc-500">{DESIGNER.availability}</span>
              </div>
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-light tracking-tight text-zinc-200 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-zinc-800">
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 text-center text-sm font-semibold rounded-full bg-purple-600 text-white hover:bg-purple-500 transition-colors shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="text-center text-xs text-zinc-500 font-mono">
                {DESIGNER.contactEmail}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
