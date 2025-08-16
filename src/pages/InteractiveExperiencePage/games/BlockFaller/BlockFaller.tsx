import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, Play, Pause, RotateCw, ArrowDown } from 'lucide-react';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

// 애니메이션 정의
const blockFall = keyframes`
  0% { transform: translateY(-20px) scale(0.8); opacity: 0.8; }
  50% { transform: translateY(-5px) scale(1.05); opacity: 0.9; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
`;

const smoothDrop = keyframes`
  0% { transform: translateY(-2px); }
  100% { transform: translateY(0); }
`;

const lineComplete = keyframes`
  0% { background: #ffffff; transform: scale(1); }
  25% { background: #fbbf24; transform: scale(1.1); }
  50% { background: #f59e0b; transform: scale(1.2); }
  75% { background: #d97706; transform: scale(1.1); }
  100% { background: transparent; transform: scale(1); }
`;

const levelUp = keyframes`
  0%, 100% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.2) rotate(5deg); }
  50% { transform: scale(1.3) rotate(-5deg); }
  75% { transform: scale(1.2) rotate(5deg); }
`;

const gameOver = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(0.95); }
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

const blockGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 10px rgba(99, 102, 241, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.6);
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

// 난이도 설정
interface Difficulty {
  name: string;
  emoji: string;
  initialSpeed: number;
  speedIncrease: number;
  description: string;
}

const DIFFICULTIES: Difficulty[] = [
  {
    name: '쉬움',
    emoji: '🐌',
    initialSpeed: 800,
    speedIncrease: 50,
    description: '느긋하게 즐기기',
  },
  {
    name: '보통',
    emoji: '🚶',
    initialSpeed: 600,
    speedIncrease: 75,
    description: '적당한 도전',
  },
  {
    name: '어려움',
    emoji: '🏃',
    initialSpeed: 400,
    speedIncrease: 100,
    description: '빠른 손놀림 필요',
  },
  {
    name: '지옥',
    emoji: '🔥',
    initialSpeed: 200,
    speedIncrease: 150,
    description: '마스터만을 위한 모드',
  },
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
  border-bottom: 2px solid rgba(99, 102, 241, 0.3);
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
  background: rgba(99, 102, 241, 0.1);
  border: 2px solid rgba(99, 102, 241, 0.3);
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
    background: rgba(99, 102, 241, 0.2);
    transform: translateY(-2px);
    ${css`
      animation: ${buttonHover} 0.6s ease-in-out;
    `}
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
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
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  text-shadow: 0 0 20px rgba(99, 102, 241, 0.5);

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
      animation: ${levelUp} 0.8s ease;
    `}

  .stat-label {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.2rem;
  }

  .stat-value {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${props => (props.highlight ? '#fbbf24' : '#6366f1')};
    text-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
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
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  margin-top: 120px;

  @media (max-width: 768px) {
    flex-direction: column;
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

const GameBoard = styled.div<{ isGameOver: boolean }>`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 1.5rem;
  border: 3px solid rgba(99, 102, 241, 0.3);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);

  ${props =>
    props.isGameOver &&
    css`
      animation: ${gameOver} 2s ease-in-out infinite;
    `}

  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    border-radius: 10px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 2px;
  background: #0f172a;
  border: 3px solid #1e293b;
  border-radius: 12px;
  overflow: hidden;
  width: 300px;
  height: 600px;
  box-shadow: inset 0 0 20px rgba(99, 102, 241, 0.2);

  @media (max-width: 768px) {
    width: 250px;
    height: 500px;
    gap: 1px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    width: 220px;
    height: 440px;
    border-radius: 8px;
  }
`;

const Cell = styled.div<{
  filled: boolean;
  color?: string;
  isCompleting?: boolean;
}>`
  background: ${props => (props.filled ? props.color || '#6366f1' : '#1e293b')};
  transition: all 0.2s ease;
  border-radius: 2px;

  ${props =>
    props.isCompleting &&
    css`
      animation: ${lineComplete} 0.6s ease;
    `}

  ${props =>
    props.filled &&
    !props.isCompleting &&
    css`
      animation:
        ${blockFall} 0.2s ease-out,
        ${smoothDrop} 0.1s ease-out;
      box-shadow: 0 0 8px ${props.color || '#6366f1'}80;
    `}
