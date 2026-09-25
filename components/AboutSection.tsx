"use client";

import React from "react";
import BrushStrokeBadge from "./BrushStrokeBadge";
import CatLottie from "./CatLottie";
import WhatIDoStickyStack from "./WhatIDoStickyStack";

/**
 * AboutSection component matching reference screenshot pixel-for-pixel:
 * 1. "About me!" in royal blue serif with red wavy squiggle doodle and sketchy dark underline
 * 2. Bio paragraph: "I'm a full-stack developer who loves turning ideas into..."
 * 3. Green 4-point sparkle star doodle
 * 4. Hand-drawn brush stroke badge with "Code. / Create. / Elevate."
 * 5. "What I Do" section header with sketchy flying birds doodle
 */
export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Me Section"
      className="w-full bg-[#fef9f5] pt-14 pb-2 sm:pt-18 sm:pb-4 overflow-x-clip"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* ── Top Row: About Me + Bio Paragraph + Green Star + Brush Stroke ── */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-8 xl:gap-12">
          {/* 1. "About me!" with red wavy squiggle & hand-drawn double underline */}
          <div className="shrink-0 flex flex-col items-start">
            <h2 className="hero-title-font font-serif text-[#1447df] text-[52px] sm:text-[62px] lg:text-[68px] leading-[0.95] tracking-tight m-0 p-0">
              <span className="block">About</span>
              <span className="inline-flex items-center gap-3 relative">
                <span>me!</span>
                {/* Red/Coral Wavy Squiggle Doodle beside "me!" */}
                <span className="inline-block relative -top-1">
                  <svg
                    className="w-[46px] sm:w-[54px] h-[16px] text-[#f85648] overflow-visible"
                    viewBox="0 0 54 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M 2 8 C 6 2, 10 2, 14 8 C 18 14, 22 14, 26 8 C 30 2, 34 2, 38 8 C 42 14, 46 14, 52 8"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h2>

            {/* Hand-drawn sketchy dark underline beneath "me!" */}
            <div className="w-[100px] sm:w-[115px] mt-1 relative pointer-events-none">
              <svg
                className="w-full h-[14px] text-[#1e2229] overflow-visible"
                viewBox="0 0 100 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Primary slightly arched sketch line */}
                <path
                  d="M 2 5 C 28 8, 64 3, 98 6"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
                {/* Secondary sketchy accent stroke */}
                <path
                  d="M 14 11 C 38 12, 70 8, 86 10"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  opacity="0.85"
                />
              </svg>
            </div>
          </div>

          {/* 2. Middle Column: Bio Paragraph */}
          <div className="max-w-[440px] xl:max-w-[470px]">
            <p className="text-[17px] sm:text-[18px] leading-[1.65] font-medium text-[#141416] tracking-[-0.01em]">
              I&apos;m a full-stack developer who loves turning ideas into
              real-world web and mobile applications. I enjoy solving problems,
              writing clean code and creating smooth user experiences.
            </p>
          </div>

          {/* 3. Green 4-Point Sparkle Star Doodle */}
          <div className="hidden lg:flex shrink-0 items-center justify-center self-center px-2">
            <div className="animate-star-pulse">
              <img
                src="/hero-figma/green-sparkle-star.svg"
                alt=""
                className="w-[48px] h-[42px] object-contain drop-shadow-sm select-none pointer-events-none"
              />
            </div>
          </div>

          {/* 4. Brush Stroke Badge ("Code. / Create. / Elevate.") */}
          <div className="shrink-0 flex items-center justify-start lg:justify-end">
            <BrushStrokeBadge />
          </div>
        </div>

        {/* ── Bottom Section: "What I Do" + Cat sitting on sky + Birds beneath ── */}
        <div className="mt-8 sm:mt-10 flex items-end gap-5">
          <h2 className="hero-title-font font-serif text-[#1447df] text-[52px] sm:text-[62px] lg:text-[68px] leading-[1] tracking-tight m-0 p-0">
            What I Do
          </h2>

          {/*
            Cat + Sky scene beside the heading:
            Cat Lottie sits ON TOP of the bird curves —
            like a cat perched in the sky watching birds fly below it.
          */}
          <div className="relative flex flex-col items-center mb-1 select-none pointer-events-none">

            {/* Animated cat — sits above the birds, tail waving */}
            <CatLottie size={88} className="relative z-10" />

            {/* Hand-drawn bird flock beneath the cat — birds soaring below */}
            <svg
              className="overflow-visible -mt-1"
              width="96"
              height="44"
              viewBox="0 0 96 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Bird 1 — medium, far left */}
              <path
                d="M 2 24 C 5 18, 10 18, 13 24 C 16 18, 21 18, 24 24"
                stroke="#3a3f4a"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Bird 2 — small, center-left, higher */}
              <path
                d="M 26 14 C 28 9, 32 9, 34 14 C 36 9, 40 9, 42 14"
                stroke="#3a3f4a"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Bird 3 — largest, center, lowest — closest */}
              <path
                d="M 36 34 C 41 25, 48 25, 53 34 C 58 25, 65 25, 70 34"
                stroke="#3a3f4a"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Bird 4 — tiny, upper right — far distance */}
              <path
                d="M 68 10 C 69.5 6, 72 6, 73.5 10 C 75 6, 77.5 6, 79 10"
                stroke="#3a3f4a"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.72"
              />

              {/* Bird 5 — very tiny, far upper right — deepest distance */}
              <path
                d="M 82 4 C 83 1, 85 1, 86 4 C 87 1, 89 1, 90 4"
                stroke="#3a3f4a"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.52"
              />
            </svg>
          </div>
        </div>

        {/* ── Scroll-Driven Sticky Card Stack matching prompt.md ── */}
        <WhatIDoStickyStack />
      </div>
    </section>
  );
}
