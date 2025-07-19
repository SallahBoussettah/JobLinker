import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enTranslation from './locales/en.json';
import frTranslation from './locales/fr.json';
import arTranslation from './locales/ar.json';

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      fr: {
        translation: frTranslation
      },
      ar: {
        translation: arTranslation
      }
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

// Set RTL direction for Arabic language on initial load
const applyRtlDirection = (language: string) => {
  if (language === 'ar') {
    document.documentElement.dir = 'rtl';
    document.documentElement.classList.add('rtl');
  } else {
    document.documentElement.dir = 'ltr';
    document.documentElement.classList.remove('rtl');
  }
};

// Apply direction on initial load
applyRtlDirection(i18n.language);

// Also listen for language changes
i18n.on('languageChanged', applyRtlDirection);

export default i18n; 