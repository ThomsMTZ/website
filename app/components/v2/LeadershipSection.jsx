'use client';

import { useTranslation } from '@/utils/i18n';
import { Award, HeartHandshake, ShieldCheck, Target, Users, Zap } from 'lucide-react';

/**
 * LeadershipSection presenting agile philosophy, servant leadership, and crisis management.
 */
const LeadershipSection = () => {
  const { t } = useTranslation();

  const icons = [
    <Users key="users" className="w-6 h-6 text-emerald-400" />,
    <Target key="target" className="w-6 h-6 text-teal-400" />,
    <HeartHandshake key="heart" className="w-6 h-6 text-rose-400" />,
  ];

  return (
    <section id="leadership" className="py-20 sm:py-28 relative">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-3 max-w-3xl mb-12 sm:mb-16">
        <span className="text-xs font-mono tracking-wider uppercase text-emerald-400">
          {'//'} {t.leadership.tag}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
          {t.leadership.title}
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 font-normal">
          {t.leadership.subtitle}
        </p>
      </div>

      {/* Leadership Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {t.leadership.pillars.map((pillar, index) => (
          <div
            key={pillar.title}
            className="glass-panel glass-panel-hover rounded-3xl p-7 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] w-fit mb-6">
                {icons[index]}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-500 font-mono">
              <span>Pillar 0{index + 1}</span>
              <span className="text-emerald-400">Active</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quote & Credentials Banner */}
      <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8">
            <blockquote className="text-lg sm:text-xl text-zinc-200 font-normal italic leading-relaxed">
              “Leadership in engineering isn’t about micromanaging velocity tickets; it’s about establishing absolute psychological safety, eliminating cognitive friction, and giving autonomous craftspeople the runway to solve hard problems together.”
            </blockquote>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-0.5 w-6 bg-emerald-400" />
              <span className="text-sm font-medium text-white">Thomas Martinez</span>
              <span className="text-xs text-zinc-400">• Certified Scrum Master (PSM I)</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center gap-3">
              <Award className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">Scrum.org PSM I</span>
                <span className="text-[11px] text-zinc-400">Professional Scrum Master Certification</span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-rose-400 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">Chef d’Intervention</span>
                <span className="text-[11px] text-zinc-400">Croix-Rouge française • Crise & Secours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
