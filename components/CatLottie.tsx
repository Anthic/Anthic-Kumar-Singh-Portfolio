"use client";

import React from "react";
import { Lottie } from "lottie-react";
import catAnimation from "@/public/Loader cat.json";

interface CatLottieProps {
  className?: string;
  size?: number;
}

/**
 * Animated cat Lottie — uses the named { Lottie } export from lottie-react v2.
 * src accepts an object (the JSON animation data) directly.
 * Renders "Loader cat.json" (280×200, animated sitting cat with waving tail & ears).
 * Displayed beside "What I Do" heading, above the bird-sky curves.
 */
export default function CatLottie({ className = "", size = 90 }: CatLottieProps) {
  const height = Math.round((size * 200) / 280);

  return (
    <div
      className={`select-none pointer-events-none inline-block ${className}`}
      style={{ width: size, height }}
      aria-hidden="true"
    >
      <Lottie
        src={catAnimation as object}
        loop
        autoplay
        style={{ width: size, height }}
      />
    </div>
  );
}
