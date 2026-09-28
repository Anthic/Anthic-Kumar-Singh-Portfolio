"use client";

import React from "react";

// ─── 1. Tech Stack (Row 1) ───────────────────────────────────────────────────
export const techStackItems = [
  { 
    name: "Python", 
    icon: "https://cdn.simpleicons.org/python", 
    color: "rgba(55,118,171,0.12)", 
    hoverColor: "#3776AB" 
  },
  { 
    name: "TypeScript", 
    icon: "https://cdn.simpleicons.org/typescript", 
    color: "rgba(49,120,198,0.12)", 
    hoverColor: "#3178C6" 
  },
  { 
    name: "JavaScript", 
    icon: "https://cdn.simpleicons.org/javascript", 
    color: "rgba(247,223,30,0.15)", 
    hoverColor: "#F7DF1E" 
  },
  { 
    name: "React", 
    icon: "https://cdn.simpleicons.org/react", 
    color: "rgba(97,218,251,0.12)", 
    hoverColor: "#61DAFB" 
  },
  { 
    name: "Next.js", 
    icon: "https://cdn.simpleicons.org/nextdotjs/000000", 
    color: "rgba(0,0,0,0.06)", 
    hoverColor: "#000000" 
  },
  { 
    name: "Node.js", 
    icon: "https://cdn.simpleicons.org/nodedotjs", 
    color: "rgba(51,153,51,0.12)", 
    hoverColor: "#339933" 
  },
  { 
    name: "FastAPI", 
    icon: "https://cdn.simpleicons.org/fastapi", 
    color: "rgba(0,150,136,0.12)", 
    hoverColor: "#009688" 
  },
  { 
    name: "Flask", 
    icon: "https://cdn.simpleicons.org/flask/000000", 
    color: "rgba(0,0,0,0.06)", 
    hoverColor: "#000000" 
  },
];

// ─── 2. AI & Tools (Row 2) ───────────────────────────────────────────────────
export const aiAndToolsItems = [
  { 
    name: "TensorFlow", 
    icon: "https://cdn.simpleicons.org/tensorflow", 
    color: "rgba(255,153,0,0.12)", 
    hoverColor: "#FF9900" 
  },
  { 
    name: "PyTorch", 
    icon: "https://cdn.simpleicons.org/pytorch", 
    color: "rgba(238,76,44,0.12)", 
    hoverColor: "#EE4C2C" 
  },
  { 
    name: "LangChain", 
    icon: "https://cdn.simpleicons.org/langchain", 
    color: "rgba(19,195,163,0.12)", 
    hoverColor: "#13C3A3" 
  },
  { 
    name: "OpenCV", 
    icon: "https://cdn.simpleicons.org/opencv", 
    color: "rgba(92,62,232,0.12)", 
    hoverColor: "#5C3EE8" 
  },
  { 
    name: "PostgreSQL", 
    icon: "https://cdn.simpleicons.org/postgresql", 
    color: "rgba(65,105,225,0.12)", 
    hoverColor: "#4169E1" 
  },
  { 
    name: "Redis", 
    icon: "https://cdn.simpleicons.org/redis", 
    color: "rgba(255,62,62,0.12)", 
    hoverColor: "#FF3E3E" 
  },
  { 
    name: "Docker", 
    icon: "https://cdn.simpleicons.org/docker", 
    color: "rgba(36,150,237,0.12)", 
    hoverColor: "#2496ED" 
  },
  { 
    name: "Kubernetes", 
    icon: "https://cdn.simpleicons.org/kubernetes", 
    color: "rgba(50,108,229,0.12)", 
    hoverColor: "#326CE5" 
  },
  { 
    name: "Git", 
    icon: "https://cdn.simpleicons.org/git", 
    color: "rgba(240,80,50,0.12)", 
    hoverColor: "#F05032" 
  },
];

interface TechPillProps {
  item: {
    name: string;
    icon: string;
    color: string;
    hoverColor: string;
  };
}

function TechPill({ item }: TechPillProps) {
  return (
    <div
      className="group inline-flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-2.5 rounded-[14px] bg-white border border-[#141416]/8 shadow-[0_2px_10px_rgba(20,20,35,0.03)] hover:shadow-[0_8px_22px_rgba(20,20,35,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer select-none shrink-0"
      style={{
        ["--hover-border" as string]: item.hoverColor,
      }}
    >
      {/* Icon Container with subtle tinted background */}
      <div
        className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center p-1.5 shrink-0 transition-transform duration-200 group-hover:scale-110"
        style={{ backgroundColor: item.color }}
      >
        <img
          src={item.icon}
          alt={item.name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      {/* Tech Name */}
      <span className="font-bold text-[13.5px] sm:text-[14.5px] text-[#141416] tracking-tight whitespace-nowrap group-hover:text-[#1447df] transition-colors">
        {item.name}
      </span>
    </div>
  );
}

export default function TechStackMarquee() {
  // Multiply arrays to ensure seamless infinite looping track
  const row1Items = [...techStackItems, ...techStackItems, ...techStackItems];
  const row2Items = [...aiAndToolsItems, ...aiAndToolsItems, ...aiAndToolsItems];

  return (
    <section
      aria-label="Technologies and Tools Marquee"
      className="w-full bg-[#fef9f5] pt-2 sm:pt-4 pb-12 sm:pb-16 overflow-hidden relative"
    >

      {/* ── Marquee Outer Container with Soft Gradient Edge Masks ── */}
      <div className="relative w-full overflow-hidden flex flex-col gap-4 sm:gap-5">
        
        {/* Soft fade edges on left & right — prevents harsh cutoff */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#fef9f5] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#fef9f5] to-transparent z-20 pointer-events-none" />

        {/* ── Row 1: Core Tech Stack (Moves Left) ── */}
        <div className="animate-marquee-left flex gap-3.5 sm:gap-4 py-1 px-2">
          {row1Items.map((item, index) => (
            <TechPill key={`row1-${item.name}-${index}`} item={item} />
          ))}
        </div>

        {/* ── Row 2: AI & Tools (Moves Right in Reverse) ── */}
        <div className="animate-marquee-right flex gap-3.5 sm:gap-4 py-1 px-2">
          {row2Items.map((item, index) => (
            <TechPill key={`row2-${item.name}-${index}`} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
