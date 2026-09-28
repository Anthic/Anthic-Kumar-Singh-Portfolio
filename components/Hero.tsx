"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { scrollToSection } from "./scrollHelper";

export default function Hero() {
  const [scale, setScale] = useState(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
    const updateScale = () => {
      const width = window.innerWidth;
      // Proportional scale on viewports up to 1440px so the canvas is 100% pixel-identical to Figma
      if (width < 1440) {
        setScale(Math.max(0.26, width / 1440));
      } else {
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <section
      aria-label="Hero Section"
      className="relative w-full bg-[#fef9f5] overflow-hidden flex justify-center"
      style={{
        height: mounted ? `${970 * scale}px` : "970px",
        minHeight: mounted ? `${970 * scale}px` : "970px",
      }}
    >
      {/* ── Exact 1440x970 Figma Canvas (Shifted up to eliminate navbar gap) ── */}
      <div
        className="w-[1440px] h-[970px] relative shrink-0 origin-top bg-[#fef9f5] select-none"
        style={{
          transform: mounted ? `scale(${scale})` : "none",
        }}
        data-node-id="175:256"
      >
        {/* ── 1. Oval sketch doodle around 2025 Edition (Node 175:273: x=16, y=110, w=264, h=230) ── */}
        <div
          className="absolute flex h-[229.966px] items-center justify-center left-[16px] top-[110px] w-[263.985px] z-10 pointer-events-none"
          data-node-id="175:273"
        >
          <div className="flex-none rotate-[-10.07deg]">
            <div className="h-[192px] overflow-clip relative w-[234.013px]">
              <div className="absolute inset-[16.04%_1.76%_16.15%_1.42%]">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src="/hero-figma/oval-sketch.svg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── 2. 2025 Edition text (Node 175:257: x=82.59, y=183) ── */}
        <div
          className="absolute flex h-[91.362px] items-center justify-center left-[82.59px] top-[183px] w-[99.808px] z-20 pointer-events-none"
          data-node-id="175:257"
        >
          <div className="flex-none rotate-[-28.48deg]">
            <div className="[word-break:break-word] content-stretch flex flex-col font-sans font-extrabold gap-[4px] items-center leading-[normal] relative text-[#102ec7] text-[24px] text-center tracking-[0.96px] whitespace-nowrap">
              <p className="relative shrink-0" data-node-id="175:258">
                2025
              </p>
              <p className="relative shrink-0" data-node-id="175:259">
                Edition
              </p>
            </div>
          </div>
        </div>

        {/* ── 3. Top Arrow Filled Head Swirl Long (Node 175:276: x=215, y=160) ──
            Positioned directly beside the 2025 Edition oval with minimal gap */}
        <div
          className="absolute flex items-center justify-center left-[215px] top-[160px] size-[132.597px] z-10 pointer-events-none"
          data-node-id="175:276"
        >
          <div className="flex-none rotate-[97.74deg]">
            <div className="overflow-clip relative size-[117.81px]">
              <div className="absolute inset-[6.86%_10.15%_6.85%_10.14%]">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src="/hero-figma/arrow-swirl-top.svg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── 4. Main Title Line 1: "Port" (Node 175:284: x=25, y=255) ── */}
        <div
          className="absolute flex h-[289.029px] items-center justify-center left-[25px] top-[255px] w-[427.902px] z-20"
          data-node-id="175:284"
        >
          <div className="flex-none rotate-[-4.5deg]">
            <h1 className="[word-break:break-word] hero-title-font font-serif leading-[normal] not-italic relative text-[#1447df] text-[200px] whitespace-nowrap m-0 p-0 tracking-tight">
              <span className="hero-letter leading-[normal] text-[200px]">P</span>
              <span className="hero-letter leading-[normal] text-[196px] relative top-[8px]">o</span>
              <span className="hero-letter leading-[normal] text-[206px] relative -top-[8px]">r</span>
              <span className="hero-letter leading-[normal] text-[218px] relative top-[2px]">t</span>
            </h1>
          </div>
        </div>

        {/* ── 5. Star 3: Blue 4-Point Sparkle Star (Node 175:305: x=498, y=294) ── */}
        <div
          className="absolute left-[498px] top-[294px] size-[54px] z-10 pointer-events-none"
          data-node-id="175:305"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src="/hero-figma/blue-sparkle-star.svg"
          />
        </div>

        {/* ── 6. Coral Pill Badge: "Full-Stack Developer" (Node 175:271: x=445, y=462) ── */}
        <div
          className="absolute bg-[#f85648] content-stretch flex items-center justify-center left-[445px] top-[462px] w-[215px] h-[38px] rounded-full z-30 shadow-sm cursor-default hover:scale-105 transition-transform duration-200 px-[16px]"
          data-node-id="175:271"
        >
          <p className="[word-break:break-word] font-sans font-semibold leading-[normal] relative shrink-0 text-white text-[17px] text-center tracking-[0.4px] whitespace-nowrap">
            Full-Stack Developer
          </p>
        </div>

        {/* ── 7. Main Title Line 2: "folio" with Star replacing the 'i' dot directly ── */}
        <div
          className="absolute flex h-[361.62px] items-center justify-center left-[64px] top-[433px] w-[469.119px] z-20"
          data-node-id="175:285"
        >
          <div className="flex-none rotate-[-4.9deg]">
            <p className="[word-break:break-word] hero-title-font font-serif leading-[0] not-italic relative text-[#1447df] text-[0px] whitespace-nowrap m-0 p-0 tracking-tight">
              <span className="hero-letter leading-[normal] text-[200px]">f</span>
              <span className="hero-letter leading-[normal] text-[200px]">o</span>
              <span className="hero-letter leading-[normal] text-[239px]">l</span>
              
              {/* 'i' letter: circular dot completely clipped away, Star sits down in its place */}
              <span className="hero-letter leading-[normal] text-[200px] relative inline-block">
                {/* 4-point blue Star lowered down to sit directly where the circular dot was */}
                <span className="absolute top-[16%] left-1/2 -translate-x-1/2 w-[46px] h-[46px] pointer-events-none z-30 flex items-center justify-center">
                  <img
                    alt=""
                    className="w-full h-full object-contain"
                    src="/hero-figma/star-i-dot.svg"
                  />
                </span>
                {/* The stem of 'i' in Recoleta font with circular dot 100% cleanly clipped */}
                <span className="inline-block" style={{ clipPath: "inset(35.5% 0 0 0)" }}>
                  i
                </span>
              </span>

              <span className="hero-letter leading-[normal] text-[200px]">o</span>
            </p>
          </div>
        </div>

        {/* ── 9. Star 4: Lime 4-Point Sparkle Star (Node 175:306: x=24, y=486) ── */}
        <div
          className="absolute h-[47px] left-[24px] top-[486px] w-[54px] z-10 pointer-events-none"
          data-node-id="175:306"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src="/hero-figma/green-sparkle-star.svg"
          />
        </div>

        {/* ── 10. Red Swirl Arrow under 'f' and above 'I build' (Node 175:282: x=24, y=655) ── */}
        <div
          className="absolute flex h-[95px] w-[95px] left-[24px] top-[655px] items-center justify-center z-10 pointer-events-none"
          data-node-id="175:282"
        >
          <div className="flex-none rotate-[-44.42deg] w-[76px] h-[76px]">
            <img
              alt=""
              className="block size-full object-contain"
              src="/hero-figma/red-swirl-bottom-left.svg"
            />
          </div>
        </div>

        {/* ── 11. Subtitle Value Proposition (Node 175:260: x=40, y=756) ── */}
        <div
          className="[word-break:break-word] absolute font-sans font-extrabold leading-[1.35] left-[40px] text-[24px] text-black top-[768px] tracking-[0.96px] whitespace-nowrap z-20 flex flex-col gap-[8px]"
          data-node-id="175:260"
        >
          <p className="m-0">I engineer full-stack web apps &amp; AI-driven systems that are</p>
          <p className="m-0">fast, scalable, and built for real-world impact.</p>
        </div>

        {/* ── 12. Buttons Row (Node 175:261: x=40, y=868) ── */}
        <div
          className="absolute flex gap-[16px] items-center left-[40px] top-[868px] z-20"
          data-node-id="175:261"
        >
          {/* Black Primary Button (Node 175:262: w=220, h=48) */}
          <Link
            href="/contact"
            onClick={(e) => {
              const isHomePage =
                typeof window !== "undefined" &&
                (window.location.pathname === "/" ||
                  ["/about", "/work", "/skills", "/experience", "/contact"].includes(window.location.pathname));
              if (isHomePage) {
                e.preventDefault();
                window.history.pushState(null, "", "/contact");
                scrollToSection("contact");
              }
            }}
            className="bg-black flex gap-[10px] items-center justify-center px-[18px] py-[12px] w-[220px] h-[48px] rounded-[8px] shrink-0 hover:bg-neutral-900 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group shadow-sm"
            data-node-id="175:262"
          >
            <span className="[word-break:break-word] font-sans font-semibold leading-[normal] text-[16px] text-white whitespace-nowrap">
              Let’s Work Together
            </span>
            <div className="relative shrink-0 size-[20px]">
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                src="/hero-figma/arrow-up-right.svg"
              />
            </div>
          </Link>

          {/* Download CV Button (Node 175:266: w=220, h=48) */}
          <a
            href="/cv/Anthic_Kumar_Singh_CV.pdf"
            download="Anthic_Kumar_Singh_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-[10px] items-center justify-center px-[18px] py-[12px] w-[220px] h-[48px] rounded-[8px] shrink-0 group transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            data-node-id="175:266"
          >
            <span className="[word-break:break-word] font-sans font-semibold leading-[normal] text-[18px] text-black group-hover:text-[#1447df] transition-colors whitespace-nowrap">
              Download Cv
            </span>
            <div className="relative shrink-0 size-[22px]">
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full group-hover:translate-y-0.5 transition-transform"
                src="/hero-figma/download.svg"
              />
            </div>
          </a>
        </div>

        {/* ── 13. Wavy Underline for Download CV (Node 175:307: x=308, y=913, w=155, h=14.26) ── */}
        <div
          className="absolute left-[308px] top-[913px] w-[160px] h-[14.26px] z-20 pointer-events-none"
          data-node-id="175:307"
        >
          <img
            alt=""
            className="w-full h-auto object-contain"
            src="/hero-figma/wavy-underline.svg"
          />
        </div>

        {/* ── 14. Yellow Sunburst Star (Node 175:302) ── */}
        <div
          className="absolute left-[573px] top-[617px] size-[140px] z-0 pointer-events-none"
          data-node-id="175:302"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src="/hero-figma/yellow-sunburst.svg"
          />
        </div>

        {/* ── 15. Blue Outer Aura Loop Line (Node 175:286: x=803, y=182, w=597, h=487) ── */}
        <div
          className="absolute left-[803px] top-[182px] w-[597px] h-[487px] z-0 pointer-events-none"
          data-node-id="175:286"
        >
          <div className="absolute inset-[-0.41%_-0.34%_-0.41%_-0.33%]">
            <img
              alt=""
              className="block max-w-none size-full"
              src="/hero-figma/blue-aura-loop.svg"
            />
          </div>
        </div>

        {/* ── 16. Lilac Backdrop Shape (Node 175:287: x=819, y=238.5, w=522, h=434.5) ── */}
        <div
          className="absolute left-[819px] top-[238.5px] w-[522px] h-[434.5px] z-10 pointer-events-none"
          data-node-id="175:287"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src="/hero-figma/lilac-backdrop.svg"
          />
        </div>

        {/* ── 17. Anthic Profile Photo Cutout (Node 175:288: left=812.88, top=181.8, w=556, h=505) ── */}
        <div
          className="absolute flex h-[504.817px] items-center justify-center left-[812.88px] top-[175.8px] w-[555.975px] z-20 pointer-events-none"
          data-node-id="175:288"
        >
          <div className="h-[476.046px] relative rounded-[12px] w-[530.307px]">
            <div className="absolute inset-0 overflow-hidden rounded-[12px]">
              <img
                alt="Anthic Kumar Singh"
                className="absolute h-[109.03%] left-0 max-w-none top-0 w-full object-cover"
                src="/hero-image.png"
              />
            </div>
          </div>
        </div>

        {/* ── 18. Green Smiley Face Badge (Node 175:289: x=785, y=234, w=108, h=108) ── */}
        <div
          className="absolute left-[785px] top-[234px] size-[108px] z-30 cursor-pointer"
          data-node-id="175:289"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full hover:rotate-12 transition-transform duration-300"
            src="/hero-figma/smiley-badge.svg"
          />
        </div>

        {/* ── 19. Three Radiating Black Ink Dashes Above Head (Node 175:295: x=1182.01, y=117) ── */}
        <div
          className="absolute left-[1182.01px] top-[117px] w-[138.87px] h-[107.17px] z-30 pointer-events-none"
          data-node-id="175:295"
        >
          <div className="absolute flex h-[57.558px] items-center justify-center left-0 top-0 w-[16.107px]">
            <div className="flex-none rotate-[8.26deg]">
              <div className="bg-black h-[57px] relative w-[8px] rounded-full" />
            </div>
          </div>
          <div className="absolute flex h-[48.995px] items-center justify-center left-[42.7px] top-[25.24px] w-[42.528px]">
            <div className="flex-none rotate-[39.65deg]">
              <div className="bg-black h-[57px] relative w-[8px] rounded-full" />
            </div>
          </div>
          <div className="absolute flex h-[31.74px] items-center justify-center left-[76.06px] top-[75.43px] w-[62.812px]">
            <div className="flex-none rotate-[67.86deg]">
              <div className="bg-black h-[64.558px] relative w-[8px] rounded-full" />
            </div>
          </div>
        </div>

        {/* ── 20. Lime Starburst Top-Right (Node 175:299: x=1292, y=25, w=126, h=126) ── */}
        <div
          className="absolute left-[1292px] top-[25px] size-[126px] z-10 pointer-events-none"
          data-node-id="175:299"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src="/hero-figma/lime-starburst-top-right.svg"
          />
        </div>

        {/* ── 21. Bottom-Right Arrow Filled Head Swirl Long (Node 175:279: x=1373.09, y=758.7) ── */}
        <div
          className="absolute flex items-center justify-center left-[1250px] top-[660px] size-[121.091px] z-30 pointer-events-none"
          data-node-id="175:279"
        >
          <div className="-scale-y-100 flex-none rotate-[-116.62deg]">
            <div className="overflow-clip relative size-[90.226px]">
              <div className="absolute inset-[6.86%_10.15%_6.85%_10.14%]">
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src="/hero-figma/red-spiral-bottom-right.svg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── 22. Floating Identity Card (Node 175:310: x=838.49, y=584) ── */}
        <div
          className="absolute flex h-[253.085px] items-center justify-center left-[838.49px] top-[584px] w-[408.457px] z-40"
          data-node-id="175:310"
        >
          <div className="flex-none rotate-[3.56deg]">
            <div className="bg-[#fffdf5] h-[229px] overflow-clip relative rounded-[12px] shadow-[0px_4px_10px_0px_rgba(93,89,89,0.25)] w-[395px] border border-[#f0ede4]">
              {/* Pronouns */}
              <p className="[word-break:break-word] absolute font-sans font-extrabold leading-[normal] left-[319.39px] text-[#1447df] text-[16px] top-[41px] tracking-[0.64px] whitespace-nowrap">
                He/Him
              </p>

              {/* Yellow Highlighter Stroke under Name */}
              <div className="absolute h-[0.61px] left-[18px] top-[39px] w-[228.613px] pointer-events-none">
                <div className="absolute inset-[-737.53%_-1.97%]">
                  <img
                    alt=""
                    className="block max-w-none size-full"
                    src="/hero-figma/yellow-highlighter.svg"
                  />
                </div>
              </div>

              {/* Name */}
              <p className="[word-break:break-word] absolute font-sans font-extrabold leading-[normal] left-[16.39px] text-[24px] text-black top-[16px] tracking-[0.96px] whitespace-nowrap">
                Anthic Kumar Singh
              </p>

              {/* 4 Rows List */}
              <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[84px] w-[266px]">
                {/* Row 1: Location */}
                <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
                  <div className="overflow-clip relative shrink-0 size-[16px]">
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src="/hero-figma/pin-icon.svg"
                    />
                  </div>
                  <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[16px] text-black tracking-[0.64px] whitespace-nowrap">
                    Dhaka, Bangladesh
                  </p>
                </div>

                {/* Row 2: Mail */}
                <a
                  href="mailto:anthickumarsingh2@gmail.com"
                  className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full hover:text-[#1447df] transition-colors"
                >
                  <div className="overflow-clip relative shrink-0 size-[16px]">
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src="/hero-figma/mail-icon.svg"
                    />
                  </div>
                  <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[16px] text-black tracking-[0.64px] whitespace-nowrap">
                    anthickumarsingh2@gmail.com
                  </p>
                </a>

                {/* Row 3: Phone */}
                <a
                  href="tel:01717182035"
                  className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full hover:text-[#1447df] transition-colors"
                >
                  <div className="overflow-clip relative shrink-0 size-[16px]">
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src="/hero-figma/phone-icon.svg"
                    />
                  </div>
                  <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[16px] text-black tracking-[0.64px] whitespace-nowrap">
                    01717182035 | 01779080742
                  </p>
                </a>

                {/* Row 4: GitHub Link */}
                <a
                  href="https://github.com/Anthic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full hover:text-[#1447df] transition-colors"
                >
                  <div className="overflow-clip relative shrink-0 size-[16px]">
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src="/hero-figma/github-icon.svg"
                    />
                  </div>
                  <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[16px] text-black tracking-[0.64px] whitespace-nowrap">
                    GitHub link
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}