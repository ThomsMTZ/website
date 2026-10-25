'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/utils/i18n';
import { experiences } from '@/utils/data/experience';
import { educations } from '@/utils/data/educations';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { appleSpring } from '@/utils/motion';
import { ThalesLogo, TricentisNeoLoadLogo, CroixRougeBadge } from './BrandLogos';

/**
 * Editorial Career Timeline and Academic / Certification Credentials.
 * Implements a Swiss Chronological Datum Line with crisp company brand marks.
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

  const renderCompanyBadge = company => {
    if (company.includes('Thales')) {
      return (
        <div className="px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/15 flex items-center justify-center shadow-sm">
          <ThalesLogo className="h-3.5 sm:h-4 w-auto" />
        </div>
      );
    }
    if (company.includes('Tricentis')) {
      return (
        <div className="px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/15 flex items-center shadow-sm">
          <TricentisNeoLoadLogo />
        </div>
      );
    }
    if (company.includes('Croix-Rouge')) {
      return (
        <div className="px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/15 flex items-center shadow-sm">
          <CroixRougeBadge />
        </div>
      );
    }
    return (
      <span className="font-mono text-xs uppercase tracking-wider text-zinc-300 font-semibold px-2 py-1 rounded bg-white/[0.04]">
        {company}
      </span>
    );
  };

  return (
    <section id="career" className="w-full bg-[#090a0f] py-24 sm:py-32 border-t border-white/[0.05] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Editorial Section Header */}
        <div className="flex flex-col items-start gap-4 max-w-4xl mb-16 sm:mb-20">
          <span className="font-mono text-xs text-[#c5a880] tracking-widest uppercase">
            [ 04 // CHRONOLOGY & PROVENANCE ]
          </span>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.05] tracking-[-0.02em]">
            {language === 'fr'
              ? 'Six années en ingénierie logicielle critique.'
              : 'Six years in mission-critical software engineering.'}
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl font-modern">
            {language === 'fr'
              ? "De l'ingénierie logicielle chez Thales et Tricentis au pilotage agile certifié, une progression continue guidée par l'impact et la robustesse."
              : 'From software engineering at Thales and Tricentis to certified agile coaching, continuous growth driven by architectural excellence.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Swiss Chronological Datum Line (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="pb-6 border-b border-white/10 mb-8 font-mono text-xs text-zinc-400 uppercase tracking-widest">
              ENGINEERING_TIMELINE // 2019 — PRESENT
            </div>

            <div className="relative pl-6 sm:pl-8 border-l border-white/15 flex flex-col gap-12 sm:gap-14">
              {experiences.map((exp, index) => {
                const titleText = getLocalized(exp.title, language);
                const badgeText = getLocalized(exp.badge, language);
                const durationText = getLocalized(exp.duration, language);
                const descriptionText = getLocalized(exp.description, language);
                const highlightsList = getLocalizedList(exp.highlights, language);

                return (
                  <motion.article
                    key={exp.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...appleSpring, delay: index * 0.08 }}
                    className="relative group"
                  >
                    {/* Datum Node Pip */}
                    <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3 w-3 rounded-full bg-[#08080a] border-2 border-[#c5a880] group-hover:bg-[#c5a880] transition-colors" />

                    {/* Header: Date + Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2 font-mono text-xs">
                      <span className="text-[#c5a880] font-medium">{durationText}</span>
                      <span className="text-[10px] uppercase tracking-wider text-zinc-400 bg-white/[0.04] px-2.5 py-0.5 rounded">
                        {badgeText}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 mb-1">
                      <h3 className="font-editorial text-2xl sm:text-3xl text-white font-light group-hover:text-gold-gradient transition-colors">
                        {titleText}
                      </h3>
                      {renderCompanyBadge(exp.company)}
                    </div>

                    <div className="flex items-center gap-3 text-xs text-zinc-400 mt-1 mb-4 font-modern">
                      <span className="text-zinc-200 font-medium">{exp.company}</span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1 text-zinc-500 font-mono text-[11px]">
                        <MapPin className="w-3 h-3 text-zinc-600" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-sm text-zinc-300 leading-relaxed font-light font-modern mb-4">
                      {descriptionText}
                    </p>

                  <ul className="flex flex-col gap-2 mb-5">
                    {highlightsList.map(item => (
                      <li key={item} className="flex items-start gap-2.5 text-xs text-zinc-300 font-modern font-light">
                        <span className="text-[#c5a880] font-mono mt-0.5">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
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

        {/* Right Column: Accreditation Registry (5 cols) */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="pb-6 border-b border-white/10 mb-8 font-mono text-xs text-zinc-400 uppercase tracking-widest">
            ACCREDITATIONS & FORMAL TRAINING
          </div>

          <div className="flex flex-col divide-y divide-white/[0.08]">
            {educations.map((edu, index) => {
              const eduTitle = getLocalized(edu.title, language);
              const eduBadge = getLocalized(edu.badge, language);
              const eduDesc = getLocalized(edu.description, language);

              return (
                <motion.article
                  key={edu.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...appleSpring, delay: index * 0.08 }}
                  className="py-6 first:pt-0"
                >
                  <div className="flex items-center justify-between gap-3 mb-2 font-mono text-xs">
                    <span className="text-[#c5a880] text-[10px] uppercase tracking-wider">{eduBadge}</span>
                    <span className="text-zinc-500">{edu.duration}</span>
                  </div>

                  <h3 className="font-editorial text-xl sm:text-2xl text-white font-light mb-1">
                    {eduTitle}
                  </h3>
                  <p className="text-xs text-zinc-300 font-medium font-modern mb-2">
                    {edu.institution}
                  </p>

                  <p className="text-xs text-zinc-400 font-light leading-relaxed font-modern">
                    {eduDesc}
                  </p>

                  {edu.verifyUrl && (
                    <a
                      href={edu.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-[11px] font-mono text-[#c5a880] hover:text-white transition-colors group"
                    >
                      <span className="underline underline-offset-4 decoration-[#c5a880]/40 group-hover:decoration-white">
                        {language === 'fr' ? 'Vérifier l’accréditation officielle' : 'Verify Official Credential'}
                      </span>
                      <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
