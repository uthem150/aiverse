import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, ArrowUp, ArrowDown, ArrowRight } from 'lucide-react';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';

// 애니메이션 정의
const gameStart = keyframes`
  0% { opacity: 0; transform: scale(0.8) rotate(-5deg); }
  50% { opacity: 0.8; transform: scale(1.05) rotate(2deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
`;

const snakeMove = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const foodEaten = keyframes`
  0% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.4) rotate(90deg); }
  50% { transform: scale(1.6) rotate(180deg); }
  75% { transform: scale(1.4) rotate(270deg); }
  100% { transform: scale(1) rotate(360deg); }
`;

const foodSpawn = keyframes`
  0% { transform: scale(0) rotate(0deg); opacity: 0; }
  50% { transform: scale(1.3) rotate(180deg); opacity: 0.8; }
  100% { transform: scale(1) rotate(360deg); opacity: 1; }
`;

const gameOver = keyframes`
  0% { transform: scale(1); background: #10b981; }
  25% { transform: scale(1.1) rotate(2deg); background: #ef4444; }
  50% { transform: scale(0.9) rotate(-2deg); background: #dc2626; }
  75% { transform: scale(1.1) rotate(2deg); background: #ef4444; }
  100% { transform: scale(1) rotate(0deg); background: #10b981; }
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

const difficultyPulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
`;

const comboEffect = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.8; }
  100% { transform: scale(2); opacity: 0; }
`;

const boardPulse = keyframes`
  0%, 100% { border-color: rgba(255, 255, 255, 0.3); }
  50% { border-color: rgba(16, 185, 129, 0.6); }
`;

// 난이도 설정
interface Difficulty {
  name: string;
  emoji: string;
  speed: number;
  gridSize: number;
  boardSize: number;
  description: string;
}

const DIFFICULTIES: Difficulty[] = [
  {
    name: '쉬움',
    emoji: '🐌',
    speed: 250,
    gridSize: 15,
    boardSize: 375,
    description: '느린 속도, 작은 보드',
  },
  {
    name: '보통',
    emoji: '🐍',
    speed: 180,
    gridSize: 20,
    boardSize: 400,
    description: '적당한 속도, 보통 보드',
  },
  {
    name: '어려움',
    emoji: '⚡',
    speed: 120,
    gridSize: 25,
    boardSize: 425,
    description: '빠른 속도, 큰 보드',
  },
  {
    name: '지옥',
    emoji: '🔥',
    speed: 80,
    gridSize: 30,
    boardSize: 450,
    description: '극한 속도, 거대 보드',
  },
];

// 티어 시스템
interface TierInfo {
  name: string;
  emoji: string;
  color: string;
  minScore: number;
}

const TIERS: TierInfo[] = [
  { name: '전설', emoji: '👑', color: '#FFD700', minScore: 15000 },
  { name: '마스터', emoji: '🏆', color: '#00CED1', minScore: 10000 },
  { name: '다이아몬드', emoji: '💎', color: '#4169E1', minScore: 7000 },
  { name: '플래티넘', emoji: '⭐', color: '#C0C0C0', minScore: 4500 },
  { name: '골드', emoji: '🥇', color: '#FFD700', minScore: 2800 },
  { name: '실버', emoji: '🥈', color: '#C0C0C0', minScore: 1500 },
  { name: '브론즈', emoji: '🥉', color: '#CD7F32', minScore: 700 },
  { name: '초보', emoji: '🐣', color: '#808080', minScore: 0 },
];

const GameContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  display: flex;
  flex-direction: column;
  font-family: 'Arial', sans-serif;
  user-select: none;
  overflow: hidden;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 2px solid rgba(16, 185, 129, 0.3);
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
  background: rgba(16, 185, 129, 0.1);
  border: 2px solid rgba(16, 185, 129, 0.3);
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
    background: rgba(16, 185, 129, 0.2);
    transform: translateY(-2px);
    ${css`
      animation: ${buttonHover} 0.6s ease-in-out;
    `}
    box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
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
  background: linear-gradient(45deg, #10b981, #059669);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  text-shadow: 0 0 20px rgba(16, 185, 129, 0.5);

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

const Stat = styled.div<{ highlight?: boolean }>`
  text-align: center;
  color: white;

  ${props =>
    props.highlight &&
    css`
      animation: ${foodEaten} 0.8s ease;
    `}

  .stat-label {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.2rem;
  }

  .stat-value {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${props => (props.highlight ? '#fbbf24' : '#10b981')};
    text-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
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
  gap: 2rem;
  margin-top: 120px;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1.5rem;
    margin-top: 140px;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    gap: 1rem;
    margin-top: 120px;
  }
