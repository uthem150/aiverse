import styled from '@emotion/styled';
import type { Theme } from '@/styles/themes/types';

export const StyledHomePage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const StyledHeroSection = styled.section`
  text-align: center;
  padding: ${({ theme }) => (theme as Theme).spacing['4xl']} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.xl};
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.xl};
  margin-bottom: ${({ theme }) => (theme as Theme).spacing['4xl']};
`;

export const StyledSection = styled.section`
  margin-bottom: ${({ theme }) => (theme as Theme).spacing['4xl']};
`;

export const StyledSectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => (theme as Theme).spacing['2xl']};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => (theme as Theme).spacing.sm};
`;

export const StyledStatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => (theme as Theme).spacing.xl};
  margin-bottom: ${({ theme }) => (theme as Theme).spacing['2xl']};
`;

export const StyledStatsCard = styled.div`
  text-align: center;
  padding: ${({ theme }) => (theme as Theme).spacing.xl};
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  transition: all
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

  &:hover {
    box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.medium};
    transform: translateY(-2px);
  }
`;

export const StyledCategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => (theme as Theme).spacing.xl};
`;

interface CategoryCardProps {
  color: string;
}

export const StyledCategoryCard = styled.div<CategoryCardProps>`
  padding: ${({ theme }) => (theme as Theme).spacing['2xl']};
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  border: 2px solid ${({ color }) => color};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.xl};
  text-align: center;
  cursor: pointer;
  transition: all
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.md};

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
    background: ${({ color }) => `${color}08`};
  }
`;

export const StyledCategoryIcon = styled.div`
  font-size: 3rem;
  line-height: 1;
`;

export const StyledTestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${({ theme }) => (theme as Theme).spacing.xl};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