`;

const SidePanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const NextBlock = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(99, 102, 241, 0.3);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  color: white;
  min-width: 140px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);

  .title {
    font-size: 1rem;
    margin-bottom: 1rem;
    opacity: 0.9;
    font-weight: 600;
    color: #6366f1;
  }

  .preview {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3px;
    margin: 0 auto;
    width: 80px;
    height: 80px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 8px;
  }

  @media (max-width: 768px) {
    min-width: 120px;
    padding: 1rem;
    border-radius: 12px;

    .preview {
      width: 60px;
      height: 60px;
    }
  }

  @media (max-width: 480px) {
    min-width: 100px;
    padding: 0.8rem;
    border-radius: 10px;

    .preview {
      width: 50px;
      height: 50px;
      gap: 2px;
    }
  }
`;

const PreviewCell = styled.div<{ filled: boolean; color?: string }>`
  background: ${props => (props.filled ? props.color || '#6366f1' : 'transparent')};
  border-radius: 3px;
  ${props =>
    props.filled &&
    css`
      animation: ${blockGlow} 2s ease-in-out infinite;
    `}
`;

const ControlsPanel = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(99, 102, 241, 0.3);
  border-radius: 16px;
  padding: 1.5rem;
  color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);

  .title {
    font-size: 1rem;
    margin-bottom: 1rem;
    opacity: 0.9;
    text-align: center;
    font-weight: 600;
    color: #6366f1;
  }

  .controls {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 12px;

    .controls {
      grid-template-columns: repeat(4, 1fr);
      gap: 0.6rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    border-radius: 10px;

    .controls {
      gap: 0.5rem;
    }
  }
`;

const ControlButton = styled.button<{ special?: boolean }>`
  background: ${props =>
    props.special ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'rgba(99, 102, 241, 0.2)'};
  border: 2px solid ${props => (props.special ? '#f59e0b' : 'rgba(99, 102, 241, 0.4)')};
  border-radius: 12px;
  padding: 1rem;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.8rem;
  font-weight: 600;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(99, 102, 241, 0.4);
    ${css`
      animation: ${buttonHover} 0.6s ease-in-out;
    `}
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 0.7rem;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 0.65rem;
    border-radius: 8px;
    gap: 0.2rem;
  }
