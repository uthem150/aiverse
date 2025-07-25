// src/components/common/DefaultThumbnail/DefaultThumbnail.tsx

import { useMemo } from 'react';
import {
  StyledDefaultThumbnail,
  StyledThumbnailIcon,
  StyledThumbnailTitle,
  StyledThumbnailPattern,
} from './DefaultThumbnail.style';
import type { TestItem, TestCategory } from '@/types/test';

interface DefaultThumbnailProps {
  test: TestItem;
  category?: TestCategory;
  className?: string;
}

const DefaultThumbnail = ({ test, category, className }: DefaultThumbnailProps) => {
  // 카테고리별 기본 색상 매핑
  const defaultColors = useMemo(
    () => ({
      'ai-analysis': '#6366F1',
      'romance-personality': '#F56565',
      entertainment: '#8B5CF6',
      'fun-tests': '#06B6D4',
      lifestyle: '#10B981',
      career: '#F59E0B',
      default: '#6B7280',
    }),
    []
  );

  // 카테고리별 기본 아이콘 매핑
  const defaultIcons = useMemo(
    () => ({
      'ai-analysis': '🤖',
      'romance-personality': '💕',
      entertainment: '🎭',
      'fun-tests': '🎪',
      lifestyle: '🌟',
      career: '💼',
      default: '🧩',
    }),
    []
  );

  const backgroundColor =
    category?.color ||
    defaultColors[test.category as keyof typeof defaultColors] ||
    defaultColors.default;
  const icon =
    category?.icon ||
    defaultIcons[test.category as keyof typeof defaultIcons] ||
    defaultIcons.default;

  // 제목을 적절한 길이로 자르기
  const truncatedTitle = test.title.length > 20 ? test.title.substring(0, 20) + '...' : test.title;

  return (
    <StyledDefaultThumbnail backgroundColor={backgroundColor} className={className}>
      <StyledThumbnailPattern />

      <StyledThumbnailIcon>{icon}</StyledThumbnailIcon>

      <StyledThumbnailTitle>{truncatedTitle}</StyledThumbnailTitle>
    </StyledDefaultThumbnail>
  );
};

export default DefaultThumbnail;
