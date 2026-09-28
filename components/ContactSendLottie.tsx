"use client";

import React, { useState, useEffect } from "react";
import { Lottie } from "lottie-react";
import contactUsAnimation from "@/public/Contact us.json";

interface ContactSendLottieProps {
  className?: string;
  size?: number;
}

export default function ContactSendLottie({
  className = "",
  size = 56,
}: ContactSendLottieProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`shrink-0 select-none pointer-events-none ${className}`}
        style={{ width: size, height: size }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={`shrink-0 select-none pointer-events-none flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Lottie
        src={contactUsAnimation as object}
        loop
        autoplay
        style={{ width: size, height: size }}
      />
    </div>
  );
}
