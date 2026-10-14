'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import { skillsCategories } from '@/utils/data/skills';
import { Terminal, CheckCircle2 } from 'lucide-react';

/**
 * Editorial TechStack organizing technical craft by architectural domains.
 */
const TechStack = () => {
  const { language } = useTranslation();

  return (
    <section id="stack" className="py-24 sm:py-32 relative">
      {/* Editorial Section Header */}
      <div className="flex flex-col items-start gap-4 max-w-4xl mb-16 sm:mb-20">
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-8 bg-[#c5a880]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a880] font-medium font-modern">
            {language === 'fr' ? 'Compétences & Domaines Techniques' : 'Technical Craft & Engineering Domains'}
          </span>
        </div>

        <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.05] tracking-[-0.02em]">
          {language === 'fr' ? (
            <>
              Un outillage ciblé, <br />
              <span className="italic font-normal text-gold-gradient">orienté performance et maintenabilité.</span>
            </>
          ) : (
            <>
              Precision tooling, <br />
              <span className="italic font-normal text-gold-gradient">geared for scale and maintainability.</span>
            </>
          )}
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl font-modern">
          {language === 'fr'
            ? "Pas d'empilement de frameworks gadgets : un choix technologique pragmatique dicté par les contraintes réelles de charge, de tolérance aux pannes et d'autonomie d'équipe."
            : 'No tech-stack bloat: pragmatic choices selected for high concurrency, fault tolerance, and developer ergonomics.'}
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsCategories.map((cat, index) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-2xl p-8 bg-glass-card hover:border-[#c5a880]/40 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-white/[0.04] text-[#c5a880] border border-white/[0.08]">
                  <Terminal className="w-4 h-4" />
                </div>
                <h3 className="font-editorial text-2xl text-white font-light">
                  {language === 'fr' && cat.categoryFr ? cat.categoryFr : cat.category}
                </h3>
              </div>

              <p className="text-xs text-zinc-400 mb-6 font-modern font-light">
                {cat.description}
              </p>

              <div className="flex flex-col gap-2.5">
                {cat.skills.map(skill => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-between gap-3 hover:bg-white/[0.04] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                      <span className="text-xs font-medium text-zinc-200 font-modern">{skill.name}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-zinc-400 font-modern hidden sm:inline">{skill.context}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider text-[#c5a880] bg-white/[0.04]">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
