"use client";

import React, { useState } from "react";
import ContactManLottie from "./ContactManLottie";
import ContactSendLottie from "./ContactSendLottie";
import { Briefcase, Check, Copy, Loader2, MessageCircle, Rocket, X } from "lucide-react";

// ─── Inline Vector Social Icons ────────────────────────────────────────────────
function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.13 19.76 7.87 19.01L7.57 18.83L4.45 19.65L5.28 16.61L5.08 16.29C4.26 14.98 3.82 13.47 3.82 11.91C3.82 7.38 7.51 3.69 12.04 3.69C14.24 3.69 16.3 4.55 17.85 6.1C19.4 7.66 20.26 9.72 20.26 11.92C20.26 16.46 16.58 20.16 12.05 20.16ZM16.57 14.33C16.32 14.21 15.1 13.61 14.87 13.53C14.65 13.44 14.48 13.4 14.32 13.65C14.15 13.89 13.68 14.45 13.53 14.61C13.39 14.78 13.24 14.8 12.99 14.67C12.75 14.55 11.95 14.29 11 13.45C10.26 12.79 9.76 11.98 9.61 11.73C9.47 11.49 9.6 11.35 9.72 11.23C9.83 11.12 9.97 10.94 10.09 10.8C10.22 10.65 10.26 10.55 10.34 10.38C10.42 10.22 10.38 10.07 10.32 9.95C10.26 9.83 9.77 8.62 9.56 8.13C9.37 7.64 9.17 7.71 9.02 7.7C8.88 7.7 8.71 7.69 8.55 7.69C8.38 7.69 8.12 7.75 7.89 8C7.67 8.25 7.03 8.84 7.03 10.05C7.03 11.26 7.91 12.43 8.04 12.59C8.16 12.76 9.78 15.25 12.26 16.32C12.85 16.57 13.31 16.73 13.67 16.84C14.26 17.03 14.8 17 15.22 16.94C15.69 16.87 16.68 16.34 16.89 15.76C17.09 15.18 17.09 14.69 17.03 14.59C16.97 14.49 16.82 14.45 16.57 14.33Z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

// ─── Hand-drawn Figma Doodles for Banner ───────────────────────────────────────
function RedCurvedArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="54"
      height="58"
      viewBox="0 0 54 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <path
        d="M 6 6 C 10 24, 20 44, 44 48"
        stroke="#f85648"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 32 42 L 46 49 L 44 34"
        stroke="#f85648"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OrangeStarburst({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-14 h-14 sm:w-16 sm:h-16 text-[#f97316] select-none pointer-events-none overflow-visible ${className}`}
      aria-hidden="true"
    >
      <path d="M 36 6 L 36 66" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M 6 36 L 66 36" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M 14 14 L 58 58" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M 58 14 L 14 58" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="36" cy="36" r="3.2" fill="currentColor" />
    </svg>
  );
}

function BlackLoopArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      width="64"
      height="44"
      viewBox="0 0 64 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <path
        d="M 4 30 C 12 40, 24 40, 24 28 C 24 16, 12 18, 14 28 C 16 38, 36 36, 56 16"
        stroke="#141416"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 45 14 L 58 15 L 53 26"
        stroke="#141416"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BlueScribbleUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-full h-[11px] text-[#1447df] overflow-visible select-none pointer-events-none ${className}`}
      viewBox="0 0 320 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M 2 5 C 80 8, 200 2, 316 6" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M 28 9 C 120 12, 220 7, 290 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" />
    </svg>
  );
}

