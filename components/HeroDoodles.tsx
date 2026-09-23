import React, { forwardRef } from "react";

/**
 * 2025 Edition Hand-drawn Sketched Badge with curved doodle line & arrow
 * Matches reference screenshot 2 with SVG drawing animation support.
 */
export const EditionBadge = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    circlePathRef?: React.RefObject<SVGPathElement | null>;
    arrowPathRef?: React.RefObject<SVGPathElement | null>;
    arrowHeadRef?: React.RefObject<SVGPathElement | null>;
    textRef?: React.RefObject<HTMLDivElement | null>;
  }
>(function EditionBadge(
  { className = "", circlePathRef, arrowPathRef, arrowHeadRef, textRef },
  ref
) {
  return (
    <div
      ref={ref}
      className={`relative inline-flex items-center select-none ${className}`}
    >
      {/* Hand-drawn Oval Badge Container */}
      <div className="relative flex items-center justify-center -rotate-[12deg] hover:rotate-0 transition-transform duration-300">
        {/* SVG Hand-sketched Oval Path */}
        <svg
          viewBox="0 0 132 78"
          className="w-[120px] sm:w-[136px] h-auto overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            ref={circlePathRef}
            className="hero-draw-circle"
            d="M 52 8 C 84 4, 118 12, 124 28 C 129 44, 98 68, 58 70 C 22 72, 6 56, 7 36 C 8 18, 34 8, 66 8 C 94 8, 118 18, 122 34"
            stroke="#2250F4"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={100}
            style={{ strokeDasharray: 100, strokeDashoffset: 0 }}
          />
        </svg>

        {/* Text inside the oval */}
        <div
          ref={textRef}
          className="hero-badge-text absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
        >
          <span className="text-[14px] sm:text-[15px] font-extrabold tracking-tight text-[#2250F4] leading-tight">
            2025
          </span>
          <span className="text-[12px] sm:text-[13px] font-extrabold tracking-tight text-[#2250F4] leading-none">
            Edition
          </span>
        </div>
      </div>

      {/* Hand-drawn Doodle Arrow next to the oval arching down toward "Port" */}
      <div className="relative -ml-1 -mt-4 pointer-events-none">
        <svg
          viewBox="0 0 62 56"
          className="w-12 h-11 sm:w-14 sm:h-13 text-[#2250F4] overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Curved wavy loop body starting near oval and arching down */}
          <path
            ref={arrowPathRef}
            className="hero-draw-arrow"
            d="M 4 20 C 10 14, 15 14, 19 18 C 22 23, 17 26, 14 24 C 11 22, 14 14, 25 12 C 38 10, 47 22, 45 38 C 44 42, 42 46, 40 48"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={100}
            style={{ strokeDasharray: 100, strokeDashoffset: 0 }}
          />
          {/* Arrowhead pointing down / down-left */}
          <path
            ref={arrowHeadRef}
            className="hero-draw-arrowhead"
            d="M 33 42 L 40 48 L 46 39"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={100}
            style={{ strokeDasharray: 100, strokeDashoffset: 0 }}
          />
        </svg>
      </div>
    </div>
  );
});

/**
 * Green 4-point Plus mark doodle next to "folio"
 */
export function GreenPlusDoodle({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-6 h-6 sm:w-7 sm:h-7 text-[#88D61A] animate-float-sway overflow-visible ${className}`}
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
 * Solid 4-point Royal Blue Sparkle Star
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
 * Hand-drawn Curved Black Doodle Arrow matching Reference Screenshot 2:
 * Sits to the left of the bottom of "f", with a top arrowhead pointing up-left,
 * a sweeping C-curve down, and a bottom arrowhead pointing up-right.
 */
export function BottomCurledArrow({
  className = "",
  pathRef,
}: {
  className?: string;
  pathRef?: React.RefObject<SVGPathElement | null>;
}) {
  return (
    <svg
      className={`w-12 h-14 sm:w-14 sm:h-16 text-[#141416] overflow-visible select-none ${className}`}
      viewBox="0 0 64 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Top arrowhead pointing up-left towards ~11 o'clock */}
      <path
        d="M 23 14 L 32 8 L 32 20"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Sweeping C-curve arching down-left and curving under to the right */}
      <path
        ref={pathRef}
        d="M 32 8 C 17 12, 6 24, 5 38 C 4 52, 16 61, 30 61 C 40 61, 48 56, 52 46"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bottom arrowhead pointing up-right towards ~2 o'clock */}
      <path
        d="M 40 48 L 52 46 L 49 57"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Yellow 8-point Sunburst / Asterisk Star under "folio"
 * Matches Reference Screenshot 2 with 8 radiating golden spokes.
 */
export function YellowSunburstStar({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-18 h-18 sm:w-22 sm:h-22 text-[#FBBF24] animate-star-pulse overflow-visible ${className}`}
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Vertical spoke */}
      <line x1="34" y1="4" x2="34" y2="64" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      {/* Horizontal spoke */}
      <line x1="4" y1="34" x2="64" y2="34" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      {/* Diagonal spoke 1 */}
      <line x1="13" y1="13" x2="55" y2="55" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      {/* Diagonal spoke 2 */}
      <line x1="55" y1="13" x2="13" y2="55" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
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
 * Dual Sketchy Hand-drawn Underline for Download CV matching the reference screenshot
 */
export function WavyUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-full h-3 text-[#2250F4] overflow-visible ${className}`}
      viewBox="0 0 110 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Primary slightly arched hand-drawn stroke */}
      <path
        d="M 2 5 C 28 8, 70 3, 108 4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Secondary expressive sketch accent line underneath */}
      <path
        d="M 18 10 C 44 11, 78 8, 92 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

