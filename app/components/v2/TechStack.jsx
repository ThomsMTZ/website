'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import { skillsCategories } from '@/utils/data/skills';
import { appleSpring } from '@/utils/motion';

/**
 * Editorial TechStack displaying a 4-Tier Systems Architecture Blueprint.
 * Replaces generic check-icon cards with clean technical matrix tables.
 */
const TechStack = () => {
  const { language } = useTranslation();

  return (
    <section id="stack" className="w-full bg-[#0c0d13] py-24 sm:py-32 border-t border-white/[0.05] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Editorial Section Header */}
        <div className="flex flex-col items-start gap-4 max-w-4xl mb-16 sm:mb-20">
          <span className="font-mono text-xs text-[#c5a880] tracking-widest uppercase">
            [ 05 // SYSTEM SPECIFICATIONS & TOOLING ]
          </span>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.05] tracking-[-0.02em]">
            {language === 'fr'
              ? 'Outillage ciblé, sélectionné pour la performance et la stabilité.'
              : 'Curated tooling, selected for high throughput and stability.'}
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl font-modern">
            {language === 'fr'
              ? "Pas d'empilement de frameworks gadgets : un choix technologique pragmatique dicté par les contraintes réelles de charge, de tolérance aux pannes et d'autonomie d'équipe."
              : 'No tech-stack bloat: pragmatic choices selected for high concurrency, fault tolerance, and developer ergonomics.'}
          </p>
        </div>

        {/* 4-Tier Systems Architecture Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skillsCategories.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...appleSpring, delay: index * 0.08 }}
              className="rounded-2xl p-6 sm:p-7 bg-glass-card border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08] font-mono text-[11px]">
                  <span className="text-[#c5a880]">SYS_0{index + 1}</span>
                  <span className="text-zinc-500 uppercase">TIER</span>
                </div>

                <h3 className="font-editorial text-2xl text-white font-light mb-2">
                  {language === 'fr' && cat.categoryFr ? cat.categoryFr : cat.category}
                </h3>

                <p className="text-xs text-zinc-400 mb-6 font-modern font-light leading-relaxed">
                  {cat.description}
                </p>

                <div className="flex flex-col divide-y divide-white/[0.05]">
                  {cat.skills.map(skill => (
                    <div
                      key={skill.name}
                      className="py-2.5 flex items-center justify-between gap-3 text-xs font-modern"
                    >
                      <span className="text-zinc-200 font-medium">{skill.name}</span>
                      <span className="font-mono text-[10px] text-zinc-400">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
