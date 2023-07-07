// noinspection TypeScriptValidateTypes

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import isSupportedLang from '@src/shared/helpers/isSupportedLang';

// i18n.on('languageChanged', function (lng) {
//   // if the language we switched to is the default language we need to remove the /en from URL
//   if (lng === i18n.options.fallbackLng[0]) {
//     if (window.location.pathname.includes(`/${i18n.options.fallbackLng[0]}`)) {
//       const newUrl = window.location.pathname.replace(`/${i18n.options.fallbackLng[0]}`, '');
//       window.location.replace(newUrl);
//     }
//   }
// });

// i18n.on('initialized', (options) => {
//   const urlLang = window.location.pathname.split('/')[1];
//   // TODO detect language manualy on first start
//   if (!(urlLang === 'en' || urlLang === 'ru')) window.location.replace('/en/');
// });

// i18n.on('initialized', (options) => {
//   const urlLang = window.location.pathname.split('/')[1];
//   if (isSupportedLang()) {
//     i18n.changeLanguage(urlLang);
//   } else window.location.replace(`/${i18n.resolvedLanguage}/`);
// });

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru'],
    whitelist: ['en', 'ru'],
    // detection: {
    //   order: ['path'],
    //   lookupFromPathIndex: 0,
    //   checkWhitelist: true,
    // },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    debug: true,
  });

export default i18n;
