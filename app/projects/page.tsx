"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import allData from "@/data/data.json";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Project {
  id: number;
  slug: string;
  thumbnail: string | null;
  title: string;
  category: string;
  tagline: string;
}

// ─── Filter tag mapping (per prompt.md spec) ─────────────────────────────────
type FilterTag = "All" | "Full Stack" | "AI Agent" | "Machine Learning" | "Data Analysis" | "Blog";

const FILTERS: FilterTag[] = ["All", "Full Stack", "AI Agent", "Machine Learning", "Data Analysis", "Blog"];

function getProjectTag(project: Project): FilterTag {
  const cat = project.category.toLowerCase();
  if (
    cat.includes("machine learning") ||
    cat.includes(" ml") ||
    cat.includes("predictive analytics") ||
    cat.includes("public health research") ||
    cat.includes("healthcare research")
  ) return "Machine Learning";
  if (
    cat.includes("ai") ||
    cat.includes("agent") ||
    cat.includes("multi-agent") ||
    cat.includes("rag") ||
    cat.includes("generative ai")
  ) return "AI Agent";
  if (cat.includes("data analysis") || (cat.includes("analytics") && !cat.includes("machine"))) return "Data Analysis";
  if (cat.includes("blog")) return "Blog";
  return "Full Stack";
}

// ─── Card Themes ──────────────────────────────────────────────────────────────
const CARD_THEMES = [
  { pastelBg: "bg-[#eef8db]", accentColor: "#65a30d", dotColor: "#84cc16", categoryColor: "#65a30d" },
  { pastelBg: "bg-[#fee5e5]", accentColor: "#e11d48", dotColor: "#f43f5e", categoryColor: "#e11d48" },
  { pastelBg: "bg-[#e0efff]", accentColor: "#0284c7", dotColor: "#0ea5e9", categoryColor: "#0284c7" },
  { pastelBg: "bg-[#f0e8ff]", accentColor: "#7c3aed", dotColor: "#8b5cf6", categoryColor: "#7c3aed" },
  { pastelBg: "bg-[#fef3c7]", accentColor: "#d97706", dotColor: "#f59e0b", categoryColor: "#d97706" },
  { pastelBg: "bg-[#ccfbf1]", accentColor: "#0d9488", dotColor: "#14b8a6", categoryColor: "#0d9488" },
];

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, themeIndex }: { project: Project; themeIndex: number }) {
  const theme = CARD_THEMES[themeIndex % CARD_THEMES.length];
  const displayTitle = project.title.split("—")[0].trim();

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group bg-white rounded-[22px] border border-[#e8e8ea] shadow-[0_4px_20px_rgba(20,20,35,0.05)] hover:shadow-[0_16px_40px_rgba(20,20,35,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1447df]"
      aria-label={`View ${project.title}`}
    >
      {/* ── Thumbnail block ── */}
      <div className={`w-full h-[180px] sm:h-[200px] ${theme.pastelBg} relative overflow-hidden flex items-end justify-center p-3`}>
        <div className="w-[90%] h-[88%] bg-white rounded-t-[10px] shadow-md border border-black/5 overflow-hidden flex flex-col transform translate-y-1.5 group-hover:translate-y-0 transition-transform duration-300">
          <div className="h-[18px] bg-white border-b border-black/5 px-2 flex items-center gap-1 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f57]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#febc2e]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="relative flex-1 bg-stone-50 overflow-hidden">
            {project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt={displayTitle}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-white to-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.accentColor }}>
                  {project.category}
                </span>
                <span className="text-sm font-bold text-[#141416] mt-1 font-serif line-clamp-2">{displayTitle}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="px-5 pt-4 pb-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-bold text-[17px] text-[#141416] group-hover:text-[#1447df] transition-colors leading-tight line-clamp-1 flex-1">
            {displayTitle}
          </h3>
          <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: theme.dotColor }} />
        </div>
        <p className="text-[12px] font-semibold tracking-wide line-clamp-1 mb-2" style={{ color: theme.categoryColor }}>
          {project.category}
        </p>
        <p className="text-[13px] text-[#555962] leading-[1.45] line-clamp-2 flex-1">
          {project.tagline}
        </p>
        <div className="mt-3 pt-3 border-t border-black/5 flex items-center justify-between">
          <span className="text-[13px] font-semibold text-[#1447df]">View Case Study</span>
          <div className="relative w-4 h-4 shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#1447df] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true">
              <path d="M9 6.65032C9 6.65032 15.9383 6.10759 16.9154 7.08463C17.8924 8.06167 17.3496 15 17.3496 15M16.5 7.5L6.5 17.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─── Coming Soon Empty State ───────────────────────────────────────────────────
