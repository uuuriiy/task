import { GeoProvider } from "./providers/GeoProvider";
import { AppThemeProvider } from "./providers/AppThemeProvider";
import { MainPage } from "./routes/MainPage";

export default function App() {
  return (
    <GeoProvider>
      <AppThemeProvider>
        <MainPage />
      </AppThemeProvider>
    </GeoProvider>
  );
}
