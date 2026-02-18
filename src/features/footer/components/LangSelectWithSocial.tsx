import { useCallback } from "react";
import { Box, MenuItem, Select, styled, Typography } from "@mui/material";
import { useGeo } from "@app/providers/GeoProvider";
import { GEO_CONFIG, GeoCode } from "@shared/constants/geo";
import { getGeoOptions } from "@shared/utils/geo";

// Static — computed once at module load, never changes
const GEO_OPTIONS = getGeoOptions();
import InstagramSrc from "@/assets/icons/Instagram.svg?url";
import TelegramSrc from "@/assets/icons/Telegram.svg?url";
import TwitterSrc from "@/assets/icons/Twitter.svg?url";
import EmailSrc from "@/assets/icons/Email.svg?url";

const MENU_PAPER_SX = {
  marginTop: 1,
  background: "#0d1b36",
  backdropFilter: "blur(10px)",
  border: "1px solid #FFFFFF1A",
  borderRadius: "8px",
  color: "#ffffff",
  "& .MuiMenuItem-root": { fontFamily: "SF Pro", fontSize: "14px" },
  "& .MuiMenuItem-root:hover": { background: "rgba(255,255,255,0.08)" },
  "& .Mui-selected": { background: "rgba(255,255,255,0.12) !important" },
} as const;

const StyledSelect = styled(Select)`
  width: 289px;
  height: 56px;
  color: #ffffff;
  font-family: "SF Pro";
  font-size: 14px;
  border-radius: 8px;
  background: #FFFFFF1A;
  backdrop-filter: blur(10px);

  & .MuiSelect-select {
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  & .MuiOutlinedInput-notchedOutline {
    border: 1px solid #FFFFFF1A;
  }
  &:hover .MuiOutlinedInput-notchedOutline {
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  & .MuiSvgIcon-root {
    color: #ffffff;
  }
`

const FlagEmoji = styled("span")`
  font-size: 20px;
  line-height: 1;
`

const SocialLabel = styled(Typography)`
  font-family: "SF Pro";
  font-size: 14px;
  font-weight: 400;
  color: #FBFBFBB2;
`

const SocialLink = styled("a")`
  display: flex;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
`

const SOCIAL_LINKS = [
  { src: InstagramSrc, label: "Instagram" },
  { src: TelegramSrc, label: "Telegram" },
  { src: TwitterSrc, label: "Twitter" },
  { src: EmailSrc, label: "Email" },
];

type Props = {
  alignItems?: "flex-end" | "center";
};

export const LangSelectWithSocial = ({ alignItems = "flex-end" }: Props) => {
  const { geo, setGeo } = useGeo();
  const { flag, label } = GEO_CONFIG[geo];

  const handleChange = useCallback(
    (e: { target: { value: unknown } }) => setGeo(e.target.value as GeoCode),
    [setGeo]
  );

  return (
    <>
      <StyledSelect
        value={geo}
        onChange={handleChange}
        renderValue={() => (
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FlagEmoji>{flag}</FlagEmoji>
            <span>{label}</span>
          </Box>
        )}
        MenuProps={{ PaperProps: { sx: MENU_PAPER_SX } }}
      >
        {GEO_OPTIONS.map(({ code, label: optLabel, flag: optFlag }) => (
          <MenuItem key={code} value={code}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <FlagEmoji>{optFlag}</FlagEmoji>
              {optLabel}
            </Box>
          </MenuItem>
        ))}
      </StyledSelect>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems, gap: 1.5 }}>
        <SocialLabel>Us on social media:</SocialLabel>
        <Box sx={{ display: "flex", gap: 1.5 }}>
          {SOCIAL_LINKS.map(({ src, label }) => (
            <SocialLink key={label} href="#" aria-label={label}>
              <img src={src} width={52} height={52} alt={label} />
            </SocialLink>
          ))}
        </Box>
      </Box>
    </>
  );
};
