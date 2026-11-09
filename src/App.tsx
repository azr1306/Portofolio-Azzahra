/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export default function App() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f6f8fb] text-slate-800 flex flex-col font-sans selection:bg-[#ff8a00] selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenCvModal={() => setIsCvOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenCvModal={() => setIsCvOpen(true)} />
        <About />
        <Services />
        <Portfolio />
        <Resume onOpenCvModal={() => setIsCvOpen(true)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Curriculum Vitae Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </div>
  );
}
