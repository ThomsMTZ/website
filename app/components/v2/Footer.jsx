'use client';

import Link from 'next/link';
import { useTranslation } from '@/utils/i18n';
import { personalData } from '@/utils/data/personal-data';
import { ArrowUp, Mail } from 'lucide-react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

/**
 * Minimalist luxury Footer component with anchor links, live status, and return-to-top button.
 */
const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 pt-12 pb-16 border-t border-white/[0.08] relative">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-tight text-white">
              Thomas Martinez
            </span>
            <span className="text-xs text-zinc-400 mt-0.5">
              {personalData.designation} • Marseille, France
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <BsLinkedin className="w-4 h-4" />
            </a>
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <BsGithub className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors ml-2"
              title="Return to top"
              aria-label="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.04] text-xs text-zinc-500 font-mono">
          <span>© {new Date().getFullYear()} Thomas Martinez. {t.footer.rights}</span>
          <span>{t.footer.builtWith}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
