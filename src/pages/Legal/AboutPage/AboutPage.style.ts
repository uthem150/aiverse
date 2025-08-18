import styled from '@emotion/styled';
import type { Theme } from '@/styles/themes/types';

export const StyledPage = styled.div`
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

export const StyledHero = styled.section`
  text-align: center;
  padding: ${({ theme }) => (theme as Theme).spacing['4xl']} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.xl};
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%);
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.xl};
  margin: ${({ theme }) => (theme as Theme).spacing['3xl']} 0;
`;

export const StyledSection = styled.section`
  margin-bottom: ${({ theme }) => (theme as Theme).spacing['4xl']};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => (theme as Theme).spacing.xl};
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;

export const StyledCard = styled.div`
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  padding: ${({ theme }) => (theme as Theme).spacing.xl};
  text-align: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;
