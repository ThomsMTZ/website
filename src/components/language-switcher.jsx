"use client";

import { useTranslation } from '@/i18n';

function LanguageSwitcher() {
  const { language, changeLanguage, supportedLanguages } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      {supportedLanguages.map((lang) => (
        <button
          key={lang}
          onClick={() => changeLanguage(lang)}
          className={`px-3 py-1 text-xs font-medium uppercase rounded transition-all duration-300 ${
            language === lang
              ? 'bg-pink-500 text-white'
              : 'bg-transparent text-gray-300 hover:text-pink-500 border border-gray-600 hover:border-pink-500'
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
