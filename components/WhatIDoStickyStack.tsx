"use client";

import React, { useEffect, useRef, useState } from "react";

interface ServiceData {
  id: string;
  stepNumber: string;
  title: string;
  badgeBg: string;
  badgeBorder: string;
  badgeRotate: string;
  tagBg: string;
  description: string;
  tags: string[];
  renderSketchIcon: () => React.ReactNode;
}

const SERVICES: ServiceData[] = [
  {
    id: "web-dev",
    stepNumber: "1",
    title: "Web Development",
    badgeBg: "#B4E24C",
    badgeBorder: "border-[#9dcb3a]/45",
    badgeRotate: "-rotate-[4deg]",
    tagBg: "bg-[#B4E24C]/22 text-[#243707]",
    description:
      "Building production-grade, responsive web apps with React and Next.js — architecting dynamic UI components with measurable performance gains across 10+ screen sizes.",
    tags: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    renderSketchIcon: () => (
      <svg
        className="w-[34px] h-[34px] overflow-visible"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          className="sketch-path"
          d="M 23 16 L 8 32 L 23 48"
          stroke="#1b2a05"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          className="sketch-path"
          d="M 38 12 L 26 52"
          stroke="#1b2a05"
          strokeWidth="3.4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="sketch-path"
          d="M 41 16 L 56 32 L 41 48"
          stroke="#1b2a05"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: "ai-agent",
    stepNumber: "2",
    title: "AI & Agent Engineering",
    badgeBg: "#C6BFF2",
    badgeBorder: "border-[#aaa0e8]/45",
    badgeRotate: "-rotate-[4deg]",
    tagBg: "bg-[#C6BFF2]/35 text-[#2b2158]",
    description:
      "Architecting multi-agent LLM systems — a 9-node LangGraph pipeline that autonomously researches, fact-checks, and self-corrects via RAG and Mistral Large.",
    tags: ["LangGraph", "LangChain", "RAG", "Qdrant", "Python", "LLM Agents"],
    renderSketchIcon: () => (
      <svg
        className="w-[34px] h-[34px] overflow-visible"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          className="sketch-path"
          d="M 32 25 A 7 7 0 1 1 31.99 25"
          stroke="#251e54"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="sketch-path"
          d="M 32 6 A 5 5 0 1 1 31.99 6"
          stroke="#251e54"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="sketch-path"
          d="M 12 43 A 5 5 0 1 1 11.99 43"
          stroke="#251e54"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="sketch-path"
          d="M 52 43 A 5 5 0 1 1 51.99 43"
          stroke="#251e54"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="sketch-path"
          d="M 32 25 L 32 16"
          stroke="#251e54"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="sketch-path"
          d="M 27 36 L 16 43"
          stroke="#251e54"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="sketch-path"
          d="M 37 36 L 48 43"
          stroke="#251e54"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: "backend-dev",
    stepNumber: "3",
    title: "Backend Development",
    badgeBg: "#F2C94C",
    badgeBorder: "border-[#deb02c]/45",
    badgeRotate: "-rotate-[4deg]",
    tagBg: "bg-[#F2C94C]/25 text-[#463504]",
    description:
      "Engineering secure, scalable API gateways with JWT auth, refresh-token rotation, and Redis-backed rate limiting — eliminating long-running request bottlenecks.",
    tags: ["Node.js", "Express.js", "MongoDB", "Redis", "Docker"],
    renderSketchIcon: () => (
      <svg
        className="w-[34px] h-[34px] overflow-visible"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          className="sketch-path"
          d="M 14 47 C 14 53, 50 53, 50 47"
          stroke="#3b2b04"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="sketch-path"
          d="M 14 36 L 14 47 M 50 36 L 50 47"
          stroke="#3b2b04"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="sketch-path"
          d="M 14 36 C 14 42, 50 42, 50 36"
          stroke="#3b2b04"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="sketch-path"
          d="M 14 25 L 14 36 M 50 25 L 50 36"
          stroke="#3b2b04"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="sketch-path"
          d="M 14 17 C 14 11.5, 50 11.5, 50 17 C 50 22.5, 14 22.5, 14 17 Z"
          stroke="#3b2b04"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          className="sketch-path"
          d="M 14 17 L 14 25 M 50 17 L 50 25"
          stroke="#3b2b04"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: "data-science",
    stepNumber: "4",
    title: "Data Science & Analytics",
    badgeBg: "#F26B5B",
    badgeBorder: "border-[#d84a39]/45",
    badgeRotate: "-rotate-[4deg]",
    tagBg: "bg-[#F26B5B]/18 text-[#4a1810]",
    description:
      "Applying statistical modeling and machine learning to build predictive analytics platforms — backed by a B.Sc. in Statistics.",
    tags: ["Python", "Pandas", "Scikit-learn", "XGBoost", "SHAP"],
    renderSketchIcon: () => (
      <svg
        className="w-[34px] h-[34px] overflow-visible"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          className="sketch-path"
          d="M 10 10 L 10 54 L 56 54"
          stroke="#3c130c"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          className="sketch-path"
          d="M 16 54 L 16 38 L 22 38 L 22 54"
          stroke="#3c130c"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          className="sketch-path"
          d="M 26 54 L 26 26 L 32 26 L 32 54"
          stroke="#3c130c"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          className="sketch-path"
          d="M 36 54 L 36 15 L 42 15 L 42 54"
          stroke="#3c130c"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          className="sketch-path"
          d="M 46 54 L 46 30 L 52 30 L 52 54"
          stroke="#3c130c"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          className="sketch-path"
          d="M 19 36 Q 30 18, 39 12 T 49 26"
          stroke="#ffffff"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
];

/**
 * Replays the pencil-sketch draw-in effect on all .sketch-path SVG elements
 * inside the given container.
 */
function replaySketch(container: HTMLElement | null) {
  if (!container) return;
  const paths = container.querySelectorAll<SVGGeometryElement>(".sketch-path");
  paths.forEach((path, idx) => {
    if (typeof path.getTotalLength === "function") {
      const len = path.getTotalLength();
      path.style.transition = "none";
      path.style.strokeDasharray = `${len}`;
      path.style.strokeDashoffset = `${len}`;

      // Force reflow
      void path.getBoundingClientRect();

      const delay = idx * 120;
      path.style.transition = `stroke-dashoffset 0.5s ease-out ${delay}ms`;
      path.style.strokeDashoffset = "0";
    }
  });
}

export default function WhatIDoStickyStack() {
  const stackWrapRef = useRef<HTMLDivElement>(null);
  const railFillRef = useRef<HTMLDivElement>(null);
  const railLabelRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  // Sync ref and trigger pencil-sketch draw-in whenever activeIndex changes
  useEffect(() => {
    activeIndexRef.current = activeIndex;
    const currentCard = cardRefs.current[activeIndex];
    if (currentCard) {
      replaySketch(currentCard);
    }
  }, [activeIndex]);

  // Initial draw-in on mount
  useEffect(() => {
    const firstCard = cardRefs.current[0];
    if (firstCard) {
      replaySketch(firstCard);
    }
  }, []);

  // Wheel-driven card cycle: each scroll gesture smoothly brings up the next card
  useEffect(() => {
    const wrap = stackWrapRef.current;
    if (!wrap) return;

    let isThrottled = false;

    function handleWheel(e: WheelEvent) {
      // Ignore tiny jitter
      if (Math.abs(e.deltaY) < 16) return;

      if (e.deltaY > 0) {
        // Scrolling down: cycle to next card if not at end
        if (activeIndexRef.current < SERVICES.length - 1) {
          e.preventDefault();
          if (!isThrottled) {
            isThrottled = true;
            setActiveIndex((prev) => {
              const next = Math.min(SERVICES.length - 1, prev + 1);
              activeIndexRef.current = next;
              return next;
            });
            setTimeout(() => {
              isThrottled = false;
            }, 380);
          }
        }
      } else {
        // Scrolling up: cycle to previous card if not at beginning
        if (activeIndexRef.current > 0) {
          e.preventDefault();
          if (!isThrottled) {
            isThrottled = true;
            setActiveIndex((prev) => {
              const next = Math.max(0, prev - 1);
              activeIndexRef.current = next;
              return next;
            });
            setTimeout(() => {
              isThrottled = false;
            }, 380);
          }
        }
      }
    }

    // Keyboard navigation (ArrowDown / ArrowRight / ArrowUp / ArrowLeft)
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        if (activeIndexRef.current < SERVICES.length - 1) {
          e.preventDefault();
          setActiveIndex((prev) => Math.min(SERVICES.length - 1, prev + 1));
        }
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        if (activeIndexRef.current > 0) {
          e.preventDefault();
          setActiveIndex((prev) => Math.max(0, prev - 1));
        }
      }
    }

    wrap.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      wrap.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleNextCard = () => {
    setActiveIndex((prev) => (prev + 1) % SERVICES.length);
  };

  return (
    <>
      {/* ── DESKTOP: Scroll/Wheel-Driven Card Stack (rising from below, compact spacing) ── */}
      <div
        ref={stackWrapRef}
        className="stack-wrap hidden md:block mt-2 sm:mt-3"
        id="stackWrap"
        aria-label="What I Do Card Stack"
        tabIndex={0}
      >
        <div className="stack-sticky" id="stackSticky">
          {/* Main cards host with left/right sketch arrow doodles & progress indicator */}
          <div className="relative w-full max-w-[1020px] mx-auto px-4 flex items-center justify-center gap-6 lg:gap-10 z-10">
            
            {/* ── LEFT SKETCH ARROW DOODLE ── */}
            <div className="hidden lg:flex flex-col items-center select-none pointer-events-none shrink-0 -mr-1">
              <span className="font-handwriting text-[21px] text-[#1447df] -rotate-[10deg] tracking-wide font-bold">
                scroll to explore
              </span>
              <svg
                className="w-[88px] h-[106px] text-[#1447df] overflow-visible -mt-2 -rotate-[6deg]"
                viewBox="0 0 88 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Organic hand-drawn curved spiral arrow with loop */}
                <path
                  d="M 18 10 C 6 26, 10 52, 34 50 C 52 48, 48 26, 32 30 C 18 36, 22 68, 66 82"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Sketched Arrowhead pointing towards card */}
                <path
                  d="M 48 74 L 70 83 L 56 94"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Accent sparkle */}
                <path
                  d="M 68 32 L 68 44 M 62 38 L 74 38"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </div>

            {/* 4x .card divs, stacked absolutely on top of each other */}
            <div id="cardHost" className="relative w-full max-w-[680px] h-[450px]">
              {SERVICES.map((card, index) => (
                <DesktopCardItem
                  key={card.id}
                  card={card}
                  index={index}
                  activeIndex={activeIndex}
                  onNext={handleNextCard}
                  cardRef={(el) => {
                    cardRefs.current[index] = el;
                  }}
                />
              ))}
            </div>

            {/* Continuous progress bar rail & label */}
            <div
              className="shrink-0 flex flex-col items-center select-none cursor-pointer"
              onClick={handleNextCard}
              title="Click to cycle next card"
            >
              <div className="rail">
                <div
                  ref={railFillRef}
                  className="rail-fill"
                  id="railFill"
                  style={{
                    height: `${((activeIndex + 1) / SERVICES.length) * 100}%`,
                    transition: "height 0.35s ease-out",
                  }}
                />
              </div>
              <div ref={railLabelRef} className="rail-label" id="railLabel">
                {activeIndex + 1} / {SERVICES.length}
              </div>
            </div>

            {/* ── RIGHT SKETCH ARROW DOODLE ── */}
            <div className="hidden lg:flex flex-col items-center select-none pointer-events-none shrink-0 -ml-1">
              <svg
                className="w-[84px] h-[102px] text-[#f85648] overflow-visible rotate-[6deg]"
                viewBox="0 0 84 102"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Organic curved doodle arrow looping down towards rail/cards */}
                <path
                  d="M 68 12 C 50 10, 24 24, 30 52 C 34 68, 54 62, 50 46 C 44 28, 22 42, 16 80"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Arrowhead */}
                <path
                  d="M 6 66 L 15 82 L 32 74"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* 4-point sparkle star */}
                <path
                  d="M 64 68 Q 68 68, 68 64 Q 68 68, 72 68 Q 68 68, 68 72 Q 68 68, 64 68 Z"
                  fill="currentColor"
                />
              </svg>
              <span className="font-handwriting text-[20px] text-[#f85648] rotate-[6deg] tracking-wide font-bold -mt-2">
                4 cards
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE (<768px): Normal vertical list fading/sliding in via Intersection Observer ── */}
      <div className="md:hidden mt-8 space-y-6">
        {SERVICES.map((card) => (
          <MobileCardItem key={card.id} card={card} />
        ))}
      </div>
    </>
  );
}

