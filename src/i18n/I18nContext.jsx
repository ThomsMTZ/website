"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, defaultLanguage, supportedLanguages } from './translations';

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(defaultLanguage);

  useEffect(() => {
    // Try to get language from localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      // Fallback to browser language
      const browserLanguage = navigator.language.split('-')[0];
      if (supportedLanguages.includes(browserLanguage)) {
        setLanguage(browserLanguage);
        localStorage.setItem('language', browserLanguage);
      }
    }
  }, []);

  const changeLanguage = (newLanguage) => {
    if (supportedLanguages.includes(newLanguage)) {
      setLanguage(newLanguage);
      localStorage.setItem('language', newLanguage);
    }
  };

  const t = translations[language] || translations[defaultLanguage];

  const value = {
    language,
    changeLanguage,
    t,
    supportedLanguages,
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
}
