import { Box, styled, Typography } from "@mui/material";
import { useTranslation } from "@shared/hooks/useTranslation";
import AgeRestrictedIcon from "@/assets/icons/AgeRestriction.svg";
import LicenseIcon from "@/assets/icons/License.svg";

const Section = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: start;

  @media (max-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    height: auto;
    flex: 1;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const Label = styled(Typography)`
  font-family: "SF Pro";
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #FBFBFBB2;
  white-space: pre-line;

  @media (max-width: 1200px) {
    text-align: center;
  }
`

const itemSx = {
  display: "flex",
  alignItems: "center",
  gap: 1.5,
  "@media (max-width: 1200px)": {
    flex: 0.5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
} as const;

export const CertificateSection = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <Box sx={itemSx}>
        <AgeRestrictedIcon />
        <Label>{t("ageRestricted")}</Label>
      </Box>
      <Box sx={itemSx}>
        <LicenseIcon />
        <Label>{t("license")}</Label>
      </Box>
    </Section>
  );
};
