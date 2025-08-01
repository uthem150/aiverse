import type { ReactNode, ButtonHTMLAttributes } from 'react';
import { StyledButton } from './Button.style';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'loading'> {
  variant?: 'primary' | 'secondary' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
}

const Button = ({
  variant = 'primary',
  size = 'medium',
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
      $loading={loading} // $ prefix로 styled-component에만 전달
      disabled={disabled || loading}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </StyledButton>
  );
};

export default Button;
