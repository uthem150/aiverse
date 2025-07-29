import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import type { Theme } from '@/styles/themes/types';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const shimmerAnimation = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

export const StyledTestStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.xl};
  text-align: center;
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
    content: '';
    position: absolute;
    top: 0;
    left: -200px;
    width: 200px;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    animation: ${shimmerAnimation} 2s ease-in-out infinite;
  }

  .emoji {
    font-size: 3rem;
    margin-bottom: ${({ theme }) => (theme as Theme).spacing.md};
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

export const StyledColorPalette = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.md};
  padding: ${({ theme }) => (theme as Theme).spacing.lg};
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  width: 100%;
  max-width: 400px;

  .color-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${({ theme }) => (theme as Theme).spacing.sm};
    width: 100%;
    place-items: center;
  }
`;

interface ColorCardProps {
  color: string;
}

export const StyledColorCard = styled.div<ColorCardProps>`
  width: 60px;
  height: 60px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }

  background-color: ${({ color }) => color};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.md};
  border: 2px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  transition: all
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.medium};
  }
`;

export const StyledHashtagSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.sm};
  padding: ${({ theme }) => (theme as Theme).spacing.lg};
  background: linear-gradient(135deg, #f3e8ff 0%, #e0e7ff 100%);
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  width: 100%;
  max-width: 400px;
`;
