import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
    .use(HttpApi) // load translations using http (from public folder)
    .use(LanguageDetector) // detect user language
    .use(initReactI18next) // pass the i18n instance to react-i18next
    .init({
        supportedLngs: ['en', 'pl'],
        fallbackLng: 'en',
        debug: false,
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
        backend: {
            loadPath: '/locales/{{lng}}/translation.json',
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
