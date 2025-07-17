import styled from "@emotion/styled";
import { TYPOGRAPHY } from "@/styles/typography";
import type { TypographyVariant } from "@/styles/typography";

interface StyledTypographyProps {
  variant: TypographyVariant;
  color?: string;
  align?: "left" | "center" | "right";
}

export const StyledTypography = styled.div<StyledTypographyProps>`
  margin: 0;
  padding: 0;
  font-family: ${({ variant }) => TYPOGRAPHY[variant].fontFamily};
  font-size: ${({ variant }) => TYPOGRAPHY[variant].fontSize};
  font-weight: ${({ variant }) => TYPOGRAPHY[variant].fontWeight};
  line-height: ${({ variant }) => TYPOGRAPHY[variant].lineHeight};
  letter-spacing: ${({ variant }) => TYPOGRAPHY[variant].letterSpacing};
  color: ${({ color, theme }) => color || theme.colors.text.primary};
  text-align: ${({ align }) => align};
  transition: color
    ${({ theme }) =>
      `${theme.animation.duration.normal} ${theme.animation.easing.easeInOut}`};
`;
