import styled from '@emotion/styled';
import type { Theme } from '@/styles/themes/types';

interface ProgressFillProps {
  percentage: number;
}

interface OptionProps {
  selected: boolean;
}

export const StyledPersonalityTest = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => (theme as Theme).spacing.lg};

  @media (max-width: 768px) {
    padding: ${({ theme }) => (theme as Theme).spacing.md};
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

  .progress-text {
    position: absolute;
    top: -24px;
    right: 0;
    color: ${({ theme }) => (theme as Theme).colors.text.tertiary};
  }
`;

export const StyledProgressFill = styled.div<ProgressFillProps>`
  width: ${({ percentage }) => percentage}%;
  height: 100%;
  background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.full};
  transition: width
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.slow} ${(theme as Theme).animation.easing.easeOut}`};
`;

export const StyledQuestionCard = styled.div`
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.xl};
  padding: ${({ theme }) => (theme as Theme).spacing['2xl']};
  margin-bottom: ${({ theme }) => (theme as Theme).spacing.xl};
  box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.medium};

  @media (max-width: 768px) {
    padding: ${({ theme }) => (theme as Theme).spacing.lg};
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

  .emoji {
    font-size: 1.5rem;
    line-height: 1;
  }

  &:hover {
    border-color: ${({ theme }) => (theme as Theme).colors.interactive.primary};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.medium};
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
  .result-header {
    text-align: center;
    margin-bottom: ${({ theme }) => (theme as Theme).spacing['2xl']};
    padding: ${({ theme }) => (theme as Theme).spacing['2xl']};
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
    border-radius: ${({ theme }) => (theme as Theme).borderRadius.xl};

    .emoji {
      font-size: 4rem;
      line-height: 1;
      margin-bottom: ${({ theme }) => (theme as Theme).spacing.lg};
    }
  }

  .result-content {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => (theme as Theme).spacing.xl};

    .section {
      padding: ${({ theme }) => (theme as Theme).spacing.lg};
      background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
      border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
      border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
    }

    .traits {
      display: flex;
      flex-wrap: wrap;
      gap: ${({ theme }) => (theme as Theme).spacing.sm};
      margin-top: ${({ theme }) => (theme as Theme).spacing.md};

      .trait-tag {
        padding: ${({ theme }) => `${(theme as Theme).spacing.sm} ${(theme as Theme).spacing.md}`};
        background-color: ${({ theme }) => (theme as Theme).colors.interactive.primary};
        color: ${({ theme }) => (theme as Theme).colors.text.inverse};
        border-radius: ${({ theme }) => (theme as Theme).borderRadius.full};
        font-size: 0.875rem;
        font-weight: 500;
      }
    }

    .compatibility {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => (theme as Theme).spacing.sm};
      margin-top: ${({ theme }) => (theme as Theme).spacing.md};

      .compat-item {
        display: flex;
        gap: ${({ theme }) => (theme as Theme).spacing.sm};
        align-items: center;
      }
    }

    .recommendations {
      margin-top: ${({ theme }) => (theme as Theme).spacing.md};

      .recommendation-item {
        margin-bottom: ${({ theme }) => (theme as Theme).spacing.sm};
        color: ${({ theme }) => (theme as Theme).colors.text.secondary};
      }
    }

    .kpop-groups,
    .celebrities {
      display: flex;
      flex-wrap: wrap;
      gap: ${({ theme }) => (theme as Theme).spacing.sm};
      margin-top: ${({ theme }) => (theme as Theme).spacing.md};

      .kpop-tag,
      .celeb-tag {
        padding: ${({ theme }) => `${(theme as Theme).spacing.sm} ${(theme as Theme).spacing.md}`};
        background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
        color: white;
        border-radius: ${({ theme }) => (theme as Theme).borderRadius.full};
        font-size: 0.875rem;
        font-weight: 500;
      }
    }
  }

  .result-actions {
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => (theme as Theme).spacing.md};
    margin-top: ${({ theme }) => (theme as Theme).spacing['2xl']};

    @media (max-width: 480px) {
      flex-direction: column;
    }
  }
`;
