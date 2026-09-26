"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, CheckCircle2, Cpu, Layers, Sparkles, Shield, Rocket } from "lucide-react";

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

export interface ProjectData {
  id: number;
  slug: string;
  thumbnail: string | null;
  title: string;
  category: string;
  tagline: string;
  links: {
    live: string | null;
    github?: {
      frontend?: string | null;
      backend?: string | null;
      agent?: string | null;
      project?: string | null;
      ml?: string | null;
      [key: string]: string | null | undefined;
    };
    [key: string]: any;
  };
  role: string;
  caseStudy?: {
    overview?: string;
    problem?: string;
    responsibilities?: string[];
    solutionApproach?: any;
    techStack?: Record<string, string[]>;
    keyFeatures?: { name: string; description: string }[];
    performanceOptimizations?: string[];
    challengesAndSolutions?: { problem: string; solution: string }[];
    outcome?: string;
  };
}

interface ProjectCaseStudyModalProps {
  project: ProjectData | null;
  onClose: () => void;
  accentColor?: string;
}

export default function ProjectCaseStudyModal({
  project,
  onClose,
  accentColor = "#1447df",
}: ProjectCaseStudyModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy, links } = project;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} Case Study`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#fef9f5] border border-black/10 rounded-[28px] shadow-2xl flex flex-col overflow-hidden animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-5 bg-[#fef9f5]/90 backdrop-blur-md border-b border-black/5">
          <div className="flex items-center gap-3 pr-4">
            <span
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: accentColor }}
            />
            <div>
              <p
                className="text-[12px] font-bold uppercase tracking-wider"
                style={{ color: accentColor }}
              >
                {project.category}
              </p>
              <h2 className="text-[20px] sm:text-[22px] font-bold text-[#141416] font-serif leading-tight">
                {project.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#141416] transition-colors shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-[#141416]">
          {/* Top Hero Banner & Links */}
          <div className="flex flex-col md:flex-row gap-6 items-start justify-between bg-white p-6 rounded-[22px] border border-black/5 shadow-xs">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-black/5 text-[#555] mb-3">
                Role: {project.role}
              </span>
              <p className="text-[17px] text-[#2c3038] font-medium leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2.5 shrink-0">
              {links.live && (
                <a
                  href={links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-transform hover:scale-[1.03] active:scale-95 shadow-sm"
                  style={{ backgroundColor: accentColor }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {links.github?.frontend && (
                <a
                  href={links.github.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/5 hover:bg-black/10 text-[#141416] text-sm font-semibold transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  Frontend
                </a>
              )}
              {links.github?.backend && (
                <a
                  href={links.github.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/5 hover:bg-black/10 text-[#141416] text-sm font-semibold transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  Backend
                </a>
              )}
              {links.github?.agent && (
                <a
                  href={links.github.agent}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/5 hover:bg-black/10 text-[#141416] text-sm font-semibold transition-colors"
                >
                  <Cpu className="w-4 h-4" />
                  Agent
                </a>
              )}
              {links.github?.project && (
                <a
                  href={links.github.project}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/5 hover:bg-black/10 text-[#141416] text-sm font-semibold transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  Repository
                </a>
              )}
              {links.github?.ml && (
                <a
                  href={links.github.ml}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/5 hover:bg-black/10 text-[#141416] text-sm font-semibold transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  ML Code
                </a>
              )}
            </div>
          </div>

          {/* Screenshot image if available */}
          {project.thumbnail && (
            <div className="relative w-full h-[260px] sm:h-[380px] rounded-[22px] overflow-hidden border border-black/5 bg-[#0e1117] shadow-sm">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 850px"
              />
            </div>
          )}

          {/* Overview & Problem */}
          {caseStudy && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.overview && (
                <div className="bg-white p-6 rounded-[22px] border border-black/5">
                  <h3 className="text-base font-bold flex items-center gap-2 text-[#141416] mb-3">
                    <Sparkles className="w-4 h-4" style={{ color: accentColor }} />
                    Overview
                  </h3>
                  <p className="text-sm leading-relaxed text-[#555962]">
                    {caseStudy.overview}
                  </p>
                </div>
              )}
              {caseStudy.problem && (
                <div className="bg-white p-6 rounded-[22px] border border-black/5">
                  <h3 className="text-base font-bold flex items-center gap-2 text-[#141416] mb-3">
                    <Shield className="w-4 h-4" style={{ color: accentColor }} />
                    The Challenge
                  </h3>
                  <p className="text-sm leading-relaxed text-[#555962]">
                    {caseStudy.problem}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Key Features */}
          {caseStudy?.keyFeatures && caseStudy.keyFeatures.length > 0 && (
            <div className="bg-white p-6 sm:p-7 rounded-[22px] border border-black/5">
              <h3 className="text-lg font-bold flex items-center gap-2 text-[#141416] mb-4">
                <Rocket className="w-5 h-5" style={{ color: accentColor }} />
                Key Architectural Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseStudy.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-[16px] bg-[#fef9f5]/70 border border-black/5 flex flex-col gap-1.5"
                  >
                    <span className="font-semibold text-[14px] text-[#141416] flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: accentColor }}
                      />
                      {feat.name}
                    </span>
                    <span className="text-[13px] text-[#555962] leading-relaxed">
                      {feat.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          {caseStudy?.techStack && (
            <div className="bg-white p-6 rounded-[22px] border border-black/5">
              <h3 className="text-base font-bold flex items-center gap-2 text-[#141416] mb-4">
                <Layers className="w-4 h-4" style={{ color: accentColor }} />
                Tech Stack
              </h3>
              <div className="space-y-4">
                {Object.entries(caseStudy.techStack).map(([category, techs]) => (
                  <div key={category}>
                    <p className="text-xs uppercase font-bold text-[#888] tracking-wider mb-2">
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {(techs as string[]).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#f5f3ef] border border-black/5 rounded-full text-xs font-medium text-[#2c3038]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Responsibilities */}
          {caseStudy?.responsibilities && caseStudy.responsibilities.length > 0 && (
            <div className="bg-white p-6 rounded-[22px] border border-black/5">
              <h3 className="text-base font-bold text-[#141416] mb-3">
                Key Responsibilities & Contributions
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {caseStudy.responsibilities.map((resp, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-[#444a53]"
                  >
                    <CheckCircle2
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: accentColor }}
                    />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Outcome */}
          {caseStudy?.outcome && (
            <div
              className="p-6 rounded-[22px] border"
              style={{
                backgroundColor: `${accentColor}0c`,
                borderColor: `${accentColor}25`,
              }}
            >
              <h3
                className="text-sm uppercase font-bold tracking-wider mb-2"
                style={{ color: accentColor }}
              >
                Project Outcome
              </h3>
              <p className="text-[15px] font-medium leading-relaxed text-[#141416]">
                {caseStudy.outcome}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
