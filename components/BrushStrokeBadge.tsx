"use client";

import React from "react";

interface BrushStrokeBadgeProps {
  className?: string;
}

/**
 * Brush stroke badge using the user-provided freeform blob SVG path.
 * Text is centered horizontally within the blob using text-anchor="middle".
 * Visual center of the blob ≈ x=320, so all text x positions set to 320.
 * Font: Caveat cursive to match handwriting style in reference screenshot.
 * Whole element rotated -4deg (about me right-side element).
 */
export default function BrushStrokeBadge({ className = "" }: BrushStrokeBadgeProps) {
  return (
    <div
      className={`relative inline-block select-none ${className}`}
      aria-label="Code. Create. Elevate."
      style={{
        transform: "rotate(-4deg)",
      }}
    >
      <svg
        viewBox="0 0 611 478"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[260px] sm:w-[290px] md:w-[320px] h-auto overflow-visible"
        role="img"
        aria-label="Code. Create. Elevate."
      >
        {/* User-provided hand-drawn freeform blob shape */}
        <path
          d="M 311,12 L 168,55 L 51,106 L 12,133 L 31,174 L 52,180 L 36,214 L 71,250 L 71,283
             L 98,312 L 98,334 L 129,369 L 159,369 L 164,389 L 195,419 L 233,412 L 234,435
             L 261,466 L 444,396 L 575,369 L 583,347 L 552,310 L 552,296 L 599,287 L 572,230
             L 556,229 L 548,191 L 525,164 L 510,162 L 513,141 L 486,102 L 460,98 L 412,40 L 339,51 Z"
          fill="#C6BFF2"
        />

        {/* ── Text: centered within blob, visual center x ≈ 320 ── */}

        {/* Line 1: Code. */}
        <text
          x="320"
          y="148"
          fontSize="102"
          fill="#1c1c2e"
          fontFamily="var(--font-caveat), Caveat, cursive"
          fontWeight="600"
          textAnchor="middle"
          transform="rotate(-2 320 148)"
        >
          Code.
        </text>

        {/* Line 2: Create. */}
        <text
          x="320"
          y="262"
          fontSize="102"
          fill="#1c1c2e"
          fontFamily="var(--font-caveat), Caveat, cursive"
          fontWeight="600"
          textAnchor="middle"
          transform="rotate(1 320 262)"
        >
          Create.
        </text>

        {/* Line 3: Elevate. */}
        <text
          x="316"
          y="372"
          fontSize="102"
          fill="#1c1c2e"
          fontFamily="var(--font-caveat), Caveat, cursive"
          fontWeight="600"
          textAnchor="middle"
          transform="rotate(-1 316 372)"
        >
          Elevate.
        </text>
      </svg>
    </div>
  );
}
