"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { DESIGNER } from "@/data/designer";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 pt-16 pb-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 justify-between">
          {/* Left Column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-zinc-950 dark:text-white">
                {DESIGNER.name}
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
              {DESIGNER.heroBio}
            </p>
            <p className="text-xs font-mono text-purple-600 dark:text-purple-400">
              {DESIGNER.contactEmail}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              Navigation
            </span>
            <div className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <Link href="/#work" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Work
              </Link>
              <Link href="/work" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Archive
              </Link>
              <Link href="/#about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                About
              </Link>
              <Link href="/#services" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Services
              </Link>
              <Link href="/#process" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Process
              </Link>
              <Link href="/#contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              Social Network
            </span>
            <div className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              {DESIGNER.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center justify-between"
                >
                  <span>{social.name}</span>
                  <span className="text-xs font-mono text-zinc-400">{social.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© {new Date().getFullYear()} {DESIGNER.name}. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-purple-600 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
