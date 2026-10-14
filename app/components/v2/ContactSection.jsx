'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import { personalData } from '@/utils/data/personal-data';
import { Mail, Copy, Check, Send, MapPin, ArrowUpRight } from 'lucide-react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

/**
 * Editorial ContactSection with 1-click email copy, social channels,
 * and working API contact form in a luxury palette.
 */
const ContactSection = () => {
  const { t, language } = useTranslation();
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
    <section id="contact" className="py-24 sm:py-32 relative">
      {/* Editorial Section Header */}
      <div className="flex flex-col items-start gap-4 max-w-4xl mb-16 sm:mb-20">
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-8 bg-[#c5a880]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a880] font-medium font-modern">
            {language === 'fr' ? 'Échange Direct & Recrutement' : 'Get In Touch & Hiring'}
          </span>
        </div>

        <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.05] tracking-[-0.02em]">
          {language === 'fr' ? (
            <>
              Parlons de vos défis techniques, <br />
              <span className="italic font-normal text-gold-gradient">autour d’un échange direct.</span>
            </>
          ) : (
            <>
              Let’s discuss your technical challenges, <br />
              <span className="italic font-normal text-gold-gradient">with transparency and speed.</span>
            </>
          )}
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl font-modern">
          {language === 'fr'
            ? "Disponible pour des postes de Senior Software Engineer, Tech Lead ou Scrum Master / Engineering Manager (CDI ou missions ciblées)."
            : 'Available for Senior Software Engineer, Tech Lead, or Scrum Master / Engineering Manager opportunities.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
        {/* Left Side: Contact Channels & 1-Click Copy (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            {/* Direct Email Card with Copy button */}
            <div className="rounded-2xl p-6 sm:p-7 bg-glass-card hover:border-[#c5a880]/40 transition-all duration-500 flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-modern">
                {t.contact.emailPrompt}
              </span>
              <div className="flex items-center justify-between gap-3">
                <span className="text-base sm:text-lg font-medium text-white truncate font-mono">
                  {personalData.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-[#c5a880] transition-all flex items-center justify-center border border-white/[0.08]"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-[#c5a880]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copied && (
                <span className="text-xs text-[#c5a880] font-modern animate-in fade-in">
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
                className="rounded-2xl p-5 bg-glass-card hover:border-[#c5a880]/40 transition-all duration-500 flex flex-col justify-between gap-4 group"
              >
                <div className="flex items-center justify-between">
                  <BsLinkedin className="w-5 h-5 text-[#c5a880]" />
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs font-medium text-zinc-200 font-modern">LinkedIn</span>
              </a>

              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl p-5 bg-glass-card hover:border-[#c5a880]/40 transition-all duration-500 flex flex-col justify-between gap-4 group"
              >
                <div className="flex items-center justify-between">
                  <BsGithub className="w-5 h-5 text-[#c5a880]" />
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs font-medium text-zinc-200 font-modern">GitHub</span>
              </a>
            </div>

            {/* Location Pill */}
            <div className="rounded-2xl p-5 bg-glass-card flex items-center gap-3 text-xs text-zinc-400 font-modern">
              <MapPin className="w-4 h-4 text-[#c5a880] shrink-0" />
              <span>{personalData.address}</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#c5a880]/[0.05] border border-[#c5a880]/20 text-xs text-zinc-300 flex flex-col gap-1 font-modern">
            <span className="font-semibold text-[#c5a880]">
              {language === 'fr' ? 'Réponse Rapide Garantie' : 'Fast Response Commitment'}
            </span>
            <span className="text-zinc-400 font-light">
              {language === 'fr'
                ? 'Je consulte régulièrement mes messages et réponds sous 24 heures ouvrées.'
                : 'I regularly review direct inquiries and reply within 24 business hours.'}
            </span>
          </div>
        </div>

        {/* Right Side: Message Form (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl p-7 sm:p-9 bg-glass-card border border-white/10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[11px] font-modern uppercase tracking-wider text-zinc-400">
                  {t.contact.form.name}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={e => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#c5a880] text-sm text-white outline-none transition-colors font-modern"
                  placeholder="Jean Dupont"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[11px] font-modern uppercase tracking-wider text-zinc-400">
                  {t.contact.form.email}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={e => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#c5a880] text-sm text-white outline-none transition-colors font-modern"
                  placeholder="jean@company.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[11px] font-modern uppercase tracking-wider text-zinc-400">
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={e => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#c5a880] text-sm text-white outline-none transition-colors resize-none font-modern"
                placeholder={
                  language === 'fr'
                    ? "Présentez brièvement vos enjeux techniques ou votre opportunité..."
                    : "Share your engineering challenges or role overview..."
                }
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 hover:bg-[#c5a880] font-medium text-xs uppercase tracking-widest transition-all duration-300 disabled:opacity-50"
              >
                <span>{status === 'sending' ? t.contact.form.sending : t.contact.form.send}</span>
                <Send className="w-3.5 h-3.5" />
              </button>

              {status === 'success' && (
                <span className="text-xs text-[#c5a880] font-modern">
                  ✓ {t.contact.form.success}
                </span>
              )}
              {status === 'error' && (
                <span className="text-xs text-rose-400 font-modern">
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
