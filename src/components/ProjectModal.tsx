import React, { useEffect } from 'react';
import { X, ExternalLink, Check } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-900/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur border-b border-slate-100">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff5500] font-bold">
              Case Study
            </span>
            <span className="text-slate-300">/</span>
            <span className="text-xs text-slate-500 font-semibold">{project.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
            aria-label="Tutup modal studi kasus"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-10 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Main Title & Subtitle */}
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
              {project.title}
            </h2>
            <p className="mt-2 text-base text-[#ff5500] font-semibold">{project.subtitle}</p>
          </div>

          {/* Project Showcase Image */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover max-h-[460px]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-[#fafbfc] border border-slate-200/90 rounded-2xl">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">
                  {metric.label}
                </p>
                <p className="text-2xl font-black text-[#ff5500] mt-1 font-mono">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          {/* Overview, Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                Latar Belakang & Masalah
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed bg-rose-50/60 p-4 rounded-xl border border-rose-100">
                {project.problem}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                Pendekatan Solusi UI/UX & Bisnis
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900">Fitur Utama & Alur Sistem</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80"
                >
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metadata Grid: Role, Tools, Deliverables */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                Peran Saya
              </p>
              <ul className="text-xs text-slate-600 space-y-1">
                {project.role.map((r, i) => (
                  <li key={i}>• {r}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                Alat & Metodologi
              </p>
              <ul className="text-xs text-slate-600 space-y-1">
                {project.tools.map((t, i) => (
                  <li key={i}>• {t}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                Deliverables
              </p>
              <ul className="text-xs text-slate-600 space-y-1">
                {project.deliverables.map((d, i) => (
                  <li key={i}>• {d}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl transition-colors flex items-center gap-1.5"
                >
                  GitHub Repository <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#ffa800] hover:bg-[#ff9500] text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-xs"
            >
              Tutup Pratinjau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
