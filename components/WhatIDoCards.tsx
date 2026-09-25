"use client";

import React, { useEffect, useRef, useState } from "react";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  badgeBg: string;
  badgeBorder: string;
  badgeShadow: string;
  badgeRotateClass: string;
  tagBg: string;
  tagText: string;
  tags: string[];
  renderIcon: () => React.ReactNode;
}

const SERVICES: ServiceCard[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "Building production-grade, responsive web apps with React and Next.js — architecting dynamic UI components with measurable performance gains across 10+ screen sizes.",
    badgeBg: "#B4E24C",
    badgeBorder: "border-[#9ecc3b]/40",
    badgeShadow: "shadow-[0_4px_14px_rgba(180,226,76,0.38)]",
    badgeRotateClass: "group-hover:-rotate-[3.5deg]",
    tagBg: "bg-[#B4E24C]/20 hover:bg-[#B4E24C]/30",
    tagText: "text-[#283d09]",
    tags: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    renderIcon: () => (
      <svg
        className="w-7 h-7 overflow-visible"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Left Bracket < */}
        <path
          className="anim-bracket-left"
          d="M9.5 7.5L3.5 14L9.5 20.5"
          stroke="#1e2c07"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Slash / */}
        <path
          className="anim-slash"
          d="M16.5 6L11.5 22"
          stroke="#1e2c07"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* Right Bracket > */}
        <path
          className="anim-bracket-right"
          d="M18.5 7.5L24.5 14L18.5 20.5"
          stroke="#1e2c07"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "ai-agent",
    title: "AI & Agent Engineering",
    description:
      "Architecting multi-agent LLM systems — a 9-node LangGraph pipeline that autonomously researches, fact-checks, and self-corrects via RAG and Mistral Large.",
    badgeBg: "#C6BFF2",
    badgeBorder: "border-[#aba1e8]/45",
    badgeShadow: "shadow-[0_4px_14px_rgba(198,191,242,0.45)]",
    badgeRotateClass: "group-hover:rotate-[3.5deg]",
    tagBg: "bg-[#C6BFF2]/35 hover:bg-[#C6BFF2]/50",
    tagText: "text-[#2c2357]",
    tags: ["LangGraph", "LangChain", "RAG", "Qdrant", "Python", "LLM Agents"],
    renderIcon: () => (
      <svg
        className="w-7 h-7 overflow-visible"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Signal transmission pathways */}
        <line
          className="anim-signal"
          x1="14"
          y1="14"
          x2="14"
          y2="5.5"
          stroke="#271f54"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <line
          className="anim-signal"
          x1="14"
          y1="14"
          x2="5.5"
          y2="20"
          stroke="#271f54"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <line
          className="anim-signal"
          x1="14"
          y1="14"
          x2="22.5"
          y2="20"
          stroke="#271f54"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Faint network orbit */}
        <path
          d="M 5.5 20 C 7.5 10, 20.5 10, 22.5 20"
          stroke="#271f54"
          strokeWidth="1.4"
          strokeDasharray="2.5 2.5"
          opacity="0.45"
        />
        {/* Central master node */}
        <circle
          className="anim-node-center"
          cx="14"
          cy="14"
          r="4.2"
          fill="#271f54"
        />
        <circle cx="14" cy="14" r="2" fill="#C6BFF2" />
        {/* Satellite agent nodes */}
        <circle
          className="anim-node anim-node-1"
          cx="14"
          cy="5.5"
          r="3"
          fill="#271f54"
        />
        <circle
          className="anim-node anim-node-2"
          cx="5.5"
          cy="20"
          r="3"
          fill="#271f54"
        />
        <circle
          className="anim-node anim-node-3"
          cx="22.5"
          cy="20"
          r="3"
          fill="#271f54"
        />
      </svg>
    ),
  },
  {
    id: "backend-dev",
    title: "Backend Development",
    description:
      "Engineering secure, scalable API gateways with JWT auth, refresh-token rotation, and Redis-backed rate limiting — eliminating long-running request bottlenecks.",
    badgeBg: "#F2C94C",
    badgeBorder: "border-[#deb02f]/45",
    badgeShadow: "shadow-[0_4px_14px_rgba(242,201,76,0.38)]",
    badgeRotateClass: "group-hover:-rotate-[3.5deg]",
    tagBg: "bg-[#F2C94C]/25 hover:bg-[#F2C94C]/38",
    tagText: "text-[#4a3805]",
    tags: ["Node.js", "Express.js", "MongoDB", "Redis", "Docker"],
    renderIcon: () => (
      <svg
        className="w-7 h-7 overflow-visible"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Top Server / DB Layer */}
        <g className="anim-layer-top">
          <ellipse
            cx="14"
            cy="7"
            rx="9.5"
            ry="3.4"
            stroke="#3a2903"
            strokeWidth="2.2"
            fill="#F2C94C"
          />
          <circle cx="8" cy="7" r="1.1" fill="#3a2903" />
        </g>
        {/* Middle Server Layer */}
        <g className="anim-layer-mid">
          <path
            d="M 4.5 13.5 C 4.5 15.4, 8.5 16.9, 14 16.9 C 19.5 16.9, 23.5 15.4, 23.5 13.5"
            stroke="#3a2903"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 4.5 7 V 13.5 M 23.5 7 V 13.5"
            stroke="#3a2903"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="8" cy="13.5" r="1.1" fill="#3a2903" />
        </g>
        {/* Bottom Server Layer */}
        <g className="anim-layer-bottom">
          <path
            d="M 4.5 20 C 4.5 21.9, 8.5 23.4, 14 23.4 C 19.5 23.4, 23.5 21.9, 23.5 20"
            stroke="#3a2903"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 4.5 13.5 V 20 M 23.5 13.5 V 20"
            stroke="#3a2903"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="8" cy="20" r="1.1" fill="#3a2903" />
        </g>
      </svg>
    ),
  },
  {
    id: "data-science",
    title: "Data Science & Analytics",
    description:
      "Applying statistical modeling and machine learning to build predictive analytics platforms — backed by a B.Sc. in Statistics.",
    badgeBg: "#F26B5B",
    badgeBorder: "border-[#d84d3c]/45",
    badgeShadow: "shadow-[0_4px_14px_rgba(242,107,91,0.38)]",
    badgeRotateClass: "group-hover:rotate-[4deg]",
    tagBg: "bg-[#F26B5B]/18 hover:bg-[#F26B5B]/28",
    tagText: "text-[#4b1710]",
    tags: ["Python", "Pandas", "Scikit-learn", "XGBoost", "SHAP"],
    renderIcon: () => (
      <svg
        className="w-7 h-7 overflow-visible"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Ground baseline */}
        <line
          x1="3"
          y1="23.5"
          x2="25"
          y2="23.5"
          stroke="#3d120a"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Bar 1 */}
        <rect
          className="anim-bar anim-bar-1"
          x="4.5"
          y="15"
          width="3.6"
          height="8.5"
          rx="1.8"
          fill="#3d120a"
        />
        {/* Bar 2 */}
        <rect
          className="anim-bar anim-bar-2"
          x="10"
          y="10"
          width="3.6"
          height="13.5"
          rx="1.8"
          fill="#3d120a"
        />
        {/* Bar 3 */}
        <rect
          className="anim-bar anim-bar-3"
          x="15.5"
          y="5.5"
          width="3.6"
          height="18"
          rx="1.8"
          fill="#3d120a"
        />
        {/* Bar 4 */}
        <rect
          className="anim-bar anim-bar-4"
          x="21"
          y="12"
          width="3.6"
          height="11.5"
          rx="1.8"
          fill="#3d120a"
        />
        {/* Trend sparkline overlay with peak highlight */}
        <path
          d="M 6.3 13 C 11.5 8, 14.5 4, 17.3 4 C 19.5 4, 21.5 8.5, 23 10.5"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
        <circle cx="17.3" cy="4" r="2.2" fill="#ffffff" />
      </svg>
    ),
  },
];

