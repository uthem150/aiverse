import styled from '@emotion/styled';
import type { Theme } from '@/styles/themes/types';

export const StyledPage = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => (theme as Theme).spacing.xl};

  @media (max-width: 1024px) { padding: 0 ${({ theme }) => (theme as Theme).spacing.lg}; }
  @media (max-width: 768px) { padding: 0 ${({ theme }) => (theme as Theme).spacing.md}; }
  @media (max-width: 480px) { padding: 0 ${({ theme }) => (theme as Theme).spacing.sm}; }
`;

export const StyledHero = styled.section`
  text-align: center;
  padding: ${({ theme }) => (theme as Theme).spacing['4xl']} 0;
  display: flex; flex-direction: column; align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.xl};
  background: linear-gradient(135deg, rgba(6,182,212,.08) 0%, rgba(99,102,241,.08) 100%);
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.xl};
  margin: ${({ theme }) => (theme as Theme).spacing['3xl']} 0;

  @media (max-width: 768px) {
    padding: ${({ theme }) => (theme as Theme).spacing['2xl']} ${({ theme }) => (theme as Theme).spacing.md};
    margin: ${({ theme }) => (theme as Theme).spacing['2xl']} 0;
  }
`;

export const StyledSection = styled.section`
  margin-bottom: ${({ theme }) => (theme as Theme).spacing['3xl']};
`;

export const StyledCard = styled.div`
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  padding: ${({ theme }) => (theme as Theme).spacing.xl};
  line-height: 1.75;

  ol { margin: ${({ theme }) => (theme as Theme).spacing.md} 0 0 1.25rem; }
  li { margin: .25rem 0; }
`;

export const StyledMeta = styled.p`
  color: #6B7280;
  font-size: .9rem;
  margin-top: ${({ theme }) => (theme as Theme).spacing.sm};
`;
