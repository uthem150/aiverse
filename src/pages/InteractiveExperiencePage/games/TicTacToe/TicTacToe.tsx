import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, Brain, User, Trophy, RotateCcw } from 'lucide-react';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';

// 애니메이션들
const cellFill = keyframes`
  0% { 
    transform: scale(0) rotate(0deg); 
    opacity: 0; 
  }
  50% { 
    transform: scale(1.3) rotate(180deg); 
    opacity: 0.8; 
  }
  100% { 
    transform: scale(1) rotate(360deg); 
    opacity: 1; 
  }
`;

const aiThinking = keyframes`
  0%, 100% { 
    opacity: 0.4;
    transform: scale(1);
  }
  50% { 
    opacity: 1;
    transform: scale(1.05);
  }
`;

const victoryGlow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
    transform: scale(1);
  }
  50% { 
    box-shadow: 0 0 40px rgba(34, 197, 94, 0.8);
    transform: scale(1.02);
  }
`;

const defeatShake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
  20%, 40%, 60%, 80% { transform: translateX(8px); }
`;

const resultAppear = keyframes`
  0% {
    transform: scale(0.5) translateY(50px);
    opacity: 0;
  }
  50% {
    transform: scale(1.05) translateY(-10px);
    opacity: 0.8;
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
`;

const tierGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.6);
  }
