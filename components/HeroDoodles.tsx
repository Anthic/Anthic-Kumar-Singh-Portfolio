import React from "react";

/**
 * 2025 Edition Hand-drawn Badge with curved doodle arrow pointing down to "Port"
 */
export function EditionBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      <div className="relative px-4 py-2 rounded-[50%] border-[2px] border-[#2563EB] bg-white/70 backdrop-blur-xs shadow-xs -rotate-[9deg] hover:rotate-0 transition-transform duration-300">
        <span className="block text-[11px] sm:text-xs font-black tracking-tight text-[#1D4ED8] uppercase text-center leading-none">
          2025
        </span>
        <span className="block text-[10px] sm:text-[11px] font-extrabold text-[#1D4ED8] text-center leading-tight">
          Edition
        </span>
      </div>

      {/* Hand-drawn arrow pointing down-right toward "Port" */}
      <svg
        className="absolute left-full top-3 w-10 h-10 text-[#3B82F6] pointer-events-none -ml-1 overflow-visible animate-float-gentle"
        viewBox="0 0 42 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M 4 8 C 14 2, 28 4, 30 18 C 31 24, 29 28, 26 31"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 21 27 L 27 32 L 31 25"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/**
 * Green 4-point Plus mark doodle next to "folio"
 */
export function GreenPlusDoodle({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-7 h-7 text-[#84CC16] animate-float-sway overflow-visible ${className}`}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M 14 3 L 14 25 M 3 14 L 25 14"
        stroke="currentColor"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Solid 4-point Blue Sparkle Star
 */
export function BlueSparkleStar({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`text-[#2250F4] animate-star-pulse overflow-visible ${className}`}
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M16 0 C16 9, 23 16, 32 16 C23 16, 16 23, 16 32 C16 23, 9 16, 0 16 C9 16, 16 9, 16 0 Z" />
    </svg>
  );
}

/**
 * Curled Doodle Arrow pointing up and right under "folio"
 */
export function BottomCurledArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-12 h-12 text-[#141416] overflow-visible ${className}`}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M 12 36 C 4 33, 4 23, 12 20 C 22 17, 26 34, 18 36 C 12 37, 8 28, 16 18 C 22 10, 32 12, 38 15"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 31 11 L 40 15 L 34 23"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Yellow 8-point Sunburst / Asterisk Star under "folio"
 */
export function YellowSunburstStar({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-16 h-16 text-[#FBBF24] animate-star-pulse overflow-visible ${className}`}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="32" y1="4" x2="32" y2="60" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      <line x1="4" y1="32" x2="60" y2="32" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      <line x1="12" y1="12" x2="52" y2="52" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      <line x1="52" y1="12" x2="12" y2="52" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Green Smiley Face Sticker Badge
 */
export function SmileyFaceBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#84CC16] flex items-center justify-center shadow-md -rotate-12 hover:rotate-6 transition-transform duration-300 select-none ${className}`}
      aria-label="Friendly smiley sticker"
    >
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8 text-[#141416]"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="11" cy="11.5" rx="1.6" ry="2.2" fill="currentColor" />
        <ellipse cx="21" cy="11.5" rx="1.6" ry="2.2" fill="currentColor" />
        <path
          d="M 9.5 18.5 C 12 23.5, 20 23.5, 22.5 18.5"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/**
 * Radiating three dash lines above right side of head
 */
export function HeadRadiatingDashes({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-15 h-9 text-[#18181B] overflow-visible ${className}`}
      viewBox="0 0 60 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="12" y1="32" x2="16" y2="8" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      <line x1="30" y1="34" x2="38" y2="10" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      <line x1="46" y1="32" x2="58" y2="18" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Lime-green Asterisk Starburst at top right
 */
export function LimeStarburst({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-14 h-14 text-[#84CC16] animate-star-pulse overflow-visible ${className}`}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="30" y1="4" x2="30" y2="56" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      <line x1="4" y1="30" x2="56" y2="30" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      <line x1="12" y1="12" x2="48" y2="48" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      <line x1="48" y1="12" x2="12" y2="48" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Continuous Blue Outer Aura Contour Line that envelopes the right side and top of the image container
 */
export function BlueOuterAuraLine({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none overflow-visible text-[#5570ED] ${className}`}
      viewBox="0 0 460 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M 28 270 C 20 175, 30 95, 62 55 C 96 15, 170 8, 255 12 C 342 16, 386 46, 412 96 C 448 162, 452 268, 416 352 C 388 416, 352 455, 312 474"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Coral-red Curly Spiral Doodle with arrow pointing up-left (bottom-right)
 */
export function RedSpiralDoodle({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-11 h-18 text-[#EF4444] animate-float-gentle overflow-visible ${className}`}
      viewBox="0 0 44 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M 16 14 L 10 8 L 19 6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 10 8 C 28 14, 38 28, 20 34 C 6 38, 38 48, 24 58 C 14 65, 34 70, 38 71"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Wavy Hand-drawn Underline for Download CV
 */
export function WavyUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-full h-3 text-[#2563EB] overflow-visible ${className}`}
      viewBox="0 0 120 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M 2 6 C 15 11, 25 1, 38 6 C 51 11, 62 1, 75 6 C 88 11, 100 2, 118 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