function ComingSoon({ category }: { category: string }) {
  return (
    <div className="col-span-full flex justify-center py-16">
      <div className="bg-white rounded-[22px] border border-[#e8e8ea] shadow-[0_4px_20px_rgba(20,20,35,0.05)] p-10 flex flex-col items-center max-w-sm text-center">
        {/* Doodle sparkle cluster */}
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mb-5 opacity-80" aria-hidden="true">
          <path d="M32 8C32 20 44 32 56 32C44 32 32 44 32 56C32 44 20 32 8 32C20 32 32 20 32 8Z" fill="#f87171" opacity="0.8" />
          <path d="M16 16C16 22 22 28 28 28C22 28 16 34 16 40C16 34 10 28 4 28C10 28 16 22 16 16Z" fill="#90d72f" opacity="0.7" />
          <path d="M48 36C48 40 52 44 56 44C52 44 48 48 48 52C48 48 44 44 40 44C44 44 48 40 48 36Z" fill="#1447df" opacity="0.5" />
        </svg>
        <p className="text-[11px] font-bold uppercase tracking-widest text-[#9ca3af] mb-2">Coming Soon</p>
        <h3 className="text-[20px] font-bold text-[#141416] mb-2">New {category} Projects</h3>
        <p className="text-[14px] text-[#6b7280] leading-relaxed">
          New {category} projects are on the way — check back soon!
        </p>
      </div>
    </div>
  );
}

// ─── Doodle decorations ───────────────────────────────────────────────────────
/** 3 radiating lines (black) — exact angles (\ - /) matching screenshot */
function ThreeBlackLines({ className = "" }: { className?: string }) {
  return (
    <svg width="46" height="52" viewBox="0 0 46 52" fill="none" aria-hidden="true" className={className}>
      {/* Top line — angle \ */}
      <path d="M 6 6 L 34 20" stroke="#141416" strokeWidth="3.2" strokeLinecap="round" />
      {/* Middle line — angle — */}
      <path d="M 2 26 L 38 26" stroke="#141416" strokeWidth="3.2" strokeLinecap="round" />
      {/* Bottom line — angle / */}
      <path d="M 6 46 L 34 32" stroke="#141416" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}

function SparkStar({ size = 26, color = "#f87171", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`animate-star-pulse ${className}`}>
      <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" fill={color} />
    </svg>
  );
}