`;

// 티어 시스템 정의
interface TierInfo {
  name: string;
  emoji: string;
  color: string;
  minScore: number;
}

const TIERS: TierInfo[] = [
  { name: '레전드', emoji: '👑', color: '#FFD700', minScore: 20000 },
  { name: '마스터', emoji: '💎', color: '#00CED1', minScore: 15000 },
  { name: '다이아몬드', emoji: '💠', color: '#4169E1', minScore: 10000 },
  { name: '플래티넘', emoji: '⭐', color: '#C0C0C0', minScore: 7500 },
  { name: '골드', emoji: '🥇', color: '#FFD700', minScore: 5000 },
  { name: '실버', emoji: '🥈', color: '#C0C0C0', minScore: 3000 },
  { name: '브론즈', emoji: '🥉', color: '#CD7F32', minScore: 1000 },
  { name: '비기너', emoji: '🎮', color: '#808080', minScore: 0 },
];

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
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  backdrop-filter: blur(30px);
  border: 2px solid rgba(99, 102, 241, 0.4);
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
    0 0 100px rgba(99, 102, 241, 0.2);

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
    props.selected ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'rgba(255, 255, 255, 0.05)'};
  border: 2px solid ${props => (props.selected ? '#6366f1' : 'rgba(255, 255, 255, 0.1)')};
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
    box-shadow: 0 8px 16px rgba(99, 102, 241, 0.3);
    border-color: #6366f1;
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
    border-top: 2px solid rgba(99, 102, 241, 0.3);
  }

  .score-label {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.95rem;
  }

  .score-value {
    color: #6366f1;
    font-weight: 600;
    text-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
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
    color: #6366f1;
    text-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
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
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  color: #8b5cf6;
  font-weight: 600;
  animation: ${statsReveal} 0.6s ease-out ${props => (props.delay || 0) * 0.1}s both;
  text-shadow: 0 0 10px rgba(139, 92, 246, 0.3);

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
      : 'linear-gradient(135deg, #6366f1, #8b5cf6)'};
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
    box-shadow: 0 15px 35px rgba(99, 102, 241, 0.4);
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

interface Block {
  shape: number[][];
  color: string;
  position: Position;
}

interface GameStats {
  score: number;
  level: number;
  lines: number;
  highScore: number;
  efficiency: number;
  tetrisCount: number;
}

const BLOCK_SHAPES = [
  { shape: [[1, 1, 1, 1]], color: '#00bcd4' },
  {
    shape: [
      [1, 1],
      [1, 1],
    ],
    color: '#ffeb3b',
  },
  {
    shape: [
      [0, 1, 0],
      [1, 1, 1],
    ],
    color: '#9c27b0',
  },
  {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
    ],
    color: '#4caf50',
  },
  {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
    ],
    color: '#f44336',
  },
  {
    shape: [
      [1, 0, 0],
      [1, 1, 1],
    ],
    color: '#2196f3',
  },
  {
    shape: [
      [0, 0, 1],
      [1, 1, 1],
    ],
    color: '#ff9800',
  },
];

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

const BlockFaller: React.FC = () => {
  const [gameState, setGameState] = useState<'waiting' | 'playing' | 'paused' | 'gameOver'>(
    'waiting'
  );
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>(DIFFICULTIES[1]); // 보통이 기본값
  const [board, setBoard] = useState<string[][]>(() =>
    Array(BOARD_HEIGHT)
      .fill(null)
      .map(() => Array(BOARD_WIDTH).fill(''))
  );
  const [currentBlock, setCurrentBlock] = useState<Block | null>(null);
  const [nextBlock, setNextBlock] = useState<Block | null>(null);
  const [stats, setStats] = useState<GameStats>({
    score: 0,
    level: 1,
    lines: 0,
    highScore: parseInt(localStorage.getItem('block-faller-high-score') || '0'),
    efficiency: 0,
    tetrisCount: 0,
  });
  const [completingLines, setCompletingLines] = useState<number[]>([]);

  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);
  const dropIntervalRef = useRef<number>(600);
  const totalBlocksRef = useRef<number>(0);
  const navigate = useNavigate();

  // 티어 계산 함수
  const calculateTier = (finalStats: GameStats): TierInfo => {
    const scoreBonus = finalStats.score;
    const levelBonus = finalStats.level * 500;
    const tetrisBonus = finalStats.tetrisCount * 1000;
    const efficiencyBonus = finalStats.efficiency * 100;
    const difficultyMultiplier =
      selectedDifficulty.name === '지옥'
        ? 2
        : selectedDifficulty.name === '어려움'
          ? 1.5
          : selectedDifficulty.name === '보통'
            ? 1.2
            : 1;

    const totalScore =
      (scoreBonus + levelBonus + tetrisBonus + efficiencyBonus) * difficultyMultiplier;

    for (const tier of TIERS) {
      if (totalScore >= tier.minScore) {
        return tier;
      }
    }
    return TIERS[TIERS.length - 1];
  };

  const createRandomBlock = useCallback((): Block => {
    const template = BLOCK_SHAPES[Math.floor(Math.random() * BLOCK_SHAPES.length)];
    totalBlocksRef.current += 1;
    return {
      shape: template.shape,
      color: template.color,
      position: { x: Math.floor(BOARD_WIDTH / 2) - Math.floor(template.shape[0].length / 2), y: 0 },
    };
  }, []);

  const rotateBlock = useCallback((block: Block): Block => {
    const rotated = block.shape[0].map((_, index) => block.shape.map(row => row[index]).reverse());
    return { ...block, shape: rotated };
  }, []);

  const isValidPosition = useCallback(
    (block: Block, board: string[][], offset = { x: 0, y: 0 }): boolean => {
      for (let y = 0; y < block.shape.length; y++) {
        for (let x = 0; x < block.shape[y].length; x++) {
          if (block.shape[y][x]) {
            const newX = block.position.x + x + offset.x;
            const newY = block.position.y + y + offset.y;

            if (newX < 0 || newX >= BOARD_WIDTH || newY >= BOARD_HEIGHT) {
              return false;
            }

            if (newY >= 0 && board[newY][newX]) {
              return false;
            }
          }
        }
      }
      return true;
    },
    []
  );

  const placeBlock = useCallback((block: Block, board: string[][]): string[][] => {
    const newBoard = board.map(row => [...row]);

    for (let y = 0; y < block.shape.length; y++) {
      for (let x = 0; x < block.shape[y].length; x++) {
        if (block.shape[y][x]) {
          const boardX = block.position.x + x;
          const boardY = block.position.y + y;

          if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
            newBoard[boardY][boardX] = block.color;
          }
        }
      }
    }

    return newBoard;
  }, []);

  const clearLines = useCallback(
    (board: string[][]): { newBoard: string[][]; linesCleared: number } => {
      const fullLines: number[] = [];

      for (let y = 0; y < BOARD_HEIGHT; y++) {
        if (board[y].every(cell => cell !== '')) {
          fullLines.push(y);
        }
      }

      if (fullLines.length > 0) {
        setCompletingLines(fullLines);

        setTimeout(() => {
          setBoard(prevBoard => {
            const newBoard = prevBoard.filter((_, index) => !fullLines.includes(index));
            const emptyRows = Array(fullLines.length)
              .fill(null)
              .map(() => Array(BOARD_WIDTH).fill(''));
            return [...emptyRows, ...newBoard];
          });
          setCompletingLines([]);
        }, 600);
      }

      return { newBoard: board, linesCleared: fullLines.length };
    },
    []
  );

  const moveBlock = useCallback(
    (direction: 'left' | 'right' | 'down'): boolean => {
      if (!currentBlock || gameState !== 'playing') return false;

      const offset = {
        left: { x: -1, y: 0 },
        right: { x: 1, y: 0 },
        down: { x: 0, y: 1 },
      }[direction];

      if (isValidPosition(currentBlock, board, offset)) {
        setCurrentBlock(prev =>
          prev
            ? {
                ...prev,
                position: { x: prev.position.x + offset.x, y: prev.position.y + offset.y },
              }
            : null
        );
        return true;
      }

      return false;
    },
    [currentBlock, board, isValidPosition, gameState]
  );

  const rotatePiece = useCallback(() => {
    if (!currentBlock || gameState !== 'playing') return;

    const rotated = rotateBlock(currentBlock);
    if (isValidPosition(rotated, board)) {
      setCurrentBlock(rotated);
    }
  }, [currentBlock, board, rotateBlock, isValidPosition, gameState]);

  const dropBlock = useCallback(() => {
    if (!currentBlock) return;

    if (!moveBlock('down')) {
      const newBoard = placeBlock(currentBlock, board);
      const { linesCleared } = clearLines(newBoard);

      // 점수 및 통계 계산
      const basePoints = linesCleared * 100 * stats.level;
      const tetrisBonus = linesCleared === 4 ? 800 : 0;
      const difficultyBonus = Math.round(basePoints * (selectedDifficulty.speedIncrease / 100));
      const points = basePoints + tetrisBonus + difficultyBonus;

      setStats(prev => {
        const newLines = prev.lines + linesCleared;
        const newLevel = Math.floor(newLines / 10) + 1;
        const newScore = prev.score + points;
        const newTetrisCount = prev.tetrisCount + (linesCleared === 4 ? 1 : 0);
        const efficiency =
          totalBlocksRef.current > 0 ? Math.round((newLines / totalBlocksRef.current) * 100) : 0;
        const newHighScore = Math.max(prev.highScore, newScore);

        if (newHighScore > prev.highScore) {
          localStorage.setItem('block-faller-high-score', newHighScore.toString());
        }

        return {
          score: newScore,
          level: newLevel,
          lines: newLines,
          highScore: newHighScore,
          efficiency,
          tetrisCount: newTetrisCount,
        };
      });

      // 개선된 속도 계산 (난이도별)
      dropIntervalRef.current = Math.max(
        50,
        selectedDifficulty.initialSpeed - (stats.level - 1) * selectedDifficulty.speedIncrease
      );

      if (nextBlock && isValidPosition(nextBlock, newBoard)) {
        setCurrentBlock(nextBlock);
        setNextBlock(createRandomBlock());
        setBoard(newBoard);
      } else {
        setGameState('gameOver');
        setBoard(newBoard);
      }
    }
  }, [
    currentBlock,
    board,
    moveBlock,
    placeBlock,
    clearLines,
    stats.level,
    nextBlock,
    isValidPosition,
    createRandomBlock,
    selectedDifficulty,
  ]);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (gameState !== 'playing') return;

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          moveBlock('left');
          break;
        case 'ArrowRight':
          event.preventDefault();
          moveBlock('right');
          break;
        case 'ArrowDown':
          event.preventDefault();
          moveBlock('down');
          break;
        case 'ArrowUp':
        case ' ':
          event.preventDefault();
          rotatePiece();
          break;
        case 'p':
        case 'P':
          setGameState(prev => (prev === 'playing' ? 'paused' : 'playing'));
          break;
      }
    },
    [gameState, moveBlock, rotatePiece]
  );

  const startGame = () => {
    const firstBlock = createRandomBlock();
    const secondBlock = createRandomBlock();

    setCurrentBlock(firstBlock);
    setNextBlock(secondBlock);
    setBoard(
      Array(BOARD_HEIGHT)
        .fill(null)
        .map(() => Array(BOARD_WIDTH).fill(''))
    );
    setStats(prev => ({
      score: 0,
      level: 1,
      lines: 0,
      highScore: prev.highScore,
      efficiency: 0,
      tetrisCount: 0,
    }));
    totalBlocksRef.current = 2;
    setGameState('playing');
    dropIntervalRef.current = selectedDifficulty.initialSpeed;
  };

  const pauseGame = () => {
    setGameState(prev => (prev === 'playing' ? 'paused' : 'playing'));
  };

  const resetGame = () => {
    if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    setGameState('waiting');
    setCompletingLines([]);
    totalBlocksRef.current = 0;
  };

  useEffect(() => {
    if (gameState === 'playing') {
      gameLoopRef.current = setInterval(() => {
        dropBlock();
      }, dropIntervalRef.current);
    } else {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    }

    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [gameState, dropBlock]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const handleBackClick = () => {
    if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    console.log('게임 목록으로 돌아가기');
    navigate(-1);
  };

  const renderBoard = () => {
    const boardWithCurrentBlock = currentBlock ? placeBlock(currentBlock, board) : board;

    return boardWithCurrentBlock.map((row, y) =>
      row.map((cell, x) => (
        <Cell
          key={`${x}-${y}`}
          filled={!!cell}
          color={cell}
          isCompleting={completingLines.includes(y)}
        />
      ))
    );
  };

  const renderNextBlock = () => {
    if (!nextBlock) return null;

    const preview = Array(4)
      .fill(null)
      .map(() => Array(4).fill(false));

    for (let y = 0; y < nextBlock.shape.length; y++) {
      for (let x = 0; x < nextBlock.shape[y].length; x++) {
        if (nextBlock.shape[y][x]) {
          preview[y][x] = true;
        }
      }
    }

    return preview
      .flat()
      .map((filled, index) => (
        <PreviewCell key={index} filled={filled} color={filled ? nextBlock.color : undefined} />
      ));
  };

  const currentTier = calculateTier(stats);

  return (
    <GameContainer>
      <Header>
        <BackButton onClick={handleBackClick}>
          <ArrowLeft size={16} />
          게임 목록
        </BackButton>
        <Title>🧩 블록 폴러</Title>
        <StatsPanel>
          <Stat>
            <div className="stat-label">점수</div>
            <div className="stat-value">{stats.score}</div>
          </Stat>
          <Stat highlight={stats.level > 1}>
            <div className="stat-label">레벨</div>
            <div className="stat-value">{stats.level}</div>
          </Stat>
          <Stat>
            <div className="stat-label">라인</div>
            <div className="stat-value">{stats.lines}</div>
          </Stat>
          <Stat>
            <div className="stat-label">최고점</div>
            <div className="stat-value">{stats.highScore}</div>
          </Stat>
        </StatsPanel>
      </Header>

      {(gameState === 'playing' || gameState === 'paused') && (
        <GameArea>
          <GameBoard isGameOver={false}>
            <Grid>{renderBoard()}</Grid>
          </GameBoard>

          <SidePanel>
            <NextBlock>
              <div className="title">다음 블록</div>
              <div className="preview">{renderNextBlock()}</div>
            </NextBlock>

            <ControlsPanel>
              <div className="title">조작</div>
              <div className="controls">
                <ControlButton onClick={() => moveBlock('left')}>
                  ←<br />
                  이동
                </ControlButton>
                <ControlButton onClick={() => moveBlock('right')}>
                  →<br />
                  이동
                </ControlButton>
                <ControlButton onClick={rotatePiece}>
                  <RotateCw size={16} />
                  <br />
                  회전
                </ControlButton>
                <ControlButton onClick={() => moveBlock('down')}>
                  <ArrowDown size={16} />
                  <br />
                  하강
                </ControlButton>
                <ControlButton onClick={pauseGame} special>
                  {gameState === 'playing' ? <Pause size={16} /> : <Play size={16} />}
                  <br />
                  {gameState === 'playing' ? '일시정지' : '계속'}
                </ControlButton>
              </div>
            </ControlsPanel>
          </SidePanel>
        </GameArea>
      )}

      <GameOverlay show={gameState === 'waiting'}>
        <OverlayContent>
          <div className="overlay-title">🧩 블록 폴러</div>
          <div className="overlay-text">
            떨어지는 블록을 조작하여 가로줄을 완성하세요!
            <br />
            완성된 줄은 사라지며 점수를 얻습니다.
            <br />
            <br />
            <strong>조작법:</strong>
            <br />• 화살표 키: 이동 및 하강 • 위 화살표/스페이스: 회전 • P키: 일시정지
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
            <br />
            레벨: {stats.level}
            <br />
            완성한 라인: {stats.lines}개
            <br />
            난이도: {selectedDifficulty.emoji} {selectedDifficulty.name}
          </div>
          <ActionButton onClick={pauseGame}>게임 계속</ActionButton>
          <ActionButton variant="secondary" onClick={resetGame}>
            게임 종료
          </ActionButton>
        </OverlayContent>
      </GameOverlay>

      <GameOverlay show={gameState === 'gameOver'}>
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
              <span className="score-label">📶 레벨 보너스</span>
              <span className="score-value">+{stats.level * 500}점</span>
            </ScoreItem>
            <ScoreItem delay={3}>
              <span className="score-label">🏆 테트리스 보너스</span>
              <span className="score-value">+{stats.tetrisCount * 1000}점</span>
            </ScoreItem>
            <ScoreItem delay={4}>
              <span className="score-label">⚡ 효율 보너스</span>
              <span className="score-value">+{Math.round(stats.efficiency * 100)}점</span>
            </ScoreItem>
            <ScoreItem delay={5}>
              <span className="score-label">🔥 난이도 배수</span>
              <span className="score-value">
                x
                {selectedDifficulty.name === '지옥'
                  ? 2
                  : selectedDifficulty.name === '어려움'
                    ? 1.5
                    : selectedDifficulty.name === '보통'
                      ? 1.2
                      : 1}
              </span>
            </ScoreItem>
            <ScoreItem delay={6}>
              <span className="score-label">💎 총 점수</span>
              <span className="score-value" style={{ color: currentTier.color }}>
                {Math.round(
                  (stats.score +
                    stats.level * 500 +
                    stats.tetrisCount * 1000 +
                    Math.round(stats.efficiency * 100)) *
                    (selectedDifficulty.name === '지옥'
                      ? 2
                      : selectedDifficulty.name === '어려움'
                        ? 1.5
                        : selectedDifficulty.name === '보통'
                          ? 1.2
                          : 1)
                )}
                점
              </span>
            </ScoreItem>
          </ScoreBreakdown>

          <StatGrid>
            <StatCard delay={7}>
              <div className="stat-title">도달 레벨</div>
              <div className="stat-number">{stats.level}</div>
            </StatCard>
            <StatCard delay={8}>
              <div className="stat-title">완성 라인</div>
              <div className="stat-number">{stats.lines}개</div>
            </StatCard>
            <StatCard delay={9}>
              <div className="stat-title">테트리스 횟수</div>
              <div className="stat-number">{stats.tetrisCount}회</div>
            </StatCard>
            <StatCard delay={10}>
              <div className="stat-title">효율성</div>
              <div className="stat-number">{stats.efficiency}%</div>
            </StatCard>
          </StatGrid>

          <PerformanceMessage delay={11}>
            {selectedDifficulty.name === '지옥' && stats.score >= 10000
              ? '🔥 지옥 난이도 정복! 당신은 진정한 레전드입니다!'
              : stats.score >= 15000 && stats.tetrisCount >= 5
                ? '🏆 완벽한 마스터! 테트리스 레전드입니다!'
                : stats.score >= 10000 && stats.efficiency >= 50
                  ? '🎉 훌륭한 실력! 블록 정리의 달인이군요!'
                  : stats.score >= 5000 && stats.level >= 5
                    ? '👍 좋은 성과! 꾸준히 발전하고 있어요!'
                    : stats.score >= 2000
                      ? '💪 조금 더 연습하면 크게 향상될 거예요!'
                      : '🎮 차근차근 연습해서 실력을 키워보세요!'}
          </PerformanceMessage>

          <div style={{ marginTop: '2rem' }}>
            <ActionButton onClick={startGame}>🔄 다시 도전</ActionButton>
            <ActionButton variant="secondary" onClick={handleBackClick}>
              📋 게임 목록
            </ActionButton>
          </div>
        </OverlayContent>
      </GameOverlay>
    </GameContainer>
  );
};

export default BlockFaller;
