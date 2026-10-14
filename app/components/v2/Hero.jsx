'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import { personalData } from '@/utils/data/personal-data';
import { ArrowDown, Download, Sparkles, MapPin } from 'lucide-react';

/**
 * Editorial Hero component featuring bespoke haute-couture typography,
 * natural portrait presentation, and executive engineering positioning.
 */
const Hero = () => {
  const { t, language } = useTranslation();

  return (
    <section id="overview" className="relative min-h-[92vh] pt-24 sm:pt-28 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Warm ambient lighting glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#c5a880]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Top Tagline / Category Header */}
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3"
        >
          <span className="h-[1px] w-8 bg-[#c5a880]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a880] font-medium font-modern">
            {language === 'fr' ? 'Ingénierie Logicielle & Leadership Agile' : 'Software Engineering & Agile Leadership'}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-3 text-xs tracking-widest text-zinc-400 uppercase font-medium font-modern"
        >
          <span className="text-zinc-200">Senior Dev</span>
          <span className="text-zinc-600">•</span>
          <span>Scrum Master (PSM I)</span>
          <span className="text-zinc-600">•</span>
          <span>Tech Lead</span>
        </motion.div>
      </div>

      {/* Main Grid: Editorial Typography & Human Portrait */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center my-auto z-10">
        {/* Left Column: Monumental Editorial Text */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-editorial text-[clamp(3.2rem,7.5vw,6.5rem)] font-light leading-[0.94] tracking-[-0.02em] text-white">
              THOMAS <br />
              <span className="font-normal text-gold-gradient">MARTINEZ</span>
            </h1>

            <div className="flex flex-wrap items-baseline gap-3 sm:gap-4 mt-4">
              <span className="font-editorial italic text-2xl sm:text-3xl lg:text-4xl text-zinc-300 font-light">
                {language === 'fr'
                  ? 'Bâtir des architectures pérennes, mener avec calme.'
                  : 'Architecting resilient scale, leading with composure.'}
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 sm:mt-8 max-w-xl text-zinc-300 text-sm sm:text-base font-light leading-relaxed tracking-wide font-modern"
          >
            {language === 'fr'
              ? "Ingénieur logiciel senior et Scrum Master certifié (PSM I) avec 6+ ans d'expérience. Des systèmes biométriques régaliens chez Thales aux architectures réactives haute cadence, j'allie rigueur technique d'envergure et dynamique humaine d'équipe."
              : 'Senior Software Engineer and certified Scrum Master (PSM I) with 6+ years of craft. From sovereign national biometrics at Thales to high-throughput reactive engines, combining mission-critical engineering with human team enablement.'}
          </motion.p>

          {/* Location & Status Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-5 flex items-center gap-2 text-xs text-zinc-400 font-modern"
          >
            <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>Marseille, France • Remote & On-Site</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="#works"
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white text-zinc-950 font-medium text-xs uppercase tracking-widest hover:bg-[#c5a880] transition-all duration-300 shadow-xl"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </Link>

            <a
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-[#c5a880]/50 text-xs uppercase tracking-widest transition-all duration-300"
            >
              <Download className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>{t.hero.ctaSecondary}</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Editorial Portrait Showcase */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[340px] sm:max-w-[380px]"
          >
            {/* Editorial Frame with subtle gold hairline */}
            <div className="relative rounded-2xl p-2.5 bg-gradient-to-b from-white/[0.1] via-white/[0.03] to-transparent border border-white/[0.1] shadow-2xl backdrop-blur-md group hover:border-[#c5a880]/40 transition-colors duration-500">
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-zinc-900">
                <Image
                  src={personalData.profile}
                  alt={personalData.name}
                  fill
                  priority
                  className="object-cover object-center filter grayscale-[15%] contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
                {/* Subtle soft vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a]/70 via-transparent to-transparent pointer-events-none" />

                {/* Editorial Caption Bar at bottom of photo */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-medium font-modern">
                      Thomas Martinez
                    </span>
                    <span className="text-[11px] text-zinc-300 font-light font-editorial italic">
                      Lead Dev • Scrum Master PSM I
                    </span>
                  </div>
                  <Sparkles className="w-4 h-4 text-[#c5a880] opacity-80" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Metrics Row: Editorial Table with Fine Gold Accents */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="mt-14 sm:mt-18 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 z-10"
      >
        <div className="flex flex-col">
          <span className="font-editorial text-3xl sm:text-4xl text-white font-light">6+ Ans</span>
          <span className="text-[11px] uppercase tracking-wider text-zinc-400 mt-1 font-modern">
            {language === 'fr' ? 'Expérience Ingénierie' : 'Engineering Craft'}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-editorial text-3xl sm:text-4xl text-gold-gradient font-normal">+31%</span>
          <span className="text-[11px] uppercase tracking-wider text-zinc-400 mt-1 font-modern">
            {language === 'fr' ? 'Vélocité Équipe Mesurée' : 'Measured Team Velocity'}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-editorial text-3xl sm:text-4xl text-white font-light">Thales CABIS</span>
          <span className="text-[11px] uppercase tracking-wider text-zinc-400 mt-1 font-modern">
            {language === 'fr' ? 'Biométrie Souveraine' : 'Sovereign Biometrics'}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-editorial text-3xl sm:text-4xl text-zinc-200 font-light">PSM I</span>
          <span className="text-[11px] uppercase tracking-wider text-[#c5a880] mt-1 font-modern">
            {language === 'fr' ? 'Scrum.org Certifié' : 'Scrum.org Certified'}
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
