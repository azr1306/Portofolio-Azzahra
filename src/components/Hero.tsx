import React from 'react';
import { Sparkles, ArrowRight, Smartphone, Globe, LayoutDashboard, Award, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  return (
    <section id="home" className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-[#f6f8fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Main Hero Card Container (Matching reference image) */}
        <div className="bg-white rounded-[32px] sm:rounded-[44px] border border-slate-200/80 shadow-sm p-6 sm:p-10 lg:p-14 relative overflow-hidden">
          
          {/* Subtle background ambient circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
            
            {/* Left Column: Typographic Hierarchy & Specialties (Span 7) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Top Badge: Sparkle + WOW tag + Discipline */}
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#ffa800] text-slate-950 font-black text-[11px] shadow-sm tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  WOW!
                </div>
                <span className="text-xs font-extrabold tracking-wider text-slate-400 uppercase">
                  SISTEM INFORMASI · BISNIS & UI/UX
                </span>
              </div>

              {/* Main Display Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] text-balance">
                Hey! Saya <br />
                <span className="text-[#ff5500] font-black inline-block">
                  Azzahra Atika
                </span>
              </h1>

              {/* Subtitle Bio */}
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-normal">
                Mahasiswa <strong className="text-slate-900 font-semibold">Sistem Informasi</strong> di{' '}
                <strong className="text-[#ff5500] font-semibold">{PERSONAL_INFO.university}</strong> yang berfokus seimbang pada analisis proses bisnis, perancangan antarmuka digital (UI/UX Design), pemodelan sistem, serta penjembatan kebutuhan bisnis dengan solusi teknologi yang efektif.
              </p>

              {/* Focus & Key Competencies Card (Matching reference card) */}
              <div className="bg-[#fafbfc] border border-slate-200/80 rounded-2xl p-4 sm:p-5 max-w-xl shadow-xs space-y-3">
                <div className="flex items-center justify-between pb-1">
                  <span className="text-xs font-bold text-slate-800">
                    Fokus & Keahlian Utama
                  </span>
                  <span className="text-[10px] font-bold text-amber-900 bg-amber-100/90 px-2.5 py-0.5 rounded-full">
                    3 Spesialisasi
                  </span>
                </div>

                <div className="space-y-2">
                  {/* Specialty 1 */}
                  <a
                    href="#services"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-100 hover:border-emerald-300 hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                          Analisis Proses Bisnis & Pemodelan
                        </p>
                        <p className="text-[11px] text-slate-500">
                          BPMN 2.0, Standard Operating Procedure & Efisiensi Alur
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
                  </a>

                  {/* Specialty 2 */}
                  <a
                    href="#portfolio"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-100 hover:border-purple-300 hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800 group-hover:text-purple-700 transition-colors">
                          Perancangan UI/UX & Prototipe Interaktif
                        </p>
                        <p className="text-[11px] text-slate-500">
                          Figma, Design System, Wireframing & Usability Testing
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all" />
                  </a>

                  {/* Specialty 3 */}
                  <a
                    href="#services"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-100 hover:border-blue-300 hover:shadow-xs transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <LayoutDashboard className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                          Business Dashboard & Sistem Informasi
                        </p>
                        <p className="text-[11px] text-slate-500">
                          Spesifikasi Kebutuhan (BRD/PRD) & Data Analytics
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Centered Photo with Vibrant Shapes & Floating Cards (Span 5) */}
            <div className="lg:col-span-5 flex justify-center items-center relative py-6">
              
              {/* Decorative shapes behind photo (exact composition as reference screenshot) */}
              <div className="absolute w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-[#1652f0] -right-4 top-1/2 -translate-y-1/2 opacity-90 blur-[1px]" />
              <div className="absolute w-64 sm:w-72 h-64 sm:h-72 rounded-full bg-[#ffa800] -right-10 top-1/3 -translate-y-1/3 opacity-80" />
              
              {/* Playful squiggly line accent */}
              <svg className="absolute -top-4 right-10 w-20 h-20 text-[#a855f7] opacity-80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                <path d="M10,40 Q25,20 40,40 T70,40 T100,40" strokeLinecap="round" />
              </svg>

              {/* Main Photo Card Container — Centered Face Framing */}
              <div className="relative z-10 w-full max-w-[290px] sm:max-w-[320px] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-blue-600 group">
                <img
                  src={PERSONAL_INFO.portraitImage}
                  alt="Azzahra Atika - Mahasiswa Sistem Informasi Universitas Komputama"
                  className="w-full h-[400px] sm:h-[430px] object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom identification caption */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-center">
                  <p className="text-white font-bold text-sm tracking-wide">
                    {PERSONAL_INFO.name}
                  </p>
                  <p className="text-amber-300 text-[11px] font-medium">
                    {PERSONAL_INFO.university} · Sistem Informasi
                  </p>
                </div>
              </div>

              {/* Floating micro-card 1: Top Right (Analisis Bisnis) */}
              <div className="absolute top-6 right-2 sm:right-0 z-20 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 p-2.5 px-3 flex items-center gap-2 animate-in fade-in duration-300">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                  BA
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800 leading-tight">Analisis Bisnis</p>
                  <p className="text-[9px] text-slate-500">Proses & Sistem 👆</p>
                </div>
              </div>

              {/* Floating micro-card 2: Bottom Left (UI/UX Designer) */}
              <div className="absolute bottom-10 -left-2 sm:-left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 p-2.5 px-3.5 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#ff5500] text-white flex items-center justify-center text-xs font-bold">
                  UI
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800 leading-tight">UI/UX Prototype</p>
                  <p className="text-[9px] text-slate-500">Figma & Testing</p>
                </div>
              </div>

              {/* Floating micro-card 3: Bottom Right (Univ Komputama) */}
              <div className="absolute -bottom-3 right-0 sm:right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 p-2.5 px-3.5 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800 leading-tight">Univ. Komputama</p>
                  <p className="text-[9px] text-slate-500">Mahasiswa Aktif</p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 3 Circular KPI Metric Badges Below Card (Exact element from reference screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 px-4 sm:px-8">
          
          {/* Metric 1: Yellow/Amber */}
          <div className="flex flex-col items-center text-center space-y-3 p-4">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#f1f5f9" strokeWidth="8" fill="transparent" />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#ffa800"
                  strokeWidth="8"
                  strokeDasharray="251.2"
                  strokeDashoffset="35"
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-black text-slate-900 font-mono tracking-tight">
                  28+
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Already Completed Projects
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Desain UI/UX & Prototipe Sistem
              </p>
            </div>
          </div>

          {/* Metric 2: Cyan/Blue */}
          <div className="flex flex-col items-center text-center space-y-3 p-4">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#f1f5f9" strokeWidth="8" fill="transparent" />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#0ea5e9"
                  strokeWidth="8"
                  strokeDasharray="251.2"
                  strokeDashoffset="55"
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-black text-slate-900 font-mono tracking-tight">
                  10+
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Modul Proses Bisnis
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                BPMN 2.0, Flow & Dokumentasi Sistem
              </p>
            </div>
          </div>

          {/* Metric 3: Orange */}
          <div className="flex flex-col items-center text-center space-y-3 p-4">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#f1f5f9" strokeWidth="8" fill="transparent" />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#ff5500"
                  strokeWidth="8"
                  strokeDasharray="251.2"
                  strokeDashoffset="15"
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-black text-slate-900 font-mono tracking-tight">
                  98%
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                User Experience Score
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Berdasarkan Pengujian Usabilitas
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
