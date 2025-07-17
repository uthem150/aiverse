import styled from "@emotion/styled";
import type { Theme } from "@/styles/themes/types";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: ${({ theme }) =>
    (theme as Theme).colors.background.elevated};
  border-bottom: 1px solid
    ${({ theme }) => (theme as Theme).colors.border.primary};
  backdrop-filter: blur(10px);
  transition: all
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};
`;

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => (theme as Theme).spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.sm};
`;

export const StyledThemeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  background-color: ${({ theme }) =>
    (theme as Theme).colors.interactive.secondary};
  color: ${({ theme }) => (theme as Theme).colors.text.primary};
  cursor: pointer;
  transition: all
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

  &:hover {
    background-color: ${({ theme }) =>
      (theme as Theme).colors.interactive.secondaryHover};
  }

  &:active {
    background-color: ${({ theme }) =>
      (theme as Theme).colors.interactive.secondaryPressed};
  }
`;
