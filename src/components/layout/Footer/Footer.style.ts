import styled from '@emotion/styled';
import type { Theme } from '@/styles/themes/types';

export const StyledFooter = styled.footer`
  margin-top: ${({ theme }) => (theme as Theme).spacing['4xl']};
  background: ${({ theme }) => (theme as Theme).colors.background.elevated};
  border-top: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  color: ${({ theme }) => (theme as Theme).colors.text.secondary};
`;

export const StyledFooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  padding: ${({ theme }) => `${(theme as Theme).spacing['2xl']} ${(theme as Theme).spacing.xl}`};

  @media (max-width: 1024px) {
    padding: ${({ theme }) => `${(theme as Theme).spacing['2xl']} ${(theme as Theme).spacing.lg}`};
  }
  @media (max-width: 768px) {
    padding: ${({ theme }) => `${(theme as Theme).spacing.xl} ${(theme as Theme).spacing.md}`};
  }
  @media (max-width: 480px) {
    padding: ${({ theme }) => `${(theme as Theme).spacing.lg} ${(theme as Theme).spacing.sm}`};
  }
`;

export const StyledColumns = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${({ theme }) => (theme as Theme).spacing['2xl']};

  @media (max-width: 1024px) {
    grid-template-columns: 1.6fr 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => (theme as Theme).spacing.md};

  .logo {
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => (theme as Theme).spacing.sm};
    font-weight: 800;
    font-size: 1.15rem;
    color: ${({ theme }) => (theme as Theme).colors.text.primary};
  }

  p {
    margin: 0;
    line-height: 1.6;
  }
`;

export const StyledCol = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => (theme as Theme).spacing.sm};
`;

export const StyledColTitle = styled.h4`
  margin: 0 0 ${({ theme }) => (theme as Theme).spacing.sm} 0;
  color: ${({ theme }) => (theme as Theme).colors.text.primary};
  font-size: 0.95rem;
  font-weight: 700;
`;

export const StyledLink = styled.span`
  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => (theme as Theme).colors.text.secondary};
    text-decoration: none;
    font-size: 0.95rem;
    padding: 4px 0;
    border-radius: ${({ theme }) => (theme as Theme).borderRadius.sm};
    transition:
      color 0.2s ease,
      transform 0.2s ease;

    &:hover {
      color: ${({ theme }) => (theme as Theme).colors.brand.primary};
      transform: translateX(2px);
    }
  }
`;

export const StyledSocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.md};
  margin-top: ${({ theme }) => (theme as Theme).spacing.md};

  a {
    display: inline-flex;
    width: 36px;
    height: 36px;
    border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
    border-radius: 999px;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${({ theme }) => (theme as Theme).colors.text.secondary};
    transition: all 0.2s ease;

    &:hover {
      color: ${({ theme }) => (theme as Theme).colors.brand.primary};
      border-color: ${({ theme }) => (theme as Theme).colors.brand.primary};
      transform: translateY(-2px);
    }
  }
`;

export const StyledBottomBar = styled.div`
  margin-top: ${({ theme }) => (theme as Theme).spacing['2xl']};
  padding-top: ${({ theme }) => (theme as Theme).spacing.lg};
  border-top: 1px dashed ${({ theme }) => (theme as Theme).colors.border.primary};
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => (theme as Theme).spacing.md};
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;

  .right {
    display: flex;
    gap: ${({ theme }) => (theme as Theme).spacing.md};

    a {
      color: ${({ theme }) => (theme as Theme).colors.text.secondary};
      text-decoration: none;
      &:hover {
        color: ${({ theme }) => (theme as Theme).colors.brand.primary};
      }
    }
  }
`;
