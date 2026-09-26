"use client";

import React, { useEffect, useRef, useState } from "react";

interface HighlightItem {
  label: string;
  detail: string;
}

interface ServiceData {
  id: string;
  stepNumber: string;
  title: string;
  badgeBg: string;
  badgeBorder: string;
  badgeRotate: string;
  tagBg: string;
  tagText: string;
  description: string;
  metrics: string[];
  highlights: HighlightItem[];
  tags: string[];
  renderSketchIcon: () => React.ReactNode;
}

const SERVICES: ServiceData[] = [
  {
    id: "web-dev",
    stepNumber: "01",
    title: "Web Development",
    badgeBg: "#B4E24C",
    badgeBorder: "border-[#9dcb3a]/45",
    badgeRotate: "-rotate-[4deg]",
    tagBg: "bg-[#B4E24C]/22",
    tagText: "text-[#243707]",
    description:
      "Building responsive, high-performance web applications using modern React, Next.js, and TypeScript — designing modular UI component architectures with optimized rendering cycles and cross-browser responsiveness.",
    metrics: ["Next.js 15 & React 19", "TypeScript & Redux", "Tailwind & Modern CSS"],
    highlights: [
      {
        label: "Component Architecture & SSR",
        detail: "Proficient in Next.js (App Router, Server Components) and React, engineering dynamic modular UI components with low cumulative layout shifts.",
      },
      {
        label: "State Management & Data Flow",
        detail: "Managing complex global client state with Redux Toolkit and Context API, paired with Axios REST API integration and Server-Sent Events (SSE).",
      },
      {
        label: "Styling & Responsive Systems",
        detail: "Crafting modern, accessible interfaces with Tailwind CSS, custom CSS animations, Webpack build optimizations, and responsive designs across 10+ viewports.",
      },
    ],
    tags: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Axios REST", "SSE", "HTML5/CSS3"],
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
    stepNumber: "02",
    title: "AI & Agent Engineering",
    badgeBg: "#C6BFF2",
    badgeBorder: "border-[#aaa0e8]/45",
    badgeRotate: "-rotate-[4deg]",
    tagBg: "bg-[#C6BFF2]/35",
    tagText: "text-[#2b2158]",
    description:
      "Architecting production-grade multi-agent AI systems, autonomous LLM pipelines, and Retrieval-Augmented Generation (RAG) architectures with multi-provider fallbacks and self-correcting evaluation loops.",
    metrics: ["LangGraph & LangChain", "Qdrant Vector RAG", "Multi-Agent Systems"],
    highlights: [
      {
        label: "Multi-Agent Orchestration",
        detail: "Building stateful, cyclic multi-agent workflows using LangGraph and LangChain with autonomous reasoning, tool calling, and self-correcting evaluation loops.",
      },
      {
        label: "Vector Search & RAG Pipelines",
        detail: "Implementing high-accuracy RAG architectures using Qdrant vector databases, dense embeddings, semantic chunking, and similarity ranking.",
      },
      {
        label: "LLM Gateways & Fallback Cascades",
        detail: "Integrating multi-provider LLMs (Mistral, OpenAI, Groq, Gemini) with streaming Server-Sent Events (SSE) and automated fallback failover.",
      },
    ],
    tags: ["LangGraph", "LangChain", "Agentic AI", "Qdrant", "RAG Pipelines", "LLM APIs", "Python", "SSE Streaming"],
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
    stepNumber: "03",
    title: "Backend Development",
    badgeBg: "#F2C94C",
    badgeBorder: "border-[#deb02c]/45",
    badgeRotate: "-rotate-[4deg]",
    tagBg: "bg-[#F2C94C]/25",
    tagText: "text-[#463504]",
    description:
      "Engineering secure, scalable backend architectures, RESTful API gateways, and microservices with high-speed in-memory caching, dual-token JWT authentication, and containerized deployments.",
    metrics: ["Node.js & Express (TS)", "Redis Caching & Queues", "Docker & PostgreSQL"],
    highlights: [
      {
        label: "API Gateways & Microservices",
        detail: "Building scalable backend services using Node.js, Express.js, TypeScript, and FastAPI with modular route architectures and asynchronous job handling.",
      },
      {
        label: "Authentication & Security",
        detail: "Engineering enterprise security with dual-token JWT authentication (access & refresh rotation), Redis-backed rate limiting, CSRF protection, and RBAC.",
      },
      {
        label: "Databases & Cloud Deployment",
        detail: "Designing performant schemas and indexing across MongoDB Atlas and Supabase (PostgreSQL), with Docker containerization, Nginx, and Linux VPS servers.",
      },
    ],
    tags: ["Node.js", "Express.js", "TypeScript", "Redis", "MongoDB", "Supabase (PostgreSQL)", "Docker", "JWT & RBAC"],
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
    stepNumber: "04",
    title: "Data Science & Analytics",
    badgeBg: "#F26B5B",
    badgeBorder: "border-[#d84a39]/45",
    badgeRotate: "-rotate-[4deg]",
    tagBg: "bg-[#F26B5B]/18",
    tagText: "text-[#4a1810]",
    description:
      "Applying statistical theory, mathematical modeling, exploratory data analysis, and machine learning pipelines to extract actionable insights and build explainable predictive models.",
    metrics: ["Python, Pandas & NumPy", "Scikit-learn & XGBoost", "SHAP & Statistical Modeling"],
    highlights: [
      {
        label: "Predictive Machine Learning",
        detail: "Developing supervised machine learning pipelines using Scikit-learn, XGBoost, and SHAP for model training, validation, and explainable feature importance.",
      },
      {
        label: "Data Wrangling & Exploration",
        detail: "Cleaning, transforming, and analyzing complex multivariate datasets using Python, Pandas, and NumPy with interactive visualization in Streamlit dashboards.",
      },
      {
        label: "Statistical Inference & SQL",
        detail: "Formulating hypothesis testing, regression analysis, and probability distributions using Python, R, SPSS, and relational database querying with SQL (MySQL, Oracle).",
      },
    ],
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "SHAP", "SQL / DBMS", "R & SPSS"],
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
          <div className="relative w-full max-w-[1180px] mx-auto px-4 flex items-center justify-center gap-6 lg:gap-8 z-10">
            
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
            <div id="cardHost" className="relative w-full max-w-[780px] h-[535px]">
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

  return (
    <div
      ref={cardRef}
      className={`card group ${cardStateClass}`}
      data-card-index={index}
    >
      <article className="relative p-6 sm:p-8 flex flex-col justify-between h-full select-none rounded-none">
        {/* Top: Header with Icon Badge & Title, Description */}
        <div className="relative z-10">
          <div className="flex items-center gap-4">
            {/* Icon badge (52px, crisp square with sketch icon) */}
            <div
              className={`w-[52px] h-[52px] rounded-none shrink-0 flex items-center justify-center border shadow-2xs transition-transform duration-300 ${card.badgeBorder} ${card.badgeRotate}`}
              style={{ backgroundColor: card.badgeBg }}
            >
              {card.renderSketchIcon()}
            </div>

            <div>
              <span
                className="text-[11px] font-bold tracking-wider uppercase font-mono block mb-0.5"
                style={{ color: card.tagText }}
              >
                0{index + 1} // Capability
              </span>
              <h3 className="text-[23px] sm:text-[25px] font-bold text-[#141416] tracking-tight leading-snug">
                {card.title}
              </h3>
            </div>
          </div>

          {/* Tech stack description */}
          <p className="text-[13.5px] sm:text-[14.5px] leading-[1.6] text-[#4d5361] font-normal mt-3.5">
            {card.description}
          </p>

          {/* 3 Tech Stack Highlights with bold labels */}
          <div
            className="mt-3.5 space-y-1.5 bg-[#fbf9f6] rounded-none p-3.5 border border-black/[0.06] border-l-[3px]"
            style={{ borderLeftColor: card.badgeBg }}
          >
            {card.highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 text-[12.5px] sm:text-[13px] leading-[1.5]"
              >
                <span
                  className="shrink-0 w-1.5 h-1.5 rounded-none mt-1.5"
                  style={{ backgroundColor: card.badgeBg }}
                />
                <p className="m-0">
                  <strong className="font-semibold text-[#181d26]">{h.label}: </strong>
                  <span className="text-[#555d6e]">{h.detail}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Tech Stack Core Chips */}
          <div className="flex flex-wrap items-center gap-2 mt-3.5">
            {card.metrics.map((metric, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-[11px] sm:text-[11.5px] font-semibold px-2.5 py-0.5 rounded-none border"
                style={{
                  backgroundColor: `${card.badgeBg}18`,
                  borderColor: `${card.badgeBg}40`,
                  color: card.tagText,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-none"
                  style={{ backgroundColor: card.badgeBg }}
                />
                {metric}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom: Tech-tag pills & arrow (→) that nudges right on hover */}
        <div className="relative z-10 mt-3 pt-3.5 border-t border-black/[0.06] flex items-end justify-between gap-4">
          {/* Tech tag pills */}
          <div className="flex flex-wrap gap-1.5 max-w-[620px]">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className={`text-[11px] sm:text-[11.5px] font-medium px-2.5 py-0.5 rounded-none border border-black/[0.06] transition-colors ${card.tagBg} ${card.tagText}`}
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
            className="shrink-0 w-9 h-9 rounded-none bg-[#f8f5f0] border border-black/[0.08] text-[#141416] flex items-center justify-center transition-all duration-300 group-hover:bg-[#1447df] group-hover:border-[#1447df] group-hover:text-white shadow-2xs cursor-pointer"
            aria-label={`Next service`}
            title="Next card"
          >
            <span className="text-[15px] font-bold leading-none transition-transform duration-300 group-hover:translate-x-1 inline-block">
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
      className={`relative overflow-hidden rounded-none bg-white/98 p-5 sm:p-6 border border-[#ebdcd0] shadow-[0_8px_24px_-8px_rgba(20,20,30,0.06)] transition-all duration-500 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="relative z-10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`w-[48px] h-[48px] rounded-none shrink-0 flex items-center justify-center border shadow-xs ${card.badgeBorder} ${card.badgeRotate}`}
            style={{ backgroundColor: card.badgeBg }}
          >
            {card.renderSketchIcon()}
          </div>
          <div>
            <span
              className="text-[10px] font-bold tracking-wider uppercase font-mono block"
              style={{ color: card.tagText }}
            >
              {card.stepNumber} // Capability
            </span>
            <h3 className="text-[20px] font-bold text-[#141416] tracking-tight leading-snug">
              {card.title}
            </h3>
          </div>
        </div>
        <span
          className="text-[11.5px] font-bold px-2.5 py-0.5 rounded-none font-mono shrink-0 border"
          style={{
            backgroundColor: `${card.badgeBg}22`,
            borderColor: `${card.badgeBg}44`,
            color: card.tagText,
          }}
        >
          {card.stepNumber} / 4
        </span>
      </div>

      <p className="text-[13px] leading-[1.6] text-[#4d5361] font-normal mt-3 mb-3">
        {card.description}
      </p>

      {/* Highlights */}
      <div
        className="space-y-1.5 bg-[#fbf9f6] rounded-none p-3 border border-black/[0.06] border-l-[3px] mb-3"
        style={{ borderLeftColor: card.badgeBg }}
      >
        {card.highlights.map((h, i) => (
          <div
            key={i}
            className="flex items-start gap-2 text-[11.5px] leading-[1.45]"
          >
            <span
              className="shrink-0 w-1.5 h-1.5 rounded-none mt-1.5"
              style={{ backgroundColor: card.badgeBg }}
            />
            <p className="m-0">
              <strong className="font-semibold text-[#181d26]">{h.label}: </strong>
              <span className="text-[#555d6e]">{h.detail}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Metric chips */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {card.metrics.map((metric, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1 text-[10.5px] font-semibold px-2 py-0.5 rounded-none border"
            style={{
              backgroundColor: `${card.badgeBg}15`,
              borderColor: `${card.badgeBg}35`,
              color: card.tagText,
            }}
          >
            <span
              className="w-1 h-1 rounded-none"
              style={{ backgroundColor: card.badgeBg }}
            />
            {metric}
          </span>
        ))}
      </div>

      <div className="pt-3 border-t border-black/[0.06] flex items-end justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[10.5px] font-medium px-2 py-0.5 rounded-none border border-black/[0.05] ${card.tagBg} ${card.tagText}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="shrink-0 w-7 h-7 rounded-none bg-[#f8f5f0] border border-black/[0.08] text-[#141416] flex items-center justify-center">
          <span className="text-[13px] font-bold leading-none">→</span>
        </div>
      </div>
    </div>
  );
}
