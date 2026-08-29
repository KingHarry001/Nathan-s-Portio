import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skillsData, interestsData } from '../data/portfolioData';
import { SkillCategory, Skill } from '../types';
import { DynamicIcon } from './DynamicIcon';
import {
  Code2,
  Search,
  Sparkles,
  Heart,
  Layers,
  Flame,
  Star,
  Cpu,
  Coffee,
  Terminal,
  ExternalLink,
  ChevronRight,
  Filter,
} from 'lucide-react';

export const SkillsInterests: React.FC = () => {
  const [activeView, setActiveView] = useState<'skills' | 'interests'>('skills');
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const categories: { id: SkillCategory; label: string }[] = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'devops', label: 'Cloud & DevOps' },
    { id: 'architecture', label: 'Architecture & Testing' },
    { id: 'design', label: 'Design Systems' },
  ];

  const filteredSkills = useMemo(() => {
    return skillsData.filter((skill) => {
      const matchesCat = selectedCategory === 'all' || skill.category === selectedCategory;
      const matchesQuery =
        searchQuery === '' ||
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-600/5 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-[10px] uppercase tracking-[0.25em] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Technical & Creative Canvas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-sans">
              Skills & <span className="font-serif italic font-normal text-indigo-600 dark:text-indigo-400">Curiosities</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mt-3 font-light leading-relaxed">
              A comprehensive view of the technical tools I use daily, paired with the curiosities and hobbies that fuel my creative problem solving.
            </p>
          </div>

          {/* Primary View Switcher */}
          <div className="inline-flex p-1 rounded-xl bg-zinc-200/80 dark:bg-zinc-900 border border-zinc-300/70 dark:border-zinc-800 self-start md:self-auto shrink-0 shadow-xs">
            <button
              id="view-switch-skills"
              onClick={() => setActiveView('skills')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeView === 'skills'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-indigo-500" />
              <span>Technical Skills</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 font-mono">
                {skillsData.length}
              </span>
            </button>
            <button
              id="view-switch-interests"
              onClick={() => setActiveView('interests')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeView === 'interests'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              <Heart className="w-3.5 h-3.5 text-emerald-400" />
              <span>Interests & Passions</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 font-mono">
                {interestsData.length}
              </span>
            </button>
          </div>
        </div>

        {/* View 1: Technical Skills Matrix */}
        {activeView === 'skills' && (
          <motion.div
            key="skills-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Search & Category Filter Controls */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white dark:bg-zinc-950 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 shadow-xs">
              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    id={`skill-cat-${cat.id}`}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-[11px] uppercase tracking-wider font-medium whitespace-nowrap transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-xs font-semibold'
                        : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative min-w-[240px]">
                <Search className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  id="skills-search-input"
                  placeholder="Filter skills, tags, keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-200"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Skills Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="group bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800/80 p-5 shadow-xs hover:border-indigo-500/50 hover:shadow-indigo-500/5 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      {/* Card Header */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-800 dark:text-zinc-200 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-colors">
                            <DynamicIcon name={skill.iconName} className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm font-sans flex items-center gap-1.5">
                              {skill.name}
                              {skill.isFavorite && (
                                <Star className="w-3.5 h-3.5 fill-indigo-400 text-indigo-400" title="Core Expertise" />
                              )}
                            </h3>
                            <span className="text-[11px] text-zinc-500 dark:text-zinc-500 font-mono">
                              {skill.experience} exp
                            </span>
                          </div>
                        </div>

                        {/* Proficiency Badge */}
                        <div className="text-right">
                          <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Proficiency Progress Bar */}
                      <div className="w-full h-1 bg-zinc-100 dark:bg-zinc-900 rounded-full overflow-hidden mb-3.5">
                        <motion.div
                          className="h-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-emerald-400 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                        />
                      </div>

                      {/* Description */}
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 font-light">
                        {skill.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-900">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredSkills.length === 0 && (
              <div className="text-center py-16 bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <Search className="w-8 h-8 text-zinc-500 mx-auto mb-3" />
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">No matching skills found</p>
                <p className="text-xs text-zinc-500 mt-1 font-light">Try searching for a different keyword or category.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* View 2: Interests & Passions */}
        {activeView === 'interests' && (
          <motion.div
            key="interests-view"
            id="interests"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Header intro for interests */}
            <div className="bg-zinc-950 p-6 sm:p-8 rounded-xl border border-zinc-800/90 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 blur-3xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-2 relative z-10">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <h3 className="text-lg sm:text-xl font-bold text-zinc-100 font-sans tracking-tight">
                  Beyond the Code Editor
                </h3>
              </div>
              <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed font-light relative z-10">
                Great engineering is inspired by diverse disciplines. My passion for physical hardware, generative art, physical endurance, and speculative philosophy constantly informs my architecture decisions, creative intuition, and attention to detail.
              </p>
            </div>

            {/* Interests Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interestsData.map((interest, idx) => (
                <motion.div
                  key={interest.id}
                  id={`interest-card-${interest.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800/80 p-6 shadow-xs flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-200"
                >
                  <div>
                    {/* Category & Stat */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800">
                        {interest.category}
                      </span>
                      {interest.stats && (
                        <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                          {interest.stats.label}: {interest.stats.value}
                        </span>
                      )}
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-100">
                        <DynamicIcon name={interest.iconName} className="w-5 h-5 text-indigo-400" />
                      </div>
                      <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 font-sans leading-tight">
                        {interest.title}
                      </h4>
                    </div>

                    {/* Tagline */}
                    <p className="text-xs font-serif italic text-indigo-600 dark:text-indigo-400 mb-3">
                      "{interest.tagline}"
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5 font-light">
                      {interest.description}
                    </p>
                  </div>

                  {/* Highlights Bullet Tags */}
                  <div className="space-y-1.5 pt-4 border-t border-zinc-100 dark:border-zinc-900">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-1">
                      Focus Areas
                    </div>
                    {interest.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
