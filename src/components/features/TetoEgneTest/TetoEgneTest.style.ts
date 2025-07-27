import styled from '@emotion/styled';
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

// 메인 컨테이너
export const StyledTetoEgneTest = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: ${({ theme }) => (theme as Theme).spacing.lg};

  @media (max-width: 768px) {
    padding: ${({ theme }) => (theme as Theme).spacing.md};
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
`;

export const StyledGenderSelector = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => (theme as Theme).spacing.xl};
  width: 100%;
  max-width: 400px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
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

  &:hover {
    border-color: ${({ theme }) => (theme as Theme).colors.interactive.primary};
    background-color: ${({ theme }) => (theme as Theme).colors.background.tertiary};
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.large};
  }
`;

export const StyledEmoji = styled.div`
  font-size: 3rem;
  line-height: 1;
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
`;

export const StyledProgressText = styled.div`
  position: absolute;
  top: -24px;
  right: 0;
  color: ${({ theme }) => (theme as Theme).colors.text.tertiary};
`;

export const StyledProgressFill = styled.div<ProgressFillProps>`
  width: ${({ percentage }) => percentage}%;
  height: 100%;
  background: linear-gradient(90deg, #ff6b35 0%, #ff69b4 100%);
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.full};
  transition: ${({ theme }) =>
    `width ${(theme as Theme).animation.duration.slow} ${(theme as Theme).animation.easing.easeOut}`};
`;

// 질문 카드
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

export const StyledCategoryBadge = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.sm};
  justify-content: center;
  margin-bottom: ${({ theme }) => (theme as Theme).spacing.lg};
  padding: ${({ theme }) => `${(theme as Theme).spacing.sm} ${(theme as Theme).spacing.md}`};
  background: linear-gradient(90deg, #ff6b35 0%, #ff69b4 100%);
  color: white;
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.full};
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
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
      ? 'linear-gradient(135deg, #FF6B35 0%, #FF69B4 100%)'
      : (theme as Theme).colors.background.secondary};
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

  &:hover {
    border-color: #ff6b35;
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.medium};
  }
`;

export const StyledOptionEmoji = styled.span`
  font-size: 1.5rem;
  line-height: 1;
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
export const StyledResultDisplay = styled.div``;

export const StyledResultActions = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => (theme as Theme).spacing.md};
  margin-top: ${({ theme }) => (theme as Theme).spacing['2xl']};

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const StyledOverallResult = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => (theme as Theme).spacing['2xl']};
  padding: ${({ theme }) => (theme as Theme).spacing['2xl']};
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 105, 180, 0.1) 100%);
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.xl};
`;

export const StyledResultEmoji = styled.div`
  font-size: 4rem;
  line-height: 1;
  margin-bottom: ${({ theme }) => (theme as Theme).spacing.lg};
`;

export const StyledOverallStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => (theme as Theme).spacing.xl};
  margin-top: ${({ theme }) => (theme as Theme).spacing.xl};
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledStatItem = styled.div<StatItemProps>`
  text-align: center;

  ${({ type }) =>
    type === 'testo' &&
    `
    color: #FF6B35;
  `}

  ${({ type }) =>
    type === 'estrogen' &&
    `
    color: #FF69B4;
  `}
`;

export const StyledCategoryResultGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => (theme as Theme).spacing.lg};
  margin-bottom: ${({ theme }) => (theme as Theme).spacing['2xl']};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledCategoryCard = styled.div`
  padding: ${({ theme }) => (theme as Theme).spacing.lg};
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
`;

export const StyledDominantType = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => (theme as Theme).spacing.sm};
`;

export const StyledHormoneBar = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  background-color: ${({ theme }) => (theme as Theme).colors.background.secondary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.full};
  margin: ${({ theme }) => `${(theme as Theme).spacing.md} 0`};
  overflow: hidden;
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
`;

export const StyledAnalysisItem = styled.div`
  padding: ${({ theme }) => (theme as Theme).spacing.lg};
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};

  &.fun-facts {
    background: linear-gradient(
      135deg,
      rgba(255, 107, 53, 0.05) 0%,
      rgba(255, 105, 180, 0.05) 100%
    );
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

  ${({ variant, theme }) => {
    switch (variant) {
      case 'strength':
        return `
          background: linear-gradient(135deg, #FF6B35 0%, #FF69B4 100%);
          color: white;
        `;
      case 'compatible':
        return `
          background-color: ${(theme as Theme).colors.interactive.primary};
          color: white;
        `;
      default:
        return `
          background-color: ${(theme as Theme).colors.background.secondary};
          color: ${(theme as Theme).colors.text.primary};
        `;
    }
  }}
`;

export const StyledCharacteristics = styled.div`
  margin-top: ${({ theme }) => (theme as Theme).spacing.md};
`;

export const StyledCharacteristicItem = styled.div`
  margin-bottom: ${({ theme }) => (theme as Theme).spacing.sm};
  color: ${({ theme }) => (theme as Theme).colors.text.secondary};
  line-height: 1.5;
`;

export const StyledRecommendations = styled.div`
  margin-top: ${({ theme }) => (theme as Theme).spacing.md};
`;

export const StyledRecommendationItem = styled.div`
  margin-bottom: ${({ theme }) => (theme as Theme).spacing.sm};
  color: ${({ theme }) => (theme as Theme).colors.text.secondary};
  line-height: 1.5;
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
  margin-bottom: ${({ theme }) => (theme as Theme).spacing.sm};
  color: ${({ theme }) => (theme as Theme).colors.text.secondary};
  line-height: 1.5;
`;

export const StyledFunFactsList = styled.div`
  margin-top: ${({ theme }) => (theme as Theme).spacing.md};
`;

export const StyledFunFactItem = styled.div`
  padding: ${({ theme }) => (theme as Theme).spacing.sm};
  margin-bottom: ${({ theme }) => (theme as Theme).spacing.sm};
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.md};
  border-left: 4px solid #ff6b35;
  font-weight: 500;
`;
