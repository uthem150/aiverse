import type { ReactNode, ButtonHTMLAttributes } from "react";
import { StyledButton } from "./Button.style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outlined";
  size?: "small" | "medium" | "large";
  children: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
}

const Button = ({
  variant = "primary",
  size = "medium",
  children,
  fullWidth = false,
  loading = false,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      loading={loading}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </StyledButton>
  );
};

export default Button;
