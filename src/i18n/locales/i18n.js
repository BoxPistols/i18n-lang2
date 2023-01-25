import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import Backend from "i18next-xhr-backend"
// import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"

import translation_en from "./en/translation.json"
import translation_ja from "./ja/translation.json"

const resources = {
  ja: {
    translation: translation_ja,
  },
  en: {
    translation: translation_en,
  },
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(new LanguageDetector(null, { lookupLocalStorage: "lang" }))
  .init({
    lng: window.localStorage.defaultLanguage,
    resources,
    fallbackLng: "ja",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
