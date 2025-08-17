import styled from '@emotion/styled';
import type { Theme } from '@/styles/themes/types';

export const StyledPage = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => (theme as Theme).spacing.xl};

  @media (max-width: 1024px) { padding: 0 ${({ theme }) => (theme as Theme).spacing.lg}; }
  @media (max-width: 768px) { padding: 0 ${({ theme }) => (theme as Theme).spacing.md}; }
  @media (max-width: 480px) { padding: 0 ${({ theme }) => (theme as Theme).spacing.sm}; }
`;

export const StyledHero = styled.section`
  text-align: center;
  padding: ${({ theme }) => (theme as Theme).spacing['3xl']} 0;
  display: flex; flex-direction: column; align-items: center; gap: ${({ theme }) => (theme as Theme).spacing.lg};
  background: linear-gradient(135deg, rgba(99,102,241,.08) 0%, rgba(139,92,246,.08) 100%);
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.xl};
  margin: ${({ theme }) => (theme as Theme).spacing['2xl']} 0;
`;

export const StyledForm = styled.form`
  display: grid;
  gap: ${({ theme }) => (theme as Theme).spacing.lg};
`;

export const Field = styled.div`
  display: grid;
  gap: .5rem;

  label {
    font-weight: 600;
  }
  input, textarea {
    width: 100%;
    border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
    background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
    border-radius: ${({ theme }) => (theme as Theme).borderRadius.md};
    padding: .9rem 1rem;
    font-size: 1rem;
    outline: none;
  }
  textarea { min-height: 160px; resize: vertical; }
`;

export const InfoBox = styled.div`
  margin-top: ${({ theme }) => (theme as Theme).spacing.xl};
  padding: ${({ theme }) => (theme as Theme).spacing.lg};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  background: ${({ theme }) => (theme as Theme).colors.background.elevated};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};

  a { color: #6366F1; text-decoration: underline; }
`;