`;

const statsReveal = keyframes`
  0% {
    transform: translateX(-30px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const buttonHover = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
`;

const boardAppear = keyframes`
  0% {
    transform: scale(0.8) rotateY(90deg);
    opacity: 0;
  }
  100% {
    transform: scale(1) rotateY(0deg);
    opacity: 1;
  }
`;

const cellHover = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

// 스타일 컴포넌트들
const GameContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  display: flex;
  flex-direction: column;
  font-family: 'Arial', sans-serif;
  overflow: hidden;
  user-select: none;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 2px solid rgba(59, 130, 246, 0.3);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    flex-direction: column;
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
    gap: 0.5rem;
  }
`;

const BackButton = styled.button`
  background: rgba(59, 130, 246, 0.1);
  border: 2px solid rgba(59, 130, 246, 0.3);
  border-radius: 12px;
  padding: 0.8rem 1.2rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: rgba(59, 130, 246, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.85rem;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.6rem;
    font-size: 0.8rem;
    border-radius: 8px;
    gap: 0.3rem;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const StatsPanel = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;

const Stat = styled.div`
  text-align: center;
  color: white;

  .stat-label {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.2rem;
  }

  .stat-value {
    font-size: 1.2rem;
    font-weight: 700;
    color: #3b82f6;
  }

  @media (max-width: 768px) {
    .stat-label {
      font-size: 0.7rem;
    }

    .stat-value {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .stat-label {
      font-size: 0.65rem;
    }

    .stat-value {
      font-size: 0.9rem;
    }
  }
`;

const GameArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin-top: 120px;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 140px;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    margin-top: 120px;
    gap: 1rem;
  }
`;

interface PlayerIndicatorProps {
  isActive: boolean;
  isWinner?: boolean;
  isLoser?: boolean;
}

const PlayerIndicator = styled.div<PlayerIndicatorProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 2px solid
    ${props =>
      props.isWinner
        ? '#22c55e'
        : props.isLoser
          ? '#ef4444'
          : props.isActive
            ? '#fbbf24'
            : 'rgba(255, 255, 255, 0.3)'};
  color: white;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  ${(props: PlayerIndicatorProps) =>
    props.isWinner &&
    css`
      animation: ${victoryGlow} 1.5s ease-in-out infinite;
    `}
  ${(props: PlayerIndicatorProps) =>
    props.isLoser &&
    css`
      animation: ${defeatShake} 0.6s ease;
    `}
  ${(props: PlayerIndicatorProps) =>
    props.isActive &&
    !props.isWinner &&
    !props.isLoser &&
    css`
      animation: ${aiThinking} 2s ease-in-out infinite;
    `}

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    border-radius: 16px;
    z-index: -1;
    opacity: ${(props: PlayerIndicatorProps) => (props.isActive ? 1 : 0)};
    animation: ${(props: PlayerIndicatorProps) =>
      props.isActive
        ? css`
            ${tierGlow} 2s ease-in-out infinite
          `
        : 'none'};
  }

  .player-name {
    font-weight: bold;
    font-size: 1.1rem;
  }

  .player-symbol {
    font-size: 1.5rem;
    font-weight: bold;
    text-shadow: 0 0 10px currentColor;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    gap: 0.8rem;

    .player-name {
      font-size: 1rem;
    }

    .player-symbol {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    gap: 0.6rem;
    border-radius: 12px;

    .player-name {
      font-size: 0.9rem;
    }

    .player-symbol {
      font-size: 1.2rem;
    }
  }
`;

interface GameBoardProps {
  isGameOver: boolean;
}

const GameBoard = styled.div<GameBoardProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  border-radius: 24px;
  border: 3px solid rgba(59, 130, 246, 0.4);
  position: relative;
  cursor: ${props => (props.isGameOver ? 'not-allowed' : 'pointer')};
  ${css`
    animation: ${boardAppear} 0.8s ease-out;
  `}
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.5),
    0 0 100px rgba(59, 130, 246, 0.2);

  &:before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: linear-gradient(45deg, #3b82f6, #8b5cf6, #3b82f6);
    border-radius: 24px;
    z-index: -1;
    opacity: 0.6;
    ${css`
      animation: ${tierGlow} 3s ease-in-out infinite;
    `}
  }

  @media (max-width: 768px) {
    gap: 10px;
    padding: 20px;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    padding: 16px;
    border-radius: 16px;
  }
`;

interface CellProps {
  value: string;
  isWinningCell: boolean;
  isClickable: boolean;
}

const Cell = styled.div<CellProps>`
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  color: ${props => (props.value === 'X' ? '#3b82f6' : '#ef4444')};
  cursor: ${props => (props.isClickable ? 'pointer' : 'default')};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  ${props =>
    props.value &&
    css`
      animation: ${cellFill} 0.5s ease-out;
    `}

  ${props =>
    props.isWinningCell &&
    css`
      background: rgba(34, 197, 94, 0.3);
      border-color: #22c55e;
      animation: ${victoryGlow} 1.5s ease-in-out infinite;
    `}

  ${props =>
    props.isClickable &&
    css`
      &:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.6);
        transform: translateY(-4px);
        animation: ${cellHover} 0.3s ease;
        box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
      }
    `}

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition:
      width 0.6s,
      height 0.6s;
  }

  ${(props: CellProps) =>
    props.isClickable &&
    css`
      &:hover:before {
        width: 120px;
        height: 120px;
      }
    `}

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    font-size: 2.5rem;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    width: 70px;
    height: 70px;
    font-size: 2rem;
    border-radius: 10px;
  }
`;

interface GameStatusProps {
  gameOver: boolean;
}

const GameStatus = styled.div<GameStatusProps>`
  text-align: center;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  margin: 1rem 0;
  opacity: ${(props: GameStatusProps) => (props.gameOver ? 1 : 0.8)};

  .status-text {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(45deg, #fff, #f1f5f9);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }

  .status-detail {
    font-size: 1.1rem;
    opacity: 0.8;
    color: rgba(255, 255, 255, 0.9);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;

    .status-text {
      font-size: 1.5rem;
    }

    .status-detail {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .status-text {
      font-size: 1.3rem;
    }

    .status-detail {
      font-size: 0.9rem;
    }
  }
`;

const ControlPanel = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 0.6rem;
  }
