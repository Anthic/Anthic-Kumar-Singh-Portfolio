"use client";

import React from "react";

// ─── Data Definitions ─────────────────────────────────────────────────────────

interface TimelineEntry {
  period: string;
  title: string;
  subtitle: string;
  detail?: string;
}

const EXPERIENCE_ITEMS: TimelineEntry[] = [
  {
    period: "Feb 2025 – Present",
    title: "Full-Stack Developer",
    subtitle: "The Nexgenix",
  },
  {
    period: "Nov 2024 – Feb 2025",
    title: "Full-Stack Developer (Intern)",
    subtitle: "The Nexgenix",
  },
];

const EXPERIENCE_DOTS = ["#84cc16", "#0284c7"]; // green, then blue/teal

const EDUCATION_ITEMS: TimelineEntry[] = [
  {
    period: "2020 – 2025",
    title: "B.Sc. in Statistics",
    subtitle: "Mawlana Bhashani Science and Technology University, Tangail",
    detail: "CGPA: 3.27 / 4.00",
  },
  {
    period: "2017 – 2018",
    title: "HSC (Science)",
    subtitle: "Cantonment Public School and College, BUMS, Parbatipur, Dinajpur",
    detail: "GPA: 4.90",
  },
  {
    period: "2015 – 2016",
    title: "SSC (Science)",
    subtitle: "Thakurgaon Govt. Boys' High School",
    detail: "GPA: 5.00",
  },
];

const EDUCATION_DOTS = ["#f43f5e", "#8b5cf6", "#10b981"]; // pink/magenta, purple, then green

interface SkillItem {
  label: string;
  bold?: boolean;
}

const SKILLS: SkillItem[] = [
  { label: "React", bold: true },
  { label: "Next.js", bold: true },
  { label: "Node.js", bold: true },
  { label: "TypeScript" },
  { label: "JavaScript (ES6+)" },
  { label: "Python", bold: true },
  { label: "Redux" },
  { label: "Express.js" },
  { label: "Django" },
  { label: "FastAPI" },
  { label: "Tailwind CSS" },
  { label: "HTML5" },
  { label: "CSS3" },
  { label: "MongoDB", bold: true },
  { label: "Redis" },
  { label: "Qdrant" },
  { label: "Supabase (PostgreSQL)" },
  { label: "Firebase" },
  { label: "Docker" },
  { label: "Vercel" },
  { label: "LangChain", bold: true },
  { label: "LangGraph" },
  { label: "RAG" },
  { label: "LLM" },
  { label: "Agentic AI" },
  { label: "Generative AI" },
  { label: "Scikit-learn" },
  { label: "Pandas" },
  { label: "NumPy" },
  { label: "XGBoost" },
  { label: "SHAP" },
  { label: "R" },
  { label: "SPSS" },
  { label: "Stata" },
  { label: "Git" },
  { label: "Nginx" },
  { label: "Streamlit" },
  { label: "Jest" },
  { label: "JWT" },
  { label: "CI/CD" },
  { label: "Webpack" },
];

// ─── Sub-Components ───────────────────────────────────────────────────────────

