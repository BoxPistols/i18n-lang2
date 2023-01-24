import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

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
  .use(initReactI18next)
  .init({
    resources,
    lng: "ja",
    fallbackLng: "ja",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