// ─── Main Contact Section Component ───────────────────────────────────────────
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Hiring / Full-Time Opportunity",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  }>({
    show: false,
    type: "success",
    message: "",
  });

  const INTENT_OPTIONS = [
    {
      label: "Hiring / Full-time",
      value: "Hiring / Full-Time Opportunity",
      icon: Briefcase,
    },
    {
      label: "Project Collaboration",
      value: "Project Collaboration",
      icon: Rocket,
    },
    {
      label: "Just Saying Hi",
      value: "Just Saying Hi",
      icon: MessageCircle,
    },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("anthickumarsingh2@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setToast({
        show: true,
        type: "error",
        message: "Please fill in your name, email, and message.",
      });
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("success");
      setToast({
        show: true,
        type: "success",
        message: "Thank you! Your message was sent successfully. I'll reply shortly!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "Hiring / Full-Time Opportunity",
        message: "",
      });

      setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }));
        setStatus("idle");
      }, 4500);
    } catch (err: unknown) {
      setStatus("error");
      const errorMsg =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please email directly.";
      setToast({
        show: true,
        type: "error",
        message: errorMsg,
      });
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="w-full bg-[#fef9f5] pt-16 sm:pt-24 pb-6 sm:pb-8 relative overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* ── 2-Column Layout: Left = Lottie Animation, Right = Form ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* ═══════════════════════════════════════════════════════════════════
              LEFT COLUMN: Contact Man Lottie Animation (Page load line + Man with poster)
          ═══════════════════════════════════════════════════════════════════ */}
          <div className="w-full flex flex-col items-center justify-center order-2 lg:order-1">
            <ContactManLottie className="w-full max-w-[440px] sm:max-w-[500px] lg:max-w-[540px]" />
            
            {/* Quick Email Copy Chip underneath the animation */}
            <div className="mt-2 flex items-center gap-2">
              <span className="text-[14px] text-[#555962] font-medium">Prefer direct email?</span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f4ede4] hover:bg-[#eae0d4] text-[#141416] text-[13.5px] font-semibold transition-all duration-200 cursor-pointer active:scale-95"
                title="Click to copy email address"
              >
                <span>anthickumarsingh2@gmail.com</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-[#555962]" />
                )}
              </button>
              {copied && (
                <span className="text-xs font-semibold text-emerald-600 animate-fade-in">
                  Copied!
                </span>
              )}
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              RIGHT COLUMN: Heading (Selected Work style) + Borderless Form
          ═══════════════════════════════════════════════════════════════════ */}
          <div className="w-full flex flex-col order-1 lg:order-2">
            
            {/* ── Heading: Selected Work font & color (#1447df) + Lime brush stroke ── */}
            <div className="shrink-0 mb-4 sm:mb-6">
              <h2 className="hero-title-font font-serif font-bold text-[#1447df] text-[44px] sm:text-[54px] lg:text-[62px] tracking-tight leading-[0.95] m-0 p-0">
                Reach out to me
              </h2>
              {/* Lime brush-stroke underline (exact match from Selected Work) */}
              <div className="w-[190px] sm:w-[250px] lg:w-[280px] mt-2 pointer-events-none select-none">
                <svg className="w-full h-[13px] sm:h-[15px] text-[#90d72f] overflow-visible" viewBox="0 0 260 14" fill="none">
                  <path d="M 4 8 C 48 5, 120 9, 185 6 C 215 4.8, 242 7, 256 8" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-[17px] sm:text-[19px] text-[#2c3038] font-medium leading-[1.5] mb-8">
              Got an opportunity, a project to collaborate on, or just want to chat? Fill out the form below and I&apos;ll get back to you!
            </p>

            {/* ── Intent Selector Pills (Recruiter-friendly quick chips with Lucide Icons) ── */}
            <div className="mb-6">
              <label className="block text-[13px] font-bold uppercase tracking-wider text-[#555962] mb-2.5">
                What are you looking for?
              </label>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {INTENT_OPTIONS.map((item) => {
                  const isSelected = formData.subject === item.value;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, subject: item.value })}
                      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13.5px] font-medium transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-[#1447df] text-white shadow-sm"
                          : "bg-[#f2e9de] text-[#2c3038] hover:bg-[#e8dcce]"
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? "text-white" : "text-[#555962]"}`} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── Form Without Outer Border ── */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-7">
              
              {/* Field 1: Name */}
              <div className="flex flex-col">
                <label htmlFor="contact-name" className="text-[13.5px] font-bold text-[#141416] mb-1">
                  Your Name <span className="text-[#f85648]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. John Doe / Tech Recruiter"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-0 border-b-2 border-[#141416]/20 focus:border-[#1447df] py-2.5 px-0 text-[16px] text-[#141416] placeholder:text-[#555962]/50 focus:outline-none transition-colors duration-200 rounded-none"
                />
              </div>

              {/* Field 2: Email */}
              <div className="flex flex-col">
                <label htmlFor="contact-email" className="text-[13.5px] font-bold text-[#141416] mb-1">
                  Your Work Email <span className="text-[#f85648]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-0 border-b-2 border-[#141416]/20 focus:border-[#1447df] py-2.5 px-0 text-[16px] text-[#141416] placeholder:text-[#555962]/50 focus:outline-none transition-colors duration-200 rounded-none"
                />
              </div>

              {/* Field 3: Message */}
              <div className="flex flex-col">
                <label htmlFor="contact-message" className="text-[13.5px] font-bold text-[#141416] mb-1">
                  Your Message <span className="text-[#f85648]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tell me about the role, project requirements, or question..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-0 border-b-2 border-[#141416]/20 focus:border-[#1447df] py-2.5 px-0 text-[16px] text-[#141416] placeholder:text-[#555962]/50 focus:outline-none transition-colors duration-200 resize-none rounded-none"
                />
              </div>

              {/* ── Button Row: Compact Button + Lottie Beside It (Matching Button Height) ── */}
              <div className="mt-2 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center gap-2 h-[42px] px-5 rounded-[8px] bg-[#141416] hover:bg-[#1447df] active:scale-[0.98] text-white font-semibold text-[14px] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>

                {/* Animated Lottie placed outside the button, matching button size */}
                <ContactSendLottie size={42} className="shrink-0" />
              </div>

            </form>
          </div>

        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            BOTTOM BANNER: "Have a project in mind? Let's build something amazing together!"
            Matching reference screenshot pixel-perfect with brush backdrop, starburst,
            black loop arrow, and social media connect dock (WhatsApp, FB, LinkedIn, GitHub, Insta)
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="mt-20 sm:mt-28 relative">
          
          {/* Red curved hand-drawn arrow pointing down into the banner */}
          <div className="absolute -top-11 sm:-top-13 left-6 sm:left-12 z-20 pointer-events-none select-none">
            <RedCurvedArrow />
          </div>

          {/* Warm watercolor brush stroke backdrop card matching Skills section style */}
          <div className="relative group w-full px-6 sm:px-10 lg:px-12 py-8 sm:py-10">
            
            {/* Brushed Watercolor SVG Blob Background — exactly like Skills column in ExperienceEducationSkills */}
            <div className="absolute -inset-2.5 sm:-inset-3.5 lg:-inset-4 -z-10 pointer-events-none select-none transition-transform duration-300 group-hover:scale-[1.008]">
              <svg
                viewBox="0 0 1200 170"
                fill="none"
                preserveAspectRatio="none"
                className="w-full h-full"
                aria-hidden="true"
              >
                <defs>
                  <filter
                    id="brush-filter-skills-banner"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                    filterUnits="objectBoundingBox"
                  >
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.038"
                      numOctaves="3"
                      seed="73"
                      result="noise"
                    />
                    <feDisplacementMap
                      in="SourceGraphic"
                      in2="noise"
                      scale="8"
                      xChannelSelector="R"
                      yChannelSelector="G"
                      result="displaced"
                    />
                    <feGaussianBlur in="displaced" stdDeviation="0.4" result="softEdges" />
                    <feMerge>
                      <feMergeNode in="softEdges" />
                      <feMergeNode in="displaced" opacity="0.9" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M 28 26
                     C 160 10, 480 8, 760 12
                     C 1000 15, 1140 14, 1176 34
                     C 1195 62, 1190 108, 1172 144
                     C 1110 162, 850 160, 560 164
                     C 290 168, 110 164, 26 148
                     C 8 116, 12 68, 28 26 Z"
                  fill="#fef4cf"
                  stroke="#fae6b2"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  filter="url(#brush-filter-skills-banner)"
                />
              </svg>
            </div>

            {/* Banner Content Layout */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-6 relative z-10">
              
              {/* Left Side: Clickable "Have a project in mind? Let's build something amazing together!" (Opens WhatsApp chat) */}
              <a
                href="https://wa.me/8801779080742?text=Hi%20Anthic!%20Let's%20build%20something%20amazing%20together."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-start cursor-pointer select-none transition-transform duration-200 active:scale-[0.99]"
                title="Click to chat directly on WhatsApp (+8801779080742)"
              >
                <span className="hero-title-font font-serif font-bold text-[#1447df] text-[24px] sm:text-[28px] lg:text-[32px] tracking-tight leading-tight group-hover:translate-x-1 transition-transform duration-200">
                  Have a project in mind?
                </span>
                
                <div className="relative mt-1 sm:mt-1.5 inline-block">
                  <span className="text-[20px] sm:text-[24px] lg:text-[27px] font-extrabold text-[#141416] tracking-tight leading-snug">
                    Let&apos;s build{" "}
                    <span className="relative inline-block">
                      something amazing together!
                      {/* Signature blue scribble underline from screenshot */}
                      <BlueScribbleUnderline className="absolute -bottom-2 left-0 w-full" />
                    </span>
                  </span>
                </div>
              </a>

              {/* Center / Right: Doodle Starburst + Black Loop Arrow + Social Connect Dock */}
              <div className="flex items-center gap-3 sm:gap-5 flex-wrap sm:flex-nowrap">
                
                {/* Large Orange Hand-drawn Starburst Asterisk from Figma */}
                <OrangeStarburst className="shrink-0 -rotate-6 animate-pulse-gentle" />

                {/* Black hand-drawn doodle loop arrow pointing towards social media icons */}
                <BlackLoopArrow className="shrink-0 hidden md:block" />

                {/* Social Connect Dock */}
                <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                  <span className="text-[14px] sm:text-[15px] font-bold text-[#141416] whitespace-nowrap">
                    Let&apos;s connect
                  </span>

                  <div className="flex items-center gap-2 sm:gap-2.5">
                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/anthic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#141416] hover:bg-[#0077b5] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                      title="LinkedIn Profile"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </a>

                    {/* GitHub */}
                    <a
                      href="https://github.com/Anthic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#141416] hover:bg-[#24292e] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                      title="GitHub Profile"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/share/1EkBL8uZvC/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#141416] hover:bg-[#1877f2] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                      title="Facebook Profile"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/8801779080742?text=Hi%20Anthic!%20Let's%20work%20together."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#141416] hover:bg-[#25d366] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                      title="WhatsApp Chat (+8801779080742)"
                      aria-label="WhatsApp"
                    >
                      <WhatsAppIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#141416] hover:bg-[#e4405f] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                      title="Instagram Profile"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* ── Minimalist Compact Copyright Footer ── */}
        <footer className="mt-8 sm:mt-10 pt-4 border-t border-[#141416]/10 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-[12px] sm:text-[12.5px] text-[#555962]/80 font-medium select-none">
          <p>© {new Date().getFullYear()} Anthic Kumar Singh. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-[#555962]/80">
            <span>Designed &amp; Developed with passion</span>
            <span className="text-[#f85648] text-[12px] leading-none">♥</span>
          </p>
        </footer>

      </div>

      {/* ── Floating Toast Notification ── */}
      <div
        className={`fixed bottom-6 right-6 z-50 max-w-[400px] w-[calc(100vw-3rem)] transition-all duration-300 transform ${
          toast.show
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-8 opacity-0 pointer-events-none"
        }`}
        role="alert"
        aria-live="polite"
      >
        <div className="bg-[#141416] text-white p-4 rounded-[16px] shadow-[0_12px_36px_rgba(0,0,0,0.28)] border border-white/10 flex items-start gap-3.5 backdrop-blur-md">
          {toast.type === "success" ? (
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-4 h-4 stroke-[2.5]" />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-sm font-bold">!</span>
            </div>
          )}

          <div className="flex-1 pr-1">
            <h4 className="text-[14px] font-bold text-white mb-0.5">
              {toast.type === "success" ? "Message Delivered! 🚀" : "Submission Notice"}
            </h4>
            <p className="text-[13px] text-white/80 leading-snug">
              {toast.message}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setToast((prev) => ({ ...prev, show: false }))}
            className="text-white/40 hover:text-white transition-colors p-1 -mr-1 -mt-1 cursor-pointer"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

    </section>
  );
}
