import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import type { Theme } from '@/styles/themes/types';

interface ProgressFillProps {
  percentage: number;
}

interface OptionProps {
  selected: boolean;
}

// 부드러운 페이드인 애니메이션
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 태그 호버 애니메이션
const scaleHover = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const StyledPersonalityTest = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => (theme as Theme).spacing.lg};

  @media (max-width: 768px) {
    padding: ${({ theme }) => (theme as Theme).spacing.md};
  }
  @media (max-width: 480px) {
    padding: ${({ theme }) => (theme as Theme).spacing.sm};
  }
`;

export const StyledProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => (theme as Theme).colors.background.secondary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.full};
  margin-bottom: ${({ theme }) => (theme as Theme).spacing.xl};
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);

  .progress-text {
    position: absolute;
    top: -28px;
    right: 0;
    color: ${({ theme }) => (theme as Theme).colors.text.tertiary};
    font-weight: 500;
    font-size: 0.875rem;
  }
`;

export const StyledProgressFill = styled.div<ProgressFillProps>`
  width: ${({ percentage }) => percentage}%;
  height: 100%;
  background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%);
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.full};
  transition: width
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.slow} ${(theme as Theme).animation.easing.easeOut}`};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.3) 50%,
      transparent 100%
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export const StyledQuestionCard = styled.div`
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.xl};
  padding: ${({ theme }) => (theme as Theme).spacing['2xl']};
  margin-bottom: ${({ theme }) => (theme as Theme).spacing.xl};
  box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.medium};
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 768px) {
    padding: ${({ theme }) => (theme as Theme).spacing.lg};
  }
  @media (max-width: 480px) {
    padding: ${({ theme }) => (theme as Theme).spacing.md};
  }
`;

