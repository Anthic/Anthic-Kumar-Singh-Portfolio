"use client";

interface LenisInstance {
  scrollTo: (
    target: number | HTMLElement | string,
    options?: {
      offset?: number;
      duration?: number;
      immediate?: boolean;
      lock?: boolean;
      easing?: (t: number) => number;
    }
  ) => void;
}

declare global {
  interface Window {
    __lenis?: LenisInstance;
  }
}

/**
 * Smoothly scrolls to a section ID with offset for the sticky navbar,
 * leveraging Lenis if available or native smooth scrolling.
 */
export function scrollToSection(targetId: string, offset = 76) {
  if (typeof window === "undefined") return;

  if (targetId === "top" || targetId === "hero") {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.1 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return;
  }

  const el = document.getElementById(targetId);
  if (!el) return;

  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -offset, duration: 1.1 });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}
