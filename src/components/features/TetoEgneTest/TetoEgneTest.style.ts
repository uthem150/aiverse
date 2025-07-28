import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import type { Theme } from '@/styles/themes/types';

interface ProgressFillProps {
  percentage: number;
}

interface OptionProps {
  selected: boolean;
}

interface HormoneBarFillProps {
  percentage: number;
  type: 'testo' | 'estrogen';
}

interface StatItemProps {
  type?: 'testo' | 'estrogen';
}

interface TagProps {
  variant?: 'strength' | 'compatible' | 'default';
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

// 결과 이모지 애니메이션
const resultEmoji = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

// 메인 컨테이너
export const StyledTetoEgneTest = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: ${({ theme }) => (theme as Theme).spacing.lg};

  @media (max-width: 768px) {
    padding: ${({ theme }) => (theme as Theme).spacing.md};
  }
  @media (max-width: 480px) {
    padding: ${({ theme }) => (theme as Theme).spacing.sm};
  }
`;

// 성별 선택 단계
export const StyledGenderStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.xl};
  text-align: center;
  padding: ${({ theme }) => (theme as Theme).spacing['4xl']} 0;
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: 768px) {
    padding: ${({ theme }) => `${(theme as Theme).spacing['2xl']} 0`};
  }
  @media (max-width: 480px) {
    padding: ${({ theme }) => `${(theme as Theme).spacing.xl} 0`};
  }
`;

export const StyledGenderSelector = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => (theme as Theme).spacing.xl};
  width: 100%;
  max-width: 450px;

  @media (max-width: 768px) {
    gap: ${({ theme }) => (theme as Theme).spacing.lg};
    max-width: 400px;
  }
  @media (max-width: 480px) {
    gap: ${({ theme }) => (theme as Theme).spacing.md};
  }
`;

export const StyledGenderOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.md};
  padding: ${({ theme }) => (theme as Theme).spacing['2xl']};
  border: 2px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.xl};
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  cursor: pointer;
  transition: ${({ theme }) =>
    `all ${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: #ff6b35;
    background-color: ${({ theme }) => (theme as Theme).colors.background.tertiary};
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.large};
  }

  &:active {
    transform: translateY(-2px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.1), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => (theme as Theme).spacing.xl};
  }
  @media (max-width: 480px) {
    padding: ${({ theme }) => (theme as Theme).spacing.lg};
  }
`;

export const StyledEmoji = styled.div`
  font-size: 3.5rem;
  line-height: 1;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));

  @media (max-width: 768px) {
    font-size: 3rem;
  }
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

// 진행률 바
export const StyledProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => (theme as Theme).colors.background.secondary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.full};
  margin-bottom: ${({ theme }) => (theme as Theme).spacing.xl};
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const StyledProgressText = styled.div`
  position: absolute;
  top: -28px;
  right: 0;
  color: ${({ theme }) => (theme as Theme).colors.text.tertiary};
  font-weight: 500;
  font-size: 0.875rem;
`;

