import { GEO_CONFIG, GeoCode } from "@shared/constants/geo";

export type GeoOption = {
  code: GeoCode;
  label: string;
  flag: string;
};

export const getGeoOptions = (): GeoOption[] =>
  (Object.entries(GEO_CONFIG) as [GeoCode, typeof GEO_CONFIG[GeoCode]][]).map(
    ([code, { label, flag }]) => ({ code, label, flag })
  );