`;

const ControlButton = styled.button`
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border: none;
  border-radius: 12px;
  padding: 0.8rem 1.5rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition:
      width 0.6s,
      height 0.6s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(59, 130, 246, 0.4);
    ${css`
      animation: ${buttonHover} 0.6s ease-in-out;
    `}

    &:before {
      width: 300px;
      height: 300px;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    border-radius: 8px;
  }
`;

const DifficultySelector = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    gap: 0.8rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 0.6rem;
    flex-direction: column;
  }
`;

interface DifficultyButtonProps {
  selected?: boolean;
}

const DifficultyButton = styled.button<DifficultyButtonProps>`
  background: ${props =>
    props.selected ? 'linear-gradient(135deg, #22c55e, #16a34a)' : 'rgba(255, 255, 255, 0.1)'};
  border: 2px solid ${props => (props.selected ? '#22c55e' : 'rgba(255, 255, 255, 0.3)')};
  border-radius: 12px;
  padding: 0.8rem 1.5rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  ${props =>
    props.selected &&
    css`
      box-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
      animation: ${tierGlow} 2s ease-in-out infinite;
    `}

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition:
      width 0.6s,
      height 0.6s;
  }

  &:hover {
    background: ${props =>
      props.selected ? 'linear-gradient(135deg, #16a34a, #15803d)' : 'rgba(255, 255, 255, 0.2)'};
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);

    &:before {
      width: 200px;
      height: 200px;
    }
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    border-radius: 8px;
    width: 100%;
  }
`;

interface GameOverlayProps {
  show: boolean;
}

