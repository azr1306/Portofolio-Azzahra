import React from 'react';
import { Target, Layers, Compass, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, SKILL_TAGS } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
            TENTANG SAYA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Menyelaraskan Kebutuhan Bisnis dengan Desain Produk yang Human-Centered
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Sebagai mahasiswa Sistem Informasi di <strong className="text-slate-900 font-semibold">{PERSONAL_INFO.university}</strong>, fokus saya terbagi seimbang antara memahami cara kerja proses bisnis dan merancang antarmuka sistem digital yang ramah bagi pengguna.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          <div className="bg-[#fcfdfd] border border-slate-200/80 p-8 rounded-3xl hover:border-blue-400 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Analisis Proses Bisnis</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Menganalisis alur operasional, memodelkan proses bisnis dengan BPMN 2.0, mengidentifikasi inefisiensi, dan menyusun solusi sistem yang mendukung efektivitas bisnis.
            </p>
          </div>

          <div className="bg-[#fcfdfd] border border-slate-200/80 p-8 rounded-3xl hover:border-orange-400 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#ff5500] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Perancangan UI/UX</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Menerjemahkan kebutuhan bisnis dan ekspektasi pengguna ke dalam wireframe, prototipe interaktif di Figma, dan antarmuka visual yang terstruktur serta mudah digunakan.
            </p>
          </div>

          <div className="bg-[#fcfdfd] border border-slate-200/80 p-8 rounded-3xl hover:border-emerald-400 hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Rekayasa Kebutuhan Sistem</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Menjembatani komunikasi antara stakeholder bisnis dan tim teknis pengembang melalui dokumen spesifikasi kebutuhan sistem (BRD/PRD) dan diagram Use Case.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="bg-[#f8fafc] border border-slate-200/90 rounded-3xl p-8 lg:p-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8 pb-4 border-b border-slate-200">
            <h3 className="text-xl font-bold text-slate-900">
              Keahlian & Toolkit Utama
            </h3>
            <span className="text-xs text-orange-600 font-bold tracking-wider uppercase">
              Sistem Informasi, Bisnis & UI/UX
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Business Analysis & Systems */}
            <div>
              <h4 className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                Analisis & Proses Bisnis
              </h4>
              <ul className="space-y-3">
                {SKILL_TAGS.businessSystem.map((skill) => (
                  <li key={skill} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: UI/UX & Design */}
            <div>
              <h4 className="text-sm font-bold text-[#ff5500] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
                Perancangan UI/UX
              </h4>
              <ul className="space-y-3">
                {SKILL_TAGS.uiUx.map((skill) => (
                  <li key={skill} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Tools & Technical Basis */}
            <div>
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-800" />
                Tools & Fondasi Teknis
              </h4>
              <ul className="space-y-3">
                {SKILL_TAGS.technicalTools.map((skill) => (
                  <li key={skill} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
