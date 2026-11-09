import React, { useEffect, useRef } from 'react';
import { X, Printer, Mail, Github, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_EXPERIENCE, SKILL_TAGS, PROJECTS } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const cvPrintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-900/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden my-6 border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Toolbar on top */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#fafbfc] border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5500]" />
            <span className="text-sm font-bold text-slate-900">
              Curriculum Vitae — {PERSONAL_INFO.name} ({PERSONAL_INFO.university})
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#ffa800] hover:bg-[#ff9500] text-slate-950 rounded-full transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Printer className="w-4 h-4" />
              Cetak / Simpan PDF
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
              aria-label="Tutup modal CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content (Clean ATS-friendly design) */}
        <div ref={cvPrintRef} className="p-8 sm:p-12 max-h-[80vh] overflow-y-auto bg-white text-slate-800 space-y-8 font-sans">
          
          {/* Header with Photo Thumbnail */}
          <div className="border-b-2 border-slate-900 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-base sm:text-lg font-semibold text-orange-600 mt-1">
                Mahasiswa Sistem Informasi · {PERSONAL_INFO.university}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Fokus Bidang: Analisis Proses Bisnis & Perancangan UI/UX
              </p>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 mt-3 text-xs text-slate-600">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-700" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline text-slate-900 font-mono">
                    {PERSONAL_INFO.email}
                  </a>
                </span>
                <span className="flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-slate-700" />
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline text-slate-900 font-mono">
                    github.com/azr1306
                  </a>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-700" />
                  Indonesia
                </span>
              </div>
            </div>

            {/* Official Photo Preview */}
            <div className="w-24 h-32 rounded-xl overflow-hidden border-2 border-slate-300 shadow shrink-0 hidden sm:block">
              <img
                src={PERSONAL_INFO.portraitImage}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h2 className="text-xs uppercase tracking-widest font-extrabold text-slate-900 mb-2 border-b border-slate-200 pb-1 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-orange-600" />
              Ringkasan Profil
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              {PERSONAL_INFO.bioLong}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs uppercase tracking-widest font-extrabold text-slate-900 mb-4 border-b border-slate-200 pb-1 flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5 text-orange-600" />
              Pendidikan
            </h2>
            <div className="space-y-4">
              {EDUCATION_EXPERIENCE.map((item, idx) => (
                <div key={idx} className="text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <p className="font-bold text-slate-900 text-base">{item.role}</p>
                    <span className="text-xs font-mono font-medium text-slate-500">{item.period}</span>
                  </div>
                  <p className="text-orange-700 font-semibold text-xs mb-1.5">{item.institution} · {item.location}</p>
                  <p className="text-xs text-slate-600 mb-2">{item.description}</p>
                  <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
                    {item.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Core Projects */}
          <div>
            <h2 className="text-xs uppercase tracking-widest font-extrabold text-slate-900 mb-3 border-b border-slate-200 pb-1 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-orange-600" />
              Proyek Analisis Bisnis & UI/UX
            </h2>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="text-xs text-slate-700 border-l-2 border-orange-500 pl-3 py-0.5">
                  <p className="font-bold text-slate-900 text-sm">{proj.title}</p>
                  <p className="text-slate-600 mt-0.5">{proj.overview}</p>
                  <p className="text-slate-500 mt-1 font-mono">
                    Peran: {proj.role.join(', ')} | Tools: {proj.tools.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Skills */}
          <div>
            <h2 className="text-xs uppercase tracking-widest font-extrabold text-slate-900 mb-3 border-b border-slate-200 pb-1">
              Keahlian & Kemampuan Teknis
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
              <div>
                <p className="font-bold text-slate-900 mb-1">Analisis Proses & Strategi Bisnis:</p>
                <p>{SKILL_TAGS.businessSystem.join(', ')}</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Perancangan UI/UX Produk:</p>
                <p>{SKILL_TAGS.uiUx.join(', ')}</p>
              </div>
              <div className="sm:col-span-2">
                <p className="font-bold text-slate-900 mb-1">Tools & Fondasi Teknis:</p>
                <p>{SKILL_TAGS.technicalTools.join(', ')}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
