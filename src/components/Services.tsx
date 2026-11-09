import React from 'react';
import { Layout, Briefcase, Users, Layers, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-5 h-5" />,
  Layout: <Layout className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-24 bg-[#f6f8fb] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
            LAYANAN & KOMPETENSI
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Layanan & Solusi yang Saya Tawarkan
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Membantu merancang produk digital mulai dari fase riset, perancangan kebutuhan proses bisnis, hingga antarmuka pengguna siap uji dan produksi.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 relative group hover:border-[#ff5500]/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5 flex flex-col justify-between"
            >
              <div>
                {/* Top Number & Icon Row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-mono text-slate-300 group-hover:text-[#ff5500] transition-colors">
                    {service.number}
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-orange-50 text-[#ff5500] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[service.icon]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#ff5500] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Detail list */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">
                    Deliverables & Ruang Lingkup:
                  </p>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Link to Contact */}
              <div className="mt-8 pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff5500] hover:text-slate-900 transition-colors"
                >
                  Konsultasikan Proyek <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
