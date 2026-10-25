'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import { personalData } from '@/utils/data/personal-data';
import { ArrowDown, Download, MapPin } from 'lucide-react';

/**
 * Editorial Hero component crafted according to Apple Design principles:
 * Pure typography, critically damped physical interaction, and authentic Swiss archival metadata.
 */
const Hero = () => {
  const { t, language } = useTranslation();

  return (
    <section id="overview" className="w-full bg-[#070709] relative min-h-[92vh] pt-28 sm:pt-32 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Warm ambient depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#c5a880]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-between flex-1">
        {/* Top Ledger: Geolocation & Temporal Stamp */}
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-12 z-10 font-mono text-[11px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-zinc-400 tracking-wider"
        >
          <span className="text-[#c5a880] font-semibold">LOC_01</span>
          <span className="text-zinc-600">/</span>
          <span>FRANCE</span>
          <span className="text-zinc-600">/</span>
          <span className="text-[#c5a880] font-medium">WORLDWIDE MOBILITY &bull; REMOTE</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 tracking-widest text-zinc-400 uppercase font-medium"
        >
          <span className="text-zinc-200">Senior Software Engineer</span>
          <span className="text-zinc-600">&bull;</span>
          <span>Scrum Master (PSM I)</span>
        </motion.div>
      </div>

      {/* Main Grid: Monumental Typography & Editorial Portrait */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center my-auto z-10">
        {/* Left Column: Architectural Display Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Name entirely in luminous off-white, no smeared gold gradient */}
            <h1 className="font-editorial text-[clamp(3.4rem,8vw,6.8rem)] font-light leading-[0.92] tracking-[-0.03em] text-[#f5f5f7]">
              THOMAS <br />
              MARTINEZ
            </h1>

            <div className="mt-4 flex flex-wrap items-baseline gap-2">
              <span className="font-editorial text-2xl sm:text-3xl text-zinc-300 font-light">
                {language === 'fr'
                  ? 'Bâtir des architectures pérennes.'
                  : 'Architecting resilient scale.'}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#c5a880] font-normal">
                {'//'} PSM I Certified
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 sm:mt-7 max-w-xl text-zinc-300 text-sm sm:text-base font-light leading-relaxed tracking-wide font-modern"
          >
            {language === 'fr'
              ? "Ingénieur logiciel senior avec 6+ ans d'expérience. Des systèmes biométriques régaliens chez Thales aux architectures réactives haute cadence, j'allie rigueur technique d'envergure et dynamique humaine d'équipe."
              : 'Senior Software Engineer and certified Scrum Master with 6+ years of craft. From sovereign national biometrics at Thales to high-throughput reactive engines, combining mission-critical engineering with human team enablement.'}
          </motion.p>

          {/* Location & Status Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 flex items-center gap-2 text-xs text-zinc-400 font-modern"
          >
            <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>
              {language === 'fr'
                ? 'France • Mobilité Internationale (Monde entier) & Full Remote'
                : 'France • Open to Worldwide Relocation & Full Remote'}
            </span>
          </motion.div>

          {/* Apple-grade Physical Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#works"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.965 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              className="btn-tactile inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-zinc-950 font-medium text-xs uppercase tracking-widest hover:bg-[#eae6df] shadow-[0_10px_30px_rgba(255,255,255,0.08)]"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </motion.a>

            <motion.a
              href={personalData.resumes?.[language] || personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.965 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              className="btn-tactile inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/15 hover:border-[#c5a880]/50 text-xs uppercase tracking-widest"
            >
              <Download className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>{t.hero.ctaSecondary}</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column: Natural Portrait with Swiss Archival Metadata */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[340px] sm:max-w-[380px]"
          >
            <div className="relative rounded-2xl p-2.5 bg-gradient-to-b from-white/[0.1] via-white/[0.03] to-transparent border border-white/[0.1] shadow-2xl backdrop-blur-md group hover:border-[#c5a880]/40 transition-colors duration-500">
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-zinc-900">
                <Image
                  src={personalData.profile}
                  alt={personalData.name}
                  fill
                  priority
                  className="object-cover object-center filter contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a]/60 via-transparent to-transparent pointer-events-none" />

                {/* Swiss Archival Metadata Bar (No sparkles) */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-between font-mono text-[11px]">
                  <span className="text-zinc-200 tracking-wider">THOMAS MARTINEZ</span>
                  <span className="text-[#c5a880] text-[10px] tracking-widest">SR. DEV // AGILE LEAD</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Asymmetric Metrics Data Ledge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="mt-14 sm:mt-18 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 z-10"
      >
        <div className="flex flex-col">
          <span className="font-editorial text-3xl sm:text-4xl text-white font-light">{language === 'fr' ? '6+ Ans' : '6+ Years'}</span>
          <span className="text-[10px] uppercase tracking-wider text-zinc-400 mt-1 font-mono">
            {language === 'fr' ? 'Expérience Ingénierie' : 'Engineering Craft'}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-editorial text-3xl sm:text-4xl text-white font-light flex items-center gap-1.5">
            +31% <span className="text-xs text-[#c5a880] font-mono">↑</span>
          </span>
          <span className="text-[10px] uppercase tracking-wider text-zinc-400 mt-1 font-mono">
            {language === 'fr' ? 'Throughput Delivery Accéléré' : 'Feature Throughput Gain'}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-editorial text-3xl sm:text-4xl text-white font-light">Thales CABIS</span>
          <span className="text-[10px] uppercase tracking-wider text-zinc-400 mt-1 font-mono">
            {language === 'fr' ? 'Biométrie Souveraine' : 'Sovereign Biometrics'}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-editorial text-3xl sm:text-4xl text-zinc-200 font-light">PSM I</span>
          <span className="text-[10px] uppercase tracking-wider text-[#c5a880] mt-1 font-mono">
            {language === 'fr' ? 'Scrum.org Certifié' : 'Scrum.org Certified'}
          </span>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default Hero;
