import styled from '@emotion/styled';
import type { Theme } from '@/styles/themes/types';

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  min-width: 100%;
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  border-bottom: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  backdrop-filter: blur(10px);
  transition: all
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};
`;

export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: ${({ theme }) => (theme as Theme).spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(20px);
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const StyledThemeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  background-color: ${({ theme }) => (theme as Theme).colors.interactive.secondary};
  color: ${({ theme }) => (theme as Theme).colors.text.primary};
  cursor: pointer;
  transition: all
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

  &:hover {
    background-color: ${({ theme }) => (theme as Theme).colors.interactive.secondaryHover};
  }

  &:active {
    background-color: ${({ theme }) => (theme as Theme).colors.interactive.secondaryPressed};
  }
`;

export const NavButton = styled.button`
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border: none;
  border-radius: 12px;
  padding: 0.8rem 1.5rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
    background: linear-gradient(135deg, #2563eb, #7c3aed);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
