import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import { navItems, personalInfo } from '../data/portfolioData';
import { Moon, Sun, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['hero', 'about', 'skills', 'interests', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-50/90 dark:bg-[#0A0A0A]/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-900/80 py-4 shadow-xs'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand with Artistic Flair */}
          <a
            href="#"
            id="brand-logo-link"
            className="group flex items-baseline focus:outline-hidden rounded-sm"
          >
            <span className="text-xl sm:text-2xl font-black tracking-tighter text-zinc-900 dark:text-white font-sans">
              NATHAN
            </span>
            <span className="text-indigo-500 text-xl sm:text-2xl font-black">.</span>
            <span className="hidden sm:inline-block text-zinc-500 dark:text-zinc-500 text-[10px] uppercase tracking-[0.3em] ml-2.5 font-light">
              Creative Engineer
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.25em] text-zinc-500 font-medium">
            {navItems.map((item) => {
              const sectionKey = item.href.replace('#', '');
              const isActive = activeSection === sectionKey;
              return (
                <a
                  key={item.label}
                  id={`nav-link-${sectionKey}`}
                  href={item.href}
                  className={`relative pb-1 transition-colors duration-200 ${
                    isActive
                      ? 'text-zinc-950 dark:text-white font-bold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBorder"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-indigo-500"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2.5 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 bg-zinc-200/60 dark:bg-zinc-900/80 border border-zinc-300/50 dark:border-zinc-800 hover:border-indigo-500/40 transition-all focus:outline-hidden"
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600" />
                )}
              </motion.div>
            </button>

            {/* Contact / Hire CTA Button with Artistic Flair */}
            <button
              id="header-contact-btn"
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-[11px] uppercase tracking-widest font-bold text-white bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 rounded-sm shadow-xs hover:shadow-indigo-500/20 transition-all duration-200 active:scale-95"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2.5 rounded-sm text-zinc-700 dark:text-zinc-300 bg-zinc-200/60 dark:bg-zinc-900 border border-zinc-300/50 dark:border-zinc-800 hover:border-indigo-500/40 focus:outline-hidden"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-[68px] bg-zinc-100/95 dark:bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 p-6 shadow-xl"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const sectionKey = item.href.replace('#', '');
                return (
                  <a
                    key={item.label}
                    id={`mobile-nav-link-${sectionKey}`}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-xs uppercase tracking-[0.2em] font-medium text-zinc-800 dark:text-zinc-200 hover:text-indigo-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-900/50 rounded-sm transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-3">
                <button
                  id="mobile-contact-cta-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-widest text-white bg-indigo-600 dark:bg-indigo-500 rounded-sm shadow-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start a Conversation</span>
                </button>
                <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{personalInfo.status}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
