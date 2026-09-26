"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import CoffeeCupLottie from "./CoffeeCupLottie";
import allProjectsData from "@/data/data.json";

// ─── Card Themes (pastel palette matching the reference screenshot) ───────────
const CARD_THEMES = [
  { pastelBg: "bg-[#eef8db]", accentColor: "#65a30d", dotColor: "#84cc16", categoryColor: "#65a30d" },
  { pastelBg: "bg-[#fee5e5]", accentColor: "#e11d48", dotColor: "#f43f5e", categoryColor: "#e11d48" },
  { pastelBg: "bg-[#e0efff]", accentColor: "#0284c7", dotColor: "#0ea5e9", categoryColor: "#0284c7" },
  { pastelBg: "bg-[#f0e8ff]", accentColor: "#7c3aed", dotColor: "#8b5cf6", categoryColor: "#7c3aed" },
  { pastelBg: "bg-[#fef3c7]", accentColor: "#d97706", dotColor: "#f59e0b", categoryColor: "#d97706" },
  { pastelBg: "bg-[#ccfbf1]", accentColor: "#0d9488", dotColor: "#14b8a6", categoryColor: "#0d9488" },
];

// ─── Inline SVG Doodles ───────────────────────────────────────────────────────

/**
 * 3 diagonal slash-strokes (black) — like `/` marks going lower-left → upper-right.
 * Matches the reference screenshot exactly.
 */
