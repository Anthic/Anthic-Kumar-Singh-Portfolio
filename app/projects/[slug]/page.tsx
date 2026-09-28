import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import allData from "@/data/data.json";

// ─── Static Params ────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return (allData.projects || []).map((project) => ({
    slug: project.slug,
  }));
}

// ─── Helper: Human-Friendly Heading Formatter ─────────────────────────────────
const SECTION_TITLE_MAP: Record<string, string> = {
  backendAPI: "Backend API Service",
  customerStorefront: "Customer Storefront",
  userDashboard: "User Dashboard Portal",
  frontendFlow: "Frontend Client Lifecycle",
  backendFlow: "Backend Processing Pipeline",
  multiAgentPipeline: "Multi-Agent Autonomous Pipeline",
  specializedAcademicAgents: "Specialized Agent Network",
  multiCloudDeployment: "Multi-Cloud Infrastructure",
  architectureApps: "Application Architecture",
  coreWorkflow: "Core Business Workflow",
  roleSystem: "Role-Based Access Hierarchy",
  systemWorkflow: "AI Agent Execution Lifecycle",
  projectStructure: "Project Architecture & Directory",
  designLanguage: "Design System & UI Language",
  dataLeakagePrevention: "Data Leakage Prevention Protocol",
  featureSelection: "Feature Engineering & Selection",
  classImbalanceHandling: "Class Imbalance Treatment",
  caseStudyDataset: "Dataset & Research Scope",
  technicalNotes: "Technical Implementation Notes",
  coreFunctionality: "Core System Functionality",
  frontend: "Frontend & UI",
  backend: "Backend & Server",
  database: "Database & ORM",
  auth: "Authentication & Security",
  authSecurity: "Authentication & Security",
  integrations: "Third-Party Integrations",
  validation: "Validation & Forms",
  aiOrchestration: "AI Orchestration & LLM",
  vectorRAG: "Vector Database & RAG",
  cloudDeployment: "Cloud Infrastructure & DevOps",
  payments: "Payment Gateways",
  storage: "Storage & Media Assets",
  logisticsTooling: "Logistics & Dispatch Tooling",
  scheduling: "Scheduling & Cron Jobs",
  vectorStore: "Vector Storage",
  embeddings: "Embedding Models",
  llm: "Large Language Models",
  documentLoaders: "Document Ingestion Loaders",
  mlModule: "Machine Learning Modules",
  dataProcessing: "Data Processing Pipeline",
  framework: "Core Framework",
  routing: "Client Routing",
  styling: "Styling & Tokens",
  animation: "UI Animation Engine",
  scrolling: "Smooth Scrolling",
  video: "Video Processing",
  icons: "Iconography System",
  deployment: "Deployment & CI/CD",
  build: "Build Pipeline",
  typeChecking: "Type Safety",
  lintingFormatting: "Code Standards & Linting",
  frontendUser: "Patient/User Portal",
  frontendAdmin: "Clinic Admin Portal",
  mapping: "Maps & Spatial Data",
  media: "Media Storage & CDN",
  aiDatabase: "AI Agents & Vector DB",
  architecturePatterns: "Architecture Patterns",
  workflow: "Execution Workflow",
  dataset: "Dataset Specifications",
  methodology: "Research Methodology",
};

function formatKeyToTitle(key: string): string {
  if (SECTION_TITLE_MAP[key]) return SECTION_TITLE_MAP[key];
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
}

// ─── Types ────────────────────────────────────────────────────────────────────
interface ProjectLinks {
  live?: string | null;
  github?: {
    frontend?: string | null;
    backend?: string | null;
    agent?: string | null;
  } | null;
}

interface KeyFeature {
  name: string;
  description: string;
}

interface ChallengeSolution {
  problem?: string;
  challenge?: string;
  solution?: string;
}

interface ArchitectureModule {
  description?: string;
  tech?: string[];
  [key: string]: unknown;
}

