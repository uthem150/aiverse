import type { ReactNode } from "react";
import { StyledTypography } from "./Typography.style";
import type { TypographyVariant } from "@/styles/typography";

interface TypographyProps {
  variant: TypographyVariant;
  children: ReactNode;
  color?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const Typography = ({
  variant,
  children,
  color,
  align = "left",
  className,
}: TypographyProps) => {
  return (
    <StyledTypography
      variant={variant}
      color={color}
      align={align}
      className={className}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
