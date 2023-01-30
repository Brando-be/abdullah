import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { resources } from './i18n/resources';

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  debug: true,
});

export default i18n;
