import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { GeoCode } from "@shared/constants/geo";

type GeoContextValue = {
  geo: GeoCode;
  setGeo: Dispatch<SetStateAction<GeoCode>>;
};

export const GeoContext = createContext<GeoContextValue | null>(null);

export const useGeo = () => {
  const value = useContext(GeoContext);
  if (!value) throw new Error("useGeo must be used within GeoProvider");
  return value;
};

export const GeoProvider = ({ children }: { children: ReactNode }) => {
  const [geo, setGeo] = useState<GeoCode>("EN");
  return (
    <GeoContext.Provider value={{ geo, setGeo }}>
      {children}
    </GeoContext.Provider>
  );
};