/** 3 radiating lines (black) — left side of carousel, exact angles (\ - /) matching screenshot */
function ThreeBlackLines({ className = "" }: { className?: string }) {
  return (
    <svg
      width="46"
      height="52"
      viewBox="0 0 46 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Top stroke — angle \ */}
      <path d="M 6 6 L 34 20" stroke="#141416" strokeWidth="3.2" strokeLinecap="round" />
      {/* Middle stroke — angle — */}
      <path d="M 2 26 L 38 26" stroke="#141416" strokeWidth="3.2" strokeLinecap="round" />
      {/* Bottom stroke — angle / */}
      <path d="M 6 46 L 34 32" stroke="#141416" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}

/** 3 angled spark-lines (coral/red) — right of "See All Projects" button */
function ThreeRedLines({ className = "" }: { className?: string }) {
  return (
    <svg
      width="30"
      height="28"
      viewBox="0 0 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Top slash — angled up-right */}
      <path d="M 14 4 L 26 2" stroke="#f87171" strokeWidth="2.6" strokeLinecap="round" />
      {/* Middle slash — angled */}
      <path d="M 10 14 L 26 12" stroke="#f87171" strokeWidth="2.6" strokeLinecap="round" />
      {/* Bottom slash — angled */}
      <path d="M 14 24 L 28 22" stroke="#f87171" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

/** Coral ✦ sparkle star */
function SparkleStar({ size = 28, color = "#f87171", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`animate-star-pulse ${className}`} aria-hidden="true">
      <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" fill={color} />
    </svg>
  );
}

/** Green curly doodle loop matching screenshot */
function GreenCurl({ className = "" }: { className?: string }) {
  return (
    <svg
      width="44"
      height="64"
      viewBox="0 0 44 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Top circle dot */}
      <circle cx="28" cy="6" r="3.2" fill="#84cc16" />
      {/* Curling loops downwards */}
      <path
        d="M 28 8 C 36 14, 38 22, 28 26 C 18 30, 14 20, 26 18 C 38 16, 36 34, 24 38 C 12 42, 10 32, 22 30 C 32 28, 32 46, 20 52 C 14 56, 10 58, 6 62"
        stroke="#84cc16"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Project Card ──────────────────────────────────────────────────────────────
interface CardProject {
  id: number;
  slug: string;
  thumbnail: string | null;
  title: string;
  category: string;
  tagline: string;
}

function ProjectCard({ project, theme, index }: { project: CardProject; theme: typeof CARD_THEMES[0]; index: number }) {
  // Shorten title at "—" for display
  const displayTitle = project.title.split("—")[0].trim();

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="w-[310px] sm:w-[330px] shrink-0 bg-white rounded-[24px] border border-[#e8e8ea] shadow-[0_6px_24px_rgba(20,20,35,0.05)] hover:shadow-[0_18px_44px_rgba(20,20,35,0.10)] hover:-translate-y-2 transition-all duration-300 flex flex-col cursor-pointer group select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1447df]"
      tabIndex={0}
      aria-label={`View ${project.title}`}
    >
      {/* ── Top Preview: Pastel Background + Device Mocks ── */}
      <div className={`w-full h-[190px] sm:h-[200px] rounded-t-[24px] ${theme.pastelBg} p-3 relative overflow-hidden flex items-end justify-center`}>

        {/* Desktop browser window mockup */}
        <div className="w-[88%] h-[88%] bg-white rounded-t-[10px] shadow-md border border-black/5 overflow-hidden flex flex-col transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {/* Browser chrome: three dots */}
          <div className="h-5 bg-white border-b border-black/5 px-2.5 flex items-center gap-1.5 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f57]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#febc2e]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
          </div>
          {/* Screenshot */}
          <div className="relative flex-1 bg-stone-50 overflow-hidden">
            {project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt={displayTitle}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="290px"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-gradient-to-br from-white to-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.accentColor }}>{project.category}</span>
                <span className="text-sm font-bold text-[#141416] mt-1 font-serif line-clamp-2">{displayTitle}</span>
              </div>
            )}
          </div>
        </div>

        {/* Mobile phone mockup overlay — right foreground */}
        <div className="absolute right-3 bottom-0 w-[60px] sm:w-[66px] h-[105px] sm:h-[115px] rounded-[11px] border-[2.5px] border-white shadow-xl bg-white overflow-hidden transform translate-y-3 group-hover:translate-y-1 transition-transform duration-300 hidden sm:flex flex-col">
          <div className="h-2 bg-white flex justify-center items-center shrink-0">
            <span className="w-3.5 h-[2px] rounded-full bg-stone-300" />
          </div>
          <div className="relative flex-1 bg-stone-100 overflow-hidden">
            {project.thumbnail ? (
              <Image src={project.thumbnail} alt="" fill className="object-cover object-center" sizes="70px" />
            ) : (
              <div className="w-full h-full bg-gradient-to-b from-stone-50 to-stone-200" />
            )}
          </div>
        </div>
      </div>

      {/* ── Bottom Content ── */}
      <div className="px-5 pt-4 pb-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Title + Status Dot */}
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-[18px] text-[#141416] group-hover:text-[#1447df] transition-colors leading-tight line-clamp-1 flex-1">
              {displayTitle}
            </h3>
            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: theme.dotColor }} aria-hidden="true" />
          </div>

          {/* Category */}
          <p className="text-[13px] font-semibold mt-1 tracking-wide line-clamp-1" style={{ color: theme.categoryColor }}>
            {project.category}
          </p>

          {/* Tagline */}
          <p className="text-[13.5px] text-[#555962] leading-[1.48] mt-2 line-clamp-2">
            {project.tagline}
          </p>
        </div>

        {/* View Case Study → link */}
        <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between">
          <span className="text-[14px] font-semibold text-[#1447df] flex items-center gap-1.5">
            View Case Study
          </span>
          {/* Arrow — right-aligned, slides on hover */}
          <span
            className="text-[18px] font-bold text-[#1447df] transform group-hover:translate-x-1.5 transition-transform duration-200 leading-none"
            aria-hidden="true"
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function SelectedWorkSection() {
  const rawProjects = (allProjectsData.projects || []) as unknown as CardProject[];

  // Featured project IDs for the infinite marquee
  const featuredIds = [3, 1, 5, 2, 8, 4, 11, 9, 10, 12];
  const featured = featuredIds
    .map((id) => rawProjects.find((p) => p.id === id))
    .filter(Boolean) as CardProject[];

  // Double for seamless infinite loop (50% translate)
  const marqueeItems = [...featured, ...featured];

  return (
    <section
      id="projects"
      aria-label="Selected Work"
      className="w-full bg-[#fef9f5] pt-16 sm:pt-20 pb-20 sm:pb-28 overflow-hidden relative"
    >
      {/* Coral sparkle left — below & left of carousel */}
      <SparkleStar size={26} color="#f87171" className="absolute left-4 sm:left-8 top-[62%] pointer-events-none select-none z-10" />

      {/* ────────────────────────────────────────────────────────
          HEADER ROW — "Selected Work" + subtitle + Coffee Lottie
      ──────────────────────────────────────────────────────── */}
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 mb-10 sm:mb-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-8">

          {/* Left: Heading + lime brush underline */}
          <div className="shrink-0">
            <h2 className="hero-title-font font-serif font-bold text-[#1447df] text-[46px] sm:text-[56px] lg:text-[64px] tracking-tight leading-[0.95] m-0 p-0">
              Selected Work
            </h2>
            {/* Lime brush-stroke underline */}
            <div className="w-[185px] sm:w-[248px] lg:w-[276px] mt-2 pointer-events-none select-none">
              <svg className="w-full h-[13px] sm:h-[15px] text-[#90d72f] overflow-visible" viewBox="0 0 260 14" fill="none">
                <path d="M 4 8 C 48 5, 120 9, 185 6 C 215 4.8, 242 7, 256 8" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Right: Subtitle text + Coffee Cup Lottie */}
          <div className="flex items-center gap-4 self-start sm:self-end">
            <p className="text-[18px] sm:text-[20px] text-[#2c3038] font-medium leading-[1.45] tracking-[-0.01em] max-w-[260px] sm:max-w-[300px]">
              Here are a few things I&apos;ve built with passion and lots of coffee.
            </p>
            {/* Coffee Cup Lottie */}
            <CoffeeCupLottie size={140} className="relative -top-1 shrink-0" />
          </div>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────
          CAROUSEL WRAPPER — left & right side doodles + infinite scroll
      ──────────────────────────────────────────────────────── */}
      <div className="relative w-full">
        {/* ── LEFT side doodles — 3 radiating lines (\ - /) + coral sparkle star together ── */}
        <div className="absolute left-2 sm:left-5 lg:left-7 -top-4 sm:-top-5 z-30 pointer-events-none select-none flex flex-col items-center gap-3">
          <ThreeBlackLines />
          <SparkleStar size={26} color="#f87171" />
        </div>

        {/* ── RIGHT side doodles ── */}
        {/* Green curl doodle — upper-right beside carousel (matches screenshot) */}
        <div className="absolute right-3 sm:right-6 lg:right-8 -top-5 sm:-top-7 z-30 pointer-events-none select-none">
          <GreenCurl />
        </div>
        {/* Two coral sparkle stars — lower-right beside carousel (matches screenshot) */}
        <div className="absolute right-3 sm:right-6 lg:right-8 bottom-2 sm:bottom-4 z-30 pointer-events-none select-none flex items-end gap-1.5">
          <SparkleStar size={18} color="#f87171" className="mb-2" />
          <SparkleStar size={30} color="#f87171" />
        </div>

        {/* Soft fade edges — prevent cut-off look */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#fef9f5] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#fef9f5] to-transparent z-20 pointer-events-none" />

        {/* ── Infinite Marquee Track ── */}
        <div className="animate-infinite-marquee flex gap-6 py-3 px-4">
          {marqueeItems.map((project, index) => {
            const theme = CARD_THEMES[index % CARD_THEMES.length];
            return (
              <ProjectCard
                key={`${project.id}-${index}`}
                project={project}
                theme={theme}
                index={index}
              />
            );
          })}
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────
          BOTTOM — "See All Projects ↗" + 3 Red Lines (right of btn)
      ──────────────────────────────────────────────────────── */}
      <div className="mt-12 sm:mt-16 flex items-center justify-center">
        <div className="relative inline-flex items-center gap-3">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-[10px] bg-[#141416] hover:bg-[#252830] active:scale-[0.97] text-white font-semibold text-[15px] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <span>See All Projects</span>
            <div className="relative w-4 h-4 shrink-0">
              <img
                src="/hero-figma/arrow-up-right.svg"
                alt=""
                className="w-full h-full block group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </div>
          </Link>

          {/* 3 Red Lines — immediately to the right of the button */}
          <ThreeRedLines className="shrink-0 relative top-0.5" />
        </div>
      </div>
    </section>
  );
}
