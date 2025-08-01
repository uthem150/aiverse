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
  width: 100%;
`;

export const StyledVideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 640px;
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.xl};
  overflow: hidden;
  box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.large};
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  display: block;
  transform: scaleX(-1); /* 거울 효과 - 비디오만 */
`;

export const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  /* 캔버스는 반전 제거 - 텍스트가 정상으로 보이도록 */
`;

export const StyledControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => (theme as Theme).spacing.md};
  justify-content: center;
  align-items: center;
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

export const StyledResultPanel = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.xl};
  padding: ${({ theme }) => (theme as Theme).spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => (theme as Theme).spacing.lg};
`;

export const StyledStatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => (theme as Theme).spacing.md};
`;

export const StyledStatItem = styled.div`
  text-align: center;
  padding: ${({ theme }) => (theme as Theme).spacing.md};
  background-color: ${({ theme }) => (theme as Theme).colors.background.secondary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
`;

interface EmotionCardProps {
  isTop?: boolean;
}

export const StyledEmotionCard = styled.div<EmotionCardProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.md};
  padding: ${({ theme, isTop }) =>
    isTop ? (theme as Theme).spacing.lg : (theme as Theme).spacing.md};
  background-color: ${({ theme, isTop }) =>
    isTop
      ? (theme as Theme).colors.background.tertiary
      : (theme as Theme).colors.background.secondary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.md};
  border: ${({ theme, isTop }) =>
    isTop
      ? `2px solid ${(theme as Theme).colors.interactive.primary}`
      : `1px solid ${(theme as Theme).colors.border.primary}`};

  .emotion-header {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => (theme as Theme).spacing.sm};
    min-width: 120px;

    .emoji {
      font-size: ${({ isTop }) => (isTop ? '1.5rem' : '1.2rem')};
    }
  }
`;

interface EmotionBarProps {
  color: string;
  percentage: number;
}

export const StyledEmotionBar = styled.div<EmotionBarProps>`
  flex: 1;
  height: 32px;
  background-color: ${({ theme }) => (theme as Theme).colors.background.primary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.md};
  position: relative;
  overflow: hidden;

  .bar-fill {
    width: ${({ percentage }) => Math.max(percentage, 2)}%;
    height: 100%;
    background-color: ${({ color }) => color};
    border-radius: ${({ theme }) => (theme as Theme).borderRadius.md};
    transition: width
      ${({ theme }) =>
        `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeOut}`};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  span {
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translateY(-50%);
    font-weight: 600;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    z-index: 1;
    color: ${({ percentage }) => (percentage > 30 ? 'white' : '#374151')};
  }
`;

export const StyledErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.lg};
  padding: ${({ theme }) => (theme as Theme).spacing['2xl']};
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.xl};
  max-width: 400px;
`;