/** Green curly doodle loop matching screenshot */
function GreenCurl({ className = "" }: { className?: string }) {
  return (
    <svg width="44" height="64" viewBox="0 0 44 64" fill="none" aria-hidden="true" className={className}>
      <circle cx="28" cy="6" r="3.2" fill="#84cc16" />
      <path
        d="M 28 8 C 36 14, 38 22, 28 26 C 18 30, 14 20, 26 18 C 38 16, 36 34, 24 38 C 12 42, 10 32, 22 30 C 32 28, 32 46, 20 52 C 14 56, 10 58, 6 62"
        stroke="#84cc16"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Filter badge colors ───────────────────────────────────────────────────────
const FILTER_ACTIVE_COLORS: Record<FilterTag, string> = {
  "All":              "bg-[#141416] text-white",
  "Full Stack":       "bg-[#1447df] text-white",
  "AI Agent":         "bg-[#7c3aed] text-white",
  "Machine Learning": "bg-[#0d9488] text-white",
  "Data Analysis":    "bg-[#d97706] text-white",
  "Blog":             "bg-[#e11d48] text-white",
};

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterTag>("All");

  const allProjects = (allData.projects || []) as unknown as Project[];

  const filtered = useMemo(() => {
    if (activeFilter === "All") return allProjects;
    return allProjects.filter((p) => getProjectTag(p) === activeFilter);
  }, [activeFilter, allProjects]);

  const isEmpty = filtered.length === 0;

  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex-1 pt-6 sm:pt-10 pb-16 sm:pb-24">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-14">

          {/* ─── PAGE HEADER ─── */}
          <div className="relative mb-8 sm:mb-10">
            {/* Left side: 3 radiating lines (\ - /) + coral sparkle star TOGETHER */}
            <div className="absolute -left-2 sm:left-1 top-4 pointer-events-none select-none hidden sm:flex flex-col items-center gap-3">
              <ThreeBlackLines />
              <SparkStar size={24} color="#f87171" />
            </div>

            {/* Right side arrow swirl & stars — clear and sharp */}
            <div className="absolute right-2 sm:right-6 lg:right-10 -top-3 pointer-events-none select-none hidden sm:block">
              <div className="relative w-[86px] sm:w-[102px] h-auto rotate-[8deg]">
                <img
                  src="/hero-figma/arrow-swirl-top.svg"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <SparkStar size={22} color="#f87171" className="absolute right-28 sm:right-36 top-1 pointer-events-none select-none hidden sm:block" />
            <SparkStar size={16} color="#90d72f" className="absolute right-24 sm:right-30 top-16 pointer-events-none select-none hidden sm:block" />

            <div className="pl-0 sm:pl-12">
              {/* Back to home */}
              <Link href="/#projects" className="inline-flex items-center gap-1.5 text-[13px] text-[#6b7280] hover:text-[#141416] transition-colors mb-2 sm:mb-3 group">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M 11 7 L 3 7 M 6 3 L 2 7 L 6 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back
              </Link>

              {/* Heading */}
              <h1
                className="font-serif font-bold text-[#1447df] text-[40px] sm:text-[54px] lg:text-[68px] tracking-tight leading-[0.92] mb-3"
                style={{ fontFamily: "var(--font-recoleta), var(--font-fraunces), serif" }}
              >
                All Projects
              </h1>

              {/* Lime squiggle underline */}
              <div className="w-[160px] sm:w-[240px] lg:w-[290px] mb-3 sm:mb-4">
                <svg className="w-full h-[12px] sm:h-[15px] text-[#90d72f] overflow-visible" viewBox="0 0 290 14" fill="none">
                  <path d="M 4 8 C 50 5, 130 10, 200 6 C 235 4, 268 7, 286 8" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
                </svg>
              </div>

              <p className="text-[15px] sm:text-[17px] text-[#555962] font-medium max-w-[500px] leading-[1.5]">
                A curated collection of things I&apos;ve built — web apps, AI systems, and everything in between.
              </p>
            </div>
          </div>

          {/* ─── FILTER TAB BAR ─── */}
          <div className="relative mb-8 sm:mb-10">
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {FILTERS.map((f) => {
                const isActive = activeFilter === f;
                return (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    aria-pressed={isActive}
                    className={`px-4 sm:px-5 py-2 rounded-[10px] text-[13px] sm:text-[14px] font-semibold transition-all duration-200 border cursor-pointer ${
                      isActive
                        ? `${FILTER_ACTIVE_COLORS[f]} border-transparent shadow-md`
                        : "bg-white text-[#374151] border-[#e5e7eb] hover:border-[#d1d5db] hover:shadow-sm hover:-translate-y-px"
                    }`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ─── PROJECT GRID ─── */}
          <div className="relative">
            {/* ── LEFT SIDE: 3 radiating lines (\ - /) + coral sparkle star TOGETHER beside the cards ── */}
            <div className="absolute -left-8 sm:-left-11 lg:-left-12 -top-4 sm:-top-5 z-20 pointer-events-none select-none hidden md:flex flex-col items-center gap-3">
              <ThreeBlackLines />
              <SparkStar size={26} color="#f87171" />
            </div>

            {/* ── RIGHT SIDE: Green curl doodle + two coral sparkle stars ── */}
            <div className="absolute -right-8 sm:-right-11 lg:-right-12 -top-4 z-20 pointer-events-none select-none hidden md:flex flex-col items-center gap-3">
              <GreenCurl />
              <div className="flex items-end gap-1.5">
                <SparkStar size={18} color="#f87171" className="mb-2" />
                <SparkStar size={30} color="#f87171" />
              </div>
            </div>

            {isEmpty ? (
              <div className="grid grid-cols-1">
                <ComingSoon category={activeFilter} />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
                {filtered.map((project, index) => (
                  <ProjectCard key={project.id} project={project} themeIndex={index} />
                ))}
              </div>
            )}
          </div>

          {/* ─── COUNT BAR ─── */}
          {!isEmpty && (
            <p className="mt-8 text-center text-[13px] text-[#9ca3af] font-medium">
              Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
              {activeFilter !== "All" ? ` in ${activeFilter}` : ""}
            </p>
          )}
        </div>
      </main>

      {/* ─── FOOTER CTA ─── */}
      <footer className="bg-[#141416] text-white py-14 sm:py-20 px-5 sm:px-8">
        <div className="max-w-[700px] mx-auto text-center">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#6b7280] mb-3">Let&apos;s Collaborate</p>
          <h2
            className="font-serif font-bold text-[30px] sm:text-[40px] leading-tight mb-5"
            style={{ fontFamily: "var(--font-recoleta), var(--font-fraunces), serif" }}
          >
            Have a project in mind?
          </h2>
          <p className="text-[16px] text-[#9ca3af] mb-8 leading-relaxed">
            Let&apos;s build something amazing together. I&apos;m always open to new opportunities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:anthickumarsingh@gmail.com"
              className="px-6 py-3 rounded-[10px] bg-white text-[#141416] font-bold text-[15px] hover:bg-[#f5f5f5] transition-colors"
            >
              Get in Touch
            </a>
            <Link
              href="/#about"
              className="px-6 py-3 rounded-[10px] border border-[#374151] text-white font-semibold text-[15px] hover:border-[#6b7280] transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
