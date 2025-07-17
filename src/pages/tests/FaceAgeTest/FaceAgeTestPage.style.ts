import styled from '@emotion/styled';
import type { Theme } from '@/styles/themes/types';

export const StyledTestStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.xl};
  text-align: center;
`;

export const StyledImageUpload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => (theme as Theme).spacing.md};
  padding: ${({ theme }) => (theme as Theme).spacing['3xl']};
  border: 2px dashed ${({ theme }) => (theme as Theme).colors.border.secondary};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.xl};
  background-color: ${({ theme }) => (theme as Theme).colors.background.secondary};
  cursor: pointer;
  transition: all ${({ theme }) => (`${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`)};
  min-height: 200px;
  width: 100%;
  max-width: 400px;

  &:hover {
    border-color: ${({ theme }) => (theme as Theme).colors.interactive.primary};
    background-color: ${({ theme }) => (theme as Theme).colors.background.tertiary};
  }
`;

export const StyledImagePreview = styled.div`
  width: 100%;
  max-width: 300px;
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.medium};

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const StyledResultSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.xl};
  width: 100%;
`;

export const StyledResultCard = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: ${({ theme }) => (theme as Theme).spacing['2xl']};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.xl};
  text-align: center;
  box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.large};
  min-width: 280px;

  & > * {
    margin-bottom: ${({ theme }) => (theme as Theme).spacing.sm};
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;