export const StyledProgressFill = styled.div<ProgressFillProps>`
  width: ${({ percentage }) => percentage}%;
  height: 100%;
  background: linear-gradient(90deg, #ff6b35 0%, #ff69b4 50%, #ff8a65 100%);
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.full};
  transition: ${({ theme }) =>
    `width ${(theme as Theme).animation.duration.slow} ${(theme as Theme).animation.easing.easeOut}`};
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

// 질문 카드
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

export const StyledCategoryBadge = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.sm};
  justify-content: center;
  margin-bottom: ${({ theme }) => (theme as Theme).spacing.lg};
  padding: ${({ theme }) => `${(theme as Theme).spacing.sm} ${(theme as Theme).spacing.md}`};
  background: linear-gradient(135deg, #ff6b35 0%, #ff69b4 100%);
  color: white;
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.full};
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 2px 8px rgba(255, 107, 53, 0.3);
  transition: ${({ theme }) =>
    `all ${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 107, 53, 0.4);
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

  background: ${({ selected }) =>
    selected ? 'linear-gradient(135deg, #FF6B35 0%, #FF69B4 100%)' : 'transparent'};
  border: 2px solid
    ${({ selected, theme }) => (selected ? '#FF6B35' : (theme as Theme).colors.border.primary)};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  color: ${({ selected, theme }) => (selected ? 'white' : (theme as Theme).colors.text.primary)};
  cursor: pointer;
  transition: ${({ theme }) =>
    `all ${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};
  text-align: left;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: #ff6b35;
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.large};
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => (theme as Theme).spacing.md};
  }
`;

export const StyledOptionEmoji = styled.span`
  font-size: 1.5rem;
  line-height: 1;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));

  @media (max-width: 768px) {
    font-size: 1.375rem;
  }
  @media (max-width: 480px) {
    font-size: 1.25rem;
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

// 결과 표시
export const StyledResultDisplay = styled.div`
  animation: ${fadeIn} 0.8s ease-out;
`;

export const StyledResultActions = styled.div`
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
`;

export const StyledOverallResult = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => (theme as Theme).spacing['2xl']};
  padding: ${({ theme }) => (theme as Theme).spacing['3xl']};
  background: linear-gradient(
    135deg,
    rgba(255, 107, 53, 0.08) 0%,
    rgba(255, 105, 180, 0.08) 50%,
    rgba(255, 138, 101, 0.08) 100%
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
    background: linear-gradient(90deg, #ff6b35, #ff69b4, #ff8a65);
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => (theme as Theme).spacing.xl};
  }
  @media (max-width: 480px) {
    padding: ${({ theme }) => (theme as Theme).spacing.lg};
  }
`;

export const StyledResultEmoji = styled.div`
  font-size: 5rem;
  line-height: 1;
  margin-bottom: ${({ theme }) => (theme as Theme).spacing.lg};
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
  animation: ${resultEmoji} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const StyledOverallStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => (theme as Theme).spacing.xl};
  margin-top: ${({ theme }) => (theme as Theme).spacing.xl};
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    gap: ${({ theme }) => (theme as Theme).spacing.lg};
    max-width: 280px;
  }
  @media (max-width: 480px) {
    gap: ${({ theme }) => (theme as Theme).spacing.md};
    max-width: 240px;
  }
`;

export const StyledStatItem = styled.div<StatItemProps>`
  text-align: center;
  padding: ${({ theme }) => (theme as Theme).spacing.md};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  transition: ${({ theme }) =>
    `all ${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

  ${({ type }) =>
    type === 'testo' &&
    `
    background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 138, 101, 0.1) 100%);
    border: 1px solid rgba(255, 107, 53, 0.2);
  `}

  ${({ type }) =>
    type === 'estrogen' &&
    `
    background: linear-gradient(135deg, rgba(255, 105, 180, 0.1) 0%, rgba(255, 182, 193, 0.1) 100%);
    border: 1px solid rgba(255, 105, 180, 0.2);
  `}

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.medium};
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => (theme as Theme).spacing.sm};
  }
`;

export const StyledCategoryResultGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => (theme as Theme).spacing.lg};
  margin-bottom: ${({ theme }) => (theme as Theme).spacing['2xl']};

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: ${({ theme }) => (theme as Theme).spacing.md};
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => (theme as Theme).spacing.sm};
  }
`;

export const StyledCategoryCard = styled.div`
  padding: ${({ theme }) => (theme as Theme).spacing.lg};
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.small};
  transition: ${({ theme }) =>
    `all ${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

  &:hover {
    box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.medium};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => (theme as Theme).spacing.md};
  }
  @media (max-width: 480px) {
    padding: ${({ theme }) => (theme as Theme).spacing.sm};
  }
`;

export const StyledDominantType = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => (theme as Theme).spacing.sm};
  padding: ${({ theme }) => `${(theme as Theme).spacing.xs} ${(theme as Theme).spacing.sm}`};
  background-color: ${({ theme }) => (theme as Theme).colors.background.secondary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.md};
`;

