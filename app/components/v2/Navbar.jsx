'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/utils/i18n';
import { personalData } from '@/utils/data/personal-data';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

/**
 * Editorial Luxury Navbar matching Awwwards-tier standards.
 * Single-line brand identity, clean horizontal navigation, and high-precision language toggle.
 */
const Navbar = () => {
  const { t, language, changeLanguage } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 25);
          ticking = false;
        });
        ticking = true;
      }
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3.5 bg-[#08080a]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.7)]'
          : 'py-5 sm:py-6 bg-gradient-to-b from-[#08080a]/90 via-[#08080a]/50 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between gap-6">
        {/* Brand identity: Clean single line */}
        <Link href="#overview" className="group flex items-center gap-2.5 shrink-0">
          <span className="font-editorial text-xl sm:text-2xl font-light tracking-[0.18em] text-white uppercase group-hover:text-[#c5a880] transition-colors whitespace-nowrap">
            Thomas Martinez
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#c5a880] opacity-80" />
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-zinc-300 hover:text-[#c5a880] font-modern font-medium transition-colors relative py-1 group whitespace-nowrap"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#c5a880] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Controls: Minimalist Language Switcher + CV CTA */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Segmented Language Toggle */}
          <div className="inline-flex items-center p-0.5 rounded-full bg-white/[0.05] border border-white/10 shadow-inner">
            <button
              type="button"
              onClick={() => changeLanguage('fr')}
              className={`btn-tactile px-3 py-1 rounded-full text-[11px] font-modern uppercase tracking-wider font-semibold transition-all duration-200 ${
                language === 'fr'
                  ? 'bg-[#c5a880] text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
              aria-label="Passer en Français"
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => changeLanguage('en')}
              className={`btn-tactile px-3 py-1 rounded-full text-[11px] font-modern uppercase tracking-wider font-semibold transition-all duration-200 ${
                language === 'en'
                  ? 'bg-[#c5a880] text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
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
            className="btn-tactile hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-modern uppercase tracking-wider text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-[#c5a880]/50 transition-all duration-200 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>{t.navbar.resume}</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-300 hover:text-white rounded-full hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#c5a880]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09090c]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-2 pb-4 border-b border-white/[0.08]">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-zinc-200 hover:text-[#c5a880] uppercase tracking-wider font-modern transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-between pt-1">
            <a
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-modern uppercase tracking-widest text-[#c5a880]"
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
