import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import type { Theme } from '@/styles/themes/types';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledShareResult = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => (theme as Theme).spacing.lg};
  padding: ${({ theme }) => (theme as Theme).spacing.xl};
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.xl};
  margin-top: ${({ theme }) => (theme as Theme).spacing.xl};
  box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.large};
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => (theme as Theme).spacing.md};
`;

export const StyledCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.md};
  background-color: ${({ theme }) => (theme as Theme).colors.interactive.secondary};
  color: ${({ theme }) => (theme as Theme).colors.text.primary};
  cursor: pointer;
  transition: all
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

  &:hover {
    background-color: ${({ theme }) => (theme as Theme).colors.interactive.secondaryHover};
  }
`;

export const StyledLoadingOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.md};
  padding: ${({ theme }) => (theme as Theme).spacing.xl};
  background-color: ${({ theme }) => (theme as Theme).colors.background.secondary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  margin: ${({ theme }) => (theme as Theme).spacing.lg} 0;

  .spinning {
    animation: ${spinAnimation} 1s linear infinite;
    color: ${({ theme }) => (theme as Theme).colors.interactive.primary};
  }
`;

export const StyledImagePreview = styled.div`
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => (theme as Theme).spacing.lg} 0;

  img {
    max-width: 100%;
    max-height: 400px;
    height: auto;
    border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
    box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.medium};
  }
`;

export const StyledShareGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => (theme as Theme).spacing.md};

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledShareButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.sm};
  padding: ${({ theme }) => (theme as Theme).spacing.lg};
  background-color: ${({ theme }) => (theme as Theme).colors.interactive.secondary};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  color: ${({ theme }) => (theme as Theme).colors.text.primary};
  cursor: pointer;
  transition: all
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};
  font-size: 0.875rem;
  font-weight: 500;
  min-height: 80px; /* 일정한 높이 유지 */

  span {
    text-align: center;
    line-height: 1.2;
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => (theme as Theme).colors.interactive.secondaryHover};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.medium};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;