export const StyledHormoneBar = styled.div`
  position: relative;
  width: 100%;
  height: 32px;
  background-color: ${({ theme }) => (theme as Theme).colors.background.secondary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.full};
  margin: ${({ theme }) => `${(theme as Theme).spacing.md} 0`};
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 28px;
  }
  @media (max-width: 480px) {
    height: 24px;
  }
`;

export const StyledBarLabels = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `0 ${(theme as Theme).spacing.sm}`};
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 0.6875rem;
    padding: ${({ theme }) => `0 ${(theme as Theme).spacing.xs}`};
  }
  @media (max-width: 480px) {
    font-size: 0.625rem;
  }
`;

export const StyledTestoLabel = styled.span`
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

export const StyledEstrogenLabel = styled.span`
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

export const StyledHormoneBarFill = styled.div<HormoneBarFillProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ percentage }) => percentage}%;
  background: ${({ type }) =>
    type === 'testo'
      ? 'linear-gradient(90deg, #FF6B35 0%, #FF8A65 100%)'
      : 'linear-gradient(90deg, #FF69B4 0%, #FFB6C1 100%)'};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.full};
  transition: ${({ theme }) =>
    `width ${(theme as Theme).animation.duration.slow} ${(theme as Theme).animation.easing.easeOut}`};
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: ${({ percentage }) => 100 - percentage}%;
    height: 100%;
    background: ${({ type }) =>
      type === 'testo'
        ? 'linear-gradient(90deg, #FF69B4 0%, #FFB6C1 100%)'
        : 'linear-gradient(90deg, #FF6B35 0%, #FF8A65 100%)'};
    border-radius: ${({ theme }) => (theme as Theme).borderRadius.full};
  }
`;

// 분석 섹션
export const StyledAnalysisSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => (theme as Theme).spacing.xl};

  @media (max-width: 768px) {
    gap: ${({ theme }) => (theme as Theme).spacing.lg};
  }
  @media (max-width: 480px) {
    gap: ${({ theme }) => (theme as Theme).spacing.md};
  }
`;

export const StyledAnalysisItem = styled.div`
  padding: ${({ theme }) => (theme as Theme).spacing.xl};
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.small};
  transition: ${({ theme }) =>
    `all ${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

  &:hover {
    box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.medium};
    transform: translateY(-2px);
  }

  &.fun-facts {
    background: linear-gradient(
      135deg,
      rgba(255, 107, 53, 0.05) 0%,
      rgba(255, 105, 180, 0.05) 100%
    );
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => (theme as Theme).spacing.lg};
  }
  @media (max-width: 480px) {
    padding: ${({ theme }) => (theme as Theme).spacing.md};
  }
`;

export const StyledTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => (theme as Theme).spacing.sm};
  margin-top: ${({ theme }) => (theme as Theme).spacing.md};
`;

export const StyledTag = styled.span<TagProps>`
  padding: ${({ theme }) => `${(theme as Theme).spacing.sm} ${(theme as Theme).spacing.md}`};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.full};
  font-size: 0.875rem;
  font-weight: 500;
  transition: ${({ theme }) =>
    `all ${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

  ${({ variant, theme }) => {
    switch (variant) {
      case 'strength':
        return `
          background: linear-gradient(135deg, #FF6B35 0%, #FF69B4 100%);
          color: white;
          box-shadow: 0 2px 8px rgba(255, 107, 53, 0.3);
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(255, 107, 53, 0.4);
          }
        `;
      case 'compatible':
        return `
          background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
          color: white;
          box-shadow: 0 2px 6px rgba(6, 182, 212, 0.3);
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(6, 182, 212, 0.4);
          }
        `;
      default:
        return `
          background-color: ${(theme as Theme).colors.background.secondary};
          color: ${(theme as Theme).colors.text.primary};
          border: 1px solid ${(theme as Theme).colors.border.primary};
          
          &:hover {
            background-color: ${(theme as Theme).colors.background.tertiary};
            transform: translateY(-1px);
          }
        `;
    }
  }}

  @media (max-width: 768px) {
    padding: ${({ theme }) => `${(theme as Theme).spacing.sm} ${(theme as Theme).spacing.sm}`};
    font-size: 0.8125rem;
  }
  @media (max-width: 480px) {
    padding: ${({ theme }) => `${(theme as Theme).spacing.xs} ${(theme as Theme).spacing.sm}`};
    font-size: 0.75rem;
  }
`;

