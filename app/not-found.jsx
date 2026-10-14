'use client';

import Link from 'next/link';
import { useTranslation } from '@/utils/i18n';
import { ArrowLeft } from 'lucide-react';

/**
 * Modern 404 page adhering to V2 luxury design language.
 */
const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <span className="text-xs font-mono tracking-widest uppercase text-emerald-400 mb-2">
        {'//'} {t.notFound?.title || '404'}
      </span>
      <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
        {t.notFound?.subtitle || 'Page Not Found'}
      </h1>
      <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-md">
        {t.notFound?.description || 'The page you are looking for does not exist.'}
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-medium text-xs sm:text-sm hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{t.notFound?.goHome || 'Back to Home'}</span>
      </Link>
    </div>
  );
};

export default NotFoundPage;
