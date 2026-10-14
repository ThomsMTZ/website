'use client';

import { useState } from 'react';
import { useTranslation } from '@/utils/i18n';
import { personalData } from '@/utils/data/personal-data';
import { Mail, Copy, Check, Send, MapPin, ArrowUpRight } from 'lucide-react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

/**
 * ContactSection component featuring 1-click email copy, direct links, and a clean contact form.
 */
const ContactSection = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [startTime] = useState(Date.now());

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formState,
          ts: startTime,
          hp: '',
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-3 max-w-3xl mb-12 sm:mb-16">
        <span className="text-xs font-mono tracking-wider uppercase text-emerald-400">
          {'//'} {t.contact.tag}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
          {t.contact.title}
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 font-normal">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
        {/* Left Side: Contact Channels & 1-Click Copy (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            {/* Direct Email Card with Copy button */}
            <div className="glass-panel rounded-3xl p-6 sm:p-7 flex flex-col gap-4 border border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                {t.contact.emailPrompt}
              </span>
              <div className="flex items-center justify-between gap-3">
                <span className="text-base sm:text-lg font-medium text-white truncate font-mono">
                  {personalData.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white transition-all flex items-center justify-center border border-white/[0.08]"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copied && (
                <span className="text-xs text-emerald-400 font-mono animate-in fade-in">
                  ✓ {t.contact.copied}
                </span>
              )}
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={personalData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-panel-hover rounded-2xl p-5 flex flex-col justify-between gap-4 group"
              >
                <div className="flex items-center justify-between">
                  <BsLinkedin className="w-5 h-5 text-emerald-400" />
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs font-medium text-zinc-200">LinkedIn Profile</span>
              </a>

              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-panel-hover rounded-2xl p-5 flex flex-col justify-between gap-4 group"
              >
                <div className="flex items-center justify-between">
                  <BsGithub className="w-5 h-5 text-teal-400" />
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs font-medium text-zinc-200">GitHub Repos</span>
              </a>
            </div>

            {/* Location Pill */}
            <div className="glass-panel rounded-2xl p-5 flex items-center gap-3 text-xs text-zinc-400">
              <MapPin className="w-4 h-4 text-zinc-400 flex-shrink-0" />
              <span>{personalData.address}</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-500/[0.04] border border-emerald-500/20 text-xs text-zinc-400 flex flex-col gap-1">
            <span className="font-semibold text-emerald-300">Fast Response Guarantee</span>
            <span>I regularly check inquiries and respond within 24 business hours.</span>
          </div>
        </div>

        {/* Right Side: Message Form (7 cols) */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-7 sm:p-9 border border-white/10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  {t.contact.form.name}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={e => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-emerald-400 text-sm text-white outline-none transition-colors"
                  placeholder="Jean Dupont"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  {t.contact.form.email}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={e => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-emerald-400 text-sm text-white outline-none transition-colors"
                  placeholder="jean@company.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={e => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-emerald-400 text-sm text-white outline-none transition-colors resize-none"
                placeholder="Let's talk about our engineering challenges and how your profile fits..."
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-medium text-sm transition-all duration-200 disabled:opacity-50"
              >
                <span>{status === 'sending' ? t.contact.form.sending : t.contact.form.send}</span>
                <Send className="w-4 h-4" />
              </button>

              {status === 'success' && (
                <span className="text-xs text-emerald-400 font-mono">
                  ✓ {t.contact.form.success}
                </span>
              )}
              {status === 'error' && (
                <span className="text-xs text-rose-400 font-mono">
                  ✕ {t.contact.form.error}
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
