import styled from '@emotion/styled';
import type { Theme } from '@/styles/themes/types';

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

export const StyledContent = styled.main`
  flex: 1;
  width: 100%;
  padding: ${({ theme }) => (theme as Theme).spacing.md};
  background-color: ${({ theme }) => (theme as Theme).colors.background.primary};
  transition: background-color
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

  @media (min-width: 768px) {
    padding: ${({ theme }) => (theme as Theme).spacing.xl};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => (theme as Theme).spacing.lg};
  }
`;

export const StyledInteractiveContent = styled.main`
  flex: 1;
  width: 100%;
`;
