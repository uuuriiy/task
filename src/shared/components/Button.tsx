import { ButtonProps as MuiButtonProps, Typography, TypographyProps, useTheme } from "@mui/material";
import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps extends MuiButtonProps {
  uppercase?: boolean;
  icon?: ReactNode;
}

export const StyledButton = styled("button")<{ $gradient: string }>`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 20px 24px;
  border-radius: 12px;
  border: none;
  background: ${({ $gradient }) => $gradient};
  color: #ffffff;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.88;
  }
`

export const StyledButtonText = styled(
  ({ uppercase, ...props }: TypographyProps & { uppercase?: boolean }) => <Typography {...props} />
)`
  font-family: "SF Pro";
  font-size: 16px;
  font-weight: 590;
  line-height: 22px;
  text-transform: ${({ uppercase }) => uppercase ? "uppercase" : "none"};
  text-align: center;
  color: #ffffff;
`

export const Button = ({ children, uppercase, onClick, icon }: ButtonProps) => {
  const theme = useTheme();
  const gradient = theme.custom?.buttonGradient ?? "linear-gradient(84.38deg, #FF8D6B 7.59%, #FFBA47 96.71%)";

  return (
    <StyledButton $gradient={gradient} onClick={onClick}>
      {icon}
      <StyledButtonText uppercase={uppercase}>{children}</StyledButtonText>
    </StyledButton>
  );
};
