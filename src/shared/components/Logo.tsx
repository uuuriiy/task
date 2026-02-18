import { styled } from "@mui/material/styles";
import logo from "@/assets/images/logo.png";

interface LogoProps {
  width: string;
  height: string;
  alt: string;
}

export const Logo = styled(
    ({ width, height, alt, ...props }: LogoProps) => 
        <img src={logo} width={width} height={height} alt={alt} {...props} />)
`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  object-fit: contain;
`