/** Reusable timeline dot-list for Experience and Education */
function TimelineList({
  items,
  dotColors,
}: {
  items: TimelineEntry[];
  dotColors: string[];
}) {
  return (
    <div className="flex flex-col gap-7 sm:gap-8">
      {items.map((item, idx) => {
        const dotColor = dotColors[idx % dotColors.length];
        return (
          <div key={idx} className="flex items-start gap-4 group">
            {/* Colored round bullet dot */}
            <span
              className="w-3 h-3 rounded-full shrink-0 mt-1 transition-transform duration-200 group-hover:scale-125"
              style={{ backgroundColor: dotColor }}
              aria-hidden="true"
            />

            {/* Text block */}
            <div className="flex flex-col">
              {/* Line 1: date range (bold, dark) */}
              <span className="font-bold text-[14px] sm:text-[15px] text-[#141416] tracking-tight">
                {item.period}
              </span>

              {/* Line 2: role/degree (bold, dark, prominent) */}
              <span className="font-extrabold text-[16px] sm:text-[17px] text-[#141416] leading-tight mt-0.5">
                {item.title}
              </span>

              {/* Line 3: company/school name (regular, muted gray) */}
              <span className="text-[13.5px] sm:text-[14px] text-[#555962] font-medium leading-snug mt-1">
                {item.subtitle}
              </span>

              {/* Line 4 (optional): CGPA/GPA */}
              {item.detail && (
                <span className="font-mono text-[11.5px] font-bold text-[#1447df] tracking-wide mt-1.5 inline-block">
                  {item.detail}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** Individual skill badge pill */
function SkillPill({ label, bold = false }: { label: string; bold?: boolean }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-lg text-[12.5px] sm:text-[13px] transition-all duration-200 select-none ${
        bold
          ? "bg-[#141416] text-white font-bold shadow-sm hover:bg-[#252830] hover:-translate-y-0.5"
          : "bg-white text-[#1f2937] font-semibold border border-black/5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-[#141416]/40 hover:shadow-md hover:-translate-y-0.5"
      }`}
    >
      {label}
    </span>
  );
}

/** Hand-drawn Graduation Cap line-art doodle (matches reference screenshot) */
function GraduationCapDoodle({ className = "" }: { className?: string }) {
  return (
    <svg
      width="64"
      height="50"
      viewBox="0 0 64 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Mortarboard Diamond Top */}
      <polygon
        points="32,4 60,16 32,28 4,16"
        stroke="#141416"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="white"
      />
      {/* Skullcap / lower base */}
      <path
        d="M 14 20 V 32 C 14 40, 50 40, 50 32 V 20"
        stroke="#141416"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Tassel line & fringe */}
      <path
        d="M 32 16 C 42 20, 56 20, 57 30 L 57 38"
        stroke="#141416"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <polygon
        points="55,38 59,38 60,46 54,46"
        stroke="#141416"
        strokeWidth="2"
        fill="#141416"
      />
      {/* Center button on cap */}
      <circle cx="32" cy="16" r="2.5" fill="#141416" />
    </svg>
  );
}

/** 8-point blue starburst / asterisk icon (top-right of Skills heading) */
function BlueStarburst({ className = "" }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Vertical & Horizontal crossed strokes */}
      <line x1="20" y1="2" x2="20" y2="38" stroke="#224AC8" strokeWidth="2.6" strokeLinecap="round" />
      <line x1="2" y1="20" x2="38" y2="20" stroke="#224AC8" strokeWidth="2.6" strokeLinecap="round" />
      {/* Diagonal crossed strokes */}
      <line x1="7" y1="7" x2="33" y2="33" stroke="#224AC8" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="33" y1="7" x2="7" y2="33" stroke="#224AC8" strokeWidth="2.4" strokeLinecap="round" />
      {/* Center accent */}
      <circle cx="20" cy="20" r="2" fill="#224AC8" />
    </svg>
  );
}

// ─── Main Section Component ───────────────────────────────────────────────────

export default function ExperienceEducationSkills() {
  const [showAllSkills, setShowAllSkills] = React.useState(false);
  const INITIAL_SKILLS = 18;
  const visibleSkills = showAllSkills ? SKILLS : SKILLS.slice(0, INITIAL_SKILLS);
  const remainingCount = SKILLS.length - INITIAL_SKILLS;

  return (
    <section
      id="experience"
      aria-label="Experience, Education & Skills"
      className="w-full bg-[#fbf7f0] pt-12 pb-20 sm:pt-16 sm:pb-28 relative overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">

        {/* ── Doodle 1: Blue 4-point sparkle star floating above/between cols ── */}
        <div className="absolute left-[33%] sm:left-[36%] -top-5 sm:-top-8 z-20 pointer-events-none select-none hidden sm:block">
          <img
            src="/hero-figma/blue-sparkle-star.svg"
            alt=""
            className="w-6 h-6 sm:w-7 sm:h-7 opacity-85 animate-star-pulse"
          />
        </div>

        {/* ── 3-Column Grid on Desktop, Clean 1-Column Stack on Mobile/Tablet ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-14 lg:gap-8 xl:gap-10 items-stretch">

          {/* ═══════════════════════════════════════════════════════════════════
              COLUMN 1: Experience (Pastel Lime/Celery Brushed Blob)
          ═══════════════════════════════════════════════════════════════════ */}
          <div className="relative group flex flex-col h-full w-full max-w-[540px] mx-auto lg:max-w-none">
            {/* Brushed Watercolor SVG Blob Background — extends beyond content to envelope it completely */}
            <div className="absolute -inset-3 sm:-inset-4 lg:-inset-5 -z-10 pointer-events-none select-none transition-transform duration-300 group-hover:scale-[1.01]">
              <svg
                viewBox="0 0 420 540"
                fill="none"
                preserveAspectRatio="none"
                className="w-full h-full"
                aria-hidden="true"
              >
                <defs>
                  <filter
                    id="brush-filter-exp"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                    filterUnits="objectBoundingBox"
                  >
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.04"
                      numOctaves="3"
                      seed="19"
                      result="noise"
                    />
                    <feDisplacementMap
                      in="SourceGraphic"
                      in2="noise"
                      scale="8"
                      xChannelSelector="R"
                      yChannelSelector="G"
                      result="displaced"
                    />
                    <feGaussianBlur in="displaced" stdDeviation="0.4" result="softEdges" />
                    <feMerge>
                      <feMergeNode in="softEdges" />
                      <feMergeNode in="displaced" opacity="0.9" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M 18 35
                     C 50 12, 180 8, 290 14
                     C 365 18, 404 42, 408 105
                     C 412 185, 402 275, 404 365
                     C 406 445, 385 510, 310 528
                     C 210 538, 110 532, 45 512
                     C 10 475, 12 375, 14 275
                     C 15 175, 14 75, 18 35 Z"
                  fill="#edf6dc"
                  stroke="#d7ebba"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  filter="url(#brush-filter-exp)"
                />
              </svg>
            </div>

            {/* Inner Content — Sitting safely and comfortably inside the shade */}
            <div className="h-full px-7 py-8 sm:px-9 sm:py-10 lg:px-10 lg:py-11 flex flex-col justify-between">
              <div>
                {/* Fixed-height Heading Container: Aligns Experience, Education, Skills on the exact same line */}
                <div className="flex items-center justify-between mb-7 sm:mb-9 min-h-[44px]">
                  <h3
                    className="font-serif font-bold text-[#1447df] text-[32px] sm:text-[36px] lg:text-[40px] tracking-tight leading-none"
                    style={{ fontFamily: "var(--font-recoleta), var(--font-fraunces), serif" }}
                  >
                    Experience
                  </h3>
                </div>

                <TimelineList items={EXPERIENCE_ITEMS} dotColors={EXPERIENCE_DOTS} />
              </div>

              {/* Bottom spacer to match column balance */}
              <div className="h-6" aria-hidden="true" />
            </div>

            {/* Red hand-drawn swirl doodle — bottom-left under Experience */}
            <div className="absolute -left-3 sm:-left-5 -bottom-7 sm:-bottom-9 z-20 pointer-events-none select-none">
              <img
                src="/hero-figma/red-swirl-bottom-left.svg"
                alt=""
                className="w-[48px] sm:w-[58px] h-auto"
              />
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              COLUMN 2: Education (Pastel Lilac/Lavender Brushed Cloud Blob)
          ═══════════════════════════════════════════════════════════════════ */}
          <div className="relative group flex flex-col h-full w-full max-w-[540px] mx-auto lg:max-w-none">
            {/* Brushed Watercolor Wavy Cloud SVG Blob Background — extends beyond content to envelope it completely */}
            <div className="absolute -inset-3 sm:-inset-4 lg:-inset-5 -z-10 pointer-events-none select-none transition-transform duration-300 group-hover:scale-[1.01]">
              <svg
                viewBox="0 0 420 540"
                fill="none"
                preserveAspectRatio="none"
                className="w-full h-full"
                aria-hidden="true"
              >
                <defs>
                  <filter
                    id="brush-filter-edu"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                    filterUnits="objectBoundingBox"
                  >
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.042"
                      numOctaves="3"
                      seed="42"
                      result="noise"
                    />
                    <feDisplacementMap
                      in="SourceGraphic"
                      in2="noise"
                      scale="9"
                      xChannelSelector="R"
                      yChannelSelector="G"
                      result="displaced"
                    />
                    <feGaussianBlur in="displaced" stdDeviation="0.4" result="softEdges" />
                    <feMerge>
                      <feMergeNode in="softEdges" />
                      <feMergeNode in="displaced" opacity="0.9" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M 28 35
                     C 68 12, 140 18, 210 12
                     C 280 8, 350 16, 388 42
                     C 410 75, 402 125, 408 175
                     C 414 225, 402 285, 406 345
                     C 410 415, 395 480, 355 515
                     C 305 535, 235 528, 185 532
                     C 125 536, 65 525, 35 495
                     C 14 455, 22 395, 16 345
                     C 12 285, 20 225, 14 175
                     C 10 125, 16 75, 28 35 Z"
                  fill="#f2ebfc"
                  stroke="#e2d2f7"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  filter="url(#brush-filter-edu)"
                />
              </svg>
            </div>

            {/* Inner Content — Sitting safely and comfortably inside the shade */}
            <div className="h-full px-7 py-8 sm:px-9 sm:py-10 lg:px-10 lg:py-11 flex flex-col justify-between">
              <div>
                {/* Fixed-height Heading Container: Aligns Experience, Education, Skills on the exact same line */}
                <div className="flex items-center justify-between mb-7 sm:mb-9 min-h-[44px]">
                  <h3
                    className="font-serif font-bold text-[#1447df] text-[32px] sm:text-[36px] lg:text-[40px] tracking-tight leading-none"
                    style={{ fontFamily: "var(--font-recoleta), var(--font-fraunces), serif" }}
                  >
                    Education
                  </h3>
                </div>

                <TimelineList items={EDUCATION_ITEMS} dotColors={EDUCATION_DOTS} />
              </div>

              {/* Graduation Cap Doodle Icon — angled, rests naturally at the bottom-right inside the shade */}
              <div className="self-end mt-4 -mr-1 sm:-mr-2 pointer-events-none select-none transform -rotate-6">
                <GraduationCapDoodle className="w-[56px] sm:w-[66px] h-auto opacity-95" />
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              COLUMN 3: Skills (Pastel Butter-Yellow Brushed Fluid Blob)
          ═══════════════════════════════════════════════════════════════════ */}
          <div id="skills" className="relative group flex flex-col h-full w-full max-w-[540px] mx-auto lg:max-w-none">
            {/* Brushed Watercolor SVG Blob Background — extends beyond content to envelope it completely */}
            <div className="absolute -inset-3 sm:-inset-4 lg:-inset-5 -z-10 pointer-events-none select-none transition-transform duration-300 group-hover:scale-[1.01]">
              <svg
                viewBox="0 0 440 540"
                fill="none"
                preserveAspectRatio="none"
                className="w-full h-full"
                aria-hidden="true"
              >
                <defs>
                  <filter
                    id="brush-filter-skills"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                    filterUnits="objectBoundingBox"
                  >
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.038"
                      numOctaves="3"
                      seed="73"
                      result="noise"
                    />
                    <feDisplacementMap
                      in="SourceGraphic"
                      in2="noise"
                      scale="8"
                      xChannelSelector="R"
                      yChannelSelector="G"
                      result="displaced"
                    />
                    <feGaussianBlur in="displaced" stdDeviation="0.4" result="softEdges" />
                    <feMerge>
                      <feMergeNode in="softEdges" />
                      <feMergeNode in="displaced" opacity="0.9" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M 20 32
                     C 75 10, 200 8, 305 12
                     C 375 15, 420 35, 428 85
                     C 436 155, 428 245, 424 335
                     C 420 420, 395 495, 315 524
                     C 215 536, 105 530, 42 498
                     C 10 455, 12 355, 16 255
                     C 18 160, 14 78, 20 32 Z"
                  fill="#fef4cf"
                  stroke="#fae6b2"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  filter="url(#brush-filter-skills)"
                />
              </svg>
            </div>

            {/* Inner Content — Sitting safely and comfortably inside the shade */}
            <div className="h-full px-7 py-8 sm:px-9 sm:py-10 lg:px-10 lg:py-11 flex flex-col justify-between">
              <div>
                {/* Fixed-height Heading Container: Aligns Experience, Education, Skills on the exact same line */}
                <div className="flex items-center justify-between mb-7 sm:mb-9 min-h-[44px]">
                  <h3
                    className="font-serif font-bold text-[#1447df] text-[32px] sm:text-[36px] lg:text-[40px] tracking-tight leading-none"
                    style={{ fontFamily: "var(--font-recoleta), var(--font-fraunces), serif" }}
                  >
                    Skills
                  </h3>

                  {/* Blue 8-pointed starburst doodle near top-right of Skills heading */}
                  <BlueStarburst className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 relative -top-1" />
                </div>

                {/* Skill pills wrapping flex grid — cleanly contained inside the shade */}
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {visibleSkills.map((skill) => (
                    <SkillPill
                      key={skill.label}
                      label={skill.label}
                      bold={skill.bold}
                    />
                  ))}

                  {/* Toggle button to expand/collapse full skill list */}
                  <button
                    type="button"
                    onClick={() => setShowAllSkills(!showAllSkills)}
                    className="inline-flex items-center px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-lg text-[12px] sm:text-[12.5px] font-bold text-[#1447df] bg-white/95 hover:bg-white border border-[#1447df]/25 hover:border-[#1447df]/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-200 cursor-pointer active:scale-95"
                  >
                    {showAllSkills ? "Show less ↑" : `+${remainingCount} more ↓`}
                  </button>
                </div>
              </div>

              {/* Bottom spacer */}
              <div className="h-4" aria-hidden="true" />
            </div>
          </div>

        </div>
      </div>

      {/* ── Soft Warm Yellow Rolling Ground / Dune Wave at Bottom ── */}
      <div className="w-full absolute bottom-0 left-0 right-0 h-16 sm:h-24 pointer-events-none select-none z-0">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="w-full h-full fill-[#fae8b4]"
          aria-hidden="true"
        >
          <defs>
            <filter
              id="brush-filter-wave"
              x="-10%"
              y="-40%"
              width="120%"
              height="180%"
              filterUnits="objectBoundingBox"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.03"
                numOctaves="3"
                seed="88"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="10"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
          <path
            d="M 0 55 Q 320 80 620 40 T 1140 32 Q 1310 24 1440 36 L 1440 90 L 0 90 Z"
            filter="url(#brush-filter-wave)"
          />
        </svg>

        {/* Small hand-drawn vertical red tick mark on the bottom wave (as in screenshot) */}
        <div className="absolute left-[62%] sm:left-[61%] bottom-3 sm:bottom-5 pointer-events-none select-none">
          <svg width="6" height="14" viewBox="0 0 6 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="3" y1="1" x2="3" y2="13" stroke="#f87171" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}