export const StyledCharacteristics = styled.div`
  margin-top: ${({ theme }) => (theme as Theme).spacing.md};
`;

export const StyledCharacteristicItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.sm};
  margin-bottom: ${({ theme }) => (theme as Theme).spacing.md};
  padding: ${({ theme }) => (theme as Theme).spacing.md};
  background-color: ${({ theme }) => (theme as Theme).colors.background.secondary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.md};
  color: ${({ theme }) => (theme as Theme).colors.text.secondary};
  line-height: 1.5;
  transition: ${({ theme }) =>
    `all ${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

  &:hover {
    background-color: ${({ theme }) => (theme as Theme).colors.background.tertiary};
    transform: translateX(4px);
  }

  &::before {
    content: '•';
    color: #ff6b35;
    font-weight: bold;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => (theme as Theme).spacing.sm};
  }
`;

export const StyledRecommendations = styled.div`
  margin-top: ${({ theme }) => (theme as Theme).spacing.md};
`;

export const StyledRecommendationItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.sm};
  margin-bottom: ${({ theme }) => (theme as Theme).spacing.md};
  padding: ${({ theme }) => (theme as Theme).spacing.md};
  background-color: ${({ theme }) => (theme as Theme).colors.background.secondary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.md};
  color: ${({ theme }) => (theme as Theme).colors.text.secondary};
  line-height: 1.5;
  transition: ${({ theme }) =>
    `all ${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

  &:hover {
    background-color: ${({ theme }) => (theme as Theme).colors.background.tertiary};
    transform: translateX(4px);
  }

  &::before {
    content: '✨';
    flex-shrink: 0;
    margin-top: 2px;
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => (theme as Theme).spacing.sm};
  }
`;

export const StyledCompatibleTypes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => (theme as Theme).spacing.sm};
  margin-top: ${({ theme }) => (theme as Theme).spacing.md};
`;

export const StyledTips = styled.div`
  margin-top: ${({ theme }) => (theme as Theme).spacing.md};
`;

export const StyledTipItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.sm};
  margin-bottom: ${({ theme }) => (theme as Theme).spacing.md};
  padding: ${({ theme }) => (theme as Theme).spacing.md};
  background-color: ${({ theme }) => (theme as Theme).colors.background.secondary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.md};
  color: ${({ theme }) => (theme as Theme).colors.text.secondary};
  line-height: 1.5;
  transition: ${({ theme }) =>
    `all ${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

  &:hover {
    background-color: ${({ theme }) => (theme as Theme).colors.background.tertiary};
    transform: translateX(4px);
  }

  &::before {
    content: '💡';
    flex-shrink: 0;
    margin-top: 2px;
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => (theme as Theme).spacing.sm};
  }
`;

export const StyledFunFactsList = styled.div`
  margin-top: ${({ theme }) => (theme as Theme).spacing.md};
`;

export const StyledFunFactItem = styled.div`
  padding: ${({ theme }) => (theme as Theme).spacing.md};
  margin-bottom: ${({ theme }) => (theme as Theme).spacing.sm};
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.md};
  border-left: 4px solid #ff6b35;
  font-weight: 500;
  line-height: 1.5;
  transition: ${({ theme }) =>
    `all ${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

  &:hover {
    transform: translateX(4px);
    box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.small};
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => (theme as Theme).spacing.sm};
  }
`;
