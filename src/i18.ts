// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz", // default language
    supportedLngs: ["uz", "ru", "qr"], // specify your languages
    debug: true,
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    backend: {
      loadPath: "/src/locales/{{lng}}/{{ns}}.json", // Path to your translation files
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
