import styled from "@emotion/styled";
import { css } from "@emotion/react";
import type { Theme } from "@/styles/themes/types";
import { FONT_FAMILY } from "@/styles/typography";

interface StyledButtonProps {
  variant: "primary" | "secondary" | "outlined";
  size: "small" | "medium" | "large";
  fullWidth?: boolean;
  loading?: boolean;
}

const buttonVariants = (theme: Theme) => ({
  primary: css`
    background-color: ${theme.colors.interactive.primary};
    color: ${theme.colors.text.inverse};
    border: 1px solid ${theme.colors.interactive.primary};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.interactive.primaryHover};
      border-color: ${theme.colors.interactive.primaryHover};
    }

    &:active:not(:disabled) {
      background-color: ${theme.colors.interactive.primaryPressed};
      border-color: ${theme.colors.interactive.primaryPressed};
    }
  `,
  secondary: css`
    background-color: ${theme.colors.interactive.secondary};
    color: ${theme.colors.text.primary};
    border: 1px solid ${theme.colors.border.primary};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.interactive.secondaryHover};
    }

    &:active:not(:disabled) {
      background-color: ${theme.colors.interactive.secondaryPressed};
    }
  `,
  outlined: css`
    background-color: transparent;
    color: ${theme.colors.interactive.primary};
    border: 1px solid ${theme.colors.interactive.primary};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.interactive.primary};
      color: ${theme.colors.text.inverse};
    }

    &:active:not(:disabled) {
      background-color: ${theme.colors.interactive.primaryPressed};
      border-color: ${theme.colors.interactive.primaryPressed};
    }
  `,
});

const buttonSizes = {
  small: css`
    padding: 8px 16px;
    font-size: 0.875rem;
    min-height: 32px;
  `,
  medium: css`
    padding: 12px 24px;
    font-size: 1rem;
    min-height: 40px;
  `,
  large: css`
    padding: 16px 32px;
    font-size: 1.125rem;
    min-height: 48px;
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${FONT_FAMILY.primary};
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.025em;
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.md};
  cursor: pointer;
  transition: all
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};
  text-decoration: none;
  outline: none;
  user-select: none;
  white-space: nowrap;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  ${({ variant, theme }) => buttonVariants(theme as Theme)[variant]};
  ${({ size }) => buttonSizes[size]};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => (theme as Theme).colors.border.focus};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ loading }) =>
    loading &&
    css`
      opacity: 0.8;
      cursor: not-allowed;
    `};
`;
