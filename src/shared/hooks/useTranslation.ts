import { useMemo } from "react";
import { useGeo } from "@app/providers/GeoProvider";
import { GEO_CONFIG } from "@shared/constants/geo";
import { translations } from "@shared/i18n/translations";

type TranslationKey = keyof typeof translations.en;

export const useTranslation = () => {
  const { geo } = useGeo();
  const language = GEO_CONFIG[geo].language;
  const t = useMemo(
    () => (key: TranslationKey) =>
      translations[language as keyof typeof translations][key],
    [language]
  );
  
  return { t, language };
};
