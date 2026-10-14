'use client';

import { useTranslation } from '@/utils/i18n';
import { projectsData } from '@/utils/data/projects-data';
import { ExternalLink, Lock, Sparkles, Smartphone, Layers, Server } from 'lucide-react';
import { BsGithub } from 'react-icons/bs';

/**
 * ProjectsShowcase component displaying the 4 flagship projects with case study depth.
 */
const ProjectsShowcase = () => {
  const { t } = useTranslation();

  const getProjectIcon = slug => {
    switch (slug) {
      case 'thales-cabis':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'jobradar-pro':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'arthur-lavergne':
        return <Sparkles className="w-5 h-5 text-amber-300" />;
      case 'led-scroller':
        return <Smartphone className="w-5 h-5 text-fuchsia-400" />;
      default:
        return <Layers className="w-5 h-5 text-zinc-400" />;
    }
  };

  return (
    <section id="works" className="py-20 sm:py-28 relative">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-3 max-w-3xl mb-12 sm:mb-16">
        <span className="text-xs font-mono tracking-wider uppercase text-emerald-400">
          {'//'} {t.projects.tag}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
          {t.projects.title}
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 font-normal">
          {t.projects.subtitle}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {projectsData.map((project, index) => (
          <article
            key={project.id}
            className="glass-panel glass-panel-hover rounded-3xl p-7 sm:p-9 flex flex-col justify-between relative group"
          >
            <div>
              {/* Card Header: Category & Icon */}
              <div className="flex items-center justify-between gap-4 mb-5">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wide text-zinc-300 bg-white/[0.05] border border-white/[0.08]">
                  {project.badge}
                </span>
                <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  {getProjectIcon(project.slug)}
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl font-semibold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                {project.name}
              </h3>
              <p className="text-sm font-medium text-zinc-400 mt-1 mb-4">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-zinc-300/90 leading-relaxed font-normal mb-5">
                {project.description}
              </p>

              {/* Key Outcome / Impact Highlight */}
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] mb-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 block mb-1">
                  Key Impact
                </span>
                <p className="text-xs text-zinc-300 leading-normal">
                  {project.impact}
                </p>
              </div>
            </div>

            <div>
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map(tool => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.04]"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-zinc-950 bg-white hover:bg-zinc-200 transition-colors"
                    >
                      <span>{t.projects.viewLive}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                      <Lock className="w-3.5 h-3.5 text-zinc-600" />
                      <span>{t.projects.confidential}</span>
                    </span>
                  )}

                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium text-zinc-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-colors"
                    >
                      <BsGithub className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>

                <span className="text-xs text-zinc-500 font-mono">
                  0{index + 1}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsShowcase;
