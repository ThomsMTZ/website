'use client';

import { useTranslation } from '@/utils/i18n';
import { experiences } from '@/utils/data/experience';
import { educations } from '@/utils/data/educations';
import { Briefcase, Calendar, GraduationCap, MapPin, CheckCircle } from 'lucide-react';

/**
 * CareerTimeline component showcasing professional progression and formal qualifications.
 */
const CareerTimeline = () => {
  const { t } = useTranslation();

  return (
    <section id="career" className="py-20 sm:py-28 relative">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-3 max-w-3xl mb-12 sm:mb-16">
        <span className="text-xs font-mono tracking-wider uppercase text-emerald-400">
          {'//'} {t.career.tag}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
          {t.career.title}
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 font-normal">
          {t.career.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Professional Experience Column (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <div className="flex items-center gap-2.5 pb-4 border-b border-white/[0.08]">
            <Briefcase className="w-5 h-5 text-emerald-400" />
            <h3 className="text-xl font-semibold text-white tracking-tight">
              Work Experience
            </h3>
          </div>

          <div className="flex flex-col gap-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wide text-emerald-300 bg-emerald-500/10 border border-emerald-500/20">
                      {exp.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    {exp.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-400 mt-1 mb-4 font-medium">
                    <span className="text-zinc-200">{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-zinc-500">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-300/90 leading-relaxed font-normal mb-5">
                    {exp.description}
                  </p>

                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="flex flex-col gap-2 mb-6">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs text-zinc-400 leading-normal">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-400 bg-white/[0.04]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications Column (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="flex items-center gap-2.5 pb-4 border-b border-white/[0.08]">
            <GraduationCap className="w-5 h-5 text-teal-400" />
            <h3 className="text-xl font-semibold text-white tracking-tight">
              Education & Certifications
            </h3>
          </div>

          <div className="flex flex-col gap-5">
            {educations.map(edu => (
              <div
                key={edu.id}
                className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider text-teal-300 bg-teal-500/10 border border-teal-500/20">
                      {edu.badge}
                    </span>
                    <span className="text-xs text-zinc-400 font-mono">
                      {edu.duration}
                    </span>
                  </div>

                  <h4 className="text-base font-semibold text-white mb-1">
                    {edu.title}
                  </h4>
                  <p className="text-xs font-medium text-emerald-400 mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
