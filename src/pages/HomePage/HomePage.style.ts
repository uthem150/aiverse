import styled from '@emotion/styled';
import type { Theme } from '@/styles/themes/types';

export const StyledHomePage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => (theme as Theme).spacing.xl};

  @media (max-width: 1024px) {
    padding: 0 ${({ theme }) => (theme as Theme).spacing.lg};
  }

  @media (max-width: 768px) {
    padding: 0 ${({ theme }) => (theme as Theme).spacing.md};
  }

  @media (max-width: 480px) {
    padding: 0 ${({ theme }) => (theme as Theme).spacing.sm};
  }
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

  @media (max-width: 768px) {
    margin-bottom: ${({ theme }) => (theme as Theme).spacing['2xl']};
    padding: ${({ theme }) => (theme as Theme).spacing['2xl']} 0;
  }

  @media (max-width: 480px) {
    margin-bottom: ${({ theme }) => (theme as Theme).spacing.xl};
    padding: ${({ theme }) => `${(theme as Theme).spacing['2xl']} ${(theme as Theme).spacing.md}`};
  }
`;

export const StyledExperienceSection = styled.section`
  margin-bottom: ${({ theme }) => (theme as Theme).spacing['4xl']};
  
  @media (max-width: 768px) {
    margin-bottom: ${({ theme }) => (theme as Theme).spacing['2xl']};
  }
`;

export const StyledExperienceCard = styled.div`
  background: linear-gradient(135deg, #1a0a3a 0%, #2d1b4e 50%, #4c1d95 100%);
  border: 2px solid rgba(168, 85, 247, 0.3);
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.xl};
  padding: ${({ theme }) => (theme as Theme).spacing['2xl']};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(168, 85, 247, 0.4);
    border-color: rgba(168, 85, 247, 0.6);
    
    &:before {
      left: 100%;
    }
  }

  .experience-header {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => (theme as Theme).spacing.lg};
    margin-bottom: ${({ theme }) => (theme as Theme).spacing.xl};
    
    svg {
      color: #a855f7;
      filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.5));
    }
  }

  .experience-features {
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => (theme as Theme).spacing.md};
    margin-bottom: ${({ theme }) => (theme as Theme).spacing.lg};

    .feature {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => (theme as Theme).spacing.sm};
      background: rgba(255, 255, 255, 0.1);
      padding: ${({ theme }) => (theme as Theme).spacing.sm} ${({ theme }) => (theme as Theme).spacing.md};
      border-radius: ${({ theme }) => (theme as Theme).borderRadius.md};
      color: rgba(255, 255, 255, 0.9);
      font-size: 0.9rem;
      font-weight: 500;

      svg {
        color: #f59e0b;
      }
    }
  }

  .experience-cta {
    text-align: center;
    padding: ${({ theme }) => (theme as Theme).spacing.md};
    background: rgba(0, 0, 0, 0.2);
    border-radius: ${({ theme }) => (theme as Theme).borderRadius.md};
    border: 1px dashed rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => (theme as Theme).spacing.xl};
    
    .experience-header {
      flex-direction: column;
      text-align: center;
    }
    
    .experience-features {
      justify-content: center;
    }
  }
`;

export const StyledSection = styled.section`
  margin-bottom: ${({ theme }) => (theme as Theme).spacing['4xl']};

  @media (max-width: 768px) {
    margin-bottom: ${({ theme }) => (theme as Theme).spacing['2xl']};
  }

  @media (max-width: 480px) {
    margin-bottom: ${({ theme }) => (theme as Theme).spacing['2xl']};
  }
`;

export const StyledSectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => (theme as Theme).spacing['2xl']};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => (theme as Theme).spacing.sm};

  @media (max-width: 768px) {
    margin-bottom: ${({ theme }) => (theme as Theme).spacing['2xl']};
  }

  @media (max-width: 480px) {
    margin-bottom: ${({ theme }) => (theme as Theme).spacing.xl};
  }
`;

export const StyledStatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => (theme as Theme).spacing.xl};
  margin-bottom: ${({ theme }) => (theme as Theme).spacing['2xl']};

  @media (max-width: 768px) {
    gap: ${({ theme }) => (theme as Theme).spacing.lg};
  }

  @media (max-width: 480px) {
    gap: ${({ theme }) => (theme as Theme).spacing.md};
  }
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

  @media (max-width: 768px) {
    padding: ${({ theme }) => (theme as Theme).spacing.md};
  }
`;

export const StyledCategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => (theme as Theme).spacing.xl};

  @media (max-width: 768px) {
    gap: ${({ theme }) => (theme as Theme).spacing.lg};
  }

  @media (max-width: 480px) {
    gap: ${({ theme }) => (theme as Theme).spacing.md};
  }
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

  @media (max-width: 768px) {
    padding: ${({ theme }) => (theme as Theme).spacing.xl};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => (theme as Theme).spacing.lg};
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
    gap: ${({ theme }) => (theme as Theme).spacing.lg};
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => (theme as Theme).spacing.md};
  }
`;
