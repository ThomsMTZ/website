// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { en } from './utils/i18n/en';

// Global mock for i18n
jest.mock('@/utils/i18n', () => ({
  useTranslation: () => ({
    language: 'en',
    changeLanguage: jest.fn(),
    t: en,
    supportedLanguages: ['en', 'fr'],
  }),
  I18nProvider: ({ children }) => children,
  translations: { en },
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'fr'],
}));
