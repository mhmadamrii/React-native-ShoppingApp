import i18n from "i18next";
import en from "./translation/en.json";
import es from "./translation/es.json";

const resources = {
  en: { translation: en },
  es: { translation: es },
};

console.log("resources", resources.en);

i18n.init({
  lng: "en",
  resources,
});

export default i18n;
