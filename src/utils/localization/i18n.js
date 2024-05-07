import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { ua, en, ru } from "./dictionaries";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      lookupLocalStorage: "LANGUAGE_KEY",
    },
    resources: { ua, en, ru },
    fallbackLng: "ua",
    whitelist: ["ua", "en", "ru"],
    returnObjects: true,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
    },
  });

export default i18n;
