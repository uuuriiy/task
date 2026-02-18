import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      buttonGradient: string;
      accentFrom: string;
      accentTo: string;
    };
  }
  interface ThemeOptions {
    custom?: {
      buttonGradient?: string;
      accentFrom?: string;
      accentTo?: string;
    };
  }
}
