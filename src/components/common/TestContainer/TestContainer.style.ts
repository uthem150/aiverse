import styled from '@emotion/styled';
import type { Theme } from '@/styles/themes/types';

export const StyledTestContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => (theme as Theme).spacing.lg};
`;

export const StyledTestHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => (theme as Theme).spacing['2xl']};
  position: relative;
`;

export const StyledTestActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => (theme as Theme).spacing.xl};
`;

export const StyledBackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  background-color: ${({ theme }) => (theme as Theme).colors.interactive.secondary};
  color: ${({ theme }) => (theme as Theme).colors.text.primary};
  cursor: pointer;
  transition: all
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

  &:hover {
    background-color: ${({ theme }) => (theme as Theme).colors.interactive.secondaryHover};
  }
`;

export const StyledShareButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  background-color: ${({ theme }) => (theme as Theme).colors.interactive.primary};
  color: ${({ theme }) => (theme as Theme).colors.text.inverse};
  cursor: pointer;
  transition: all
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};

  &:hover {
    background-color: ${({ theme }) => (theme as Theme).colors.interactive.primaryHover};
  }
`;

export const StyledTestContent = styled.div`
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.xl};
  padding: ${({ theme }) => (theme as Theme).spacing['2xl']};
  box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.medium};
`;
