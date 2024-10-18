import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // Connects i18next with React
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to our application",
        },
      },
      uz: {
        translation: {
          welcome: "Dasturimizga xush kelibsiz",
        },
      },
    },
    lng: "en", // Set the default language
    fallbackLng: "en", // Fallback language if translation is missing
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
