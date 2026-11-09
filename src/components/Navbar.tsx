import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-6">
        
        {/* Zone 1: Brand Wordmark with 3D/SI Icon (Matching reference image) */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap shrink-0 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff9500] to-[#ff5722] text-white flex items-center justify-center font-black text-sm shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
            SI
          </div>
          <span className="font-extrabold uppercase tracking-wide text-slate-900 group-hover:text-[#ff6b2b] transition-colors">
            {PERSONAL_INFO.shortName} <span className="text-slate-400 font-medium">DESIGNER</span>
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="whitespace-nowrap shrink-0 hover:text-slate-950 transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ff7a00] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions (Resume CV link + Hubungi Saya Orange Pill button) */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenCvModal}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#ff6b2b] transition-colors px-2 py-1 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-slate-500" />
            Resume CV
          </button>

          <a
            href="#contact"
            className="px-5 py-2.5 text-xs font-bold text-slate-900 bg-[#ffa800] hover:bg-[#ff9500] active:scale-95 transition-all rounded-full shadow-sm hover:shadow-md hover:shadow-orange-400/20 flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Hubungi Saya
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-slate-700 hover:text-[#ff7a00] p-2 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-[#ff7a00] transition-colors py-1.5 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-full transition-all text-center flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Buka Resume CV
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-xs font-bold text-slate-900 bg-[#ffa800] hover:bg-[#ff9500] rounded-full transition-all text-center flex items-center justify-center gap-1.5"
              >
                Hubungi Saya <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
