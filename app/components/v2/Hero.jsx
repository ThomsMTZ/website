'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/utils/i18n';
import { personalData } from '@/utils/data/personal-data';
import { ArrowDown, Download, ShieldCheck, Zap, Sparkles, MapPin } from 'lucide-react';

/**
 * Editorial Hero section highlighting senior technical craft, agile leadership, and real impact.
 */
const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="overview" className="relative min-h-[92vh] pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left column: Value Proposition & Copy */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 z-10">
          {/* Status pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-300">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            <span>{t.hero.statusBadge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.12]">
            <span>{t.hero.titlePrefix}</span>{' '}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-zinc-400 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
          </h1>

          {/* Narrative statement */}
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal">
            {t.hero.description}
          </p>

          {/* Location & Status */}
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            <span>{t.hero.location}</span>
          </div>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <Link
              href="#works"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-all duration-200 shadow-lg shadow-white/10 group"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </Link>

            <a
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 font-medium text-sm border border-white/[0.1] hover:border-white/20 transition-all duration-200"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>{t.hero.ctaSecondary}</span>
            </a>
          </div>
        </div>

        {/* Right column: High-End Framed Portrait */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
            {/* Outer decorative card */}
            <div className="relative rounded-3xl p-2 bg-gradient-to-b from-white/[0.12] via-white/[0.04] to-transparent border border-white/[0.1] shadow-2xl backdrop-blur-sm">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-zinc-900">
                <Image
                  src={personalData.profile}
                  alt={personalData.name}
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                {/* Soft gradient bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
            </div>

            {/* Floating pill 1: Thales Biometrics */}
            <div className="absolute -top-3 -right-3 sm:-right-4 px-3.5 py-2 rounded-xl bg-[#0e1017]/90 backdrop-blur-xl border border-white/10 shadow-xl flex items-center gap-2.5 text-xs text-zinc-200">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-[11px] text-white">Thales CABIS</span>
                <span className="text-[10px] text-zinc-400">Biométrie Nationale</span>
              </div>
            </div>

            {/* Floating pill 2: Scrum Master & Velocity */}
            <div className="absolute -bottom-4 -left-3 sm:-left-4 px-3.5 py-2 rounded-xl bg-[#0e1017]/90 backdrop-blur-xl border border-white/10 shadow-xl flex items-center gap-2.5 text-xs text-zinc-200">
              <div className="p-1.5 rounded-lg bg-teal-500/10 text-teal-400">
                <Zap className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-[11px] text-white">PSM I • Scrum Master</span>
                <span className="text-[10px] text-zinc-400">+31% Vélocité Équipe</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Bar */}
      <div className="mt-16 sm:mt-20 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">6+ Ans</span>
          <span className="text-xs text-zinc-400 mt-1 font-mono">{t.hero.stats.experience}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-emerald-400">+31%</span>
          <span className="text-xs text-zinc-400 mt-1 font-mono">{t.hero.stats.velocity}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Souverain</span>
          <span className="text-xs text-zinc-400 mt-1 font-mono">{t.hero.stats.scale}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-teal-300">PSM I</span>
          <span className="text-xs text-zinc-400 mt-1 font-mono">{t.hero.stats.cert}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
