'use client';

import { useTranslation } from '@/utils/i18n';
import { skillsCategories } from '@/utils/data/skills';
import { Terminal, CheckCircle2 } from 'lucide-react';

/**
 * TechStack component organizing technical expertise into architectural domains with context.
 */
const TechStack = () => {
  const { t, language } = useTranslation();

  return (
    <section id="stack" className="py-20 sm:py-28 relative">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-3 max-w-3xl mb-12 sm:mb-16">
        <span className="text-xs font-mono tracking-wider uppercase text-emerald-400">
          {'//'} {t.techStack.tag}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
          {t.techStack.title}
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 font-normal">
          {t.techStack.subtitle}
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {skillsCategories.map(cat => (
          <div
            key={cat.category}
            className="glass-panel glass-panel-hover rounded-3xl p-7 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-white/[0.04] text-emerald-400 border border-white/[0.08]">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {language === 'fr' && cat.categoryFr ? cat.categoryFr : cat.category}
                </h3>
              </div>
              <p className="text-xs text-zinc-400 mb-6 font-normal">
                {cat.description}
              </p>

              <div className="flex flex-col gap-3">
                {cat.skills.map(skill => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-between gap-3 hover:bg-white/[0.04] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="text-xs font-medium text-white">{skill.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-zinc-400 hidden sm:inline">{skill.context}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider text-emerald-300 bg-emerald-500/10">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
