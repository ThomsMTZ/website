'use client';

import { useTranslation } from '@/utils/i18n';
import { Shield, TrendingUp, Cpu, HeartHandshake, CheckCircle2 } from 'lucide-react';

/**
 * Bento Grid highlighting the 4 core pillars of technical impact and leadership.
 */
const BentoImpact = () => {
  const { t } = useTranslation();

  return (
    <section id="impact" className="py-20 sm:py-28 relative">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-3 max-w-3xl mb-12 sm:mb-16">
        <span className="text-xs font-mono tracking-wider uppercase text-emerald-400">
          {'//'} {t.bento.tag}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
          {t.bento.title}
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 font-normal">
          {t.bento.subtitle}
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
        {/* Card 1: Thales CABIS - Biometrics (Large 7 cols) */}
        <div className="md:col-span-7 glass-panel glass-panel-hover rounded-3xl p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />

          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wide text-emerald-300 bg-emerald-500/10 border border-emerald-500/20">
                {t.bento.card1.badge}
              </span>
              <span className="text-2xl sm:text-3xl font-semibold text-white font-mono">
                {t.bento.card1.metric}
              </span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl bg-white/[0.05] text-emerald-400 border border-white/[0.08]">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {t.bento.card1.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              {t.bento.card1.description}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
            <span className="px-2.5 py-1 rounded-md bg-white/[0.04]">Java 21</span>
            <span className="px-2.5 py-1 rounded-md bg-white/[0.04]">Vert.x</span>
            <span className="px-2.5 py-1 rounded-md bg-white/[0.04]">PostgreSQL</span>
            <span className="px-2.5 py-1 rounded-md bg-white/[0.04]">RabbitMQ</span>
            <span className="px-2.5 py-1 rounded-md bg-white/[0.04]">Sovereignty</span>
          </div>
        </div>

        {/* Card 2: Agile Velocity & Scrum Master (5 cols) */}
        <div className="md:col-span-5 glass-panel glass-panel-hover rounded-3xl p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between group">
          <div className="absolute top-0 right-0 w-60 h-60 bg-teal-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-teal-500/10 transition-colors" />

          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wide text-teal-300 bg-teal-500/10 border border-teal-500/20">
                {t.bento.card2.badge}
              </span>
              <span className="text-2xl sm:text-3xl font-semibold text-emerald-400 font-mono">
                {t.bento.card2.metric}
              </span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl bg-white/[0.05] text-teal-400 border border-white/[0.08]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {t.bento.card2.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              {t.bento.card2.description}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs text-zinc-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Certified PSM I • Scrum.org</span>
          </div>
        </div>

        {/* Card 3: High Concurrency R&D - Tricentis (5 cols) */}
        <div className="md:col-span-5 glass-panel glass-panel-hover rounded-3xl p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between group">
          <div className="absolute top-0 right-0 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wide text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
                {t.bento.card3.badge}
              </span>
              <span className="text-2xl sm:text-3xl font-semibold text-white font-mono">
                {t.bento.card3.metric}
              </span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl bg-white/[0.05] text-cyan-400 border border-white/[0.08]">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {t.bento.card3.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              {t.bento.card3.description}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
            <span className="px-2.5 py-1 rounded-md bg-white/[0.04]">NeoLoad Core</span>
            <span className="px-2.5 py-1 rounded-md bg-white/[0.04]">Event Loops</span>
            <span className="px-2.5 py-1 rounded-md bg-white/[0.04]">Microservices</span>
          </div>
        </div>

        {/* Card 4: Crisis Leadership - French Red Cross (Large 7 cols) */}
        <div className="md:col-span-7 glass-panel glass-panel-hover rounded-3xl p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-rose-500/10 transition-colors" />

          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wide text-rose-300 bg-rose-500/10 border border-rose-500/20">
                {t.bento.card4.badge}
              </span>
              <span className="text-2xl sm:text-3xl font-semibold text-white font-mono">
                {t.bento.card4.metric}
              </span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl bg-white/[0.05] text-rose-400 border border-white/[0.08]">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {t.bento.card4.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              {t.bento.card4.description}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
            <span className="px-2.5 py-1 rounded-md bg-white/[0.04]">Tactical Triage</span>
            <span className="px-2.5 py-1 rounded-md bg-white/[0.04]">Team Psychological Safety</span>
            <span className="px-2.5 py-1 rounded-md bg-white/[0.04]">High-Stress Decisions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoImpact;
