'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import { Shield, ArrowUpRight, Activity } from 'lucide-react';
import { appleSpring, tactileTap } from '@/utils/motion';
import { ThalesLogo, CroixRougeLogo, ScrumOrgBadge } from './BrandLogos';

/**
 * Editorial Architectural Impact section replacing formulaic bento grids
 * with a high-stakes technical blueprint, velocity command, and crisis dispatch.
 */
const BentoImpact = () => {
  const { language } = useTranslation();

  return (
    <section id="impact" className="w-full bg-[#0b0c11] py-24 sm:py-32 border-t border-white/[0.05] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Editorial Section Header: Index & Single Authoritative Headline */}
        <div className="flex flex-col items-start gap-4 max-w-4xl mb-16 sm:mb-20">
          <span className="font-mono text-xs text-[#c5a880] tracking-widest uppercase">
            [ 01 // ARCHITECTURAL IMPACT & LEADERSHIP ]
          </span>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.05] tracking-[-0.02em]">
            {language === 'fr'
              ? 'Systèmes conçus pour zéro défaillance. Équipes animées dans la sérénité.'
              : 'Systems engineered for zero failure. Teams built for calm delivery.'}
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl font-modern">
            {language === 'fr'
              ? "Les architectures critiques ne s'effondrent pas par manque de code, mais par défaut de communication. Mon rôle : bâtir des socles techniques infaillibles tout en insufflant une dynamique d'équipe bienveillante et exigeante."
              : 'Mission-critical systems rarely fail from algorithms; they fail from communication debt. My mission is architecting unshakeable technical foundations while fostering team psychological safety and delivery cadence.'}
          </p>
        </div>

        {/* Asymmetric 3-Column Editorial Impact Dossiers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Pillar 01: Sovereign Systems & Biometrics (Thales) — Deep Tech Blueprint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={appleSpring}
            whileTap={tactileTap}
            className="lg:col-span-7 rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-[#12131a] to-[#0a0a0e] border border-white/10 card-tactile flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Subtle Sovereign Watermark */}
            <div className="absolute -right-12 -bottom-12 w-80 h-40 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none select-none text-white overflow-hidden flex items-center justify-center">
              <ThalesLogo watermark className="w-full h-full text-white" />
            </div>

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>STATE-LEVEL RUNTIME // CABIS ENGINE</span>
                </div>
                <ThalesLogo className="text-zinc-200" />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-[#c5a880]" />
                <h3 className="font-editorial text-2xl sm:text-3xl text-white font-light">
                  {language === 'fr' ? 'Biométrie Nationale Judiciaire CABIS' : 'National Biometric CABIS Engine'}
                </h3>
              </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light font-modern mb-6">
              {language === 'fr'
                ? "Conception et évolution du moteur biométrique d'identification judiciaire. Traitement de flux massifs d'empreintes et visages pour les forces de l'ordre nationales. Architecture réactive Java 21 & Vert.x, persistance PostgreSQL haute performance, exigence de haute disponibilité absolue."
                : 'Core design and delivery of sovereign biometric judicial identification platforms. Processing millions of multimodal biometric transactions with reactive Vert.x & Java 21, PostgreSQL tuning, and uncompromising legal compliance.'}
            </p>

            {/* Architecture Schematic Ribbon */}
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 font-mono text-[11px] text-zinc-400 flex flex-wrap items-center gap-2">
              <span className="text-zinc-200">Vert.x Event Bus</span>
              <span className="text-[#c5a880]">&rarr;</span>
              <span className="text-zinc-200">Reactive Stream Pipeline</span>
              <span className="text-[#c5a880]">&rarr;</span>
              <span className="text-zinc-200">PostgreSQL Sharded Cluster</span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
              <span className="px-2.5 py-1 rounded bg-white/[0.04]">Java 21</span>
              <span className="px-2.5 py-1 rounded bg-white/[0.04]">Vert.x</span>
              <span className="px-2.5 py-1 rounded bg-white/[0.04]">PostgreSQL</span>
              <span className="px-2.5 py-1 rounded bg-white/[0.04]">Docker</span>
            </div>
            <span className="text-[11px] font-modern uppercase tracking-wider text-[#c5a880] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              {language === 'fr' ? 'Échelle Étatique' : 'State-level Scale'}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </motion.div>

        {/* Pillar 02: Scrum Master & Team Velocity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...appleSpring, delay: 0.1 }}
          whileTap={tactileTap}
          className="lg:col-span-5 rounded-2xl p-8 sm:p-10 bg-glass-card border border-white/10 card-tactile flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#c5a880]">
                METRIC_DELTA // VELOCITY
              </span>
              <span className="font-editorial text-4xl text-white font-light flex items-center gap-1">
                +31% <span className="text-sm font-mono text-[#c5a880]">↑</span>
              </span>
            </div>

            <div className="flex items-center justify-between gap-2 mb-3">
              <h3 className="font-editorial text-2xl sm:text-3xl text-white font-light">
                {language === 'fr' ? 'Scrum Master Certifié (PSM I)' : 'Certified Scrum Master (PSM I)'}
              </h3>
              <ScrumOrgBadge />
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light font-modern">
              {language === 'fr'
                ? "Transformation des rituels agiles en leviers d'autonomie réelle. Réduction des frictions inter-équipes, levée proactive des blocages techniques et accélération mesurable du delivery sans surchauffe humaine."
                : 'Turned agile ceremonies into real leverage for developer autonomy. Eradicated cross-team blockers, boosted release cadence by +31%, and built a blameless culture focused on outcomes over theater.'}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-zinc-400 font-mono">
            <span>Scrum.org Credential #971439</span>
            <span className="text-zinc-200">Sustainable Pace</span>
          </div>
        </motion.div>

        {/* Pillar 03: Decision-Making Under Stress (French Red Cross Dispatch) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...appleSpring, delay: 0.15 }}
          whileTap={tactileTap}
          className="lg:col-span-12 rounded-2xl p-8 sm:p-10 bg-glass-card border border-white/10 card-tactile group relative overflow-hidden"
        >
          {/* Subtle Red Cross Watermark */}
          <div className="absolute -right-8 -bottom-8 w-60 h-60 opacity-[0.035] group-hover:opacity-[0.07] transition-opacity pointer-events-none select-none text-red-500 overflow-hidden flex items-center justify-center">
            <CroixRougeLogo watermark className="w-full h-full text-red-500" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3 font-mono text-xs text-[#c5a880]">
                  <Activity className="w-4 h-4 text-[#c5a880]" />
                  <span>MARSEILLE OPERATIONAL UNIT // HIGH-STRESS FIELD COMMAND</span>
                </div>
                <CroixRougeLogo className="text-zinc-200" />
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl text-white font-light mb-3">
                {language === 'fr'
                  ? 'Responsable Opérationnel de Secours — Croix-Rouge française'
                  : 'Emergency Operations Director — French Red Cross'}
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light font-modern max-w-3xl mb-4">
                {language === 'fr'
                  ? "Gestion des dispositifs de secours d'urgence, coordination d'équipes pluridisciplinaires et prise de décision rapide sous contrainte vitale. Ce sang-froid opérationnel s'applique directement au pilotage de crise technique en entreprise : diagnostic lucide, priorisation sans panique et protection des équipes."
                  : 'Leading high-stakes emergency operations, coordinating multidisciplinary field units, and making critical decisions under pressure. This composure directly translates to engineering crisis management: clear head, decisive triage, and zero panic.'}
              </p>

              <blockquote className="font-editorial italic text-zinc-300 text-base sm:text-lg border-l-2 border-[#c5a880] pl-4 mt-2">
                &ldquo;
                {language === 'fr'
                  ? 'Dans l’urgence opérationnelle, la clarté de direction est le seul antidote à la panique.'
                  : 'Under acute operational strain, clarity of direction is the only antidote to panic.'}
                &rdquo;
              </blockquote>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center lg:items-end border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-6 lg:pt-0 lg:pl-8">
              <span className="font-editorial text-3xl sm:text-4xl text-white font-light">
                {language === 'fr' ? 'Sang-Froid' : 'Composure'}
              </span>
              <span className="text-xs uppercase tracking-widest text-zinc-400 mt-1 font-mono">
                {language === 'fr' ? 'Gestion de Crise & Triage' : 'Crisis Triage & Team Composure'}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default BentoImpact;
