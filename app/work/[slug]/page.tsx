import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles, CheckCircle2, Layers, Palette, Type } from "lucide-react";
import { PROJECTS } from "@/data/projects";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];
  const cs = project.caseStudy;

  return (
    <div className="pt-28 pb-24 px-4 sm:px-8 max-w-6xl mx-auto flex flex-col gap-16">
      {/* Top Back Navigation Link */}
      <div>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-purple-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio Archive</span>
        </Link>
      </div>

      {/* Case Study Hero Section */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3.5 py-1 rounded-full bg-purple-950/80 text-purple-300 font-mono text-xs border border-purple-800/60">
            {project.category}
          </span>
          <span className="text-xs font-mono text-zinc-500">Year: {project.year}</span>
          <span className="text-xs font-mono text-zinc-500">• Client: {project.client}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl leading-relaxed font-normal">
          {project.description}
        </p>

        {/* Services Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.services.map((service) => (
            <span
              key={service}
              className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800"
            >
              {service}
            </span>
          ))}
        </div>

        {/* Large Cover Hero Image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-zinc-800 mt-4 shadow-2xl shadow-purple-950/20">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {cs ? (
        <>
          {/* Overview, Challenge, & Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-zinc-800">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" /> 01 / Overview
              </span>
              <h3 className="text-xl font-bold text-white">Project Brief</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{cs.overview}</p>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" /> 02 / The Challenge
              </span>
              <h3 className="text-xl font-bold text-white">Core Problem</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{cs.challenge}</p>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" /> 03 / The Approach
              </span>
              <h3 className="text-xl font-bold text-white">Design Strategy</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{cs.approach}</p>
            </div>
          </div>

          {/* Design System Section */}
          <div className="flex flex-col gap-8 p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-zinc-800">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest flex items-center gap-2">
                <Palette className="w-4 h-4" /> Visual Identity Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Design System & Assets</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Color Palette */}
              <div className="md:col-span-6 flex flex-col gap-4">
                <h4 className="text-xs font-mono text-zinc-400 uppercase">Brand Color Palette</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {cs.designSystem.colors.map((color) => (
                    <div key={color.hex} className="flex flex-col gap-2 p-3 rounded-2xl bg-zinc-950 border border-zinc-800">
                      <div
                        className="w-full h-12 rounded-xl border border-white/10"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-xs font-mono font-bold text-white">{color.hex}</span>
                      <span className="text-[10px] text-zinc-400 line-clamp-1">{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography & Highlights */}
              <div className="md:col-span-6 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xs font-mono text-zinc-400 uppercase flex items-center gap-2">
                    <Type className="w-3.5 h-3.5 text-purple-400" /> Typography
                  </h4>
                  <p className="text-lg font-bold text-white font-serif">{cs.designSystem.typography.fontName}</p>
                  <p className="text-xs text-zinc-400">{cs.designSystem.typography.usage}</p>
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="text-xs font-mono text-zinc-400 uppercase flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-purple-400" /> Design Highlights
                  </h4>
                  <div className="flex flex-col gap-2">
                    {cs.designSystem.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Gallery Showcase */}
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Project Showcase Gallery</h2>
            <div className="flex flex-col gap-8">
              {cs.gallery.map((img, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950">
                    <Image
                      src={img.src}
                      alt={img.caption}
                      fill
                      sizes="100vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <p className="text-xs font-mono text-zinc-400 text-center">{img.caption}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Outcome */}
          <div className="p-8 sm:p-10 rounded-3xl bg-purple-950/30 border border-purple-900/50 flex flex-col gap-4">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
              Impact & Results
            </span>
            <h3 className="text-2xl font-bold text-white">The Outcome</h3>
            <p className="text-base text-purple-200 leading-relaxed font-normal">{cs.outcome}</p>
          </div>
        </>
      ) : null}

      {/* Next Project Navigator */}
      <div className="pt-12 border-t border-zinc-800 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-mono text-zinc-500 uppercase">Up Next</span>
          <span className="text-xl sm:text-2xl font-bold text-white">{nextProject.title}</span>
        </div>

        <Link
          href={`/work/${nextProject.slug}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 text-white font-medium text-xs hover:bg-purple-500 transition-colors shadow-lg shadow-purple-600/30"
        >
          <span>View Next Case Study</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
