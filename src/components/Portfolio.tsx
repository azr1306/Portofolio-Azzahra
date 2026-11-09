import React, { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterOptions = ['All', 'Business Analysis', 'UI/UX Design', 'Web & Mobile'];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 sm:py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
              STUDI KASUS & PORTOFOLIO
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Karya Portofolio & Studi Kasus Pilihan
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Menampilkan eksplorasi desain produk digital, perancangan antarmuka, dan pemetaan proses sistem yang berorientasi pada hasil terukur.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 border border-slate-200/80 rounded-2xl">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#ff5500] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white border border-slate-200/90 hover:border-orange-300 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange-500/5 cursor-pointer flex flex-col group"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-xs">
                  <Eye className="w-4 h-4 text-[#ffa800]" />
                  <span>Buka Studi Kasus</span>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm border border-slate-200 px-3 py-1 rounded-full text-[11px] font-bold text-slate-800 shadow-xs">
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#ff5500] transition-colors leading-snug line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {project.overview}
                  </p>
                </div>

                {/* Bottom Metadata & Button */}
                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500 font-mono font-medium">
                    {project.metrics[0] ? `${project.metrics[0].label}: ${project.metrics[0].value}` : 'Case Study'}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#ff5500] group-hover:translate-x-1 transition-transform">
                    Pelajari Kasus <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Inspector */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