const GameOverlay = styled.div<GameOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(15px);
  display: ${(props: GameOverlayProps) => (props.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  overflow-y: auto;

  @media (max-width: 480px) {
    padding: 0.5rem;
    align-items: flex-start;
    padding-top: 2rem;
  }
`;

const OverlayContent = styled.div`
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
  backdrop-filter: blur(30px);
  border: 2px solid rgba(59, 130, 246, 0.4);
  border-radius: 24px;
  padding: 2.5rem 2rem;
  text-align: center;
  max-width: 600px;
  width: 100%;
  position: relative;
  overflow: hidden;
  ${css`
    animation: ${resultAppear} 0.8s ease-out;
  `}
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.5),
    0 0 100px rgba(59, 130, 246, 0.2);
  max-height: 90vh;
  overflow-y: auto;

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 24px;
    z-index: -1;
    ${css`
      animation: ${tierGlow} 3s ease-in-out infinite;
    `}
  }

  .overlay-title {
    font-size: 2.2rem;
    font-weight: 800;
    background: linear-gradient(45deg, #fff, #f1f5f9);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1.5rem;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }

  .overlay-text {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    border-radius: 20px;
    max-height: 95vh;

    .overlay-title {
      font-size: 1.8rem;
      margin-bottom: 1.2rem;
    }

    .overlay-text {
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    border-radius: 16px;
    max-height: 100vh;
    margin: 0;

    .overlay-title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .overlay-text {
      font-size: 0.85rem;
      margin-bottom: 1.2rem;
    }
  }
`;

// 새로운 결과 관련 컴포넌트들
interface TierBadgeProps {
  color: string;
}

const TierBadge = styled.div<TierBadgeProps>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, ${props => props.color}20, ${props => props.color}40);
  border: 2px solid ${props => props.color};
  border-radius: 16px;
  padding: 0.8rem 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${props => props.color};
  text-shadow: 0 0 20px ${props => props.color}80;
  ${css`
    animation: ${tierGlow} 2s ease-in-out infinite;
  `}

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    border-radius: 10px;
    gap: 0.3rem;
  }
`;

const ScoreBreakdown = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 1.2rem;
    margin: 1.2rem 0;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 10px;
  }
`;

interface ScoreItemProps {
  delay?: number;
}

const ScoreItem = styled.div<ScoreItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  animation-name: ${statsReveal};
  animation-duration: 0.6s;
  animation-timing-function: ease-out;
  animation-fill-mode: both;
  animation-delay: ${(props: ScoreItemProps) => (props.delay || 0) * 0.1}s;

  &:last-child {
    border-bottom: none;
    font-size: 1.2rem;
    font-weight: 700;
    margin-top: 0.5rem;
    padding-top: 1rem;
  }

  .score-label {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.95rem;
  }

  .score-value {
    color: #fff;
    font-weight: 600;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0;

    &:last-child {
      font-size: 1.1rem;
      margin-top: 0.4rem;
      padding-top: 0.8rem;
    }

    .score-label {
      font-size: 0.85rem;
    }

    .score-value {
      font-size: 0.9rem;
    }
  }
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1.5rem 0;

  @media (max-width: 768px) {
    gap: 0.8rem;
    margin: 1.2rem 0;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.6rem;
    margin: 1rem 0;
  }
`;

interface StatCardProps {
  delay?: number;
}

const StatCard = styled.div<StatCardProps>`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  animation-name: ${statsReveal};
  animation-duration: 0.6s;
  animation-timing-function: ease-out;
  animation-fill-mode: both;
  animation-delay: ${(props: StatCardProps) => (props.delay || 0) * 0.1}s;

  .stat-title {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .stat-number {
    font-size: 1.4rem;
    font-weight: 700;
    color: #3b82f6;
    text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    border-radius: 10px;

    .stat-title {
      font-size: 0.75rem;
      margin-bottom: 0.4rem;
    }

    .stat-number {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
    border-radius: 8px;

    .stat-title {
      font-size: 0.7rem;
      margin-bottom: 0.3rem;
    }

    .stat-number {
      font-size: 1.1rem;
    }
  }
`;

interface PerformanceMessageProps {
  delay?: number;
}

const PerformanceMessage = styled.div<PerformanceMessageProps>`
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1));
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  color: #22c55e;
  font-weight: 600;
  animation-name: ${statsReveal};
  animation-duration: 0.6s;
  animation-timing-function: ease-out;
  animation-fill-mode: both;
  animation-delay: ${(props: PerformanceMessageProps) => (props.delay || 0) * 0.1}s;
  text-shadow: 0 0 10px rgba(34, 197, 94, 0.3);

  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    margin: 1.2rem 0;
    border-radius: 10px;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    margin: 1rem 0;
    border-radius: 8px;
    font-size: 0.9rem;
  }
`;

interface ActionButtonProps {
  variant?: 'primary' | 'secondary';
}

const ActionButton = styled.button<ActionButtonProps>`
  background: ${(props: ActionButtonProps) =>
    props.variant === 'secondary'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'linear-gradient(135deg, #3b82f6, #1d4ed8)'};
  border: ${(props: ActionButtonProps) =>
    props.variant === 'secondary' ? '2px solid rgba(255, 255, 255, 0.3)' : 'none'};
  border-radius: 14px;
  padding: 1rem 2rem;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0.5rem;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition:
      width 0.6s,
      height 0.6s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
    ${css`
      animation: ${buttonHover} 0.6s ease-in-out;
    `}

    &:before {
      width: 300px;
      height: 300px;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.3rem;
    font-size: 0.95rem;
    margin: 0.4rem;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
    margin: 0.3rem;
    border-radius: 10px;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

// 타입 정의
type Player = 'X' | 'O' | null;
type GameResult = 'win' | 'lose' | 'draw' | 'playing';
type Difficulty = 'easy' | 'medium' | 'hard';

interface GameStats {
  wins: number;
  losses: number;
  draws: number;
  totalGames: number;
  winRate: number;
  streak: number;
  bestStreak: number;
}

interface TierInfo {
  name: string;
  emoji: string;
  color: string;
  minWinRate: number;
  minGames: number;
}

// 티어 정의 (승률 기반)
const TIERS: TierInfo[] = [
  { name: '챌린저', emoji: '👑', color: '#FF6B6B', minWinRate: 85, minGames: 20 },
  { name: '그랜드마스터', emoji: '💎', color: '#4ECDC4', minWinRate: 75, minGames: 15 },
  { name: '마스터', emoji: '🏆', color: '#45B7D1', minWinRate: 65, minGames: 12 },
  { name: '다이아몬드', emoji: '💠', color: '#96CEB4', minWinRate: 55, minGames: 10 },
  { name: '플래티넘', emoji: '⭐', color: '#FFEAA7', minWinRate: 45, minGames: 8 },
  { name: '골드', emoji: '🥇', color: '#FDCB6E', minWinRate: 35, minGames: 6 },
  { name: '실버', emoji: '🥈', color: '#A29BFE', minWinRate: 25, minGames: 4 },
  { name: '브론즈', emoji: '🥉', color: '#E17055', minWinRate: 0, minGames: 0 },
];

// 상수들을 컴포넌트 외부로 이동
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // 가로
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // 세로
  [0, 4, 8],
  [2, 4, 6], // 대각선
];

const TicTacToe: React.FC = () => {
  const [gameState, setGameState] = useState<'setup' | 'playing' | 'finished'>('setup');
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [gameResult, setGameResult] = useState<GameResult>('playing');
  const [winningLine, setWinningLine] = useState<number[]>([]);
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [stats, setStats] = useState<GameStats>({
    wins: 0,
    losses: 0,
    draws: 0,
    totalGames: 0,
    winRate: 0,
    streak: 0,
    bestStreak: 0,
  });
  const [aiThinking, setAiThinking] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const thinkingTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // 티어 계산 함수
  const calculateTier = (gameStats: GameStats): TierInfo => {
    for (const tier of TIERS) {
      if (gameStats.totalGames >= tier.minGames && gameStats.winRate >= tier.minWinRate) {
        return tier;
      }
    }
    return TIERS[TIERS.length - 1]; // 브론즈
  };

  const checkWinner = useCallback((board: Player[]): { winner: Player; line: number[] } => {
    for (const combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { winner: board[a], line: combination };
      }
    }
    return { winner: null, line: [] };
  }, []);

  const isBoardFull = (board: Player[]): boolean => {
    return board.every(cell => cell !== null);
  };

  const minimax = useCallback(
    (board: Player[], depth: number, isMaximizing: boolean, maxDepth: number): number => {
      const { winner } = checkWinner(board);

      if (winner === 'O') return 10 - depth;
      if (winner === 'X') return depth - 10;
      if (isBoardFull(board)) return 0;
      if (depth >= maxDepth) return 0;

      if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 9; i++) {
          if (board[i] === null) {
            board[i] = 'O';
            const score = minimax(board, depth + 1, false, maxDepth);
            board[i] = null;
            bestScore = Math.max(score, bestScore);
          }
        }
        return bestScore;
      } else {
        let bestScore = Infinity;
        for (let i = 0; i < 9; i++) {
          if (board[i] === null) {
            board[i] = 'X';
            const score = minimax(board, depth + 1, true, maxDepth);
            board[i] = null;
            bestScore = Math.min(score, bestScore);
          }
        }
        return bestScore;
      }
    },
    [checkWinner]
  );

  const getAIMove = useCallback(
    (board: Player[]): number => {
      const emptyCells = board
        .map((cell, index) => (cell === null ? index : null))
        .filter(val => val !== null) as number[];

      if (emptyCells.length === 0) return -1;

      let randomChance: number;
      let maxDepth: number;

      switch (difficulty) {
        case 'easy': {
          randomChance = 0.8;
          maxDepth = 2;
          break;
        }
        case 'medium': {
          randomChance = 0.3;
          maxDepth = 4;
          break;
        }
        case 'hard':
        default: {
          randomChance = 0;
          maxDepth = 9;
          break;
        }
      }

      if (Math.random() < randomChance) {
        return emptyCells[Math.floor(Math.random() * emptyCells.length)];
      } else {
        let bestScore = -Infinity;
        let bestMove = emptyCells[0];

        for (const move of emptyCells) {
          board[move] = 'O';
          const score = minimax(board, 0, false, maxDepth);
          board[move] = null;

          if (score > bestScore) {
            bestScore = score;
            bestMove = move;
          }
        }
        return bestMove;
      }
    },
    [difficulty, minimax]
  );

  const makeMove = (index: number) => {
    if (board[index] !== null || gameResult !== 'playing' || currentPlayer !== 'X') return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);

    const { winner, line } = checkWinner(newBoard);
    if (winner) {
      setGameResult('win');
      setWinningLine(line);
      setShowResults(true);
      updateStats('win');
      return;
    }

    if (isBoardFull(newBoard)) {
      setGameResult('draw');
      setShowResults(true);
      updateStats('draw');
      return;
    }

    setCurrentPlayer('O');
    setAiThinking(true);

    const thinkingTime = 500 + Math.random() * 1000;
    thinkingTimeoutRef.current = setTimeout(() => {
      const aiMove = getAIMove(newBoard);
      if (aiMove !== -1) {
        newBoard[aiMove] = 'O';
        setBoard(newBoard);

        const { winner: aiWinner, line: aiLine } = checkWinner(newBoard);
        if (aiWinner) {
          setGameResult('lose');
          setWinningLine(aiLine);
          setShowResults(true);
          updateStats('lose');
        } else if (isBoardFull(newBoard)) {
          setGameResult('draw');
          setShowResults(true);
          updateStats('draw');
        } else {
          setCurrentPlayer('X');
        }
      }
      setAiThinking(false);
    }, thinkingTime);
  };

  const updateStats = (result: 'win' | 'lose' | 'draw') => {
    setStats(prev => {
      const newStats = { ...prev };
      newStats.totalGames = prev.totalGames + 1;

      switch (result) {
        case 'win': {
          newStats.wins = prev.wins + 1;
          newStats.streak = prev.streak + 1;
          newStats.bestStreak = Math.max(prev.bestStreak, newStats.streak);
          break;
        }
        case 'lose': {
          newStats.losses = prev.losses + 1;
          newStats.streak = 0;
          break;
        }
        case 'draw': {
          newStats.draws = prev.draws + 1;
          newStats.streak = 0;
          break;
        }
      }

      newStats.winRate =
        newStats.totalGames > 0 ? Math.round((newStats.wins / newStats.totalGames) * 100) : 0;

      return newStats;
    });
  };

  const startNewGame = () => {
    if (thinkingTimeoutRef.current) {
      clearTimeout(thinkingTimeoutRef.current);
    }

    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setGameResult('playing');
    setWinningLine([]);
    setGameState('playing');
    setAiThinking(false);
    setShowResults(false);
  };

  const resetGame = () => {
    if (thinkingTimeoutRef.current) {
      clearTimeout(thinkingTimeoutRef.current);
    }

    setGameState('setup');
    setShowResults(false);
    setStats({
      wins: 0,
      losses: 0,
      draws: 0,
      totalGames: 0,
      winRate: 0,
      streak: 0,
      bestStreak: 0,
    });
  };

  const getStatusMessage = () => {
    switch (gameResult) {
      case 'win':
        return { text: '🎉 승리!', detail: '축하합니다! AI를 이겼습니다!' };
      case 'lose':
        return { text: '😤 패배!', detail: 'AI가 승리했습니다. 다시 도전해보세요!' };
      case 'draw':
        return { text: '🤝 무승부!', detail: '훌륭한 게임이었습니다!' };
      case 'playing':
        if (currentPlayer === 'X') {
          return { text: '당신의 차례', detail: 'X를 놓을 위치를 선택하세요' };
        } else {
          return { text: 'AI의 차례', detail: 'AI가 생각 중입니다...' };
        }
    }
  };

  const getPerformanceMessage = () => {
    if (stats.winRate >= 80 && stats.bestStreak >= 5) {
      return '🏆 완벽한 전략가! AI도 당신을 인정합니다!';
    } else if (stats.winRate >= 60 && stats.bestStreak >= 3) {
      return '🎉 훌륭한 실력! 상당한 수준의 플레이어네요!';
    } else if (stats.winRate >= 40) {
      return '👍 좋은 성과! 꾸준히 발전하고 있어요!';
    } else if (stats.winRate >= 20) {
      return '💪 조금 더 연습하면 크게 향상될 거예요!';
    } else {
      return '🎯 전략을 세우고 차근차근 도전해보세요!';
    }
  };

  useEffect(() => {
    return () => {
      if (thinkingTimeoutRef.current) {
        clearTimeout(thinkingTimeoutRef.current);
      }
    };
  }, []);

  const handleBackClick = () => {
    if (thinkingTimeoutRef.current) {
      clearTimeout(thinkingTimeoutRef.current);
    }
    console.log('뒤로 가기 버튼 클릭');
  };

  const getDifficultyName = (diff: Difficulty) => {
    switch (diff) {
      case 'easy':
        return '쉬움 (AI 실수 많음)';
      case 'medium':
        return '보통 (AI 가끔 실수)';
      case 'hard':
        return '어려움 (완벽한 AI)';
    }
  };

  const statusMessage = getStatusMessage();
  const isGameOver = gameResult !== 'playing';
  const currentTier = calculateTier(stats);

  return (
    <GameContainer>
      <Header>
        <BackButton onClick={handleBackClick}>
          <ArrowLeft size={16} />
          게임 목록
        </BackButton>
        <Title>⭕ 틱택토 AI 대전</Title>
        <StatsPanel>
          <Stat>
            <div className="stat-label">승률</div>
            <div className="stat-value">{stats.winRate}%</div>
          </Stat>
          <Stat>
            <div className="stat-label">승리</div>
            <div className="stat-value">{stats.wins}</div>
          </Stat>
          <Stat>
            <div className="stat-label">연승</div>
            <div className="stat-value">{stats.streak}</div>
          </Stat>
          <Stat>
            <div className="stat-label">최고연승</div>
            <div className="stat-value">{stats.bestStreak}</div>
          </Stat>
        </StatsPanel>
      </Header>

      {gameState !== 'setup' && (
        <GameArea>
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center',
              marginBottom: '1rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <PlayerIndicator
              isActive={currentPlayer === 'X' && !isGameOver}
              isWinner={gameResult === 'win'}
              isLoser={gameResult === 'lose'}
            >
              <User size={20} />
              <div className="player-name">플레이어</div>
              <div className="player-symbol">X</div>
            </PlayerIndicator>

            <PlayerIndicator
              isActive={(currentPlayer === 'O' && !isGameOver) || aiThinking}
              isWinner={gameResult === 'lose'}
              isLoser={gameResult === 'win'}
            >
              <Brain size={20} />
              <div className="player-name">AI ({getDifficultyName(difficulty).split(' ')[0]})</div>
              <div className="player-symbol">O</div>
            </PlayerIndicator>
          </div>

          <GameBoard isGameOver={isGameOver}>
            {board.map((cell, index) => (
              <Cell
                key={index}
                value={cell || ''}
                isWinningCell={winningLine.includes(index)}
                isClickable={!cell && currentPlayer === 'X' && !isGameOver}
                onClick={() => makeMove(index)}
              >
                {cell}
              </Cell>
            ))}
          </GameBoard>

          <GameStatus gameOver={isGameOver}>
            <div className="status-text">{statusMessage.text}</div>
            <div className="status-detail">{statusMessage.detail}</div>
          </GameStatus>

          <ControlPanel>
            <ControlButton onClick={startNewGame}>
              <RotateCcw size={16} />새 게임
            </ControlButton>
            <ControlButton onClick={resetGame}>
              <Trophy size={16} />
              난이도 변경
            </ControlButton>
          </ControlPanel>
        </GameArea>
      )}

      {/* 게임 시작 오버레이 */}
      <GameOverlay show={gameState === 'setup'}>
        <OverlayContent>
          <div className="overlay-title">⭕ 틱택토 AI 대전</div>
          <div className="overlay-text">
            똑똑한 AI와 틱택토 대결을 펼치세요!
            <br />
            3개를 먼저 한 줄로 만드는 사람이 승리합니다.
            <br />
            <br />
            <strong>게임 규칙:</strong>
            <br />
            • 당신은 X, AI는 O입니다
            <br />
            • 가로, 세로, 대각선 중 하나를 먼저 완성하세요
            <br />
            • 모든 칸이 차면 무승부입니다
            <br />
            <br />
            AI 난이도를 선택하세요:
          </div>

          <DifficultySelector>
            {(['easy', 'medium', 'hard'] as Difficulty[]).map(diff => (
              <DifficultyButton
                key={diff}
                selected={difficulty === diff}
                onClick={() => setDifficulty(diff)}
              >
                {getDifficultyName(diff)}
              </DifficultyButton>
            ))}
          </DifficultySelector>

          <ActionButton onClick={startNewGame}>대전 시작</ActionButton>
          <ActionButton variant="secondary" onClick={handleBackClick}>
            뒤로 가기
          </ActionButton>
        </OverlayContent>
      </GameOverlay>

      {/* 게임 결과 오버레이 */}
      <GameOverlay show={showResults}>
        <OverlayContent>
          <div className="overlay-title">
            {gameResult === 'win' ? '🏆 승리!' : gameResult === 'lose' ? '😤 패배!' : '🤝 무승부!'}
          </div>

          <TierBadge color={currentTier.color}>
            {currentTier.emoji} {currentTier.name}
          </TierBadge>

          <ScoreBreakdown>
            <ScoreItem delay={1}>
              <span className="score-label">🎯 현재 승률</span>
              <span className="score-value">{stats.winRate}%</span>
            </ScoreItem>
            <ScoreItem delay={2}>
              <span className="score-label">🔥 현재 연승</span>
              <span className="score-value">{stats.streak}회</span>
            </ScoreItem>
            <ScoreItem delay={3}>
              <span className="score-label">⚡ 최고 연승</span>
              <span className="score-value">{stats.bestStreak}회</span>
            </ScoreItem>
            <ScoreItem delay={4}>
              <span className="score-label">💎 티어 등급</span>
              <span className="score-value" style={{ color: currentTier.color }}>
                {currentTier.emoji} {currentTier.name}
              </span>
            </ScoreItem>
          </ScoreBreakdown>

          <StatGrid>
            <StatCard delay={5}>
              <div className="stat-title">총 경기 수</div>
              <div className="stat-number">{stats.totalGames}게임</div>
            </StatCard>
            <StatCard delay={6}>
              <div className="stat-title">승리 / 패배</div>
              <div className="stat-number">
                {stats.wins} / {stats.losses}
              </div>
            </StatCard>
            <StatCard delay={7}>
              <div className="stat-title">무승부</div>
              <div className="stat-number">{stats.draws}회</div>
            </StatCard>
            <StatCard delay={8}>
              <div className="stat-title">AI 난이도</div>
              <div className="stat-number">{getDifficultyName(difficulty).split(' ')[0]}</div>
            </StatCard>
          </StatGrid>

          <PerformanceMessage delay={9}>{getPerformanceMessage()}</PerformanceMessage>

          <div style={{ marginTop: '1.5rem' }}>
            <ActionButton onClick={() => setShowResults(false)}>🔄 계속하기</ActionButton>
            <ActionButton onClick={startNewGame}>🆕 새 게임</ActionButton>
            <ActionButton variant="secondary" onClick={resetGame}>
              ⚙️ 설정 변경
            </ActionButton>
          </div>
        </OverlayContent>
      </GameOverlay>
    </GameContainer>
  );
};

export default TicTacToe;
