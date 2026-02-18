import { ThemeProvider } from "@mui/material";
import { ReactNode, useMemo } from "react";
import { useGeo } from "./GeoProvider";
import { createAppTheme } from "@shared/theme/createAppTheme";

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const { geo } = useGeo();
  const theme = useMemo(() => createAppTheme(geo), [geo]);
  
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
