import { useCallback, useState } from "react";
import { useTranslation } from "@shared/hooks/useTranslation";
import { HeroSection } from "@features/hero/HeroSection";
import { Footer } from "@features/footer/Footer";
import { GameModal } from "@features/game/GameModal";

export const MainPage = () => {
  const { language } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <main>
      <HeroSection onOpen={handleOpen} />
      <Footer />
      <GameModal open={open} onClose={handleClose} language={language} />
    </main>
  );
};
