import React, { useState } from 'react';
import { Mail, Github, Copy, Check, Send, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Diskusi Proyek UI/UX atau Analisis Sistem',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject + ' - ' + formData.name
    )}&body=${encodeURIComponent(formData.message + '\n\nDari: ' + formData.name + ' (' + formData.email + ')')}`;
    
    window.open(mailtoUrl, '_blank');
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
            HUBUNGI SAYA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Mari Berkolaborasi & Terhubung
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Terbuka untuk kolaborasi proyek analisis proses bisnis, perancangan antarmuka UI/UX, peluang magang, atau bertukar pikiran seputar sistem informasi.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left Column: Direct Contacts & GitHub Link */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="bg-[#fafbfc] border border-slate-200/90 rounded-3xl p-6 sm:p-8 hover:border-orange-300 transition-all shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#ff5500] flex items-center justify-center mb-5">
                <Mail className="w-6 h-6" />
              </div>

              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Kirim Email Langsung
              </h3>
              <p className="text-lg sm:text-xl font-black text-slate-900 font-mono break-all mb-4">
                {PERSONAL_INFO.email}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-5 py-2.5 bg-[#ffa800] hover:bg-[#ff9500] text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  Buka Email Client
                  <Send className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="bg-[#fafbfc] border border-slate-200/90 rounded-3xl p-6 sm:p-8 hover:border-blue-300 transition-all shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-5">
                <Github className="w-6 h-6" />
              </div>

              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                Repositori & Portofolio Kode
              </h3>
              <p className="text-lg sm:text-xl font-black text-slate-900 font-mono mb-4">
                github.com/{PERSONAL_INFO.githubUsername}
              </p>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-xs"
              >
                Kunjungi GitHub @{PERSONAL_INFO.githubUsername}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Status note */}
            <div className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl text-xs text-slate-600 space-y-2">
              <p className="flex items-center gap-2 text-slate-900 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                Status: Terbuka untuk Diskusi & Peluang Baru
              </p>
              <p>
                Lokasi: Indonesia · Respons dalam 1x24 jam untuk email dan komunikasi profesional.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#fafbfc] border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-xs">
            <h3 className="text-2xl font-black text-slate-900 mb-2">
              Tinggalkan Pesan
            </h3>
            <p className="text-sm text-slate-500 mb-8">
              Isi formulir di bawah ini untuk mengirimkan pesan langsung ke email saya.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Terima Kasih, Pesan Telah Disiapkan!</h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Aplikasi email Anda telah dibuka dengan draf pesan ini. Jika tidak terbuka otomatis, silakan kirim langsung ke <strong className="text-slate-900">{PERSONAL_INFO.email}</strong>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#ff5500] hover:underline cursor-pointer"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Nama Anda *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Rian Pratama"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#ff5500] focus:ring-2 focus:ring-orange-100 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Alamat Email Anda *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nama@perusahaan.com"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#ff5500] focus:ring-2 focus:ring-orange-100 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Subjek Diskusi
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#ff5500] focus:ring-2 focus:ring-orange-100 transition-all cursor-pointer"
                  >
                    <option value="Diskusi Proyek UI/UX atau Analisis Sistem">Diskusi Proyek UI/UX atau Analisis Sistem</option>
                    <option value="Peluang Kerja / Magang (Internship)">Peluang Kerja / Magang (Internship)</option>
                    <option value="Kolaborasi Riset Desain & Bisnis">Kolaborasi Riset Desain & Bisnis</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Pesan / Ringkasan Kebutuhan *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ceritakan gambaran proyek atau hal yang ingin Anda diskusikan..."
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#ff5500] focus:ring-2 focus:ring-orange-100 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#ffa800] hover:bg-[#ff9500] active:scale-[0.99] text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg shadow-orange-400/20"
                >
                  <Send className="w-4 h-4" />
                  Kirim Pesan Sekarang
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
