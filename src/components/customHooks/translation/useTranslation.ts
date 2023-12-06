import { useLocalStorage } from "../storage/useStorage";
import * as translationsData from "./translations";

type TypeUseTranslation = {
  language: string | undefined;
  setLanguage: (lang: string) => void;
  fallBackLanguage: string | undefined;
  setFallBackLanguage: (lang: string) => void;
  t: (key: string) => string;
}

export const useTranslation = (): TypeUseTranslation => {
  const [ language, setLanguage ] = useLocalStorage("language", "en");
  const [ fallBackLanguage, setFallBackLanguage ] = useLocalStorage("fallBackLanguage", "en");

  const translate = (key: string) => {
    const keys = key.split(".");
    return (
      getNestedTranslation(language || "en", keys) ||
      getNestedTranslation(fallBackLanguage || "en", keys) ||
      key 
    )
  }

  return {
    language,
    setLanguage,
    fallBackLanguage,
    setFallBackLanguage,
    t: translate,
  }
}

const translations: Record<string, any> = translationsData;

const getNestedTranslation = (language: string, keys: string[]) : string => {
  return keys.reduce((obj, key) => {
    return (obj && obj[key]) ? obj[key] : "";
  }, translations[language]) || "";
}