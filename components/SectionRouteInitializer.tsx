"use client";

import { useEffect } from "react";
import { scrollToSection } from "./scrollHelper";

const ROUTE_TO_ID: Record<string, string> = {
  "/about": "about",
  "/work": "work",
  "/skills": "skills",
  "/experience": "experience",
  "/contact": "contact",
};

/**
 * Handles initial deep-linking and cleans up legacy hash anchors.
 * When visiting /about, /work, /skills, /experience, or /contact directly,
 * smoothly scrolls to the corresponding section.
 * Also converts any legacy /#about or /#work URLs to clean paths /about, /work.
 */
export default function SectionRouteInitializer() {
  useEffect(() => {
    // 1. Remove hash if present (e.g. /#about -> /about, /#work -> /work)
    if (window.location.hash) {
      const raw = window.location.hash.replace("#", "").toLowerCase();
      const cleanTarget = raw === "projects" ? "work" : raw;
      if (["about", "work", "skills", "experience", "contact"].includes(cleanTarget)) {
        window.history.replaceState(null, "", `/${cleanTarget}`);
        const timer = setTimeout(() => {
          scrollToSection(cleanTarget);
        }, 300);
        return () => clearTimeout(timer);
      }
    }

    // 2. Direct route access like /about, /work, etc.
    const path = window.location.pathname;
    const targetId = ROUTE_TO_ID[path];
    if (targetId) {
      const timer = setTimeout(() => {
        scrollToSection(targetId);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  return null;
}
