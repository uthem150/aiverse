import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import type { Theme } from '@/styles/themes/types';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const petalFall = keyframes`
  0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(10px) rotate(360deg); opacity: 0.7; }
`;

const bloomAnimation = keyframes`
  0% { transform: scale(0.8); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
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
  background: linear-gradient(135deg, #fff8e1 0%, #f3e5f5 50%, #e8f5e8 100%);
  cursor: pointer;
  transition: all
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};
  min-height: 200px;
  width: 100%;
  max-width: 400px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '🌸';
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 1.5rem;
    animation: ${petalFall} 3s ease-in-out infinite;
  }

  &::after {
    content: '🌺';
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 1.2rem;
    animation: ${petalFall} 4s ease-in-out infinite 1s;
  }

  &:hover {
    border-color: ${({ theme }) => (theme as Theme).colors.interactive.primary};
    background: linear-gradient(135deg, #ffe4e1 0%, #f8bbd9 50%, #e1f5fe 100%);
    transform: translateY(-2px);
  }
`;

export const StyledImagePreview = styled.div`
  width: 100%;
  max-width: 300px;
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.medium};
  border: 3px solid transparent;
  background: linear-gradient(135deg, #ffb6c1, #ffe4e1, #f0fff0);
  background-clip: padding-box;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
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
    border-top: 4px solid #ff69b4;
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

interface ResultCardProps {
  color: string;
}

export const StyledResultCard = styled.div<ResultCardProps>`
  background: linear-gradient(135deg, ${({ color }) => color} 0%, ${({ color }) => color}CC 100%);
  color: white;
  padding: ${({ theme }) => (theme as Theme).spacing['2xl']};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.xl};
  text-align: center;
  box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.large};
  min-width: 320px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '🌸🌺🌻🌷';
    position: absolute;
    top: -20px;
    left: -50px;
    right: -50px;
    font-size: 2rem;
    opacity: 0.2;
    animation: ${petalFall} 6s ease-in-out infinite;
  }

  .emoji {
    font-size: 4rem;
    margin-bottom: ${({ theme }) => (theme as Theme).spacing.md};
    animation: ${bloomAnimation} 2s ease-in-out;
    position: relative;
    z-index: 1;
  }

  & > * {
    margin-bottom: ${({ theme }) => (theme as Theme).spacing.sm};
    position: relative;
    z-index: 1;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;

export const StyledFlowerInfo = styled.div`
  background: linear-gradient(135deg, #fff8e1 0%, #f3e5f5 100%);
  padding: ${({ theme }) => (theme as Theme).spacing.lg};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => (theme as Theme).spacing.sm};
  position: relative;

  &::before {
    content: '🌿';
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
    opacity: 0.6;
  }
`;

export const StyledCelebSection = styled.div`
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  padding: ${({ theme }) => (theme as Theme).spacing.lg};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => (theme as Theme).spacing.sm};
  text-align: center;
`;