`;

const GameBoard = styled.div<{ size: number; isActive: boolean }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: rgba(255, 255, 255, 0.05);
  border: 4px solid rgba(16, 185, 129, 0.3);
  border-radius: 16px;
  position: relative;
  box-shadow:
    0 15px 40px rgba(0, 0, 0, 0.4),
    inset 0 0 30px rgba(16, 185, 129, 0.1);
  animation: ${gameStart} 0.8s ease-out;
  backdrop-filter: blur(10px);

  ${props =>
    props.isActive &&
    css`
      animation: ${boardPulse} 2s ease-in-out infinite;
    `}

  @media (max-width: 768px) {
    width: ${props => Math.min(props.size, 350)}px;
    height: ${props => Math.min(props.size, 350)}px;
    border: 3px solid rgba(16, 185, 129, 0.3);
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    width: ${props => Math.min(props.size, 280)}px;
    height: ${props => Math.min(props.size, 280)}px;
    border: 2px solid rgba(16, 185, 129, 0.3);
    border-radius: 10px;
  }
`;

const SnakeSegment = styled.div<{
  x: number;
  y: number;
  gridSize: number;
  boardSize: number;
  isHead: boolean;
  direction?: string;
  index: number;
}>`
  position: absolute;
  left: ${props => (props.x * props.boardSize) / props.gridSize}px;
  top: ${props => (props.y * props.boardSize) / props.gridSize}px;
  width: ${props => props.boardSize / props.gridSize - 2}px;
  height: ${props => props.boardSize / props.gridSize - 2}px;
  background: ${props =>
    props.isHead
      ? 'linear-gradient(135deg, #fbbf24, #f59e0b)'
      : `linear-gradient(135deg, #10b981, #059669)`};
  border-radius: ${props => (props.isHead ? '60%' : '8px')};
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: ${props =>
    props.isHead ? '0 0 15px rgba(251, 191, 36, 0.6)' : '0 0 8px rgba(16, 185, 129, 0.4)'};
  transition: all 0.2s ease;
  z-index: ${props => (props.isHead ? 10 : 9 - props.index)};

  ${props =>
    props.isHead &&
    css`
      animation: ${snakeMove} 0.3s ease;

      &::before {
        content: '';
        position: absolute;
        top: 25%;
        left: 25%;
        width: 20%;
        height: 20%;
        background: #1f2937;
        border-radius: 50%;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      }

      &::after {
        content: '';
        position: absolute;
        top: 25%;
        right: 25%;
        width: 20%;
        height: 20%;
        background: #1f2937;
        border-radius: 50%;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      }
    `}

  @media (max-width: 768px) {
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

const Food = styled.div<{
  x: number;
  y: number;
  gridSize: number;
  boardSize: number;
  isEaten: boolean;
  isNew: boolean;
}>`
  position: absolute;
  left: ${props => (props.x * props.boardSize) / props.gridSize}px;
  top: ${props => (props.y * props.boardSize) / props.gridSize}px;
  width: ${props => props.boardSize / props.gridSize - 2}px;
  height: ${props => props.boardSize / props.gridSize - 2}px;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(239, 68, 68, 0.8);
  border: 2px solid rgba(255, 255, 255, 0.3);
  z-index: 15;

  ${props =>
    props.isEaten &&
    css`
      animation: ${foodEaten} 0.5s ease;
    `}

  ${props =>
    props.isNew &&
    css`
      animation: ${foodSpawn} 0.4s ease;
    `}

  &::before {
    content: '🍎';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: ${props => (props.boardSize / props.gridSize) * 0.6}px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const ComboIndicator = styled.div<{ show: boolean }>`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
  font-weight: bold;
  color: #fbbf24;
  text-shadow: 0 0 20px rgba(251, 191, 36, 0.8);
  z-index: 200;
  pointer-events: none;
  opacity: ${props => (props.show ? 1 : 0)};

  ${props =>
    props.show &&
    css`
      animation: ${comboEffect} 1s ease-out;
    `}

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ControlButtons = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem;
    width: 180px;
  }

  @media (max-width: 480px) {
    gap: 0.6rem;
    width: 150px;
  }
`;

const ControlButton = styled.button<{ position: 'up' | 'down' | 'left' | 'right' | 'empty' }>`
  width: 50px;
  height: 50px;
  background: rgba(16, 185, 129, 0.2);
  border: 2px solid rgba(16, 185, 129, 0.4);
  border-radius: 12px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.position === 'empty' &&
    `
    background: transparent;
    border: none;
    cursor: default;
  `}

  ${props => props.position === 'up' && `grid-column: 2;`}
  ${props => props.position === 'left' && `grid-column: 1;`}
  ${props => props.position === 'right' && `grid-column: 3;`}
  ${props => props.position === 'down' && `grid-column: 2;`}

  &:hover:not([disabled]) {
    background: rgba(16, 185, 129, 0.3);
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(16, 185, 129, 0.3);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
`;

const GameOverlay = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(15px);
  display: ${props => (props.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const OverlayContent = styled.div`
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1));
  backdrop-filter: blur(30px);
  border: 2px solid rgba(16, 185, 129, 0.4);
  border-radius: 24px;
  padding: 3rem 2.5rem;
  text-align: center;
  max-width: 600px;
  width: 100%;
  position: relative;
  overflow: hidden;
  animation: ${resultAppear} 0.8s ease-out;
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.5),
    0 0 100px rgba(16, 185, 129, 0.2);

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 24px;
    z-index: -1;
    animation: ${tierGlow} 3s ease-in-out infinite;
  }

  .overlay-title {
    font-size: 2.5rem;
    font-weight: 800;
    background: linear-gradient(45deg, #fff, #f1f5f9);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1.5rem;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }

  .overlay-text {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2.5rem;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    padding: 1.8rem 1.3rem;
    margin: 1rem;
    border-radius: 20px;
    max-height: calc(100vh - 2rem);
    overflow-y: auto;

    .overlay-title {
      font-size: 1.8rem;
      margin-bottom: 1.2rem;
    }

    .overlay-text {
      font-size: 0.95rem;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    margin: 0.5rem;
    border-radius: 16px;
    max-height: calc(100vh - 1rem);

    .overlay-title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .overlay-text {
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
    }
  }
`;

const DifficultySelector = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 2rem 0;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    margin: 1.5rem 0;
  }
`;

const DifficultyCard = styled.button<{ selected: boolean }>`
  background: ${props =>
    props.selected ? 'linear-gradient(135deg, #10b981, #059669)' : 'rgba(255, 255, 255, 0.05)'};
  border: 2px solid ${props => (props.selected ? '#10b981' : 'rgba(255, 255, 255, 0.1)')};
  border-radius: 12px;
  padding: 1rem;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;

  ${props =>
    props.selected &&
    css`
      animation: ${difficultyPulse} 2s ease-in-out infinite;
    `}

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(16, 185, 129, 0.3);
    border-color: #10b981;
  }

  .difficulty-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .difficulty-desc {
    font-size: 0.9rem;
    opacity: 0.8;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    border-radius: 10px;

    .difficulty-header {
      font-size: 1rem;
    }

    .difficulty-desc {
      font-size: 0.85rem;
    }
  }
`;

const TierBadge = styled.div<{ color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, ${props => props.color}20, ${props => props.color}40);
  border: 2px solid ${props => props.color};
  border-radius: 16px;
  padding: 0.8rem 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${props => props.color};
  text-shadow: 0 0 20px ${props => props.color}80;
  animation: ${tierGlow} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
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

const ScoreItem = styled.div<{ delay?: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${statsReveal} 0.6s ease-out ${props => (props.delay || 0) * 0.1}s both;

  &:last-child {
    border-bottom: none;
    font-size: 1.2rem;
    font-weight: 700;
    margin-top: 0.5rem;
    padding-top: 1rem;
    border-top: 2px solid rgba(16, 185, 129, 0.3);
  }

  .score-label {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.95rem;
  }

  .score-value {
    color: #10b981;
    font-weight: 600;
    text-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
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

const StatCard = styled.div<{ delay?: number }>`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  animation: ${statsReveal} 0.6s ease-out ${props => (props.delay || 0) * 0.1}s both;

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
    color: #10b981;
    text-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
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

const PerformanceMessage = styled.div<{ delay?: number }>`
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1));
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  color: #10b981;
  font-weight: 600;
  animation: ${statsReveal} 0.6s ease-out ${props => (props.delay || 0) * 0.1}s both;
  text-shadow: 0 0 10px rgba(16, 185, 129, 0.3);

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

const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  background: ${props =>
    props.variant === 'secondary'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'linear-gradient(135deg, #10b981, #059669)'};
  border: ${props =>
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
    box-shadow: 0 15px 35px rgba(16, 185, 129, 0.4);
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

interface Position {
  x: number;
  y: number;
}

interface GameStats {
  score: number;
  length: number;
  highScore: number;
  foodEaten: number;
  survivalTime: number;
  efficiency: number;
  combo: number;
  maxCombo: number;
}

const SnakeGame: React.FC = () => {
  const [gameState, setGameState] = useState<'setup' | 'playing' | 'paused' | 'finished'>('setup');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>(DIFFICULTIES[1]);
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<'up' | 'down' | 'left' | 'right'>('right');
  const [stats, setStats] = useState<GameStats>({
    score: 0,
    length: 1,
    highScore: parseInt(localStorage.getItem('snake-high-score') || '0'),
    foodEaten: 0,
    survivalTime: 0,
    efficiency: 0,
    combo: 0,
    maxCombo: 0,
  });
  const [foodEaten, setFoodEaten] = useState(false);
  const [foodNew, setFoodNew] = useState(false);
  const [showCombo, setShowCombo] = useState(false);

  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const gameStartTimeRef = useRef(0);
  const lastFoodTimeRef = useRef(0);

  // 티어 계산 함수
  const calculateTier = (finalStats: GameStats): TierInfo => {
    const baseScore = finalStats.score;
    const lengthBonus = finalStats.length * 50;
    const survivalBonus = finalStats.survivalTime * 2;
    const efficiencyBonus = finalStats.efficiency * 100;
    const comboBonus = finalStats.maxCombo * 200;
    const difficultyMultiplier =
      selectedDifficulty.name === '지옥'
        ? 3
        : selectedDifficulty.name === '어려움'
          ? 2.5
          : selectedDifficulty.name === '보통'
            ? 2
            : 1.5;

    const totalScore =
      (baseScore + lengthBonus + survivalBonus + efficiencyBonus + comboBonus) *
      difficultyMultiplier;

    for (const tier of TIERS) {
      if (totalScore >= tier.minScore) {
        return tier;
      }
    }
    return TIERS[TIERS.length - 1];
  };

  const generateFood = useCallback(
    (currentSnake: Position[]) => {
      let newFood: Position;
      do {
        newFood = {
          x: Math.floor(Math.random() * selectedDifficulty.gridSize),
          y: Math.floor(Math.random() * selectedDifficulty.gridSize),
        };
      } while (currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y));

      setFoodNew(true);
      setTimeout(() => setFoodNew(false), 400);

      return newFood;
    },
    [selectedDifficulty.gridSize]
  );

  const moveSnake = useCallback(() => {
    setSnake(currentSnake => {
      const head = currentSnake[0];
      const newHead = { ...head };

      switch (direction) {
        case 'up':
          newHead.y -= 1;
          break;
        case 'down':
          newHead.y += 1;
          break;
        case 'left':
          newHead.x -= 1;
          break;
        case 'right':
          newHead.x += 1;
          break;
      }

      // 벽 충돌 체크
      if (
        newHead.x < 0 ||
        newHead.x >= selectedDifficulty.gridSize ||
        newHead.y < 0 ||
        newHead.y >= selectedDifficulty.gridSize
      ) {
        setGameState('finished');
        return currentSnake;
      }

      // 자기 몸 충돌 체크
      if (currentSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
        setGameState('finished');
        return currentSnake;
      }

      const newSnake = [newHead, ...currentSnake];

      // 음식 먹기 체크
      if (newHead.x === food.x && newHead.y === food.y) {
        setFoodEaten(true);
        setTimeout(() => setFoodEaten(false), 500);

        const now = Date.now();
        const timeSinceLastFood = now - lastFoodTimeRef.current;
        lastFoodTimeRef.current = now;

        setFood(generateFood(newSnake));
        setStats(prev => {
          const newFoodEaten = prev.foodEaten + 1;
          const newLength = prev.length + 1;
          const newScore = prev.score + (10 + prev.combo * 5); // 콤보 보너스
          const newCombo = prev.combo + 1;
          const newMaxCombo = Math.max(prev.maxCombo, newCombo);
          const newSurvivalTime = Math.floor((now - gameStartTimeRef.current) / 1000);
          const newEfficiency = newSurvivalTime > 0 ? (newFoodEaten / newSurvivalTime) * 60 : 0; // 분당 음식 개수

          // 3연속 이상일 때 콤보 표시
          if (newCombo >= 3) {
            setShowCombo(true);
            setTimeout(() => setShowCombo(false), 1000);
          }

          return {
            ...prev,
            score: newScore,
            length: newLength,
            foodEaten: newFoodEaten,
            survivalTime: newSurvivalTime,
            efficiency: Math.round(newEfficiency * 10) / 10,
            combo: newCombo,
            maxCombo: newMaxCombo,
          };
        });

        return newSnake;
      } else {
        // 음식을 먹지 않으면 콤보 리셋
        setStats(prev => ({ ...prev, combo: 0 }));
      }

      // 꼬리 제거 (음식을 먹지 않았을 때)
      return newSnake.slice(0, -1);
    });
  }, [direction, food, generateFood, selectedDifficulty.gridSize]);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (gameState !== 'playing') return;

      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          if (direction !== 'down') setDirection('up');
          break;
        case 'ArrowDown':
          event.preventDefault();
          if (direction !== 'up') setDirection('down');
          break;
        case 'ArrowLeft':
          event.preventDefault();
          if (direction !== 'right') setDirection('left');
          break;
        case 'ArrowRight':
          event.preventDefault();
          if (direction !== 'left') setDirection('right');
          break;
        case ' ':
          event.preventDefault();
          setGameState(prev => (prev === 'playing' ? 'paused' : 'playing'));
          break;
      }
    },
    [direction, gameState]
  );

  const handleDirectionChange = (newDirection: 'up' | 'down' | 'left' | 'right') => {
    if (gameState !== 'playing') return;

    const oppositeDirections = {
      up: 'down',
      down: 'up',
      left: 'right',
      right: 'left',
    };

    if (direction !== oppositeDirections[newDirection]) {
      setDirection(newDirection);
    }
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (!touchStartRef.current) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const minSwipeDistance = 30;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (Math.abs(deltaX) > minSwipeDistance) {
        handleDirectionChange(deltaX > 0 ? 'right' : 'left');
      }
    } else {
      if (Math.abs(deltaY) > minSwipeDistance) {
        handleDirectionChange(deltaY > 0 ? 'down' : 'up');
      }
    }

    touchStartRef.current = null;
  };

  const startGame = () => {
    const centerX = Math.floor(selectedDifficulty.gridSize / 2);
    const centerY = Math.floor(selectedDifficulty.gridSize / 2);

    setGameState('playing');
    setSnake([{ x: centerX, y: centerY }]);
    setDirection('right');
    setStats(prev => ({
      ...prev,
      score: 0,
      length: 1,
      foodEaten: 0,
      survivalTime: 0,
      efficiency: 0,
      combo: 0,
      maxCombo: 0,
    }));
    setFood(generateFood([{ x: centerX, y: centerY }]));
    gameStartTimeRef.current = Date.now();
    lastFoodTimeRef.current = Date.now();
  };

  const restartGame = () => {
    if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    setGameState('setup');
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    if (gameState === 'playing') {
      gameLoopRef.current = setInterval(() => {
        moveSnake();
        // 생존 시간 업데이트
        setStats(prev => ({
          ...prev,
          survivalTime: Math.floor((Date.now() - gameStartTimeRef.current) / 1000),
        }));
      }, selectedDifficulty.speed);
    } else {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    }

    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [gameState, moveSnake, selectedDifficulty.speed]);

  useEffect(() => {
    if (gameState === 'finished') {
      if (stats.score > stats.highScore) {
        const newHighScore = stats.score;
        setStats(prev => ({ ...prev, highScore: newHighScore }));
        localStorage.setItem('snake-high-score', newHighScore.toString());
      }
    }
  }, [gameState, stats.score, stats.highScore]);

  const handleBackClick = () => {
    if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    console.log('게임 목록으로 돌아가기');
  };

  const currentTier = calculateTier(stats);

  return (
    <GameContainer>
      <Header>
        <BackButton onClick={handleBackClick}>
          <ArrowLeft size={16} />
          게임 목록
        </BackButton>
        <Title>🐍 스네이크</Title>
        <StatsPanel>
          <Stat highlight={stats.combo >= 3}>
            <div className="stat-label">점수</div>
            <div className="stat-value">{stats.score}</div>
          </Stat>
          <Stat>
            <div className="stat-label">길이</div>
            <div className="stat-value">{stats.length}</div>
          </Stat>
          <Stat>
            <div className="stat-label">시간</div>
            <div className="stat-value">{stats.survivalTime}s</div>
          </Stat>
          <Stat>
            <div className="stat-label">효율성</div>
            <div className="stat-value">{stats.efficiency}/분</div>
          </Stat>
        </StatsPanel>
      </Header>

      {gameState === 'playing' && (
        <GameArea>
          <GameBoard
            size={selectedDifficulty.boardSize}
            isActive={gameState === 'playing'}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {snake.map((segment, index) => (
              <SnakeSegment
                key={index}
                x={segment.x}
                y={segment.y}
                gridSize={selectedDifficulty.gridSize}
                boardSize={selectedDifficulty.boardSize}
                isHead={index === 0}
                direction={direction}
                index={index}
              />
            ))}

            <Food
              x={food.x}
              y={food.y}
              gridSize={selectedDifficulty.gridSize}
              boardSize={selectedDifficulty.boardSize}
              isEaten={foodEaten}
              isNew={foodNew}
            />
          </GameBoard>

          <ComboIndicator show={showCombo}>
            🔥 {stats.combo}연속! +{stats.combo * 5}점
          </ComboIndicator>

          <ControlButtons>
            <ControlButton position="empty" disabled />
            <ControlButton position="up" onClick={() => handleDirectionChange('up')}>
              <ArrowUp size={20} />
            </ControlButton>
            <ControlButton position="empty" disabled />
            <ControlButton position="left" onClick={() => handleDirectionChange('left')}>
              <ArrowLeft size={20} />
            </ControlButton>
            <ControlButton position="empty" disabled />
            <ControlButton position="right" onClick={() => handleDirectionChange('right')}>
              <ArrowRight size={20} />
            </ControlButton>
            <ControlButton position="empty" disabled />
            <ControlButton position="down" onClick={() => handleDirectionChange('down')}>
              <ArrowDown size={20} />
            </ControlButton>
            <ControlButton position="empty" disabled />
          </ControlButtons>
        </GameArea>
      )}

      <GameOverlay show={gameState === 'setup'}>
        <OverlayContent>
          <div className="overlay-title">🐍 스네이크</div>
          <div className="overlay-text">
            음식을 먹고 뱀을 성장시키세요!
            <br />
            벽이나 자신의 몸에 부딪히면 게임이 끝납니다.
            <br />
            연속으로 음식을 먹으면 콤보 보너스를 받습니다!
            <br />
            <br />
            <strong>조작법:</strong>
            <br />
            PC: 화살표 키, 스페이스바(일시정지) • 모바일: 스와이프 또는 버튼
          </div>

          <DifficultySelector>
            {DIFFICULTIES.map(difficulty => (
              <DifficultyCard
                key={difficulty.name}
                selected={selectedDifficulty.name === difficulty.name}
                onClick={() => setSelectedDifficulty(difficulty)}
              >
                <div className="difficulty-header">
                  {difficulty.emoji} {difficulty.name}
                </div>
                <div className="difficulty-desc">{difficulty.description}</div>
              </DifficultyCard>
            ))}
          </DifficultySelector>

          <ActionButton onClick={startGame}>게임 시작</ActionButton>
          <ActionButton variant="secondary" onClick={handleBackClick}>
            뒤로 가기
          </ActionButton>
        </OverlayContent>
      </GameOverlay>

      <GameOverlay show={gameState === 'paused'}>
        <OverlayContent>
          <div className="overlay-title">⏸️ 일시정지</div>
          <div className="overlay-text">
            게임이 일시정지되었습니다.
            <br />
            <br />
            현재 점수: {stats.score}점
            <br />뱀 길이: {stats.length}
            <br />
            생존 시간: {stats.survivalTime}초
            <br />
            난이도: {selectedDifficulty.emoji} {selectedDifficulty.name}
          </div>
          <ActionButton onClick={() => setGameState('playing')}>게임 계속</ActionButton>
          <ActionButton variant="secondary" onClick={restartGame}>
            게임 종료
          </ActionButton>
        </OverlayContent>
      </GameOverlay>

      <GameOverlay show={gameState === 'finished'}>
        <OverlayContent>
          <div className="overlay-title">🏆 게임 완료!</div>

          <TierBadge color={currentTier.color}>
            {currentTier.emoji} {currentTier.name}
          </TierBadge>

          <ScoreBreakdown>
            <ScoreItem delay={1}>
              <span className="score-label">🎯 기본 점수</span>
              <span className="score-value">{stats.score}점</span>
            </ScoreItem>
            <ScoreItem delay={2}>
              <span className="score-label">📏 길이 보너스</span>
              <span className="score-value">+{stats.length * 50}점</span>
            </ScoreItem>
            <ScoreItem delay={3}>
              <span className="score-label">⏱️ 생존 보너스</span>
              <span className="score-value">+{stats.survivalTime * 2}점</span>
            </ScoreItem>
            <ScoreItem delay={4}>
              <span className="score-label">⚡ 효율 보너스</span>
              <span className="score-value">+{Math.round(stats.efficiency * 100)}점</span>
            </ScoreItem>
            <ScoreItem delay={5}>
              <span className="score-label">🔥 콤보 보너스</span>
              <span className="score-value">+{stats.maxCombo * 200}점</span>
            </ScoreItem>
            <ScoreItem delay={6}>
              <span className="score-label">⭐ 난이도 배수</span>
              <span className="score-value">
                x
                {selectedDifficulty.name === '지옥'
                  ? 3
                  : selectedDifficulty.name === '어려움'
                    ? 2.5
                    : selectedDifficulty.name === '보통'
                      ? 2
                      : 1.5}
              </span>
            </ScoreItem>
            <ScoreItem delay={7}>
              <span className="score-label">💎 총 점수</span>
              <span className="score-value" style={{ color: currentTier.color }}>
                {Math.round(
                  (stats.score +
                    stats.length * 50 +
                    stats.survivalTime * 2 +
                    Math.round(stats.efficiency * 100) +
                    stats.maxCombo * 200) *
                    (selectedDifficulty.name === '지옥'
                      ? 3
                      : selectedDifficulty.name === '어려움'
                        ? 2.5
                        : selectedDifficulty.name === '보통'
                          ? 2
                          : 1.5)
                )}
                점
              </span>
            </ScoreItem>
          </ScoreBreakdown>

          <StatGrid>
            <StatCard delay={8}>
              <div className="stat-title">최종 길이</div>
              <div className="stat-number">{stats.length}</div>
            </StatCard>
            <StatCard delay={9}>
              <div className="stat-title">생존 시간</div>
              <div className="stat-number">{stats.survivalTime}초</div>
            </StatCard>
            <StatCard delay={10}>
              <div className="stat-title">음식 개수</div>
              <div className="stat-number">{stats.foodEaten}개</div>
            </StatCard>
            <StatCard delay={11}>
              <div className="stat-title">최대 콤보</div>
              <div className="stat-number">{stats.maxCombo}연속</div>
            </StatCard>
          </StatGrid>

          <PerformanceMessage delay={12}>
            {selectedDifficulty.name === '지옥' && stats.length >= 15
              ? '🔥 지옥 난이도 정복! 당신은 진정한 스네이크 마스터!'
              : stats.efficiency >= 20 && stats.maxCombo >= 8
                ? '⚡ 완벽한 효율성! 스네이크의 전설이군요!'
                : stats.length >= 20 && stats.maxCombo >= 5
                  ? '🏆 훌륭한 성장! 뱀을 잘 키우셨네요!'
                  : stats.length >= 10 && stats.survivalTime >= 120
                    ? '👍 좋은 생존력! 꾸준한 실력이에요!'
                    : stats.length >= 5
                      ? '🐍 괜찮은 시작! 더 긴 뱀에 도전해보세요!'
                      : '🐣 첫 도전치고 잘했어요! 계속 연습해보세요!'}
          </PerformanceMessage>

          <div style={{ marginTop: '2rem' }}>
            <ActionButton onClick={restartGame}>🔄 다시 도전</ActionButton>
            <ActionButton variant="secondary" onClick={handleBackClick}>
              📋 게임 목록
            </ActionButton>
          </div>
        </OverlayContent>
      </GameOverlay>
    </GameContainer>
  );
};

export default SnakeGame;
