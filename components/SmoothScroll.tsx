"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with native RAF and responsive auto-resizing
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      autoResize: true,
    });

    lenisRef.current = lenis;
    if (typeof window !== "undefined") {
      window.__lenis = lenis;
    }

    // Use standard requestAnimationFrame instead of lagSmoothing(0) which freezes scroll on frame drops
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Observe document mutations to keep scroll bounds updated as components and images mount
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    if (document.body) {
      resizeObserver.observe(document.body);
    }

    const handleResize = () => {
      lenis.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      lenis.destroy();
      lenisRef.current = null;
      if (typeof window !== "undefined") {
        window.__lenis = undefined;
      }
    };
  }, []);

  return <>{children}</>;
}
