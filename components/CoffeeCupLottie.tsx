"use client";

import React from "react";
import { Lottie } from "lottie-react";
import coffeeAnimation from "@/public/Boy using laptop in the coffee cup.json";

interface CoffeeCupLottieProps {
  className?: string;
  size?: number;
}

/**
 * Animated "Boy using laptop in the coffee cup" Lottie.
 * Uses direct JSON import → src prop (same pattern as CatLottie which works correctly).
 * Rendered at a size large enough to stay crisp (default 110px wide).
 */
export default function CoffeeCupLottie({
  className = "",
  size = 110,
}: CoffeeCupLottieProps) {
  // Original canvas ratio: 904 × 810
  const height = Math.round((size * 810) / 904);

  return (
    <div
      className={`select-none pointer-events-none inline-block shrink-0 ${className}`}
      style={{ width: size, height }}
      aria-hidden="true"
    >
      <Lottie
        src={coffeeAnimation as object}
        loop
        autoplay
        style={{ width: size, height }}
      />
    </div>
  );
}
