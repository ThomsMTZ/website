'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import { experiences } from '@/utils/data/experience';
import { educations } from '@/utils/data/educations';
import { Briefcase, Calendar, GraduationCap, MapPin, CheckCircle } from 'lucide-react';

/**
 * Editorial Career Timeline and Academic / Certification Credentials with full bilingual support.
 */
const CareerTimeline = () => {
  const { language } = useTranslation();

  const getLocalized = (field, lang) => {
    if (!field) return '';
    if (typeof field === 'string') return field;
    return field[lang] || field.en || '';
  };

  const getLocalizedList = (field, lang) => {
    if (!field) return [];
    if (Array.isArray(field)) return field;
    return field[lang] || field.en || [];
  };

  return (
    <section id="career" className="py-24 sm:py-32 relative">
      {/* Editorial Section Header */}
      <div className="flex flex-col items-start gap-4 max-w-4xl mb-16 sm:mb-20">
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-8 bg-[#c5a880]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a880] font-medium font-modern">
            {language === 'fr' ? 'Trajectoire & Qualifications' : 'Career Progression & Credentials'}
          </span>
        </div>

        <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.05] tracking-[-0.02em]">
          {language === 'fr' ? (
            <>
              Six années d’exigence technique, <br />
              <span className="italic font-normal text-gold-gradient">validées par la pratique et la certification.</span>
            </>
          ) : (
            <>
              Six years of engineering craft, <br />
              <span className="italic font-normal text-gold-gradient">grounded in production and certification.</span>
            </>
          )}
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl font-modern">
          {language === 'fr'
            ? "De l'ingénierie logicielle chez Thales et Tricentis au pilotage agile certifié, une progression continue guidée par l'impact et la robustesse."
            : 'From software engineering at Thales and Tricentis to certified agile coaching, continuous growth driven by architectural excellence.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Professional Experience Column (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08]">
            <Briefcase className="w-4 h-4 text-[#c5a880]" />
            <h3 className="font-editorial text-2xl text-white font-light">
              {language === 'fr' ? 'Expériences Professionnelles' : 'Professional Experience'}
            </h3>
          </div>

          <div className="flex flex-col gap-6">
            {experiences.map((exp, index) => {
              const titleText = getLocalized(exp.title, language);
              const badgeText = getLocalized(exp.badge, language);
              const durationText = getLocalized(exp.duration, language);
              const descriptionText = getLocalized(exp.description, language);
              const highlightsList = getLocalizedList(exp.highlights, language);

              return (
                <motion.article
                  key={exp.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl p-6 sm:p-8 bg-glass-card hover:border-[#c5a880]/40 transition-all duration-500 relative group"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a880] font-modern font-medium">
                        {badgeText}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-modern">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{durationText}</span>
                      </div>
                    </div>

                    <h4 className="font-editorial text-2xl sm:text-3xl text-white font-light group-hover:text-gold-gradient transition-colors">
                      {titleText}
                    </h4>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-400 mt-1 mb-4 font-modern">
                      <span className="text-zinc-200 font-medium">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-zinc-500">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-sm text-zinc-300 leading-relaxed font-light font-modern mb-5">
                      {descriptionText}
                    </p>

                    <ul className="flex flex-col gap-2 mb-6">
                      {highlightsList.map(item => (
                        <li key={item} className="flex items-start gap-2.5 text-xs text-zinc-300 font-modern font-light">
                          <CheckCircle className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                    {(exp.skills || []).map(t => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Education, Certifications & Engagements Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08]">
            <GraduationCap className="w-4 h-4 text-[#c5a880]" />
            <h3 className="font-editorial text-2xl text-white font-light">
              {language === 'fr' ? 'Diplômes & Certifications' : 'Education & Certifications'}
            </h3>
          </div>

          <div className="flex flex-col gap-6">
            {educations.map((edu, index) => {
              const eduTitle = getLocalized(edu.title, language);
              const eduBadge = getLocalized(edu.badge, language);
              const eduDesc = getLocalized(edu.description, language);

              return (
                <motion.article
                  key={edu.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl p-6 bg-glass-card hover:border-[#c5a880]/40 transition-all duration-500"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a880] font-modern font-medium">
                      {eduBadge}
                    </span>
                    <span className="text-xs text-zinc-400 font-modern">{edu.duration}</span>
                  </div>

                  <h4 className="font-editorial text-xl sm:text-2xl text-white font-light mb-1">
                    {eduTitle}
                  </h4>
                  <p className="text-xs text-zinc-300 font-medium font-modern mb-3">
                    {edu.institution}
                  </p>

                  <p className="text-xs text-zinc-400 font-light leading-relaxed font-modern">
                    {eduDesc}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
