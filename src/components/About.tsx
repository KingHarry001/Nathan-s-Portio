import React, { useState } from 'react';
import { motion } from 'motion/react';
import { personalInfo, values, experienceData } from '../data/portfolioData';
import { DynamicIcon } from './DynamicIcon';
import {
  MapPin,
  Calendar,
  Briefcase,
  Sparkles,
  Award,
  CheckCircle2,
  Terminal,
  ArrowRight,
  Code2,
} from 'lucide-react';

export const About: React.FC = () => {
  const [activeExperienceIndex, setActiveExperienceIndex] = useState<number>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="about"
      className="py-20 md:py-28 relative border-t border-zinc-200/80 dark:border-zinc-900 bg-zinc-100/40 dark:bg-[#070707]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-[10px] uppercase tracking-[0.25em] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Philosophy & Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4 font-sans">
            Crafting digital worlds with{' '}
            <span className="font-serif italic font-normal text-indigo-600 dark:text-indigo-400">
              clean code & creativity
            </span>
            .
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed font-light">
            I’m Nathan Adenekan, a passionate developer building interactive websites, software applications, and game development projects.
          </p>
        </div>

        {/* Bio Story & Core Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Narrative Column */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white dark:bg-zinc-950 p-6 sm:p-8 rounded-xl border border-zinc-200 dark:border-zinc-800/80 shadow-xs hover:border-zinc-700 transition-colors">
            <div className="space-y-4 text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 font-sans tracking-tight">
                The Journey & Vision
              </h3>
              <p>
                Hi, I'm Nathan. I love coding and transforming ideas into functional software, responsive websites, and engaging games. I enjoy writing clean, logical code that solves real problems and creates memorable interactive experiences.
              </p>
              <p>
                Whether designing responsive web interfaces with modern frameworks or experimenting with game mechanics and physics, I focus on hands-on building, fast iteration, and continuous learning.
              </p>
              <p>
                My goal is to keep mastering new programming tools, exploring new game design concepts, and building projects that deliver both great performance and genuine enjoyment.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-900 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">Location</div>
                  <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{personalInfo.location}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">Experience</div>
                  <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">0 Years Active</div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Core Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((val, idx) => (
              <motion.div
                key={val.title}
                id={`about-value-card-${idx}`}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-zinc-950 p-5 sm:p-6 rounded-xl border border-zinc-200 dark:border-zinc-800/80 shadow-xs hover:border-indigo-500/40 transition-all flex flex-col justify-start"
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
                  <DynamicIcon name={val.iconName} className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-2 font-sans">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience & Career Highlights Section */}
        <div id="experience" className="mt-16 pt-12 border-t border-zinc-200 dark:border-zinc-900">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 font-sans tracking-tight">
                Professional Experience
              </h3>
              <p className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mt-1">
                Roles and milestones shaping my engineering leadership
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left selector tabs */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {experienceData.map((exp, idx) => {
                const isSelected = activeExperienceIndex === idx;
                return (
                  <button
                    key={exp.company}
                    id={`exp-tab-${idx}`}
                    onClick={() => setActiveExperienceIndex(idx)}
                    className={`text-left p-4 rounded-xl transition-all duration-200 border flex flex-col gap-1 ${
                      isSelected
                        ? 'bg-zinc-100 dark:bg-zinc-900 border-indigo-500/60 text-zinc-900 dark:text-zinc-100 shadow-xs'
                        : 'bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-900 text-zinc-600 dark:text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm sm:text-base">{exp.company}</span>
                      <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">{exp.period}</span>
                    </div>
                    <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                      {exp.role}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right details card */}
            <div className="lg:col-span-8 bg-white dark:bg-zinc-950 p-6 sm:p-8 rounded-xl border border-zinc-200 dark:border-zinc-800/80 shadow-xs">
              {experienceData[activeExperienceIndex] && (
                <motion.div
                  key={activeExperienceIndex}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-900 pb-4">
                    <div>
                      <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 font-sans">
                        {experienceData[activeExperienceIndex].role}
                      </h4>
                      <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-0.5">
                        {experienceData[activeExperienceIndex].company} • <span className="text-zinc-500 dark:text-zinc-400">{experienceData[activeExperienceIndex].location}</span>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-full text-xs font-mono text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">
                      {experienceData[activeExperienceIndex].period}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-light">
                    {experienceData[activeExperienceIndex].description}
                  </p>

                  <div>
                    <h5 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-3">
                      Key Highlights & Impact
                    </h5>
                    <ul className="space-y-2.5">
                      {experienceData[activeExperienceIndex].achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-2.5">
                      Technologies & Practices
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {experienceData[activeExperienceIndex].technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
