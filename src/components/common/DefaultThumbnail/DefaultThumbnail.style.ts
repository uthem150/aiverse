// src/components/common/DefaultThumbnail/DefaultThumbnail.style.ts

import styled from '@emotion/styled';
import type { Theme } from '@/styles/themes/types';

interface StyledDefaultThumbnailProps {
  backgroundColor: string;
}

export const StyledDefaultThumbnail = styled.div<StyledDefaultThumbnailProps>`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => (theme as Theme).spacing.lg};
  background: linear-gradient(
    135deg,
    ${({ backgroundColor }) => backgroundColor}E6 0%,
    ${({ backgroundColor }) => backgroundColor}CC 50%,
    ${({ backgroundColor }) => backgroundColor}B3 100%
  );
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  overflow: hidden;

  /* 미세한 텍스처 효과 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
      radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
      radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 20px 20px;
    background-position:
      0 0,
      10px 10px;
    pointer-events: none;
  }
`;

export const StyledThumbnailPattern = styled.div`
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 40%,
    rgba(255, 255, 255, 0.05) 50%,
    transparent 60%
  );
  transform: rotate(15deg);
  pointer-events: none;
`;

export const StyledThumbnailIcon = styled.div`
  font-size: 2.5rem;
  line-height: 1;
  margin-bottom: ${({ theme }) => (theme as Theme).spacing.md};
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: ${({ theme }) => (theme as Theme).spacing.sm};
  }
`;

export const StyledThumbnailTitle = styled.div`
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.3;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  word-break: keep-all;
  hyphens: auto;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;