/**
 * Desktop Card Item:
 * Features right-corner glass bubbles that interactively glide and float with cursor movements,
 * and animates smoothly rising from below when activated.
 */
function DesktopCardItem({
  card,
  index,
  activeIndex,
  onNext,
  cardRef,
}: {
  card: ServiceData;
  index: number;
  activeIndex: number;
  onNext: () => void;
  cardRef: (el: HTMLDivElement | null) => void;
}) {
  const cardStateClass =
    index === activeIndex
      ? "active"
      : index < activeIndex
      ? "exited-up"
      : "waiting-down";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    e.currentTarget.style.setProperty("--cursor-x", x.toFixed(3));
    e.currentTarget.style.setProperty("--cursor-y", y.toFixed(3));
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--cursor-x", "0");
    e.currentTarget.style.setProperty("--cursor-y", "0");
  };

  return (
    <div
      ref={cardRef}
      className={`card group ${cardStateClass}`}
      data-card-index={index}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <article className="relative p-8 sm:p-10 flex flex-col justify-between h-full select-none overflow-hidden rounded-[22px]">
        {/* ── Playful Floating Bubbles in the Right-Side Corner (Interactive Cursor Parallax) ── */}
        <div className="absolute top-2 right-3 sm:top-3 sm:right-5 w-[160px] h-[140px] pointer-events-none select-none z-0 overflow-visible">
          {/* Bubble 1: Large Glossy Glass Sphere */}
          <div
            className="absolute top-0 right-1 w-[74px] h-[74px] sm:w-[84px] sm:h-[84px] rounded-full border shadow-[inset_0_2px_8px_rgba(255,255,255,0.75),0_6px_20px_-4px_rgba(0,0,0,0.05)] backdrop-blur-[2px]"
            style={{
              backgroundColor: `${card.badgeBg}18`,
              borderColor: `${card.badgeBg}42`,
              transform: `translate3d(calc(var(--cursor-x, 0) * 16px), calc(var(--cursor-y, 0) * 16px), 0)`,
              transition: "transform 0.22s cubic-bezier(0.2, 0.8, 0.4, 1)",
              willChange: "transform",
            }}
          >
            {/* Specular reflections */}
            <div className="absolute top-2.5 left-3.5 w-4 h-2 rounded-full bg-white/90 -rotate-45" />
            <div className="absolute top-4.5 left-2.5 w-1.5 h-1.5 rounded-full bg-white/80" />
            <div className="absolute bottom-3 right-4 w-3.5 h-1.5 rounded-full bg-white/35 -rotate-45" />
          </div>

          {/* Bubble 2: Medium Bubble (Counter-drifts to create optical 3D depth) */}
          <div
            className="absolute top-12 right-16 sm:top-14 sm:right-18 w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] rounded-full border shadow-[inset_0_1.5px_6px_rgba(255,255,255,0.7)] backdrop-blur-[1px]"
            style={{
              backgroundColor: `${card.badgeBg}15`,
              borderColor: `${card.badgeBg}36`,
              transform: `translate3d(calc(var(--cursor-x, 0) * -22px), calc(var(--cursor-y, 0) * -18px), 0)`,
              transition: "transform 0.25s cubic-bezier(0.2, 0.8, 0.4, 1)",
              willChange: "transform",
            }}
          >
            <div className="absolute top-1.5 left-2.5 w-2.5 h-1.5 rounded-full bg-white/85 -rotate-45" />
            <div className="absolute top-3 left-2 w-1 h-1 rounded-full bg-white/70" />
          </div>

          {/* Bubble 3: Small Bubble (Floats faster towards cursor) */}
          <div
            className="absolute top-2 right-20 sm:top-3 sm:right-24 w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] rounded-full border shadow-[inset_0_1px_4px_rgba(255,255,255,0.75)]"
            style={{
              backgroundColor: `${card.badgeBg}24`,
              borderColor: `${card.badgeBg}48`,
              transform: `translate3d(calc(var(--cursor-x, 0) * 26px), calc(var(--cursor-y, 0) * 24px), 0)`,
              transition: "transform 0.28s cubic-bezier(0.2, 0.8, 0.4, 1)",
              willChange: "transform",
            }}
          >
            <div className="absolute top-1 left-1.5 w-1.5 h-1 rounded-full bg-white/90 -rotate-45" />
          </div>

          {/* Bubble 4: Mini Accent Bubble */}
          <div
            className="absolute top-20 right-3 sm:top-24 sm:right-4 w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] rounded-full border shadow-[inset_0_1px_3px_rgba(255,255,255,0.8)]"
            style={{
              backgroundColor: `${card.badgeBg}22`,
              borderColor: `${card.badgeBg}45`,
              transform: `translate3d(calc(var(--cursor-x, 0) * -15px), calc(var(--cursor-y, 0) * 26px), 0)`,
              transition: "transform 0.24s cubic-bezier(0.2, 0.8, 0.4, 1)",
              willChange: "transform",
            }}
          >
            <div className="absolute top-0.5 left-1 w-1 h-0.5 rounded-full bg-white/90 -rotate-45" />
          </div>

          {/* Bubble 5: Tiny Floating Pearl Glint */}
          <div
            className="absolute top-8 right-12 sm:top-9 sm:right-14 w-[12px] h-[12px] sm:w-[13px] sm:h-[13px] rounded-full border"
            style={{
              backgroundColor: `${card.badgeBg}30`,
              borderColor: `${card.badgeBg}60`,
              transform: `translate3d(calc(var(--cursor-x, 0) * 32px), calc(var(--cursor-y, 0) * -14px), 0)`,
              transition: "transform 0.3s cubic-bezier(0.2, 0.8, 0.4, 1)",
              willChange: "transform",
            }}
          >
            <div className="absolute top-0.5 left-0.5 w-1 h-0.5 rounded-full bg-white/95" />
          </div>
        </div>

        {/* Top: Icon Badge, Title, Description */}
        <div className="relative z-10">
          {/* Icon badge (58px, rotated -4deg, colored per card, subtle drop shadow) */}
          <div
            className={`w-[58px] h-[58px] rounded-2xl flex items-center justify-center border shadow-xs transition-transform duration-300 ${card.badgeBorder} ${card.badgeRotate}`}
            style={{ backgroundColor: card.badgeBg }}
          >
            {card.renderSketchIcon()}
          </div>

          {/* Bold title */}
          <h3 className="text-[25px] sm:text-[28px] font-bold text-[#141416] tracking-tight leading-snug mt-6 mb-3">
            {card.title}
          </h3>

          {/* Short description */}
          <p className="text-[14.5px] sm:text-[15.5px] leading-[1.7] text-[#4d5361] font-normal">
            {card.description}
          </p>
        </div>

        {/* Bottom: Tech-tag pills & arrow (→) that nudges right on hover */}
        <div className="relative z-10 mt-8 pt-5 border-t border-black/[0.05] flex items-end justify-between gap-4">
          {/* Tech tag pills */}
          <div className="flex flex-wrap gap-2 max-w-[520px]">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className={`text-[12px] font-medium px-3 py-1 rounded-full transition-colors ${card.tagBg}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Arrow (→) bottom-right that nudges right on hover */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="shrink-0 w-9 h-9 rounded-full bg-[#f8f5f0] text-[#141416] flex items-center justify-center transition-all duration-300 group-hover:bg-[#1447df] group-hover:text-white shadow-xs cursor-pointer"
            aria-label={`Next service`}
            title="Next card"
          >
            <span className="text-[16px] font-bold leading-none transition-transform duration-300 group-hover:translate-x-1 inline-block">
              →
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}

/**
 * Mobile Card Item:
 * Shown in a normal vertical list, fading/sliding in once via Intersection Observer
 * with pencil-sketch draw-in on first appearance.
 */
function MobileCardItem({ card }: { card: ServiceData }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          replaySketch(el);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`relative overflow-hidden rounded-[22px] bg-white/90 backdrop-blur-md p-6 sm:p-7 border border-[#ebdcd0]/85 shadow-[0_12px_32px_-8px_rgba(20,20,30,0.08)] transition-all duration-500 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* ── Bubbles clustered in the right-side corner ── */}
      <div className="absolute top-2 right-3 w-[120px] h-[100px] pointer-events-none select-none z-0 overflow-visible">
        <div
          className="absolute top-0 right-1 w-[56px] h-[56px] rounded-full border shadow-[inset_0_2px_6px_rgba(255,255,255,0.7)]"
          style={{
            backgroundColor: `${card.badgeBg}18`,
            borderColor: `${card.badgeBg}38`,
          }}
        >
          <div className="absolute top-2 left-2.5 w-3 h-1.5 rounded-full bg-white/90 -rotate-45" />
        </div>
        <div
          className="absolute top-10 right-12 w-[32px] h-[32px] rounded-full border shadow-[inset_0_1px_4px_rgba(255,255,255,0.7)]"
          style={{
            backgroundColor: `${card.badgeBg}15`,
            borderColor: `${card.badgeBg}30`,
          }}
        >
          <div className="absolute top-1 left-1.5 w-1.5 h-1 rounded-full bg-white/85 -rotate-45" />
        </div>
        <div
          className="absolute top-1 right-16 w-[18px] h-[18px] rounded-full border"
          style={{
            backgroundColor: `${card.badgeBg}24`,
            borderColor: `${card.badgeBg}45`,
          }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-between">
        <div
          className={`w-[54px] h-[54px] rounded-2xl flex items-center justify-center border shadow-xs ${card.badgeBorder} ${card.badgeRotate}`}
          style={{ backgroundColor: card.badgeBg }}
        >
          {card.renderSketchIcon()}
        </div>
        <span className="text-[12px] font-bold text-[#1447df] bg-[#1447df]/10 px-2.5 py-0.5 rounded-full font-mono">
          {card.stepNumber} / 4
        </span>
      </div>

      <h3 className="text-[21px] font-bold text-[#141416] tracking-tight leading-snug mt-5 mb-2.5">
        {card.title}
      </h3>

      <p className="text-[14px] leading-[1.65] text-[#4d5361] font-normal mb-5">
        {card.description}
      </p>

      <div className="pt-4 border-t border-black/[0.05] flex items-end justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${card.tagBg}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="shrink-0 w-8 h-8 rounded-full bg-[#f8f5f0] text-[#141416] flex items-center justify-center">
          <span className="text-[14px] font-bold leading-none">→</span>
        </div>
      </div>
    </div>
  );
}
