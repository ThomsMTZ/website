'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import { projectsData } from '@/utils/data/projects-data';
import { ExternalLink, Lock, ArrowUpRight, Sparkles, Smartphone, Layers, Server } from 'lucide-react';
import { BsGithub } from 'react-icons/bs';

/**
 * Editorial Projects Showcase presenting key case studies with magazine hierarchy,
 * bespoke numerals, and deep architectural rationale.
 */
const ProjectsShowcase = () => {
  const { language } = useTranslation();

  const getProjectIcon = slug => {
    switch (slug) {
      case 'thales-cabis':
        return <Server className="w-4 h-4 text-[#c5a880]" />;
      case 'jobradar-pro':
        return <Layers className="w-4 h-4 text-[#c5a880]" />;
      case 'arthur-lavergne':
        return <Sparkles className="w-4 h-4 text-[#c5a880]" />;
      case 'led-scroller':
        return <Smartphone className="w-4 h-4 text-[#c5a880]" />;
      default:
        return <Layers className="w-4 h-4 text-[#c5a880]" />;
    }
  };

  return (
    <section id="works" className="py-24 sm:py-32 relative">
      {/* Editorial Section Header */}
      <div className="flex flex-col items-start gap-4 max-w-4xl mb-16 sm:mb-20">
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-8 bg-[#c5a880]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a880] font-medium font-modern">
            {language === 'fr' ? 'Dossiers & Études de Cas' : 'Selected Works & Case Studies'}
          </span>
        </div>

        <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.05] tracking-[-0.02em]">
          {language === 'fr' ? (
            <>
              Des systèmes d’envergure, <br />
              <span className="italic font-normal text-gold-gradient">du régalien au produit autonome.</span>
            </>
          ) : (
            <>
              Large-scale systems, <br />
              <span className="italic font-normal text-gold-gradient">from sovereign scale to consumer craft.</span>
            </>
          )}
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl font-modern">
          {language === 'fr'
            ? "Chaque projet illustre un défi technique précis : scalabilité concurrente, traitement temps réel, direction artistique singulière ou modèle produit éthique."
            : 'Each showcase tackles a distinct engineering challenge: high concurrency, real-time data pipelines, bespoke art direction, or ethical product design.'}
        </p>
      </div>

      {/* Editorial Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
        {projectsData.map((project, index) => {
          const numberLabel = `0${index + 1} / 04`;

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="rounded-2xl p-8 sm:p-10 bg-glass-card hover:border-[#c5a880]/40 transition-all duration-500 flex flex-col justify-between relative group"
            >
              <div>
                {/* Dossier Top Bar: Number & Category */}
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/[0.08]">
                  <span className="font-editorial text-lg text-[#c5a880] tracking-wider">
                    {numberLabel}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-modern">
                      {project.badge}
                    </span>
                    <div className="p-1.5 rounded bg-white/[0.04] border border-white/[0.08]">
                      {getProjectIcon(project.slug)}
                    </div>
                  </div>
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="font-editorial text-3xl sm:text-4xl text-white font-light group-hover:text-gold-gradient transition-colors mb-2">
                  {project.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-modern mb-5 font-medium">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light font-modern mb-6">
                  {project.description}
                </p>

                {/* Impact Statement */}
                {project.impact && (
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] mb-6">
                    <p className="text-xs sm:text-sm text-zinc-300 font-editorial italic">
                      &ldquo;{project.impact}&rdquo;
                    </p>
                  </div>
                )}
              </div>

              <div>
                {/* Tech Pills */}
                <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-2 mb-6">
                  {(project.tools || []).map(tool => (
                    <span
                      key={tool}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-zinc-400"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Actions Bar */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-4">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-modern uppercase tracking-widest text-white hover:text-[#c5a880] transition-colors group/link"
                      >
                        <span>{language === 'fr' ? 'Explorer en direct' : 'Live Platform'}</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}

                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-modern uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
                      >
                        <BsGithub className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}

                    {!project.demo && !project.code && (
                      <div className="inline-flex items-center gap-2 text-xs font-modern uppercase tracking-widest text-zinc-400">
                        <Lock className="w-3.5 h-3.5 text-[#c5a880]" />
                        <span>{language === 'fr' ? 'Architecture Souveraine (Confidentiel)' : 'Sovereign Architecture (NDA)'}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsShowcase;
