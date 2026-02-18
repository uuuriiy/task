import { Box, styled, Typography } from "@mui/material";
import { Logo } from "@/shared/components/Logo";
import { Button } from "@/shared/components/Button";
import { useTranslation } from "@shared/hooks/useTranslation";
import DownloadIcon from "@/assets/icons/download.svg";

const DashedGradientBorder = () => (
  <svg
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "visible" }}
    viewBox="0 0 390 288"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden
  >
    <defs>
      <linearGradient id="footerBorderGrad" x1="0" y1="0" x2="390" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="7.59%" stopColor="#FF8D6B" />
        <stop offset="96.71%" stopColor="#FFBA47" />
      </linearGradient>
    </defs>
    <rect
      x="1" y="1" width="388" height="286"
      rx="16" ry="16"
      fill="none"
      stroke="url(#footerBorderGrad)"
      strokeWidth="2"
      strokeDasharray="8 6"
      strokeLinecap="round"
    />
  </svg>
)

const Wrapper = styled(Box)`
  position: relative;
  max-width: 390px;
  min-width: 0;
  width: 100%;
  flex-shrink: 0;

  @media (max-width: 380px) {
    max-width: 355px;
  }
`

const Card = styled(Box)`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 24px;
  border-radius: 16px;
`

const Content = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  justify-content: center;
`

const TitleWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;
`

const Title = styled(Typography)`
  font-family: "SF Pro";
  font-size: 32px;
  font-weight: 860;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
`

const Description = styled(Typography)`
  font-family: "SF Pro";
  font-size: 16px;
  font-weight: 590;
  line-height: 22px;
  text-align: center;
  color: #BABABA;
`

export const DownloadCard = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <DashedGradientBorder />
      <Card>
        <Logo width="175px" height="80px" alt="logo" />
        <Content>
          <TitleWrapper>
            <Title>{t("download")}</Title>
            <Description>{t("downloadDescription")}</Description>
          </TitleWrapper>
          <Box sx={{ width: "250px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Button icon={<DownloadIcon />}>
              {t("install")}
            </Button>
          </Box>
        </Content>
      </Card>
    </Wrapper>
  );
};
