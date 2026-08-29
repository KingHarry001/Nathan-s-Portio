import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import { DynamicIcon } from './DynamicIcon';
import {
  Mail,
  Copy,
  Check,
  Send,
  Sparkles,
  MapPin,
  Clock,
  ArrowUpRight,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react';

interface ContactSectionProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Collaboration',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate brief network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative border-t border-zinc-200/80 dark:border-zinc-900 bg-zinc-100/40 dark:bg-[#070707]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-[10px] uppercase tracking-[0.25em] font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>Let's Connect</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4 font-sans">
                Have a project or{' '}
                <span className="font-serif italic font-normal text-indigo-600 dark:text-indigo-400">
                  opportunity in mind
                </span>
                ?
              </h2>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                I’m always open to discussing web architectures, challenging product builds, consulting opportunities, or technical leadership roles.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="bg-white dark:bg-zinc-950 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800/80 shadow-xs hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">Direct Email</div>
                    <div className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100 font-mono break-all">
                      {personalInfo.email}
                    </div>
                  </div>
                </div>

                <button
                  id="contact-copy-email-btn"
                  onClick={copyEmail}
                  className="p-2.5 rounded-lg text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 hover:text-indigo-500 dark:hover:text-indigo-400 border border-zinc-200 dark:border-zinc-800 transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Current Status and Location */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-zinc-950 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 shadow-xs flex items-center gap-3">
                <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200">London (UTC+1)</div>
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-950 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 shadow-xs flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">Status</div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200">Available</div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-3">
                Social Profiles & Repos
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    id={`social-link-${social.name.toLowerCase()}`}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 hover:border-indigo-500/40 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all text-xs font-medium text-zinc-800 dark:text-zinc-200"
                  >
                    <div className="flex items-center gap-2">
                      <DynamicIcon name={social.iconName} className="w-4 h-4 text-zinc-500" />
                      <span>{social.name}</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-950 p-6 sm:p-8 rounded-xl border border-zinc-200 dark:border-zinc-800/80 shadow-md">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 font-sans mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mb-6 leading-relaxed font-light">
                  Thank you, <strong className="text-zinc-900 dark:text-zinc-100">{formData.name}</strong>. I've received your note and will get back to you at{' '}
                  <strong className="text-zinc-900 dark:text-zinc-100">{formData.email}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'Project Collaboration', message: '' });
                  }}
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
                >
                  Send Another Note
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center gap-2 pb-2 border-b border-zinc-100 dark:border-zinc-900">
                  <MessageSquare className="w-4 h-4 text-indigo-400" />
                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 font-sans">
                    Send a Message
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      placeholder="e.g. Elena Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      placeholder="e.g. elena@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Topic / Inquiries
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                  >
                    <option value="Project Collaboration">New Project / Full-Stack Build</option>
                    <option value="Architecture Consulting">Frontend / UI Architecture Consulting</option>
                    <option value="Full-Time Opportunity">Full-Time / Contract Role</option>
                    <option value="Mentorship & Tech Talk">Mentorship or Tech Talk</option>
                    <option value="General Hello">General Coffee / Hello</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell me about your product, timeline, or requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-hidden focus:ring-1 focus:ring-indigo-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-sm font-semibold text-xs uppercase tracking-widest text-white bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 shadow-md hover:shadow-indigo-500/20 transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-emerald-300" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
