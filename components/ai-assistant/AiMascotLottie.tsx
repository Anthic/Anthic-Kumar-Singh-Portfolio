"use client";

import React, { useState, useEffect } from "react";
import { Lottie } from "lottie-react";
import aiAnimation from "@/public/ai.json";

interface AiMascotLottieProps {
  className?: string;
  size?: number;
}

export default function AiMascotLottie({
  className = "",
  size = 80,
}: AiMascotLottieProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`inline-block shrink-0 ${className}`}
        style={{ width: size, height: size }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={`select-none pointer-events-none inline-block shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Lottie
        src={aiAnimation as object}
        loop
        autoplay
        style={{ width: size, height: size }}
      />
    </div>
  );
}
