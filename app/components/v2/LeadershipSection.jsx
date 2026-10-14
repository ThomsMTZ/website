'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import { appleSpring } from '@/utils/motion';
import { ScrumOrgBadge } from './BrandLogos';

/**
 * Editorial Leadership & Management doctrine section.
 * Eliminates SaaS card clichés in favor of an architectural 3-column doctrine ledger.
 */
const LeadershipSection = () => {
  const { t, language } = useTranslation();

  return (
    <section id="leadership" className="w-full bg-[#0d0e15] py-24 sm:py-32 border-t border-white/[0.05] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Editorial Section Header */}
        <div className="flex flex-col items-start gap-4 max-w-4xl mb-16 sm:mb-20">
          <span className="font-mono text-xs text-[#c5a880] tracking-widest uppercase">
            [ 03 // MANAGERIAL DOCTRINE & CADENCE ]
          </span>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.05] tracking-[-0.02em]">
            {language === 'fr'
              ? 'Supprimer les frictions. Cultiver l’autonomie. Livrer avec sérénité.'
              : 'Removing friction. Fostering autonomy. Delivering without chaos.'}
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl font-modern">
            {language === 'fr'
              ? "Le rôle d'un Tech Lead ou d'un Scrum Master n'est pas d'imposer des cérémonies rigides, mais de lever les obstacles invisibles pour libérer le potentiel d'ingénierie de l'équipe."
              : 'The role of a Tech Lead or Scrum Master is not enforcing rigid ceremony, but removing invisible roadblocks so engineers can do their best creative work.'}
          </p>
        </div>

        {/* Executive Doctrine Ledger: 3 Columns Separated by Hairline Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 py-10 border-y border-white/10 mb-16">
          {(t?.leadership?.pillars || []).map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...appleSpring, delay: index * 0.1 }}
              className={`flex flex-col justify-between ${
                index < 2 ? 'md:border-r md:border-white/10 md:pr-8 lg:pr-12' : ''
              }`}
            >
              <div>
                <span className="font-mono text-xs text-[#c5a880] tracking-wider mb-4 block">
                  DOCTRINE 0{index + 1}.
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-white font-light mb-4">
                  {pillar.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed font-light font-modern">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                CONTINUOUS PRACTICE // RIGOR
              </div>
            </motion.div>
          ))}
        </div>

        {/* Editorial Credentials & Doctrine Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={appleSpring}
          className="rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#c5a880]">
                CORE PRINCIPLE // SERVANT LEADERSHIP
              </span>
              <blockquote className="font-editorial text-xl sm:text-2xl text-zinc-200 font-light italic leading-snug">
                &ldquo;{t?.leadership?.quote}&rdquo;
              </blockquote>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3.5 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
              {/* Scrum.org PSM I Credential Card */}
              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#c5a880]/30 transition-colors">
                <div className="relative shrink-0 w-11 h-11 rounded-lg overflow-hidden bg-white/[0.06] border border-white/10 p-1 flex items-center justify-center">
                  <ScrumOrgBadge size={34} />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-modern font-semibold text-xs text-white uppercase tracking-wider">Scrum.org PSM I</p>
                    <span className="font-mono text-[9px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">VERIFIED</span>
                  </div>
                  <p className="font-mono text-[11px] text-[#c5a880]">Licence #971439</p>
                  <p className="font-modern text-[11px] text-zinc-400 truncate">Professional Scrum Master</p>
                </div>
              </div>

              {/* Croix-Rouge française Leadership Card */}
              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-red-500/30 transition-colors">
                <div className="relative shrink-0 w-11 h-11 rounded-lg overflow-hidden bg-white/[0.06] border border-white/10 p-1 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md">
                    <svg viewBox="0 0 24 24" fill="#E30613" className="w-4 h-4">
                      <rect x="9.5" y="3" width="5" height="18" rx="0.5" />
                      <rect x="3" y="9.5" width="18" height="5" rx="0.5" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col min-w-0">
                  <p className="font-modern font-semibold text-xs text-white uppercase tracking-wider">Croix-Rouge française</p>
                  <p className="font-mono text-[11px] text-red-400">Direction des Secours</p>
                  <p className="font-modern text-[11px] text-zinc-400 truncate">Responsable Opérationnel</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
