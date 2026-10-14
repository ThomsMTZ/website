'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/utils/i18n';
import { personalData } from '@/utils/data/personal-data';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

/**
 * Editorial floating dock navbar with luxury gold accents and language switcher.
 */
const Navbar = () => {
  const { t, language, changeLanguage } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.navbar.overview, href: '#overview' },
    { name: t.navbar.impact, href: '#impact' },
    { name: t.navbar.works, href: '#works' },
    { name: t.navbar.leadership, href: '#leadership' },
    { name: t.navbar.career, href: '#career' },
    { name: t.navbar.contact, href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 sm:py-6 transition-all duration-300 pointer-events-none">
      <div
        className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 max-w-5xl w-full ${
          scrolled
            ? 'bg-[#09090c]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/70'
            : 'bg-[#0d0d12]/70 backdrop-blur-md border border-white/[0.08]'
        }`}
      >
        {/* Brand identity */}
        <Link href="#overview" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-[#c5a880]/40 flex items-center justify-center text-xs font-editorial tracking-wider text-[#c5a880] group-hover:border-[#c5a880] transition-colors">
            TM
          </div>
          <div className="flex flex-col">
            <span className="font-editorial text-base sm:text-lg tracking-wide text-white group-hover:text-[#c5a880] transition-colors">
              Thomas Martinez
            </span>
            <span className="text-[10px] text-zinc-400 font-modern hidden sm:inline">
              Senior Dev • Scrum Master PSM I
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs font-modern uppercase tracking-widest text-zinc-300 hover:text-white rounded-full hover:bg-white/[0.06] transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side controls: Language switcher + CV CTA */}
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <div className="flex items-center p-0.5 rounded-full bg-black/60 border border-white/[0.08] text-xs">
            <button
              onClick={() => changeLanguage('fr')}
              className={`px-2.5 py-1 rounded-full text-[11px] font-modern font-medium transition-all ${
                language === 'fr'
                  ? 'bg-[#c5a880]/20 text-[#c5a880] border border-[#c5a880]/40'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
              aria-label="Passer en Français"
            >
              FR
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-2.5 py-1 rounded-full text-[11px] font-modern font-medium transition-all ${
                language === 'en'
                  ? 'bg-[#c5a880]/20 text-[#c5a880] border border-[#c5a880]/40'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          {/* Resume link */}
          <a
            href={personalData.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-modern uppercase tracking-widest text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] hover:border-[#c5a880]/50 transition-all duration-200 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>{t.navbar.resume}</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white rounded-full hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-x-4 top-20 bg-[#09090c]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-3 lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-1 pb-3 border-b border-white/[0.08]">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-zinc-300 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors font-modern"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-2 flex items-center justify-between">
            <a
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-modern uppercase tracking-widest text-[#c5a880] hover:text-[#e4d1b8]"
            >
              <FileText className="w-4 h-4" />
              <span>{t.navbar.resume}</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="text-[11px] text-zinc-500 font-modern">Marseille, France</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
