"use client";

import React, { useState, useEffect } from "react";
import { Lottie } from "lottie-react";
import contactAnimation from "@/public/contact-part.json";

interface ContactManLottieProps {
  className?: string;
}

export default function ContactManLottie({
  className = "",
}: ContactManLottieProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-full max-w-[480px] lg:max-w-[540px] aspect-square mx-auto flex items-center justify-center ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={`w-full max-w-[480px] lg:max-w-[540px] aspect-square mx-auto relative select-none flex items-center justify-center ${className}`}
      aria-label="Animated contact illustration"
    >
      <Lottie
        src={contactAnimation as object}
        loop
        autoplay
        className="w-full h-full object-contain pointer-events-none"
      />
    </div>
  );
}
