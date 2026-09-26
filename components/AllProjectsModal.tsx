"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { X, Search, ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { ProjectData } from "./ProjectCaseStudyModal";

interface AllProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: ProjectData[];
  onSelectProject: (project: ProjectData) => void;
}

export default function AllProjectsModal({
  isOpen,
  onClose,
  projects,
  onSelectProject,
}: AllProjectsModalProps) {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category));
    return ["All", ...Array.from(cats)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = selectedCat === "All" || p.category === selectedCat;
      const matchSearch =
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.tagline.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [projects, selectedCat, search]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="All Projects Portfolio"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[92vh] bg-[#fef9f5] border border-black/10 rounded-[30px] shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-20 px-6 sm:px-8 py-5 bg-[#fef9f5]/95 backdrop-blur-md border-b border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1447df]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Archive</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#141416]">
              All Projects ({projects.length})
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search projects..."
                className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-black/10 rounded-full focus:outline-none focus:border-[#1447df] transition-colors"
              />
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#141416] transition-colors shrink-0 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="px-6 sm:px-8 py-3 bg-[#fdf8f3] border-b border-black/5 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCat === cat
                  ? "bg-[#141416] text-white shadow-xs"
                  : "bg-white text-[#555] hover:bg-black/5 border border-black/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Projects */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 text-stone-400">
              No projects found matching &ldquo;{search}&rdquo;
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => {
                    onClose();
                    onSelectProject(proj);
                  }}
                  className="group bg-white rounded-[22px] border border-[#ebebec] overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
                >
                  {/* Thumbnail */}
                  <div className="relative w-full h-[180px] bg-[#f2f4f8] overflow-hidden">
                    {proj.thumbnail ? (
                      <Image
                        src={proj.thumbnail}
                        alt={proj.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 360px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-stone-400 font-serif text-lg bg-gradient-to-br from-indigo-50 to-purple-50">
                        {proj.title}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[12px] font-bold text-[#1447df] uppercase tracking-wider mb-1">
                        {proj.category}
                      </p>
                      <h3 className="font-bold text-[17px] text-[#141416] group-hover:text-[#1447df] transition-colors leading-snug line-clamp-1">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-[#555962] leading-relaxed mt-2 line-clamp-2">
                        {proj.tagline}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-[#1447df]">
                      <span className="flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Case Study
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                      {proj.links.live && (
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(proj.links.live!, "_blank");
                          }}
                          className="text-stone-400 hover:text-stone-700 p-1"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
