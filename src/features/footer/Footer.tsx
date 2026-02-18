import { Box, styled } from "@mui/material";
import leftBlockImage from "@/assets/images/ManWithAce.png";
import { DownloadCard } from "./components/DownloadCard";
import { CertificateSection } from "./components/CertificateSection";
import { LangSelectWithSocial } from "./components/LangSelectWithSocial";

const Wrapper = styled(Box)`
  max-width: 1920px;
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
  background: linear-gradient(270deg, #06225D 0%, #02011F 37.03%);
`

const Content = styled(Box)`
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  padding: 61px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    padding: 60px 0 28px;
  }
`

const LeftBlockImage = styled("img")`
  width: 288px;
  height: 288px;
  object-fit: contain;

  @media (max-width: 1200px) {
    display: none;
  }
`

const LeftGroup = styled(Box)`
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  display: flex;
  gap: 64px;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 52px;
  }
`

const MobileSocial = styled(Box)`
  display: none;

  @media (max-width: 1200px) {
    display: flex;
    width: 100%;
    justify-content: center;
  }
`

const RightGroup = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 288px;

  @media (max-width: 1200px) {
    display: none;
  }
`

export const Footer = () => (
  <Wrapper>
    <Content>
      <LeftGroup>
        <LeftBlockImage src={leftBlockImage} alt="left block image" />
        <DownloadCard />
        <MobileSocial>
          <LangSelectWithSocial alignItems="center" />
        </MobileSocial>
        <CertificateSection />
      </LeftGroup>

      <RightGroup>
        <LangSelectWithSocial alignItems="flex-end" />
      </RightGroup>
    </Content>
  </Wrapper>
);
