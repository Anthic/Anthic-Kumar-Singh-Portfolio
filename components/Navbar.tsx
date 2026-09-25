"use client";

import React, { useState } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/**
 * Pre-calculated smooth sine wave path
 * Covering 24 cycles of 16px wavelength (total 384px)
 * for infinite seamless horizontal translation.
 */
function generateSeamlessWavePath(): string {
  const wavelength = 16;
  const halfWave = 8;
  const amplitude = 2.7;
  const yMid = 4.5;
  let d = `M 0 ${yMid}`;

  for (let i = 0; i < 24; i++) {
    const xStart = i * wavelength;
    const xMid = xStart + halfWave;
    const xEnd = xStart + wavelength;

    // Trough (downward curve)
    d += ` C ${xStart + 3.2} ${yMid + amplitude}, ${xMid - 3.2} ${yMid + amplitude}, ${xMid} ${yMid}`;
    // Crest (upward curve)
    d += ` C ${xMid + 3.2} ${yMid - amplitude}, ${xEnd - 3.2} ${yMid - amplitude}, ${xEnd} ${yMid}`;
  }

  return d;
}

const WAVE_PATH_DATA = generateSeamlessWavePath();

/**
 * Live waving underline component
 * - Positioned right under the link text with reduced vertical gap
 * - Seamlessly loops horizontally along the width of the navlink
 */
function LiveWaveUnderline({ active = false }: { active?: boolean }) {
  return (
    <div
      className={`absolute left-0 right-0 top-full -mt-[1px] h-[9px] overflow-hidden pointer-events-none transition-all duration-200 ease-out ${
        active ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
      aria-hidden="true"
    >
      <svg
        className={`h-[9px] overflow-visible text-[#E75A4D] ${
          active ? "animate-wave-live" : ""
        }`}
        style={{
          width: "384px",
          filter: "drop-shadow(0 1px 1px rgba(231, 90, 77, 0.15))",
        }}
        viewBox="0 0 384 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={WAVE_PATH_DATA}
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function Navbar() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const headerRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const updateNavHeight = () => {
      if (headerRef.current) {
        const h = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty("--navbar-h", `${h}px`);
      }
    };
    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  return (
    <header
      ref={headerRef}
      className="navbar w-full bg-[#fef9f5]/90 backdrop-blur-md sticky top-0 z-[100] transition-colors border-b border-zinc-200/40"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-16 sm:h-[72px] flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 select-none focus:outline-none"
        >
          <span className="font-bold text-[1.28rem] sm:text-[1.38rem] tracking-tight text-[#141416] group-hover:text-black transition-colors font-sans">
            Anthic Kumar Singh
          </span>
          {/* Coral accent dot matching the reference */}
          <span
            className="w-2.5 h-2.5 rounded-full bg-[#E75A4D] inline-block transition-transform duration-300 group-hover:scale-125"
            aria-hidden="true"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center space-x-8 lg:space-x-10"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isHovered = hoveredItem === item.label;
            const isWaveVisible = isHovered;

            return (
              <div
                key={item.label}
                className="py-1"
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  className={`relative inline-flex flex-col items-center text-[15px] lg:text-[15.5px] font-medium tracking-tight transition-colors duration-200 cursor-pointer ${
                    isWaveVisible ? "text-[#111113]" : "text-[#3e3e42] hover:text-[#111113]"
                  }`}
                >
                  <span>{item.label}</span>

                  {/* Live Horizontal Waving Underline on hover */}
                  <LiveWaveUnderline active={isWaveVisible} />
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-800 hover:text-black hover:bg-zinc-200/50 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200/60 bg-[#FAF9F6] px-6 py-5 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isSelected = activeItem === item.label;
              return (
                <div key={item.label} className="w-fit py-1">
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.label);
                      setMobileMenuOpen(false);
                    }}
                    className={`relative inline-flex flex-col items-start text-lg font-medium transition-colors ${
                      isSelected ? "text-zinc-950 font-semibold" : "text-zinc-700 hover:text-zinc-950"
                    }`}
                  >
                    <span>{item.label}</span>
                    <LiveWaveUnderline active={isSelected} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
