import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import type { Theme } from '@/styles/themes/types';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledTestStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.xl};
  text-align: center;
`;

export const StyledGenderSelector = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => (theme as Theme).spacing.lg};
  width: 100%;
  max-width: 400px;
`;

interface GenderOptionProps {
  selected: boolean;
}

export const StyledGenderOption = styled.div<GenderOptionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.md};
  padding: ${({ theme }) => (theme as Theme).spacing.xl};
  border: 2px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.xl};
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  cursor: pointer;
  transition: all
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

  .emoji {
    font-size: 3rem;
    line-height: 1;
  }

  &:hover {
    border-color: ${({ theme }) => (theme as Theme).colors.interactive.primary};
    background-color: ${({ theme }) => (theme as Theme).colors.background.tertiary};
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.large};
  }
`;

export const StyledImageUpload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => (theme as Theme).spacing.md};
  padding: ${({ theme }) => (theme as Theme).spacing['3xl']};
  border: 2px dashed ${({ theme }) => (theme as Theme).colors.border.secondary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.xl};
  background-color: ${({ theme }) => (theme as Theme).colors.background.secondary};
  cursor: pointer;
  transition: all
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};
  min-height: 200px;
  width: 100%;
  max-width: 400px;

  &:hover {
    border-color: ${({ theme }) => (theme as Theme).colors.interactive.primary};
    background-color: ${({ theme }) => (theme as Theme).colors.background.tertiary};
  }
`;

export const StyledImagePreview = styled.div`
  width: 100%;
  max-width: 300px;
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.medium};

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const StyledLoadingAnimation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.md};
  padding: ${({ theme }) => (theme as Theme).spacing.xl};

  .spinner {
    width: 48px;
    height: 48px;
    border: 4px solid ${({ theme }) => (theme as Theme).colors.border.primary};
    border-top: 4px solid ${({ theme }) => (theme as Theme).colors.interactive.primary};
    border-radius: 50%;
    animation: ${spinAnimation} 1s linear infinite;
  }
`;

export const StyledResultSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.xl};
  width: 100%;
`;

export const StyledResultCard = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: ${({ theme }) => (theme as Theme).spacing['2xl']};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.xl};
  text-align: center;
  box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.large};
  min-width: 280px;

  & > * {
    margin-bottom: ${({ theme }) => (theme as Theme).spacing.sm};
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;
