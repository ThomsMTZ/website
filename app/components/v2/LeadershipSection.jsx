'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import { Award, HeartHandshake, ShieldCheck, Target, Users } from 'lucide-react';

/**
 * Editorial Leadership & Management philosophy section.
 */
const LeadershipSection = () => {
  const { t, language } = useTranslation();

  const icons = [
    <Users key="users" className="w-5 h-5 text-[#c5a880]" />,
    <Target key="target" className="w-5 h-5 text-[#c5a880]" />,
    <HeartHandshake key="heart" className="w-5 h-5 text-[#c5a880]" />,
  ];

  return (
    <section id="leadership" className="py-24 sm:py-32 relative">
      {/* Editorial Section Header */}
      <div className="flex flex-col items-start gap-4 max-w-4xl mb-16 sm:mb-20">
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-8 bg-[#c5a880]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a880] font-medium font-modern">
            {language === 'fr' ? 'Posture Managériale & Rituels' : 'Leadership & Servant Management'}
          </span>
        </div>

        <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.05] tracking-[-0.02em]">
          {language === 'fr' ? (
            <>
              Faire grandir les équipes, <br />
              <span className="italic font-normal text-gold-gradient">sécuriser les trajectoires de livraison.</span>
            </>
          ) : (
            <>
              Growing engineering teams, <br />
              <span className="italic font-normal text-gold-gradient">securing predictable delivery.</span>
            </>
          )}
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl font-modern">
          {language === 'fr'
            ? "Le rôle d'un Tech Lead ou d'un Scrum Master n'est pas d'imposer des process rigides, mais de lever les obstacles invisibles pour libérer le potentiel créatif de l'équipe."
            : 'The role of a Tech Lead or Scrum Master is not enforcing rigid ceremony, but removing invisible roadblocks so engineers can do their best creative work.'}
        </p>
      </div>

      {/* Leadership 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {(t?.leadership?.pillars || []).map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="rounded-2xl p-8 bg-glass-card hover:border-[#c5a880]/40 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] w-fit mb-6">
                {icons[index]}
              </div>
              <h3 className="font-editorial text-2xl text-white font-light mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-light font-modern">
                {pillar.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-modern text-zinc-400">
              <span className="text-[#c5a880] font-editorial italic text-base">Pilier 0{index + 1}</span>
              <span className="text-zinc-400 uppercase tracking-widest text-[10px]">Pratique Continue</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Editorial Quote & Credentials Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-2xl p-8 sm:p-12 bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/[0.08] relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-modern">
              {language === 'fr' ? 'Manifeste de Leadership' : 'Leadership Statement'}
            </span>
            <blockquote className="font-editorial text-2xl sm:text-3xl text-zinc-200 font-light italic leading-snug">
              &ldquo;{t.leadership.quote}&rdquo;
            </blockquote>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4 border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-6 lg:pt-0 lg:pl-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#c5a880]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="font-editorial text-xl text-white font-light">PSM I • Scrum.org</p>
                <p className="text-xs text-zinc-400 font-modern">Certification n°971439</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#c5a880]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-editorial text-xl text-white font-light">Croix-Rouge française</p>
                <p className="text-xs text-zinc-400 font-modern">Gestion de crise & Commandement</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LeadershipSection;
