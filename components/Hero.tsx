"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Globe,
  ArrowUpRight,
  Download,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  EditionBadge,
  GreenPlusDoodle,
  BlueSparkleStar,
  BottomCurledArrow,
  YellowSunburstStar,
  SmileyFaceBadge,
  HeadRadiatingDashes,
  LimeStarburst,
  BlueOuterAuraLine,
  RedSpiralDoodle,
  WavyUnderline,
} from "./HeroDoodles";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const leftTextRef = useRef<HTMLDivElement | null>(null);
  const rightColumnRef = useRef<HTMLDivElement | null>(null);
  const auraLineRef = useRef<HTMLDivElement | null>(null);
  const floatingCardRef = useRef<HTMLDivElement | null>(null);
  const starRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Entrance timeline on load
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge-anim", {
        opacity: 0,
        y: -18,
        rotation: -12,
        duration: 0.8,
      })
        .from(
          ".hero-title-part",
          {
            opacity: 0,
            y: 35,
            duration: 0.9,
            stagger: 0.12,
          },
          "-=0.5"
        )
        .from(
          ".hero-pill-badge",
          {
            scale: 0.7,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.8)",
          },
          "-=0.6"
        )
        .from(
          rightColumnRef.current,
          {
            opacity: 0,
            scale: 0.95,
            y: 30,
            duration: 1.1,
          },
          "-=0.7"
        )
        .from(
          floatingCardRef.current,
          {
            opacity: 0,
            y: 35,
            scale: 0.96,
            duration: 0.85,
            ease: "back.out(1.4)",
          },
          "-=0.6"
        )
        .from(
          ".hero-doodle-pop",
          {
            opacity: 0,
            scale: 0.4,
            duration: 0.7,
            stagger: 0.07,
          },
          "-=0.6"
        );

      // ScrollTrigger Parallax for continuous blue outer aura line and stars
      if (auraLineRef.current) {
        gsap.to(auraLineRef.current, {
          y: -40,
          rotation: 4,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      if (starRef.current) {
        gsap.to(starRef.current, {
          y: -35,
          rotation: 35,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Parallax float on floating identity card
      if (floatingCardRef.current) {
        gsap.to(floatingCardRef.current, {
          y: -20,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      aria-label="Introduction Banner"
      className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden pt-4 pb-20 lg:py-10 bg-[#FAF9F6]"
    >
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          
          {/* =========================================
              LEFT COLUMN: Editorial Typography & CTAs
             ========================================= */}
          <div ref={leftTextRef} className="lg:col-span-7 flex flex-col justify-center relative z-10">
            
            {/* Top Badge: "2025 Edition" with curly arrow */}
            <div className="hero-badge-anim mb-3 sm:mb-5 w-fit">
              <EditionBadge />
            </div>

            {/* Main Title: "Port" & "folio" */}
            <div className="relative select-none">
              
              {/* Line 1: "Port" + Sparkle Star floating in space */}
              <div className="hero-title-part relative flex items-baseline">
                <h1 className="font-serif text-[5.4rem] sm:text-[7.4rem] md:text-[8.6rem] lg:text-[9.8rem] xl:text-[10.5rem] font-normal leading-[0.84] text-[#2250F4] tracking-tight">
                  Port
                </h1>

                {/* 4-point Blue Sparkle Star between "Port" and Right-Side Image */}
                <div className="hero-doodle-pop absolute left-[68%] sm:left-[64%] top-4 sm:top-6">
                  <BlueSparkleStar className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
              </div>

              {/* Line 2: "folio" + Badges + Accents */}
              <div className="hero-title-part relative flex items-center mt-1 sm:mt-2">
                
                {/* Green Plus sign on the left of "f" in "folio" */}
                <div className="hero-doodle-pop absolute -left-7 sm:-left-10 top-1/2 -translate-y-1/2">
                  <GreenPlusDoodle />
                </div>

                <div className="relative inline-flex items-baseline">
                  {/* The word "folio" with sparkle star replacing the dot of the "i" */}
                  <span className="font-serif text-[5.4rem] sm:text-[7.4rem] md:text-[8.6rem] lg:text-[9.8rem] xl:text-[10.5rem] font-normal leading-[0.84] text-[#2250F4] tracking-tight">
                    fol
                  </span>

                  {/* Letter "i" with custom sparkle star tittle */}
                  <span className="relative inline-block font-serif text-[5.4rem] sm:text-[7.4rem] md:text-[8.6rem] lg:text-[9.8rem] xl:text-[10.5rem] font-normal leading-[0.84] text-[#2250F4] tracking-tight">
                    i
                    {/* Star sits right on the dot */}
                    <span className="hero-doodle-pop absolute left-1/2 -top-1 sm:-top-3 -translate-x-1/2 pointer-events-none">
                      <BlueSparkleStar className="w-6 h-6 sm:w-7 sm:h-7" />
                    </span>
                  </span>

                  <span className="font-serif text-[5.4rem] sm:text-[7.4rem] md:text-[8.6rem] lg:text-[9.8rem] xl:text-[10.5rem] font-normal leading-[0.84] text-[#2250F4] tracking-tight">
                    o
                  </span>
                </div>

                {/* Coral-orange "Full-Stack Developer" Pill Badge */}
                <div className="hero-pill-badge ml-3 sm:ml-5 -mt-6 sm:-mt-10 self-center">
                  <div className="bg-[#FF4A32] text-white px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-bold tracking-tight shadow-sm inline-flex items-center whitespace-nowrap -rotate-[2deg] hover:rotate-0 transition-transform duration-200">
                    Full-Stack Developer
                  </div>
                </div>

                {/* Yellow 8-point Sunburst Asterisk directly under "folio" */}
                <div
                  ref={starRef}
                  className="hero-doodle-pop absolute -right-3 sm:right-6 -bottom-10 sm:-bottom-12 pointer-events-none"
                >
                  <YellowSunburstStar className="w-14 h-14 sm:w-16 sm:h-16 text-[#FBBF24]" />
                </div>
              </div>

              {/* Bottom Curled Arrow under "f" in "folio" */}
              <div className="hero-doodle-pop absolute -bottom-13 left-0 sm:left-2 pointer-events-none">
                <BottomCurledArrow />
              </div>
            </div>

            {/* Subtitle Value Proposition */}
            <div className="mt-14 sm:mt-16 max-w-lg">
              <p className="text-[#141416] text-lg sm:text-[1.18rem] font-semibold leading-snug tracking-tight">
                I build digital products that are <br className="hidden sm:block" />
                fast, scalable and thoughtfully designed.
              </p>
            </div>

            {/* Action Buttons: "Let's Work Together ↗" & "Download CV ↓" */}
            <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-6 sm:gap-8">
              
              {/* Primary Pill Button */}
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#111113] text-[#FAF9F6] font-semibold text-[15px] hover:bg-black hover:scale-[1.02] active:scale-[0.98] shadow-md transition-all duration-200"
              >
                <span>Let&apos;s Work Together</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* Download CV link with hand-drawn wavy underline */}
              <a
                href="/cv.pdf"
                download
                className="group relative inline-flex flex-col items-center pt-1 focus:outline-none"
              >
                <div className="inline-flex items-center gap-1.5 text-[15.5px] font-bold text-[#141416] group-hover:text-[#2250F4] transition-colors">
                  <span>Download CV</span>
                  <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5 text-current" />
                </div>
                
                {/* Hand-drawn blue wavy underline */}
                <div className="w-full -mt-0.5 transition-transform group-hover:scale-x-105 duration-200">
                  <WavyUnderline className="text-[#2250F4]" />
                </div>
              </a>
            </div>

          </div>

          {/* ==========================================================
              RIGHT COLUMN: Profile Photo & Background Lines / Doodles
             ========================================================== */}
          <div ref={rightColumnRef} className="lg:col-span-5 relative flex justify-center items-center mt-8 lg:mt-0">
            
            {/* 1. Continuous Blue Outer Aura Line Enveloping the Top and Right Side */}
            <div
              ref={auraLineRef}
              className="absolute -inset-6 sm:-inset-10 flex items-center justify-center pointer-events-none z-0"
            >
              <BlueOuterAuraLine className="w-[370px] sm:w-[440px] lg:w-[470px] h-[450px] sm:h-[510px] lg:h-[540px]" />
            </div>

            {/* 2. Lime-green 8-point starburst at top-right corner */}
            <div className="hero-doodle-pop absolute -top-8 right-2 sm:right-6 pointer-events-none z-10">
              <LimeStarburst className="w-12 h-12 sm:w-14 sm:h-14" />
            </div>

            {/* 3. Three Radiating Ink Dashes above the right side of the head */}
            <div className="hero-doodle-pop absolute -top-9 sm:-top-11 right-[26%] sm:right-[30%] pointer-events-none z-30">
              <HeadRadiatingDashes />
            </div>

            {/* 4. Coral-red Curly Spiral Spring Doodle at bottom-right */}
            <div className="hero-doodle-pop absolute -bottom-5 sm:-bottom-7 right-3 sm:right-6 pointer-events-none z-30">
              <RedSpiralDoodle className="w-10 h-16 sm:w-11 sm:h-18" />
            </div>

            {/* 5. Main Photo Composition with 3D Pop-out Effect */}
            <div className="relative w-[300px] sm:w-[370px] lg:w-[390px] h-[400px] sm:h-[470px] lg:h-[490px] flex items-end justify-center">
              
              {/* Lilac/Periwinkle Card Backdrop (starts below hair for pop-out effect) */}
              <div className="absolute inset-x-0 bottom-0 top-12 sm:top-14 rounded-[40px] sm:rounded-[48px] bg-[#CCD2FC] shadow-[0_20px_50px_rgba(34,80,244,0.1)] border border-[#BFC8FC]/70 z-10">
                
                {/* Green Smiley Badge anchored at top-left corner */}
                <div className="hero-doodle-pop absolute -top-5 -left-5 sm:-top-6 sm:-left-6 z-40">
                  <SmileyFaceBadge />
                </div>
              </div>

              {/* Anthic's Photo Cutout (Hair pops out above the lilac backdrop) */}
              <div className="relative z-20 w-full h-full flex items-end justify-center overflow-visible">
                <Image
                  src="/hero-image.png"
                  alt="Anthic Kumar Singh — Full-Stack Developer"
                  width={460}
                  height={520}
                  priority
                  className="w-[96%] sm:w-[94%] h-auto object-cover object-top select-none drop-shadow-md transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              {/* Floating Identity Card overlapping bottom-left */}
              <div
                ref={floatingCardRef}
                className="absolute -bottom-9 sm:-bottom-11 -left-4 sm:-left-8 w-[275px] sm:w-[315px] bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-[26px] p-4 sm:p-5 shadow-[0_16px_36px_rgba(0,0,0,0.08)] border border-zinc-100/90 z-40 transition-all duration-300 hover:shadow-[0_22px_45px_rgba(0,0,0,0.12)]"
              >
                {/* Header: Name with yellow highlight + Pronouns */}
                <div className="flex items-baseline justify-between gap-2 pb-2.5 sm:pb-3 border-b border-zinc-100">
                  <div className="relative">
                    <h2 className="text-[1.08rem] sm:text-[1.2rem] font-extrabold tracking-tight text-[#141416] leading-none">
                      Anthic Kumar Singh
                    </h2>
                    {/* Yellow highlighter underline stroke under name */}
                    <span
                      className="absolute -bottom-1 left-0 w-full h-[5px] bg-[#FDE047]/85 rounded-full -z-10"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-[#2563EB] select-none tracking-tight">
                    He/Him
                  </span>
                </div>

                {/* Details List */}
                <div className="mt-3 space-y-2 text-[12px] sm:text-[13px] font-medium text-zinc-700">
                  
                  {/* Location: Dhaka, Bangladesh */}
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-900 shrink-0" />
                    <span className="text-zinc-800 font-semibold truncate">
                      Dhaka, Bangladesh
                    </span>
                  </div>

                  {/* Email */}
                  <a
                    href="mailto:anthickumarsingh@gmail.com"
                    className="flex items-center gap-2.5 hover:text-[#2250F4] transition-colors group/item"
                  >
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-900 shrink-0 group-hover/item:text-[#2250F4]" />
                    <span className="truncate">anthickumarsingh@gmail.com</span>
                  </a>

                  {/* Website */}
                  <a
                    href="https://anthic.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 hover:text-[#2250F4] transition-colors group/item"
                  >
                    <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-900 shrink-0 group-hover/item:text-[#2250F4]" />
                    <span className="truncate">anthic.dev</span>
                  </a>

                  {/* Facebook Link as specifically requested */}
                  <a
                    href="https://facebook.com/anthickumarsingh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 hover:text-[#1877F2] transition-colors group/item font-semibold text-zinc-800"
                  >
                    {/* Official Facebook SVG Icon */}
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-900 group-hover/item:text-[#1877F2] shrink-0 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="truncate text-zinc-700 group-hover/item:text-[#1877F2]">
                      facebook.com/anthickumarsingh
                    </span>
                  </a>

                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
