import styled from '@emotion/styled';
import { TYPOGRAPHY } from '@/styles/typography';
import type { TypographyVariant } from '@/styles/typography';
import type { Theme } from '@/styles/themes/types';

interface StyledTypographyProps {
  variant: TypographyVariant;
  color?: string;
  align?: 'left' | 'center' | 'right';
  responsive?: boolean;
}

export const StyledTypography = styled.div<StyledTypographyProps>`
  margin: 0;
  padding: 0;
  font-family: ${({ variant }) => TYPOGRAPHY[variant].fontFamily};
  font-size: ${({ variant }) => TYPOGRAPHY[variant].fontSize};
  font-weight: ${({ variant }) => TYPOGRAPHY[variant].fontWeight};
  line-height: ${({ variant }) => TYPOGRAPHY[variant].lineHeight};
  letter-spacing: ${({ variant }) => TYPOGRAPHY[variant].letterSpacing};
  color: ${({ color, theme }) => color || (theme as Theme).colors.text.primary};
  text-align: ${({ align }) => align};
  transition: color
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

  ${({ responsive, variant }) =>
    responsive &&
    `
    @media (max-width: 768px) {
      font-size: calc(${TYPOGRAPHY[variant].fontSize} * 0.875);
    }

    @media (max-width: 480px) {
      font-size: calc(${TYPOGRAPHY[variant].fontSize} * 0.75);
    }
  `}
`;
