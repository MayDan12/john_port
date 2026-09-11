"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Mail, Sparkles, Copy, Check } from "lucide-react";
import { useState } from "react";
import { DESIGNER } from "@/data/designer";

export default function ContactCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DESIGNER.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-950 text-white p-8 sm:p-16 lg:p-20 shadow-2xl shadow-purple-950/40"
      >
        {/* Background Ambient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/20 blur-[90px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-purple-200 text-xs font-mono border border-white/10">
            <Sparkles className="w-3.5 h-3.5" /> Start a Collaboration
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Have a project in mind?
          </h2>

          <p className="text-base sm:text-xl text-purple-100/80 max-w-xl font-normal leading-relaxed">
            Let's create something meaningful, memorable, and beautifully designed for your brand.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
            <a
              href={`mailto:${DESIGNER.contactEmail}`}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-purple-950 font-bold text-sm hover:bg-purple-100 transition-all shadow-xl flex items-center justify-center gap-2 group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>{copied ? "Email Copied!" : DESIGNER.contactEmail}</span>
              {copied ? <Check className="w-4 h-4 text-green-300" /> : <Copy className="w-3.5 h-3.5 opacity-70" />}
            </button>
          </div>

          {/* Social Profiles */}
          <div className="pt-10 mt-6 border-t border-purple-700/50 w-full flex flex-wrap items-center justify-center gap-6 text-sm text-purple-200">
            {DESIGNER.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1 font-mono text-xs"
              >
                <span>{social.name}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