export const StyledOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => (theme as Theme).spacing.md};
  margin-top: ${({ theme }) => (theme as Theme).spacing.xl};

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledOption = styled.button<OptionProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.md};
  padding: ${({ theme }) => (theme as Theme).spacing.lg};
  background-color: ${({ selected, theme }) =>
    selected
      ? (theme as Theme).colors.interactive.primary
      : (theme as Theme).colors.background.secondary};
  border: 2px solid
    ${({ selected, theme }) =>
      selected
        ? (theme as Theme).colors.interactive.primary
        : (theme as Theme).colors.border.primary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  color: ${({ selected, theme }) =>
    selected ? (theme as Theme).colors.text.inverse : (theme as Theme).colors.text.primary};
  cursor: pointer;
  transition: all
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};
  text-align: left;
  position: relative;
  overflow: hidden;

  .emoji {
    font-size: 1.5rem;
    line-height: 1;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }

  &:hover {
    border-color: ${({ theme }) => (theme as Theme).colors.interactive.primary};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.large};
  }

  &:active {
    transform: translateY(-1px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

export const StyledNavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => (theme as Theme).spacing.md};

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const StyledResultDisplay = styled.div`
  animation: ${fadeIn} 0.8s ease-out;

  .result-header {
    text-align: center;
    margin-bottom: ${({ theme }) => (theme as Theme).spacing['2xl']};
    padding: ${({ theme }) => (theme as Theme).spacing['3xl']};
    background: linear-gradient(
      135deg,
      rgba(99, 102, 241, 0.08) 0%,
      rgba(139, 92, 246, 0.08) 50%,
      rgba(6, 182, 212, 0.08) 100%
    );
    border-radius: ${({ theme }) => (theme as Theme).borderRadius.xl};
    border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4);
    }

    .emoji {
      font-size: 5rem;
      line-height: 1;
      margin-bottom: ${({ theme }) => (theme as Theme).spacing.lg};
      filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
      animation: ${scaleHover} 2s ease-in-out infinite;
    }
  }

  .result-content {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => (theme as Theme).spacing.lg};

    .section {
      padding: ${({ theme }) => (theme as Theme).spacing.xl};
      background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
      border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
      border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
      box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.small};
      transition: all
        ${({ theme }) =>
          `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

      &:hover {
        box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.medium};
        transform: translateY(-2px);
      }

      h5 {
        margin-bottom: ${({ theme }) => (theme as Theme).spacing.md};
        color: ${({ theme }) => (theme as Theme).colors.text.primary};
        display: flex;
        align-items: center;
        gap: ${({ theme }) => (theme as Theme).spacing.sm};

        &::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(
            90deg,
            ${({ theme }) => (theme as Theme).colors.border.primary} 0%,
            transparent 100%
          );
        }
      }
    }

    /* 특성 태그들 */
    .traits {
      display: flex;
      flex-wrap: wrap;
      gap: ${({ theme }) => (theme as Theme).spacing.sm};
      margin-top: ${({ theme }) => (theme as Theme).spacing.md};

      .trait-tag {
        padding: ${({ theme }) => `${(theme as Theme).spacing.sm} ${(theme as Theme).spacing.lg}`};
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        color: white;
        border-radius: ${({ theme }) => (theme as Theme).borderRadius.full};
        font-size: 0.875rem;
        font-weight: 600;
        box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
        transition: all
          ${({ theme }) =>
            `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }
      }
    }

    /* 궁합 정보 */
    .compatibility {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => (theme as Theme).spacing.md};
      margin-top: ${({ theme }) => (theme as Theme).spacing.md};

      .compat-item {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => (theme as Theme).spacing.md};
        padding: ${({ theme }) => (theme as Theme).spacing.md};
        background-color: ${({ theme }) => (theme as Theme).colors.background.secondary};
        border-radius: ${({ theme }) => (theme as Theme).borderRadius.md};
        border-left: 4px solid transparent;

        &:nth-of-type(1) {
          border-left-color: #10b981;
          background-color: rgba(16, 185, 129, 0.05);
        }
        &:nth-of-type(2) {
          border-left-color: #f59e0b;
          background-color: rgba(245, 158, 11, 0.05);
        }
        &:nth-of-type(3) {
          border-left-color: #ef4444;
          background-color: rgba(239, 68, 68, 0.05);
        }

        span:last-child {
          font-weight: 500;
        }
      }
    }

    /* 추천사항 목록 */
    .recommendations {
      margin-top: ${({ theme }) => (theme as Theme).spacing.md};

      .recommendation-item {
        display: flex;
        align-items: flex-start;
        gap: ${({ theme }) => (theme as Theme).spacing.sm};
        margin-bottom: ${({ theme }) => (theme as Theme).spacing.md};
        padding: ${({ theme }) => (theme as Theme).spacing.md};
        background-color: ${({ theme }) => (theme as Theme).colors.background.secondary};
        border-radius: ${({ theme }) => (theme as Theme).borderRadius.md};
        color: ${({ theme }) => (theme as Theme).colors.text.secondary};
        transition: all
          ${({ theme }) =>
            `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

        &:hover {
          background-color: ${({ theme }) => (theme as Theme).colors.background.tertiary};
          transform: translateX(4px);
        }

        &::before {
          content: '✨';
          flex-shrink: 0;
          margin-top: 2px;
        }
      }
    }

    /* 태그 그리드 (해시태그, 게임 장르 등) */
    .tags-grid {
      display: flex;
      flex-wrap: wrap;
      gap: ${({ theme }) => (theme as Theme).spacing.sm};
      margin-top: ${({ theme }) => (theme as Theme).spacing.md};

      .tag {
        padding: ${({ theme }) => `${(theme as Theme).spacing.sm} ${(theme as Theme).spacing.md}`};
        background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
        color: white;
        border-radius: ${({ theme }) => (theme as Theme).borderRadius.full};
        font-size: 0.875rem;
        font-weight: 500;
        box-shadow: 0 2px 6px rgba(6, 182, 212, 0.3);
        transition: all
          ${({ theme }) =>
            `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(6, 182, 212, 0.4);
        }
      }
    }

    /* K-pop 그룹 태그 */
    .kpop-groups {
      display: flex;
      flex-wrap: wrap;
      gap: ${({ theme }) => (theme as Theme).spacing.sm};
      margin-top: ${({ theme }) => (theme as Theme).spacing.md};

      .kpop-tag {
        padding: ${({ theme }) => `${(theme as Theme).spacing.sm} ${(theme as Theme).spacing.md}`};
        background: linear-gradient(135deg, #ff6b9d 0%, #ff8ba7 100%);
        color: white;
        border-radius: ${({ theme }) => (theme as Theme).borderRadius.full};
        font-size: 0.875rem;
        font-weight: 600;
        box-shadow: 0 2px 8px rgba(255, 107, 157, 0.3);
        transition: all
          ${({ theme }) =>
            `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

        &:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 4px 12px rgba(255, 107, 157, 0.4);
        }
      }
    }

    /* 연예인 태그 */
    .celebrities {
      display: flex;
      flex-wrap: wrap;
      gap: ${({ theme }) => (theme as Theme).spacing.sm};
      margin-top: ${({ theme }) => (theme as Theme).spacing.md};

      .celeb-tag {
        padding: ${({ theme }) => `${(theme as Theme).spacing.sm} ${(theme as Theme).spacing.md}`};
        background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
        color: white;
        border-radius: ${({ theme }) => (theme as Theme).borderRadius.full};
        font-size: 0.875rem;
        font-weight: 600;
        box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
        transition: all
          ${({ theme }) =>
            `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

        &:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
        }
      }
    }

    /* 게임 링크 카드 */
    .games-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: ${({ theme }) => (theme as Theme).spacing.md};
      margin-top: ${({ theme }) => (theme as Theme).spacing.md};

      .game-card {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => (theme as Theme).spacing.md};
        padding: ${({ theme }) => (theme as Theme).spacing.lg};
        background: linear-gradient(
          135deg,
          rgba(99, 102, 241, 0.05) 0%,
          rgba(139, 92, 246, 0.05) 100%
        );
        border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
        border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
        text-decoration: none;
        color: ${({ theme }) => (theme as Theme).colors.text.primary};
        transition: all
          ${({ theme }) =>
            `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

        &:hover {
          transform: translateY(-4px);
          box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.large};
          border-color: ${({ theme }) => (theme as Theme).colors.interactive.primary};
        }

        &::before {
          content: '🎮';
          font-size: 2rem;
          flex-shrink: 0;
        }

        .game-info {
          flex: 1;

          .game-name {
            font-weight: 600;
            font-size: 1rem;
            margin-bottom: 4px;
            color: ${({ theme }) => (theme as Theme).colors.text.primary};
          }

          .game-platform {
            font-size: 0.875rem;
            color: ${({ theme }) => (theme as Theme).colors.text.tertiary};
          }
        }
      }
    }
  }

  .result-actions {
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => (theme as Theme).spacing.lg};
    margin-top: ${({ theme }) => (theme as Theme).spacing['3xl']};
    padding-top: ${({ theme }) => (theme as Theme).spacing.xl};
    border-top: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};

    @media (max-width: 480px) {
      flex-direction: column;
      gap: ${({ theme }) => (theme as Theme).spacing.md};
    }
  }
`;
