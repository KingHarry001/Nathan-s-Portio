import React, { useState } from 'react';
import { motion } from 'motion/react';
import { personalInfo, heroStats } from '../data/portfolioData';
import {
  ArrowDown,
  Sparkles,
  Terminal,
  Copy,
  Check,
  Download,
  Send,
  Code2,
  Cpu,
  Layers,
  Zap,
} from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'stack' | 'philosophy'>('stack');

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-indigo-600/10 via-indigo-400/10 to-emerald-500/5 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-gradient-to-br from-indigo-500/5 via-emerald-500/5 to-transparent blur-2xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Pill */}
            <motion.div
              variants={itemVariants}
              id="hero-availability-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-[11px] uppercase tracking-[0.2em] font-medium mb-6 backdrop-blur-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>{personalInfo.status}</span>
            </motion.div>

            {/* Main Headline - Artistic Editorial Flair */}
            <motion.h1
              variants={itemVariants}
              id="hero-main-title"
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.05] mb-6"
            >
              Building resilient systems with{' '}
              <span className="font-serif italic font-normal tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-400 to-emerald-400 dark:from-indigo-400 dark:via-indigo-300 dark:to-emerald-400">
                fluid design & precision
              </span>
              .
            </motion.h1>

            {/* Sub-headline / Narrative */}
            <motion.p
              variants={itemVariants}
              id="hero-description"
              className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl font-light leading-relaxed mb-8"
            >
              Hi, I'm <strong className="font-semibold text-zinc-900 dark:text-zinc-100">{personalInfo.name}</strong>. {personalInfo.shortBio}
            </motion.p>

            {/* CTA Actions */}
            <motion.div
              variants={itemVariants}
              id="hero-action-buttons"
              className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10"
            >
              <a
                href="#skills"
                id="hero-explore-skills-btn"
                className="px-6 py-3.5 rounded-sm font-semibold text-xs uppercase tracking-widest text-white bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 shadow-md hover:shadow-indigo-500/20 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Explore Skills & Interests</span>
                <Sparkles className="w-4 h-4 text-emerald-300" />
              </a>

              <button
                id="hero-contact-trigger-btn"
                onClick={onOpenContact}
                className="px-6 py-3.5 rounded-sm font-semibold text-xs uppercase tracking-widest text-zinc-800 dark:text-zinc-200 bg-zinc-200/80 hover:bg-zinc-300/80 dark:bg-zinc-900/90 dark:hover:bg-zinc-800 border border-zinc-300/60 dark:border-zinc-800 hover:border-indigo-500/40 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </button>

              <button
                id="hero-copy-email-btn"
                onClick={copyEmail}
                title="Copy Email Address"
                className="p-3.5 rounded-sm text-zinc-600 dark:text-zinc-400 bg-zinc-200/60 dark:bg-zinc-900/80 border border-zinc-300/50 dark:border-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-indigo-500/40 transition-colors flex items-center justify-center"
              >
                {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
              </button>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              variants={itemVariants}
              id="hero-quick-stats-bar"
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full pt-6 border-t border-zinc-200 dark:border-zinc-900"
            >
              {heroStats.map((stat, i) => (
                <div key={stat.label} id={`hero-stat-card-${i}`} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-100 font-sans tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500 dark:text-zinc-500 font-medium mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Interactive Code & Architecture Terminal Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              variants={itemVariants}
              id="hero-interactive-card"
              className="w-full bg-zinc-950 text-zinc-100 rounded-xl border border-zinc-800/90 shadow-2xl overflow-hidden backdrop-blur-md"
            >
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-950 border-b border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  <span className="ml-2 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    developer-profile.ts
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-zinc-900 p-0.5 rounded-md text-xs font-mono">
                  <button
                    id="hero-tab-stack"
                    onClick={() => setActiveTab('stack')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'stack' ? 'bg-zinc-800 text-indigo-400 font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    Stack
                  </button>
                  <button
                    id="hero-tab-philosophy"
                    onClick={() => setActiveTab('philosophy')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'philosophy' ? 'bg-zinc-800 text-indigo-400 font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    Ethos
                  </button>
                </div>
              </div>

              {/* Terminal Code Body */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
                {activeTab === 'stack' ? (
                  <div className="space-y-2">
                    <div>
                      <span className="text-indigo-400">const</span>{' '}
                      <span className="text-indigo-200">architect</span> = &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-zinc-500">name:</span>{' '}
                      <span className="text-emerald-300">"{personalInfo.name}"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-zinc-500">specialization:</span>{' '}
                      <span className="text-indigo-300">"Full Stack & UI Systems"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-zinc-500">coreStack:</span> [
                      <span className="text-emerald-300">"React 19"</span>,{' '}
                      <span className="text-emerald-300">"TypeScript"</span>,{' '}
                      <span className="text-emerald-300">"Tailwind CSS"</span>,{' '}
                      <span className="text-emerald-300">"Node.js"</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-zinc-500">cloud:</span> [
                      <span className="text-indigo-300">"Docker"</span>,{' '}
                      <span className="text-indigo-300">"GCP"</span>,{' '}
                      <span className="text-indigo-300">"PostgreSQL"</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-zinc-500">focus:</span>{' '}
                      <span className="text-emerald-400">"Speed, Type Safety & Fluid UX"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-zinc-500">isAvailable:</span>{' '}
                      <span className="text-emerald-400">true</span>
                    </div>
                    <div>&#125;;</div>
                    <div className="pt-2 text-zinc-600 flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">$</span> ready to deploy impact...
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 text-zinc-300">
                    <div className="text-indigo-400 font-semibold">// Engineering Philosophy</div>
                    <div>
                      <span className="text-indigo-400">function</span>{' '}
                      <span className="text-indigo-200">craftExperience</span>(requirements) &#123;
                    </div>
                    <div className="pl-4 text-zinc-500">
                      // 1. Establish clear type contracts
                    </div>
                    <div className="pl-4 text-zinc-500">
                      // 2. Eliminate layout thrashing & lag
                    </div>
                    <div className="pl-4 text-zinc-500">
                      // 3. Make every micro-interaction intuitive
                    </div>
                    <div className="pl-4 text-emerald-300">
                      return &#123; accessible: <span className="text-emerald-400">true</span>, latencyMs: <span className="text-indigo-300">&lt; 50</span> &#125;;
                    </div>
                    <div>&#125;</div>
                  </div>
                )}
              </div>

              {/* Bottom Quick Chips */}
              <div className="px-5 py-3 bg-zinc-950 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-zinc-400 text-[11px] font-mono">TypeScript 5.8 Strict</span>
                </div>
                <div className="font-mono text-zinc-500 text-[11px]">React 19 SPA</div>
              </div>
            </motion.div>

            {/* Interactive Scroll Down Indicator */}
            <motion.a
              href="#about"
              id="hero-scroll-indicator"
              variants={itemVariants}
              className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-medium text-zinc-500 hover:text-indigo-400 transition-colors"
            >
              <span>Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowDown className="w-3.5 h-3.5" />
              </motion.div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
