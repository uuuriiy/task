import { Box } from "@mui/material";
import styled from "styled-components";
import { Button } from "@shared/components/Button";
import { useTranslation } from "@shared/hooks/useTranslation";
import heroImage from "@/assets/images/hero.webp";
import contentImage from "@/assets/images/ContentImg.webp";
import { Logo } from "@/shared/components/Logo";

const Wrapper = styled(Box)`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(360deg, #000000 20.07%, rgba(0, 0, 0, 0) 100%);
    pointer-events: none;
  }
`;

const Content = styled(Box)`
  max-width: 358px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
  z-index: 1;
`

const ContentImage = styled.img`
  width: 326px;
  height: 200px;
  object-fit: contain;
`

export const HeroSection = ({ onOpen }: { onOpen: () => void }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Content>
        <Logo width="263px" height="120px" alt="logo" />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4, width: "100%" }}>
          <ContentImage src={contentImage} alt="content" />
          <Button uppercase onClick={onOpen}>
            {t("openGame")}
          </Button>
        </Box> 
      </Content>
    </Wrapper>
  );
};
