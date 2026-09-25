import React, { forwardRef } from "react";

/**
 * 2025 Edition Hand-drawn Sketched Badge with curved doodle line & arrow
 * Matches reference screenshot 2 with SVG drawing animation support.
 */

interface EditionBadgeProps {
  className?: string;
  circlePathRef?: React.RefObject<SVGPathElement | null>;
  arrowPathRef?: React.RefObject<SVGPathElement | null>;
  arrowHeadRef?: React.RefObject<SVGPathElement | null>;
  textRef?: React.RefObject<HTMLDivElement | null>;
}

export const EditionBadge = forwardRef<HTMLDivElement, EditionBadgeProps>(
  function EditionBadge(
    { className = "", circlePathRef, arrowPathRef, arrowHeadRef, textRef },
    ref
  ) {
    return (
      <div
        ref={ref}
        className={`relative inline-flex items-center select-none ${className}`}
      >
        {/* Hand-drawn Oval Badge Container — tilted -12deg like reference */}
        <div className="relative flex items-center justify-center -rotate-[11deg] hover:rotate-0 transition-transform duration-300">
          <svg
            viewBox="0 0 136 80"
            className="w-[124px] sm:w-[138px] h-auto overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              ref={circlePathRef}
              className="hero-draw-circle"
              d="M 38 12
                 C 22 10, 10 20, 10 38
                 C 10 56, 24 68, 54 71
                 C 86 73, 122 66, 126 44
                 C 129 26, 110 12, 74 10
                 C 50 8, 32 10, 24 16"
              stroke="#2250F4"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={100}
              style={{ strokeDasharray: 100, strokeDashoffset: 0 }}
            />
          </svg>

          <div
            ref={textRef}
            className="hero-badge-text absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          >
            <span className="text-[17px] sm:text-[21px] font-extrabold tracking-tight text-[#2250F4] leading-tight">
              2025
            </span>
            <span className="text-[17px] sm:text-[21px] font-extrabold tracking-tight text-[#2250F4] leading-none">
              Edition
            </span>
          </div>
        </div>

        {/* Hand-drawn Doodle Arrow: loops at top and arches down pointing towards "Port" */}
        <div className="relative -ml-2 -mt-1 pointer-events-none">
          <svg
            viewBox="0 0 54 52"
            className="w-[58px] h-[56px] sm:w-[68px] sm:h-[64px] text-[#2250F4] overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Loop-the-loop then arch down */}
            <path
              ref={arrowPathRef}
              className="hero-draw-arrow"
              d="M 2 24
                 C 6 22, 10 14, 15 16
                 C 19 18, 17 25, 12 23
                 C 15 15, 28 10, 36 22
                 C 40 28, 42 36, 42 42"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={100}
              style={{ strokeDasharray: 100, strokeDashoffset: 0 }}
            />
            {/* Arrowhead pointing down */}
            <path
              ref={arrowHeadRef}
              className="hero-draw-arrowhead"
              d="M 34 35 L 42 43 L 48 35"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={100}
              style={{ strokeDasharray: 100, strokeDashoffset: 0 }}
            />
          </svg>
        </div>
      </div>
    );
  }
);

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
 * Hand-drawn doodle arrow next to 'f' matching reference screenshot:
 * Curved backward-C loop on the left that splits into:
 * 1) Top arrow curving up-right with arrowhead pointing towards upper 'f'
 * 2) Bottom arrow curving down-right with arrowhead pointing towards lower 'f'
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
      className={`text-[#141416] overflow-visible select-none ${className}`}
      viewBox="0 0 54 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Top curved stroke arcing up-right with arrowhead pointing towards 'f' */}
      <path
        ref={pathRef}
        d="M 15 36
           C 10 24, 12 14, 24 10
           C 31 8, 38 9, 43 13"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 33 10 L 44 13 L 38 22"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bottom curved stroke curling down-right with arrowhead */}
      <path
        d="M 15 36
           C 17 45, 25 54, 38 50
           C 43 48, 46 45, 48 42"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 38 39 L 49 42 L 43 51"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bottom loop tail flourish */}
      <path
        d="M 36 50 C 37 54, 39 58, 42 61"
        stroke="currentColor"
        strokeWidth="2.8"
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
        d="M 28 270
           C 22 180, 12 110, 24 68
           C 38 20, 105 10, 210 10
           C 310 10, 375 22, 405 65
           C 438 118, 442 240, 422 350
           C 406 420, 380 470, 340 495"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Coral-red Curly Spiral Spring Doodle at bottom-right of photo
 * 3 smooth descending cursive loop coils
 */
export function RedSpiralDoodle({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-11 h-20 text-[#EF4444] animate-float-gentle overflow-visible select-none ${className}`}
      viewBox="0 0 50 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M 12 8
           C 28 4, 42 16, 38 28
           C 34 38, 18 30, 20 22
           C 22 14, 40 28, 42 44
           C 44 56, 22 52, 24 40
           C 26 30, 44 46, 44 64
           C 44 78, 26 76, 28 64
           C 30 54, 42 70, 36 84
           C 32 92, 22 90, 16 86"
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

