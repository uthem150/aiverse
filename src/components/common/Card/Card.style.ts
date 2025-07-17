import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { Theme } from '@/styles/themes/types';

interface StyledCardProps {
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const paddingVariants = {
  sm: css`
    padding: 1rem;
  `,
  md: css`
    padding: 1.5rem;
  `,
  lg: css`
    padding: 2rem;
  `,
};

export const StyledCard = styled.div<StyledCardProps>`
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.small};
  transition: all
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};

  ${({ padding = 'md' }) => paddingVariants[padding]};

  ${({ hover, theme }) =>
    hover &&
    css`
      &:hover {
        box-shadow: ${(theme as Theme).colors.shadow.medium};
        transform: translateY(-2px);
        border-color: ${(theme as Theme).colors.border.secondary};
      }
    `};
`;

export const StyledCardContent = styled.div`
  height: 100%;
`;
