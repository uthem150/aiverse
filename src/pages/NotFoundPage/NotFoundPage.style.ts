import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import type { Theme } from '@/styles/themes/types';

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const glowAnimation = keyframes`
  0%, 100% { text-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
  50% { text-shadow: 0 0 30px rgba(99, 102, 241, 0.6); }
`;

export const StyledNotFoundPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: ${({ theme }) => (theme as Theme).spacing.xl};
  text-align: center;
`;

export const StyledErrorCode = styled.div`
  font-size: 8rem;
  font-weight: 800;
  color: ${({ theme }) => (theme as Theme).colors.interactive.primary};
  margin-bottom: ${({ theme }) => (theme as Theme).spacing.lg};
  animation:
    ${floatAnimation} 3s ease-in-out infinite,
    ${glowAnimation} 2s ease-in-out infinite;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

export const StyledErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => (theme as Theme).spacing.md};
  margin-bottom: ${({ theme }) => (theme as Theme).spacing['2xl']};
  max-width: 600px;
`;

export const StyledActions = styled.div`
  display: flex;
  gap: ${({ theme }) => (theme as Theme).spacing.md};
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
`;
