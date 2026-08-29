/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsInterests } from './components/SkillsInterests';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-zinc-50 dark:bg-[#0A0A0A] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 relative overflow-x-hidden selection:bg-indigo-500/25 selection:text-indigo-900 dark:selection:bg-indigo-500/35 dark:selection:text-emerald-300">
        {/* Artistic Atmospheric Glow Orbs */}
        <div className="fixed top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-600/10 dark:bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="fixed bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="fixed top-1/2 left-1/3 w-[450px] h-[450px] bg-indigo-900/5 dark:bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

        {/* Top Scroll Progress Indicator */}
        <motion.div
          id="scroll-progress-bar"
          className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-indigo-400 to-emerald-400 origin-left z-50 pointer-events-none"
          style={{ scaleX }}
        />

        {/* Fixed Header */}
        <Header onOpenContact={() => setIsContactModalOpen(true)} />

        {/* Main Content Area */}
        <main id="main-content" className="flex flex-col relative z-10">
          {/* Hero Section */}
          <Hero onOpenContact={() => setIsContactModalOpen(true)} />

          {/* About Section */}
          <About />

          {/* Skills & Interests Section */}
          <SkillsInterests />

          {/* Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Quick Contact Modal */}
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