interface CaseStudy {
  overview?: string;
  problem?: string;
  responsibilities?: string[];
  solutionApproach?: Record<string, unknown>;
  techStack?: Record<string, string[] | unknown>;
  keyFeatures?: KeyFeature[];
  security?: string[];
  performanceOptimizations?: string[];
  challengesAndSolutions?: Array<ChallengeSolution | string>;
  results?: Array<{ metric?: string; value?: string; [key: string]: unknown }> | Record<string, unknown> | string[];
  impact?: string[] | string;
  outcome?: string;
  targetUsers?: string[];
  futureScope?: string[];
  technicalNotes?: string[];
}

interface ProjectData {
  id: number;
  slug: string;
  thumbnail: string | null;
  title: string;
  category: string;
  tagline: string;
  role?: string;
  links?: ProjectLinks;
  caseStudy?: CaseStudy;
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = (allData.projects || []).find((p) => p.slug === slug) as unknown as ProjectData | undefined;

  if (!project) {
    notFound();
  }

  const cs = project.caseStudy || {};
  const liveUrl = project.links?.live;
  const ghFrontend = project.links?.github?.frontend;
  const ghBackend = project.links?.github?.backend;
  const ghAgent = project.links?.github?.agent;

  const features = cs.keyFeatures || [];
  const techStack = cs.techStack || {};
  const solutionApproach = cs.solutionApproach || {};
  const responsibilities = cs.responsibilities || [];
  const challenges = cs.challengesAndSolutions || [];
  const securityItems = cs.security || [];
  const perfItems = cs.performanceOptimizations || [];
  const results = cs.results;
  const impact = cs.impact;
  const targetUsers = cs.targetUsers || [];
  const futureScope = cs.futureScope || [];

  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col text-[#141416]">
      <Navbar />

      {/* ── Sub-Nav Utility Header (Sharp, Zero Radius) ── */}
      <div className="w-full bg-white border-b border-[#e5e5e7] px-4 sm:px-8 py-3 sticky top-[64px] sm:top-[72px] z-40">
        <div className="max-w-[1720px] mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Back link & breadcrumb */}
          <div className="flex items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#141416] hover:text-[#1447df] px-3 py-1.5 border border-[#e5e5e7] bg-[#fbfbf9] hover:bg-white hover:border-[#141416] transition-all"
            >
              <span>←</span>
              <span>All Projects</span>
            </Link>

            <span className="text-[#9ca3af] hidden sm:inline">/</span>

            <span className="font-mono text-[12px] font-semibold text-[#1447df] uppercase tracking-wider hidden sm:inline">
              {project.category}
            </span>
          </div>

          {/* Quick Action Links (Sharp Buttons) */}
          <div className="flex items-center gap-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#141416] text-white hover:bg-[#252830] text-[13px] font-semibold tracking-tight transition-colors"
              >
                <span>Live Demo</span>
                <span className="text-[12px]">↗</span>
              </a>
            )}

            {ghFrontend && (
              <a
                href={ghFrontend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#141416] text-[#141416] hover:bg-[#141416] hover:text-white text-[13px] font-medium transition-colors"
              >
                <span>Frontend Repo</span>
                <span className="text-[12px]">↗</span>
              </a>
            )}

            {ghBackend && (
              <a
                href={ghBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#e5e5e7] text-[#141416] hover:border-[#141416] text-[13px] font-medium transition-colors hidden md:inline-flex"
              >
                <span>Backend Repo</span>
                <span className="text-[12px]">↗</span>
              </a>
            )}

            {ghAgent && (
              <a
                href={ghAgent}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#e5e5e7] text-[#141416] hover:border-[#141416] text-[13px] font-medium transition-colors hidden md:inline-flex"
              >
                <span>AI Agent Repo</span>
                <span className="text-[12px]">↗</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── Main Unified View (High-Density, Zero Endless Scroll) ── */}
      <main className="flex-1 p-3 sm:p-5 lg:p-6 max-w-[1720px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-start">

          {/* ══════════════════════════════════════════════════════════════════════
              LEFT COLUMN (5 cols): Project Identity, Mockup, Overview, Problem, Outcome
          ══════════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            {/* Title & Metadata Panel */}
            <div className="bg-white border border-[#e5e5e7] p-5 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between gap-3 mb-2.5">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#1447df] bg-[#1447df]/10 px-2 py-0.5 border border-[#1447df]/20">
                  {project.category}
                </span>
                {project.role && (
                  <span className="font-mono text-[11px] font-semibold text-[#6b7280] uppercase tracking-wider">
                    Role: <span className="text-[#141416] font-bold">{project.role}</span>
                  </span>
                )}
              </div>

              {/* Exact Full Project Title */}
              <h1
                className="font-serif font-bold text-[#141416] text-[26px] sm:text-[32px] lg:text-[34px] leading-[1.12] mb-3"
                style={{ fontFamily: "var(--font-recoleta), var(--font-fraunces), serif" }}
              >
                {project.title}
              </h1>

              <p className="text-[14px] text-[#4b5563] leading-[1.45] border-t border-[#f0f0f2] pt-3">
                {project.tagline}
              </p>
            </div>

            {/* Browser Mockup Visual Preview (Sharp zero-radius frame) */}
            <div className="bg-white border border-[#e5e5e7] shadow-sm overflow-hidden flex flex-col">
              {/* Window controls bar */}
              <div className="h-8 bg-[#f5f5f7] border-b border-[#e5e5e7] px-3 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-[#ff5f57] border border-black/10 inline-block" />
                  <span className="w-2.5 h-2.5 bg-[#febc2e] border border-black/10 inline-block" />
                  <span className="w-2.5 h-2.5 bg-[#28c840] border border-black/10 inline-block" />
                </div>
                <div className="font-mono text-[11px] text-[#8e8e93] truncate max-w-[220px]">
                  {liveUrl ? liveUrl.replace("https://", "") : `${project.slug}.local`}
                </div>
                <div className="w-10" />
              </div>

              {/* Image viewport */}
              <div className="relative w-full h-[220px] sm:h-[260px] bg-stone-100 overflow-hidden">
                {project.thumbnail ? (
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-stone-50 text-[#8e8e93]">
                    <span className="font-mono text-[12px] uppercase tracking-wider">{project.category}</span>
                    <span className="font-serif font-bold text-[18px] text-[#141416] mt-1">{project.title}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Overview & Problem Box */}
            <div className="bg-white border border-[#e5e5e7] p-5 shadow-sm flex flex-col gap-3">
              {cs.overview && (
                <div>
                  <h3 className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#141416] mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#141416]" />
                    Project Overview
                  </h3>
                  <p className="text-[13px] text-[#4b5563] leading-[1.5]">
                    {cs.overview}
                  </p>
                </div>
              )}

              {cs.problem && (
                <div className="border-t border-[#f0f0f2] pt-3">
                  <h3 className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#b91c1c] mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#b91c1c]" />
                    Problem & Objectives
                  </h3>
                  <p className="text-[13px] text-[#4b5563] leading-[1.5]">
                    {cs.problem}
                  </p>
                </div>
              )}

              {cs.outcome && (
                <div className="border-t border-[#f0f0f2] pt-3 bg-[#fbfbf9] p-3 border border-[#e5e5e7]">
                  <h3 className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#15803d] mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#15803d]" />
                    Outcome & Realized Impact
                  </h3>
                  <p className="text-[13px] text-[#2c3038] font-medium leading-[1.45]">
                    {cs.outcome}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════════════
              RIGHT COLUMN (7 cols): Dynamic Modules for Features, Architecture,
              Challenges & Solutions, Complete Tech Stack, and Specs
          ══════════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 flex flex-col gap-4">

            {/* ── Section 1: Key Features (or Empirical Results if ML project) ── */}
            {features.length > 0 && (
              <div className="bg-white border border-[#e5e5e7] p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3 border-b border-[#f0f0f2] pb-2">
                  <h2 className="font-mono text-[12px] font-bold uppercase tracking-wider text-[#141416] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1447df]" />
                    Core Features & Capabilities
                  </h2>
                  <span className="font-mono text-[11px] text-[#6b7280]">
                    {features.length} Items
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feat, idx) => {
                    const isObj = typeof feat === "object" && feat !== null;
                    const featureName = isObj ? (feat as KeyFeature).name : String(feat);
                    const featureDesc = isObj ? (feat as KeyFeature).description : null;

                    return (
                      <div
                        key={idx}
                        className="border border-[#e5e5e7] p-3.5 bg-[#fbfbf9] hover:bg-white hover:border-[#141416] transition-colors flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-start gap-2 mb-1">
                            <span className="font-mono text-[10px] font-bold text-[#1447df] shrink-0 mt-0.5">
                              {String(idx + 1).padStart(2, "0")}.
                            </span>
                            <h4 className="font-bold text-[13px] text-[#141416] leading-snug">
                              {featureName}
                            </h4>
                          </div>
                          {featureDesc && (
                            <p className="text-[12px] text-[#555962] leading-[1.45] pl-5">
                              {featureDesc}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* If no keyFeatures, check if research results exist (e.g. ML projects) */}
            {features.length === 0 && results && (
              <div className="bg-white border border-[#e5e5e7] p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3 border-b border-[#f0f0f2] pb-2">
                  <h2 className="font-mono text-[12px] font-bold uppercase tracking-wider text-[#141416] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1447df]" />
                    Empirical Results & Model Performance
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Array.isArray(results) ? (
                    results.map((res: any, idx: number) => (
                      <div key={idx} className="border border-[#e5e5e7] p-3.5 bg-[#fbfbf9]">
                        <h4 className="font-bold text-[13px] text-[#141416] mb-1">
                          {res.metric || res.name || `Benchmark ${idx + 1}`}
                        </h4>
                        <p className="font-mono text-[13px] text-[#1447df] font-semibold">
                          {res.value || (typeof res === "string" ? res : JSON.stringify(res))}
                        </p>
                      </div>
                    ))
                  ) : (
                    <pre className="col-span-full font-mono text-[12px] text-[#4b5563] p-3 bg-[#fbfbf9] border border-[#e5e5e7] overflow-x-auto">
                      {JSON.stringify(results, null, 2)}
                    </pre>
                  )}
                </div>
              </div>
            )}

            {/* ── Section 2: Solution Architecture & Engineering Strategy ── */}
            {/* Case A: solutionApproach is an Array of pipeline steps (e.g. AI Career Assistant) */}
            {Array.isArray(solutionApproach) && solutionApproach.length > 0 && (
              <div className="bg-white border border-[#e5e5e7] p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3 border-b border-[#f0f0f2] pb-2">
                  <h2 className="font-mono text-[12px] font-bold uppercase tracking-wider text-[#141416] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#7c3aed]" />
                    System Architecture & Execution Pipeline
                  </h2>
                  <span className="font-mono text-[11px] text-[#6b7280]">
                    {solutionApproach.length} Sequential Steps
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {solutionApproach.map((step, idx) => (
                    <div key={idx} className="border border-[#e5e5e7] p-3.5 bg-[#fcfcfd] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2 pb-1 border-b border-[#e5e5e7]">
                          <span className="font-mono text-[10px] font-bold text-[#7c3aed] bg-[#7c3aed]/10 px-1.5 py-0.5 border border-[#7c3aed]/20">
                            Step {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <p className="text-[12px] text-[#4b5563] leading-[1.45]">
                          {String(step)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Case B: solutionApproach is an Object with architecture modules (e.g. Greenfields, EasyFile, Atlas AI) */}
            {!Array.isArray(solutionApproach) && Object.keys(solutionApproach).length > 0 && (
              <div className="bg-white border border-[#e5e5e7] p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3 border-b border-[#f0f0f2] pb-2">
                  <h2 className="font-mono text-[12px] font-bold uppercase tracking-wider text-[#141416] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#7c3aed]" />
                    System Architecture & Engineering Strategy
                  </h2>
                  <span className="font-mono text-[11px] text-[#6b7280]">Deconstructed</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {Object.entries(solutionApproach).map(([key, val]) => {
                    const headingText = formatKeyToTitle(key);

                    // Sub-system object with description & tech array (e.g. Greenfields)
                    if (val && typeof val === "object" && !Array.isArray(val)) {
                      const mod = val as ArchitectureModule;
                      return (
                        <div key={key} className="border border-[#e5e5e7] p-3.5 bg-[#fcfcfd] flex flex-col justify-between">
                          <div>
                            <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#1447df] mb-1.5 pb-1 border-b border-[#e5e5e7]">
                              {headingText}
                            </h4>
                            {mod.description && (
                              <p className="text-[12px] text-[#4b5563] leading-[1.45] mb-2.5">
                                {mod.description}
                              </p>
                            )}
                          </div>
                          {Array.isArray(mod.tech) && mod.tech.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-auto pt-2 border-t border-[#f0f0f2]">
                              {mod.tech.map((t, tidx) => (
                                <span
                                  key={tidx}
                                  className="font-mono text-[10px] px-1.5 py-0.5 border border-[#e5e5e7] bg-white text-[#141416]"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }

                    // Step-by-step array (e.g. flow steps)
                    if (Array.isArray(val)) {
                      return (
                        <div key={key} className="border border-[#e5e5e7] p-3.5 bg-[#fcfcfd]">
                          <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#1447df] mb-2 pb-1 border-b border-[#e5e5e7]">
                            {headingText}
                          </h4>
                          <ol className="space-y-1.5">
                            {val.map((step, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-[12px] text-[#4b5563] leading-[1.4]">
                                <span className="font-mono text-[10px] text-[#9ca3af] mt-0.5 shrink-0">
                                  {String(idx + 1).padStart(2, "0")}
                                </span>
                                <span>{String(step)}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      );
                    }

                    // String value
                    return (
                      <div key={key} className="border border-[#e5e5e7] p-3.5 bg-[#fcfcfd]">
                        <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#141416] mb-1 pb-1 border-b border-[#e5e5e7]">
                          {headingText}
                        </h4>
                        <p className="text-[12px] text-[#4b5563] leading-[1.45]">{String(val)}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ── Section 3: Engineering Challenges & Applied Solutions (Crucial for Greenfields, Sane Church, Atlas, etc.) ── */}
            {challenges.length > 0 && (
              <div className="bg-white border border-[#e5e5e7] p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3 border-b border-[#f0f0f2] pb-2">
                  <h2 className="font-mono text-[12px] font-bold uppercase tracking-wider text-[#141416] flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#d97706]" />
                    Engineering Challenges & Applied Solutions
                  </h2>
                  <span className="font-mono text-[11px] text-[#6b7280]">
                    {challenges.length} Case Studies
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {challenges.map((c, idx) => {
                    const isObj = typeof c === "object" && c !== null;
                    const problem = isObj ? (c as ChallengeSolution).problem || (c as ChallengeSolution).challenge : String(c);
                    const solution = isObj ? (c as ChallengeSolution).solution : null;

                    return (
                      <div key={idx} className="border border-[#e5e5e7] p-3.5 bg-[#fbfbf9]">
                        <div className="mb-2">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#b91c1c] block mb-1">
                            Challenge {idx + 1}
                          </span>
                          <p className="font-semibold text-[13px] text-[#141416] leading-snug">
                            {problem}
                          </p>
                        </div>
                        {solution && (
                          <div className="border-t border-[#e5e5e7] pt-2 mt-2">
                            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#15803d] block mb-1">
                              Applied Solution
                            </span>
                            <p className="text-[12px] text-[#4b5563] leading-[1.45]">
                              {solution}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ── Section 4: Complete Technology Stack (All Categories Rendered) ── */}
            {Object.keys(techStack).length > 0 && (
              <div className="bg-white border border-[#e5e5e7] p-5 shadow-sm">
                <h3 className="font-mono text-[12px] font-bold uppercase tracking-wider text-[#141416] mb-3 pb-1 border-b border-[#f0f0f2] flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#0284c7]" />
                  Complete Technology Stack
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {Object.entries(techStack).map(([category, items]) => {
                    if (!items) return null;
                    const list = Array.isArray(items) ? items : [String(items)];
                    if (list.length === 0) return null;

                    return (
                      <div key={category} className="border border-[#e5e5e7] p-3 bg-[#fcfcfd]">
                        <span className="font-mono text-[10px] font-bold text-[#6b7280] uppercase tracking-wider block mb-2 pb-1 border-b border-[#f0f0f2]">
                          {formatKeyToTitle(category)}
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {list.map((tech, tidx) => (
                            <span
                              key={tidx}
                              className="font-mono text-[11px] px-2 py-0.5 border border-[#e5e5e7] bg-white text-[#141416] font-medium"
                            >
                              {String(tech)}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ── Section 5: Security & Performance Specs (or Responsibilities) ── */}
            {(securityItems.length > 0 || perfItems.length > 0 || responsibilities.length > 0) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Security */}
                {securityItems.length > 0 && (
                  <div className="bg-white border border-[#e5e5e7] p-4 shadow-sm">
                    <span className="font-mono text-[11px] font-bold text-[#b91c1c] uppercase tracking-wider block mb-2 pb-1 border-b border-[#fecaca]">
                      Security Protocols
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {securityItems.map((sec, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2 py-0.5 border border-[#fecaca] bg-[#fef2f2] text-[#991b1b] font-medium"
                        >
                          ✓ {sec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Performance */}
                {perfItems.length > 0 && (
                  <div className="bg-white border border-[#e5e5e7] p-4 shadow-sm">
                    <span className="font-mono text-[11px] font-bold text-[#15803d] uppercase tracking-wider block mb-2 pb-1 border-b border-[#bbf7d0]">
                      Performance Optimizations
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {perfItems.map((perf, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2 py-0.5 border border-[#bbf7d0] bg-[#f0fdf4] text-[#166534] font-medium"
                        >
                          ⚡ {perf}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Responsibilities if security is empty */}
                {securityItems.length === 0 && responsibilities.length > 0 && (
                  <div className="bg-white border border-[#e5e5e7] p-4 shadow-sm col-span-full">
                    <span className="font-mono text-[11px] font-bold text-[#141416] uppercase tracking-wider block mb-2 pb-1 border-b border-[#f0f0f2]">
                      Engineering Responsibilities
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[12px] text-[#4b5563]">
                          <span className="text-[#1447df] shrink-0">•</span>
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ── Section 6: Target Users & Future Scope (when present) ── */}
            {(targetUsers.length > 0 || futureScope.length > 0) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {targetUsers.length > 0 && (
                  <div className="bg-white border border-[#e5e5e7] p-4 shadow-sm">
                    <span className="font-mono text-[11px] font-bold text-[#0d9488] uppercase tracking-wider block mb-2 pb-1 border-b border-[#ccfbf1]">
                      Target Audience & Users
                    </span>
                    <ul className="space-y-1.5">
                      {targetUsers.map((u, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[12px] text-[#4b5563]">
                          <span className="text-[#0d9488] font-bold shrink-0">✓</span>
                          <span>{u}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {futureScope.length > 0 && (
                  <div className="bg-white border border-[#e5e5e7] p-4 shadow-sm">
                    <span className="font-mono text-[11px] font-bold text-[#7c3aed] uppercase tracking-wider block mb-2 pb-1 border-b border-[#f3e8ff]">
                      Future Extension Scope
                    </span>
                    <ul className="space-y-1.5">
                      {futureScope.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[12px] text-[#4b5563]">
                          <span className="text-[#7c3aed] font-bold shrink-0">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>
      </main>

      {/* ── Minimal Sharp Footer ── */}
      <footer className="w-full bg-white border-t border-[#e5e5e7] py-4 px-5 text-center mt-6">
        <div className="max-w-[1720px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-[#6b7280]">
          <span className="font-mono">
            {project.title} • {project.category}
          </span>
          <div className="flex items-center gap-4">
            <Link href="/projects" className="text-[#141416] hover:text-[#1447df] font-semibold">
              ← Return to All Projects
            </Link>
            <span>•</span>
            <Link href="/contact" className="text-[#141416] hover:text-[#1447df] font-semibold">
              Get in Touch
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
