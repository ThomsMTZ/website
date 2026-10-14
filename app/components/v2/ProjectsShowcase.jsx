'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import { projectsData } from '@/utils/data/projects-data';
import { Lock, ArrowUpRight, Smartphone, Layers, Server, Compass } from 'lucide-react';
import { BsGithub } from 'react-icons/bs';
import { appleSpring, tactileTap } from '@/utils/motion';

/**
 * Editorial Projects Showcase featuring asymmetric flagship dossier layout,
 * real logos, and Apple-grade touch physics.
 */
const ProjectsShowcase = () => {
  const { language } = useTranslation();

  const getLocalized = (field, lang) => {
    if (!field) return '';
    if (typeof field === 'string') return field;
    return field[lang] || field.en || '';
  };

  const getProjectIcon = slug => {
    switch (slug) {
      case 'thales-cabis':
        return <Server className="w-4 h-4 text-[#c5a880]" />;
      case 'jobradar-pro':
        return <Layers className="w-4 h-4 text-[#c5a880]" />;
      case 'arthur-lavergne':
        return <Compass className="w-4 h-4 text-[#c5a880]" />;
      case 'led-scroller':
        return <Smartphone className="w-4 h-4 text-[#c5a880]" />;
      default:
        return <Layers className="w-4 h-4 text-[#c5a880]" />;
    }
  };

  // Split into Thales Flagship vs Other Studies for asymmetric hierarchy
  const flagship = projectsData.find(p => p.slug === 'thales-cabis');
  const secondaryProjects = projectsData.filter(p => p.slug !== 'thales-cabis');

  return (
    <section id="works" className="py-24 sm:py-32 relative">
      {/* Editorial Section Header */}
      <div className="flex flex-col items-start gap-4 max-w-4xl mb-16 sm:mb-20">
        <span className="font-mono text-xs text-[#c5a880] tracking-widest uppercase">
          [ 02 // SELECTED PRODUCTION RELEASES ]
        </span>

        <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.05] tracking-[-0.02em]">
          {language === 'fr'
            ? 'Systèmes de production & Réalisations d’ingénierie.'
            : 'Production Systems & Engineering Craft.'}
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl font-modern">
          {language === 'fr'
            ? "Chaque projet illustre un défi technique précis : scalabilité concurrente, traitement temps réel, direction artistique singulière ou modèle produit éthique."
            : 'Each showcase tackles a distinct engineering challenge: high concurrency, real-time data pipelines, bespoke art direction, or ethical product design.'}
        </p>
      </div>

      <div className="flex flex-col gap-8 sm:gap-10">
        {/* Flagship Case Study: Thales CABIS (12-column Full-Width Deep Dossier) */}
        {flagship && (
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={appleSpring}
            whileTap={tactileTap}
            className="rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-[#12131a] via-[#0d0e14] to-[#0a0a0d] border border-white/10 card-tactile relative overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Dossier Overview */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#c5a880]">01 / 04 // FLAGSHIP</span>
                      <span className="text-zinc-600">&bull;</span>
                      <span className="font-mono text-[11px] text-zinc-400 uppercase">
                        {getLocalized(flagship.badge, language)}
                      </span>
                    </div>
                    <div className="p-2 rounded bg-white/[0.04] border border-white/10">
                      {getProjectIcon(flagship.slug)}
                    </div>
                  </div>

                  <h3 className="font-editorial text-3xl sm:text-5xl text-white font-light mb-2">
                    {flagship.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-modern mb-5 font-medium">
                    {getLocalized(flagship.subtitle, language)}
                  </p>

                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light font-modern mb-6">
                    {getLocalized(flagship.description, language)}
                  </p>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] mb-6">
                    <p className="text-xs sm:text-sm text-zinc-200 font-editorial italic">
                      &ldquo;{getLocalized(flagship.impact, language)}&rdquo;
                    </p>
                  </div>
                </div>

                <div>
                  {/* Tech Stack Tags */}
                  <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-2 mb-4">
                    {(flagship.tools || []).map(tool => (
                      <span
                        key={tool}
                        className="text-xs font-mono px-3 py-1 rounded bg-white/[0.04] border border-white/[0.06] text-zinc-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 pt-2">
                    <Lock className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>
                      {language === 'fr'
                        ? 'Architecture Souveraine (Sous Engagement de Confidentialité)'
                        : 'Sovereign Architecture (Non-Disclosure Agreement)'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Industrial Architectural Specs Card */}
              <div className="lg:col-span-4 p-6 sm:p-7 rounded-xl bg-black/50 border border-white/10 flex flex-col gap-4 font-mono text-xs">
                <span className="text-[11px] text-[#c5a880] uppercase tracking-wider pb-2 border-b border-white/10">
                  SYSTEM_SPECIFICATIONS
                </span>
                <div className="flex flex-col gap-3 text-zinc-400">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Core Runtime:</span>
                    <span className="text-zinc-200">Java 21 LTS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Framework:</span>
                    <span className="text-zinc-200">Vert.x Reactive Engine</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Storage:</span>
                    <span className="text-zinc-200">PostgreSQL HA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Event Stream:</span>
                    <span className="text-zinc-200">RabbitMQ Sharded</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Security SLA:</span>
                    <span className="text-emerald-400">Zero-Downtime High Auth</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        )}

        {/* Secondary Case Studies Grid (6 cols each) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {secondaryProjects.map((project, index) => {
            const numberLabel = `0${index + 2} / 04`;
            const badgeText = getLocalized(project.badge, language);
            const subtitleText = getLocalized(project.subtitle, language);
            const descriptionText = getLocalized(project.description, language);
            const impactText = getLocalized(project.impact, language);

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...appleSpring, delay: index * 0.1 }}
                whileTap={tactileTap}
                className="rounded-2xl p-7 sm:p-8 bg-glass-card border border-white/10 card-tactile flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5 pb-3 border-b border-white/[0.08]">
                    <span className="font-mono text-xs text-[#c5a880] tracking-wider">
                      {numberLabel}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-mono truncate max-w-[140px]">
                        {badgeText}
                      </span>
                      <div className="p-1.5 rounded bg-white/[0.04] border border-white/10">
                        {getProjectIcon(project.slug)}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-editorial text-2xl sm:text-3xl text-white font-light group-hover:text-gold-gradient transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-[11px] uppercase tracking-wider text-[#c5a880] font-modern mt-1 font-medium">
                        {subtitleText}
                      </p>
                    </div>

                    {project.logo && (
                      <div className="relative shrink-0 w-11 h-11 rounded-xl overflow-hidden bg-white/[0.04] border border-white/10 p-1 flex items-center justify-center">
                        <Image
                          src={project.logo}
                          alt={`${project.name} Logo`}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light font-modern mb-5">
                    {descriptionText}
                  </p>

                  {impactText && (
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-5">
                      <p className="text-xs text-zinc-300 font-editorial italic">
                        &ldquo;{impactText}&rdquo;
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-1.5 mb-5">
                    {(project.tools || []).map(tool => (
                      <span
                        key={tool}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    {project.playStore && (
                      <a
                        href={project.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-tactile inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.08] hover:bg-[#c5a880] text-zinc-200 hover:text-black border border-white/15 text-[11px] font-modern uppercase tracking-wider transition-all"
                      >
                        <Smartphone className="w-3.5 h-3.5" />
                        <span>Google Play</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}

                    {project.demo && !project.playStore && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-tactile inline-flex items-center gap-1 text-xs font-modern uppercase tracking-wider text-white hover:text-[#c5a880] transition-colors"
                      >
                        <span>{language === 'fr' ? 'Accéder' : 'Live Platform'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-tactile inline-flex items-center gap-1.5 text-xs font-mono uppercase text-zinc-400 hover:text-white transition-colors"
                      >
                        <BsGithub className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
