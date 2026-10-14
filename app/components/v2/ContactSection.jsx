'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import { personalData } from '@/utils/data/personal-data';
import { Copy, Check, Send, MapPin, ArrowUpRight } from 'lucide-react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { appleSpring, tactileTap } from '@/utils/motion';

/**
 * Editorial ContactSection with architectural input lines, tactile 1-click email copy,
 * and Apple-grade button physics.
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
    <section id="contact" className="w-full bg-[#070709] py-24 sm:py-32 border-t border-white/[0.05] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Editorial Section Header */}
        <div className="flex flex-col items-start gap-4 max-w-4xl mb-16 sm:mb-20">
          <span className="font-mono text-xs text-[#c5a880] tracking-widest uppercase">
            [ 06 // DIRECT CONDUIT ]
          </span>

        <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.05] tracking-[-0.02em]">
          {language === 'fr'
            ? 'Échanger autour de vos défis techniques.'
            : 'Initiate an engineering conversation.'}
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl font-modern">
          {language === 'fr'
            ? "Disponible pour des opportunités de Senior Software Engineer, Tech Lead ou Scrum Master / Engineering Manager (Marseille, Paris ou Remote)."
            : 'Available for Senior Software Engineer, Tech Lead, or Scrum Master / Engineering Manager opportunities (Marseille, Paris, or Remote).'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14">
        {/* Left Side: Contact Channels & 1-Click Copy (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-6">
            {/* Direct Email Card with Tactile Copy */}
            <div className="rounded-2xl p-7 bg-glass-card border border-white/10 flex flex-col gap-4">
              <span className="font-mono text-xs text-[#c5a880] uppercase tracking-wider">
                PRIMARY_DISPATCH // DIRECT EMAIL
              </span>
              <div className="flex items-center justify-between gap-3">
                <span className="text-base sm:text-lg font-mono text-white truncate">
                  {personalData.email}
                </span>
                <motion.button
                  whileTap={tactileTap}
                  onClick={handleCopyEmail}
                  className="btn-tactile p-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-zinc-300 hover:text-[#c5a880] transition-colors border border-white/10 shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-[#c5a880]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </motion.button>
              </div>
              {copied && (
                <span className="font-mono text-xs text-[#c5a880]">
                  ✓ {t.contact.copied}
                </span>
              )}
            </div>

            {/* Social Channels Link Ledger */}
            <div className="flex flex-col divide-y divide-white/[0.08] border-y border-white/[0.08]">
              <a
                href={personalData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <BsLinkedin className="w-4 h-4 text-[#c5a880]" />
                  <span className="font-modern text-sm text-zinc-200 group-hover:text-white transition-colors">
                    LinkedIn Profile
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#c5a880] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <BsGithub className="w-4 h-4 text-[#c5a880]" />
                  <span className="font-modern text-sm text-zinc-200 group-hover:text-white transition-colors">
                    GitHub Codebase
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#c5a880] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            {/* Geolocation Stamp */}
            <div className="flex items-center gap-2.5 font-mono text-xs text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
              <span>{personalData.address}</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] font-mono text-xs text-zinc-400 flex flex-col gap-1">
            <span className="text-[#c5a880] font-semibold">RESPONSE_SLA: &lt; 24H</span>
            <span className="font-modern text-zinc-400 font-light text-xs">
              {language === 'fr'
                ? 'Je consulte régulièrement mes messages et réponds sous 24 heures ouvrées.'
                : 'Direct engineering inquiries receive a response within 24 business hours.'}
            </span>
          </div>
        </div>

        {/* Right Side: Architectural Message Terminal (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl p-8 sm:p-10 bg-glass-card border border-white/10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
                  NAME // CONTACT
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={e => setFormState({ ...formState, name: e.target.value })}
                  className="input-architectural text-sm text-white font-modern"
                  placeholder="Jean Dupont"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
                  EMAIL // DIRECT
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={e => setFormState({ ...formState, email: e.target.value })}
                  className="input-architectural text-sm text-white font-modern"
                  placeholder="jean@company.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider">
                TRANSMISSION // MESSAGE
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formState.message}
                onChange={e => setFormState({ ...formState, message: e.target.value })}
                className="input-architectural text-sm text-white font-modern resize-none"
                placeholder={
                  language === 'fr'
                    ? "Présentez brièvement vos enjeux techniques ou votre opportunité..."
                    : "Share your engineering challenges or role overview..."
                }
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                transition={appleSpring}
                className="btn-tactile inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-zinc-950 font-medium text-xs uppercase tracking-widest hover:bg-[#eae6df] shadow-lg disabled:opacity-50"
              >
                <span>{status === 'sending' ? t.contact.form.sending : t.contact.form.send}</span>
                <Send className="w-3.5 h-3.5" />
              </motion.button>

              {status === 'success' && (
                <span className="font-mono text-xs text-[#c5a880]">
                  ✓ {t.contact.form.success}
                </span>
              )}
              {status === 'error' && (
                <span className="font-mono text-xs text-rose-400">
                  ✕ {t.contact.form.error}
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContactSection;
