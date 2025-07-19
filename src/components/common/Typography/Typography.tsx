import type { ReactNode } from 'react';
import { StyledTypography } from './Typography.style';
import type { TypographyVariant } from '@/styles/typography';

interface TypographyProps {
  variant: TypographyVariant;
  children: ReactNode;
  color?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  responsive?: boolean;
}

const Typography = ({
  variant,
  children,
  color,
  align = 'left',
  className,
  responsive = false,
}: TypographyProps) => {
  return (
    <StyledTypography
      variant={variant}
      color={color}
      align={align}
      className={className}
      responsive={responsive}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
