import React from 'react';
import { personalInfo, navItems, socialLinks } from '../data/portfolioData';
import { DynamicIcon } from './DynamicIcon';
import { ArrowUp, Heart, Sparkles, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#0A0A0A] text-zinc-400 border-t border-zinc-900 py-12 md:py-16 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-zinc-900">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-indigo-500 to-emerald-400 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                NA
              </div>
              <span className="font-bold text-white text-base tracking-tight font-sans">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-zinc-500 max-w-sm font-light">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-indigo-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="flex items-center gap-2 px-4 py-2 rounded-sm bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-bold uppercase tracking-wider border border-zinc-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
          </button>
        </div>

        {/* Bottom Bar: Copyright & Tech Stack */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-zinc-500 hover:text-indigo-400 transition-colors p-1"
              >
                <DynamicIcon name={social.iconName} className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-500">
            <span>Built with React 19, Tailwind CSS & Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
