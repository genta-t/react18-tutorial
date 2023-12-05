import { useTranslation } from "./useTranslation";

const TranslationComp = () => {
  const { language, setLanguage , setFallBackLanguage, t } = useTranslation();

  return (
    <>
      <h2>translation</h2>
      <p>{language}</p>
      <p>{t("hi")}</p>
      <p>{t("bye")}</p>
      <p>{t("nested.value")}</p>
      <button onClick={() => setLanguage("sp")}>スペイン語</button>
      <button onClick={() => setLanguage("en")}>英語</button>
      <button onClick={() => setFallBackLanguage("sp")}>言語を変更</button>
      <hr />
    </>
  )
}

export default TranslationComp;