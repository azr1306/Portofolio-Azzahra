import React from 'react';
import { GraduationCap, Download, MapPin, CheckCircle } from 'lucide-react';
import { EDUCATION_EXPERIENCE, PERSONAL_INFO } from '../data/portfolioData';

interface ResumeProps {
  onOpenCvModal: () => void;
}

export const Resume: React.FC<ResumeProps> = ({ onOpenCvModal }) => {
  return (
    <section id="resume" className="py-20 sm:py-24 bg-[#f6f8fb] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
              PENDIDIKAN & LATAR BELAKANG
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Pendidikan & Fokus Studi
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Menempuh studi Sistem Informasi di {PERSONAL_INFO.university} dengan dedikasi seimbang pada analisis proses bisnis dan perancangan antarmuka pengguna.
            </p>
          </div>

          <button
            onClick={onOpenCvModal}
            className="px-6 py-3 bg-[#ffa800] hover:bg-[#ff9500] active:scale-95 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-full transition-all flex items-center gap-2 self-start sm:self-auto cursor-pointer shadow-sm hover:shadow-md"
          >
            <Download className="w-4 h-4" />
            Buka Pratinjau CV
          </button>
        </div>

        {/* Education Timeline */}
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 pl-6 md:pl-10">
          {EDUCATION_EXPERIENCE.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#ff5500] group-hover:scale-125 transition-transform shadow-xs" />

              {/* Education Card */}
              <div className="bg-white border border-slate-200/90 group-hover:border-orange-300 rounded-3xl p-6 sm:p-10 transition-all shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-mono font-bold text-orange-700 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                    Status: {item.period}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>

                <div className="flex items-center gap-3.5 mb-2">
                  <div className="p-2.5 rounded-2xl bg-orange-50 text-[#ff5500]">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                      {item.role}
                    </h3>
                    <p className="text-sm font-bold text-[#ff5500]">
                      {item.institution}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed my-4">
                  {item.description}
                </p>

                {/* Focus Points */}
                <div className="pt-4 border-t border-slate-100 space-y-2.5">
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">
                    Fokus & Kompetensi Utama:
                  </p>
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
