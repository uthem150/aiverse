import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import type { Theme } from '@/styles/themes/types';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const magicSparkle = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.1); }
`;

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
  transition: all
    ${({ theme }) =>
      `${(theme as Theme).animation.duration.normal} ${(theme as Theme).animation.easing.easeInOut}`};
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

export const StyledLoadingAnimation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.md};
  padding: ${({ theme }) => (theme as Theme).spacing.xl};

  .spinner {
    width: 48px;
    height: 48px;
    border: 4px solid ${({ theme }) => (theme as Theme).colors.border.primary};
    border-top: 4px solid #c41e3a;
    border-radius: 50%;
    animation: ${spinAnimation} 1s linear infinite;
  }
`;

export const StyledResultSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => (theme as Theme).spacing.xl};
  width: 100%;
`;

interface ResultCardProps {
  color: string;
  bgColor: string;
}

export const StyledResultCard = styled.div<ResultCardProps>`
  background: linear-gradient(135deg, ${({ color }) => color} 0%, ${({ color }) => color}CC 100%);
  color: white;
  padding: ${({ theme }) => (theme as Theme).spacing['2xl']};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.xl};
  text-align: center;
  box-shadow: ${({ theme }) => (theme as Theme).colors.shadow.large};
  min-width: 320px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '✨';
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
    animation: ${magicSparkle} 2s ease-in-out infinite;
  }

  .emoji {
    font-size: 4rem;
    margin-bottom: ${({ theme }) => (theme as Theme).spacing.md};
    animation: ${magicSparkle} 3s ease-in-out infinite;
  }

  & > * {
    margin-bottom: ${({ theme }) => (theme as Theme).spacing.sm};
    position: relative;
    z-index: 1;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;

interface HouseInfoProps {
  bgColor: string;
}

export const StyledHouseInfo = styled.div<HouseInfoProps>`
  background-color: ${({ bgColor }) => bgColor};
  padding: ${({ theme }) => (theme as Theme).spacing.lg};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => (theme as Theme).spacing.sm};
`;

export const StyledMembersList = styled.div`
  background-color: ${({ theme }) => (theme as Theme).colors.background.elevated};
  padding: ${({ theme }) => (theme as Theme).spacing.lg};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.lg};
  border: 1px solid ${({ theme }) => (theme as Theme).colors.border.primary};
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => (theme as Theme).spacing.sm};
  text-align: center;
`;
