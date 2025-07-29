import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { Theme } from '@/styles/themes/types';

interface BadgeProps {
  type: 'new' | 'hot';
}

export const StyledTestCard = styled.div`
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  overflow: hidden;
  cursor: pointer;
  transition: all
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

  &:hover {
    box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.large};
    transform: translateY(-4px);
    border-color: ${({ theme }) => (theme as Theme).colors.interactive.primary};
  }
`;

export const StyledTestImage = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform
      ${({ theme }) =>
        `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 160px;
  }

  @media (max-width: 480px) {
    height: 140px;
  }
`;

export const StyledTestBadge = styled.div<BadgeProps>`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 4px 8px;
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.sm};
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
  backdrop-filter: blur(10px);

  ${({ type }) =>
    type === 'new' &&
    css`
      background-color: rgba(16, 185, 129, 0.9);
      color: white;
    `}

  ${({ type }) =>
    type === 'hot' &&
    css`
      background-color: rgba(239, 68, 68, 0.9);
      color: white;
    `}
`;

export const StyledTestInfo = styled.div`
  padding: ${({ theme }) => (theme as Theme).spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => (theme as Theme).spacing.sm};
`;

export const StyledTestMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => (theme as Theme).spacing.sm};
`;

export const StyledTestStats = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => (theme as Theme).colors.text.tertiary};
`;
