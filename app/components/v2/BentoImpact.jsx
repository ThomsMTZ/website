'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import { Shield, Sparkles, HeartHandshake, ArrowUpRight } from 'lucide-react';

/**
 * Editorial Architectural Impact section replacing generic AI bento grids
 * with haute-couture storytelling and measurable engineering metrics.
 */
const BentoImpact = () => {
  const { language } = useTranslation();

  return (
    <section id="impact" className="py-24 sm:py-32 relative">
      {/* Editorial Section Header */}
      <div className="flex flex-col items-start gap-4 max-w-4xl mb-16 sm:mb-20">
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-8 bg-[#c5a880]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a880] font-medium font-modern">
            {language === 'fr' ? 'Philosophie & Impact Réel' : 'Engineering Philosophy & Tangible Impact'}
          </span>
        </div>

        <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.05] tracking-[-0.02em]">
          {language === 'fr' ? (
            <>
              La complexité maîtrisée par <br />
              <span className="italic font-normal text-gold-gradient">la clarté et l&apos;engagement humain.</span>
            </>
          ) : (
            <>
              Mastering complexity through <br />
              <span className="italic font-normal text-gold-gradient">clarity and human leadership.</span>
            </>
          )}
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl font-modern mt-2">
          {language === 'fr'
            ? "Les architectures critiques ne s'effondrent pas par manque de code, mais par défaut de communication. Mon rôle : bâtir des socles techniques infaillibles tout en insufflant une dynamique d'équipe bienveillante et exigeante."
            : 'Mission-critical systems rarely fail from algorithms; they fail from communication debt. My mission is architecting unshakeable technical foundations while fostering team psychological safety and delivery cadence.'}
        </p>
      </div>

      {/* Asymmetric 3-Column Editorial Impact Dossiers */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Pillar 01: Sovereign Systems & Biometrics (Thales) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 rounded-2xl p-8 sm:p-10 bg-glass-card hover:border-[#c5a880]/40 transition-all duration-500 relative overflow-hidden flex flex-col justify-between group"
        >
          <div className="absolute top-0 right-0 p-8 text-7xl sm:text-8xl font-editorial font-light text-white/[0.04] select-none group-hover:text-[#c5a880]/10 transition-colors">
            01
          </div>

          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-medium font-modern">
                {language === 'fr' ? 'Systèmes Critiques Régaliens' : 'Sovereign Critical Systems'}
              </span>
              <span className="font-editorial text-2xl text-white">Thales DIS</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-[#c5a880]" />
              <h3 className="font-editorial text-2xl sm:text-3xl text-white font-light">
                {language === 'fr' ? 'Biométrie Nationale CABIS' : 'National Biometric CABIS Engine'}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light font-modern">
              {language === 'fr'
                ? "Conception et évolution du moteur biométrique d'identification judiciaire. Traitement de flux massifs d'empreintes et visages pour les forces de l'ordre nationales. Architecture réactive Java 21 & Vert.x, persistance PostgreSQL haute performance, exigence de haute disponibilité absolue."
                : 'Core design and delivery of sovereign biometric judicial identification platforms. Processing millions of multimodal biometric transactions with reactive Vert.x & Java 21, PostgreSQL tuning, and uncompromising legal compliance.'}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
              <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/5">Java 21</span>
              <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/5">Vert.x</span>
              <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/5">PostgreSQL</span>
              <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/5">Docker</span>
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
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-5 rounded-2xl p-8 sm:p-10 bg-glass-card hover:border-[#c5a880]/40 transition-all duration-500 relative overflow-hidden flex flex-col justify-between group"
        >
          <div className="absolute top-0 right-0 p-8 text-7xl sm:text-8xl font-editorial font-light text-white/[0.04] select-none group-hover:text-[#c5a880]/10 transition-colors">
            02
          </div>

          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-medium font-modern">
                {language === 'fr' ? 'Leadership d’Équipe' : 'Team Enablement'}
              </span>
              <span className="font-editorial text-3xl text-gold-gradient font-normal">+31%</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-[#c5a880]" />
              <h3 className="font-editorial text-2xl sm:text-3xl text-white font-light">
                {language === 'fr' ? 'Scrum Master Certifié (PSM I)' : 'Certified Scrum Master (PSM I)'}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light font-modern">
              {language === 'fr'
                ? "Transformation des rituels agiles en leviers d'autonomie réelle. Réduction des frictions inter-équipes, levée proactive des blocages techniques et accélération mesurable du delivery sans surchauffe humaine."
                : 'Turned agile ceremonies into real leverage for developer autonomy. Eradicated cross-team blockers, boosted release cadence by +31%, and built a blameless culture focused on outcomes over theater.'}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs text-zinc-400 font-modern">
            <span>Scrum.org Credential</span>
            <span className="text-[#c5a880] font-medium">Cadence & Sécurité Psychologique</span>
          </div>
        </motion.div>

        {/* Pillar 03: Decision-Making Under Stress (French Red Cross) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="lg:col-span-12 rounded-2xl p-8 sm:p-10 bg-glass-card hover:border-[#c5a880]/40 transition-all duration-500 relative overflow-hidden group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-medium font-modern">
                  03 • {language === 'fr' ? 'Leadership de Terrain' : 'Real-World Crisis Leadership'}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <HeartHandshake className="w-5 h-5 text-[#c5a880]" />
                <h3 className="font-editorial text-2xl sm:text-3xl text-white font-light">
                  {language === 'fr'
                    ? 'Responsable Opérationnel de Secours — Croix-Rouge française'
                    : 'Emergency Operations Director — French Red Cross'}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light font-modern max-w-3xl">
                {language === 'fr'
                  ? "Gestion des dispositifs de secours d'urgence, coordination d'équipes pluridisciplinaires et prise de décision rapide sous contrainte vitale. Ce sang-froid opérationnel s'applique directement au pilotage de crise technique en entreprise : diagnostic lucide, priorisation sans panique et protection des équipes."
                  : 'Leading high-stakes emergency operations, coordinating multidisciplinary field units, and making critical decisions under pressure. This composure directly translates to engineering crisis management: clear head, decisive triage, and zero panic.'}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center lg:items-end border-t lg:border-t-0 lg:border-l border-white/[0.08] pt-6 lg:pt-0 lg:pl-8">
              <span className="font-editorial text-3xl sm:text-4xl text-white font-light">
                {language === 'fr' ? 'Sang-Froid' : 'Composure'}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#c5a880] mt-1 font-modern">
                {language === 'fr' ? 'Gestion de Crise & Résilience' : 'Crisis Triage & Team Composure'}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoImpact;
