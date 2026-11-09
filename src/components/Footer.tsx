import React from 'react';
import { Github, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Title */}
        <div className="text-center md:text-left flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff9500] to-[#ff5722] text-white flex items-center justify-center font-black text-xs shadow-xs">
            SI
          </div>
          <div>
            <a href="#home" className="text-lg font-black text-slate-900 tracking-tight">
              {PERSONAL_INFO.shortName} <span className="text-[#ff5500]">Atika</span>
            </a>
            <p className="text-xs text-slate-500">
              Mahasiswa Sistem Informasi Universitas Komputama · Bisnis & UI/UX
            </p>
          </div>
        </div>

        {/* Center: Clean Nav links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-bold tracking-wider uppercase text-slate-500">
          <a href="#home" className="hover:text-[#ff5500] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#ff5500] transition-colors">About</a>
          <a href="#services" className="hover:text-[#ff5500] transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-[#ff5500] transition-colors">Projects</a>
          <a href="#resume" className="hover:text-[#ff5500] transition-colors">Resume</a>
          <a href="#contact" className="hover:text-[#ff5500] transition-colors">Contact</a>
        </div>

        {/* Right: Social & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded-xl transition-colors"
            aria-label="GitHub @azr1306"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2.5 text-slate-600 hover:text-[#ff5500] hover:bg-slate-100 rounded-xl transition-colors"
            aria-label={`Email ${PERSONAL_INFO.email}`}
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 bg-slate-100 hover:bg-[#ffa800] hover:text-slate-950 text-slate-600 rounded-xl transition-colors cursor-pointer ml-1"
            aria-label="Scroll back to top"
            title="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
        <p>© {new Date().getFullYear()} Azzahra Atika. Universitas Komputama.</p>
        <p>Dioptimasi untuk Deployment di Vercel</p>
      </div>
    </footer>
  );
};