export default function WhatIDoCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "60px",
      }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 min-[980px]:grid-cols-4 gap-4.5 lg:gap-5 xl:gap-6 items-stretch"
    >
      {SERVICES.map((card) => (
        <article
          key={card.id}
          className={`what-i-do-card group relative bg-white rounded-[20px] p-6 sm:p-7 flex flex-col justify-between border border-[#ebdcd0]/70 cursor-default ${
            isInView ? "in-view-animate" : ""
          }`}
        >
          {/* Top Section: Badge + Title + Description */}
          <div>
            {/* Hand-drawn style sticker icon badge */}
            <div
              className={`w-[52px] h-[52px] rounded-2xl flex items-center justify-center border transition-all duration-300 ${card.badgeBorder} ${card.badgeShadow} ${card.badgeRotateClass}`}
              style={{ backgroundColor: card.badgeBg }}
            >
              {card.renderIcon()}
            </div>

            {/* Service Title */}
            <h3 className="text-[20px] sm:text-[21px] font-bold text-[#141416] tracking-tight leading-snug mt-6 mb-3">
              {card.title}
            </h3>

            {/* Service Description */}
            <p className="text-[13.5px] sm:text-[14px] leading-[1.65] text-[#555d6e] font-normal">
              {card.description}
            </p>
          </div>

          {/* Bottom Section: Tech Stack Tags & Arrow */}
          <div className="mt-7 pt-5 border-t border-black/[0.04]">
            {/* Tech Tags Pills */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className={`inline-block text-[11px] sm:text-[11.5px] font-medium px-2.5 py-1 rounded-full transition-colors duration-200 ${card.tagBg} ${card.tagText}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom Row with Arrow */}
            <div className="flex items-center justify-end">
              <div
                className="w-8 h-8 rounded-full bg-[#f8f5f0] text-[#141416] flex items-center justify-center transition-all duration-300 group-hover:bg-[#1447df] group-hover:text-white group-hover:translate-x-1 shadow-xs"
                aria-label={`Learn more about ${card.title}`}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
