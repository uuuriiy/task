import { createTheme } from "@mui/material/styles";
import { GeoCode } from "@shared/constants/geo";

// Per-geo design tokens: button gradient + MUI primary
const GEO_THEME = {
  EN: {
    primary: "#FFBA47",
    accentFrom: "#FF8D6B",
    accentTo: "#FFBA47",
    buttonGradient: "linear-gradient(84.38deg, #FF8D6B 7.59%, #FFBA47 96.71%)",
  },
  TR: {
    primary: "#E30A17",
    accentFrom: "#E30A17",
    accentTo: "#FF6060",
    buttonGradient: "linear-gradient(84.38deg, #E30A17 7.59%, #FF6060 96.71%)",
  },
  DE: {
    primary: "#1E88E5",
    accentFrom: "#1E88E5",
    accentTo: "#26C6DA",
    buttonGradient: "linear-gradient(84.38deg, #1E88E5 7.59%, #26C6DA 96.71%)",
  },
};

export const createAppTheme = (geo: GeoCode) => {
  const { primary, accentFrom, accentTo, buttonGradient } = GEO_THEME[geo];
  return createTheme({
    palette: {
      mode: "dark",
      primary: { main: primary },
      background: { default: "#08142B" },
    },
    shape: { borderRadius: 12 },
    custom: { buttonGradient, accentFrom, accentTo },
  });
};
