'use client';

import Link from 'next/link';
import { useTranslation } from '@/utils/i18n';
import { personalData } from '@/utils/data/personal-data';
import { ArrowUp, Mail } from 'lucide-react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

/**
 * Editorial Footer component with anchor links and return-to-top button.
 */
const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050507] border-t border-white/[0.08] relative py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="font-editorial text-2xl text-white font-light">
              Thomas Martinez
            </span>
            <span className="text-xs text-zinc-400 mt-1 font-modern">
              Senior Software Engineer • Scrum Master PSM I • Marseille, France
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-[#c5a880] transition-colors border border-white/[0.06]"
              aria-label="LinkedIn"
            >
              <BsLinkedin className="w-4 h-4" />
            </a>
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-[#c5a880] transition-colors border border-white/[0.06]"
              aria-label="GitHub"
            >
              <BsGithub className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-[#c5a880] transition-colors border border-white/[0.06]"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors ml-2 border border-white/[0.06]"
              title="Return to top"
              aria-label="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.04] text-xs text-zinc-500 font-modern">
          <span>© {new Date().getFullYear()} Thomas Martinez. Tous droits réservés.</span>
          <span className="text-zinc-600">Marseille • Remote • France</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
