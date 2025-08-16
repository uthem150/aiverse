import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, Play, RotateCcw } from 'lucide-react';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';

// 애니메이션 정의
const birdFlap = keyframes`
  0% { transform: rotate(-10deg) scale(1); }
  50% { transform: rotate(0deg) scale(1.1); }
  100% { transform: rotate(-10deg) scale(1); }
`;

const birdGlow = keyframes`
  0%, 100% { box-shadow: 0 0 15px rgba(255, 215, 0, 0.5); }
  50% { box-shadow: 0 0 25px rgba(255, 215, 0, 0.8); }
`;

const pipeMove = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100vw); }
`;

const scorePopUp = keyframes`
  0% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.4) rotate(5deg); }
  100% { transform: scale(1) rotate(0deg); }
`;

const cloudFloat = keyframes`
  0% { transform: translateX(100vw) translateY(0); }
  100% { transform: translateX(-200px) translateY(-10px); }
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

// 난이도 설정
interface Difficulty {
  name: string;
  emoji: string;
  pipeSpeed: number;
  pipeGap: number;
  pipeInterval: number;
  description: string;
}

const DIFFICULTIES: Difficulty[] = [
  {
    name: '쉬움',
    emoji: '🐤',
    pipeSpeed: 2,
    pipeGap: 220,
    pipeInterval: 2000,
    description: '넓은 간격, 느린 속도',
  },
  {
    name: '보통',
    emoji: '🐦',
    pipeSpeed: 3,
    pipeGap: 180,
    pipeInterval: 1800,
    description: '적당한 도전',
  },
  {
    name: '어려움',
    emoji: '🦅',
    pipeSpeed: 4,
    pipeGap: 150,
    pipeInterval: 1500,
    description: '좁은 간격, 빠른 속도',
  },
  {
    name: '지옥',
    emoji: '🔥',
    pipeSpeed: 5,
    pipeGap: 120,
    pipeInterval: 1200,
    description: '극한의 도전',
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
  { name: '레전드', emoji: '👑', color: '#FFD700', minScore: 8000 },
  { name: '마스터', emoji: '💎', color: '#00CED1', minScore: 6000 },
  { name: '다이아몬드', emoji: '💠', color: '#4169E1', minScore: 4500 },
  { name: '플래티넘', emoji: '⭐', color: '#C0C0C0', minScore: 3000 },
  { name: '골드', emoji: '🥇', color: '#FFD700', minScore: 2000 },
  { name: '실버', emoji: '🥈', color: '#C0C0C0', minScore: 1200 },
  { name: '브론즈', emoji: '🥉', color: '#CD7F32', minScore: 600 },
  { name: '비기너', emoji: '🐣', color: '#808080', minScore: 0 },
];

const GameContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 30%, #87ceeb 70%, #98fb98 100%);
  display: flex;
  flex-direction: column;
  font-family: 'Arial', sans-serif;
  position: relative;
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
  border-bottom: 2px solid rgba(34, 197, 94, 0.3);
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
  background: rgba(34, 197, 94, 0.1);
  border: 2px solid rgba(34, 197, 94, 0.3);
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
    background: rgba(34, 197, 94, 0.2);
    transform: translateY(-2px);
    ${css`
      animation: ${buttonHover} 0.6s ease-in-out;
    `}
    box-shadow: 0 8px 20px rgba(34, 197, 94, 0.4);
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
  background: linear-gradient(45deg, #22c55e, #16a34a);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  text-shadow: 0 0 20px rgba(34, 197, 94, 0.5);

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
      animation: ${scorePopUp} 0.5s ease;
    `}

  .stat-label {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.2rem;
  }

  .stat-value {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${props => (props.highlight ? '#fbbf24' : '#22c55e')};
    text-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
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
  position: relative;
  overflow: hidden;
  margin-top: 120px;

  @media (max-width: 768px) {
    margin-top: 140px;
  }

  @media (max-width: 480px) {
    margin-top: 120px;
  }
`;

const Ground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(180deg, #8b4513 0%, #654321 100%);
  border-top: 5px solid #a0522d;
  z-index: 10;
  box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.3);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 20px;
    background: repeating-linear-gradient(
      90deg,
      #90ee90 0px,
      #90ee90 20px,
      #228b22 20px,
      #228b22 40px
    );
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    height: 80px;
  }
`;

const Bird = styled.div<{
  y: number;
  velocity: number;
  isFlapping: boolean;
}>`
  position: absolute;
  left: 20%;
  top: ${props => props.y}px;
  width: 40px;
  height: 40px;
  background: linear-gradient(145deg, #ffd700, #ffa500);
  border-radius: 50% 50% 50% 30%;
  border: 2px solid #ff8c00;
  transition: transform 0.1s ease;
  z-index: 20;

  transform: rotate(${props => Math.max(-30, Math.min(30, props.velocity * 3))}deg);

  ${props =>
    props.isFlapping &&
    css`
      animation:
        ${birdFlap} 0.3s ease,
        ${birdGlow} 0.3s ease;
    `}

  &:before {
    content: '';
    position: absolute;
    top: 8px;
    right: 8px;
    width: 8px;
    height: 8px;
    background: #000;
    border-radius: 50%;
    box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
  }

  &:after {
    content: '';
    position: absolute;
    top: 15px;
    right: 25px;
    width: 0;
    height: 0;
    border-left: 8px solid #ff4500;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    left: 15%;
  }
`;

const Pipe = styled.div<{
  x: number;
  height: number;
  isTop: boolean;
  speed: number;
}>`
  position: absolute;
  left: ${props => props.x}px;
  ${props =>
    props.isTop
      ? `top: 0; height: ${props.height}px;`
      : `bottom: 100px; height: ${props.height}px;`}
  width: 60px;
  background: linear-gradient(90deg, #228b22 0%, #32cd32 50%, #228b22 100%);
  border: 3px solid #006400;
  z-index: 15;
  box-shadow: 3px 0 10px rgba(0, 0, 0, 0.3);

  &:before {
    content: '';
    position: absolute;
    ${props => (props.isTop ? 'bottom: -10px;' : 'top: -10px;')}
    left: -5px;
    width: 70px;
    height: 25px;
    background: linear-gradient(90deg, #228b22 0%, #32cd32 50%, #228b22 100%);
    border: 3px solid #006400;
    border-radius: 5px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 50px;

    &:before {
      width: 60px;
      left: -5px;
    }
  }
`;

const Cloud = styled.div<{ x: number; y: number; size: number }>`
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  width: ${props => props.size}px;
  height: ${props => props.size * 0.6}px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50px;
  z-index: 5;
  animation: ${cloudFloat} ${props => 15 + props.size / 10}s linear infinite;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));

  &:before {
    content: '';
    position: absolute;
    left: 10px;
    top: -10px;
    width: ${props => props.size * 0.8}px;
    height: ${props => props.size * 0.8}px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
  }

  &:after {
    content: '';
    position: absolute;
    right: 10px;
    top: -5px;
    width: ${props => props.size * 0.6}px;
    height: ${props => props.size * 0.6}px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
  }
`;

const ScoreDisplay = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 4rem;
  font-weight: bold;
  color: white;
  text-shadow:
    3px 3px 0 #2d5a3d,
    -1px -1px 0 #2d5a3d,
    1px -1px 0 #2d5a3d,
    -1px 1px 0 #2d5a3d,
    0 0 20px rgba(34, 197, 94, 0.8);
  z-index: 50;

  @media (max-width: 768px) {
    font-size: 3rem;
    top: 15%;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
    top: 12%;
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
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1));
  backdrop-filter: blur(30px);
  border: 2px solid rgba(34, 197, 94, 0.4);
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
    0 0 100px rgba(34, 197, 94, 0.2);

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
    props.selected ? 'linear-gradient(135deg, #22c55e, #16a34a)' : 'rgba(255, 255, 255, 0.05)'};
  border: 2px solid ${props => (props.selected ? '#22c55e' : 'rgba(255, 255, 255, 0.1)')};
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
    box-shadow: 0 8px 16px rgba(34, 197, 94, 0.3);
    border-color: #22c55e;
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
    border-top: 2px solid rgba(34, 197, 94, 0.3);
  }

  .score-label {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.95rem;
  }

  .score-value {
    color: #22c55e;
    font-weight: 600;
    text-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
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
    color: #22c55e;
    text-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
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
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1));
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  color: #22c55e;
  font-weight: 600;
  animation: ${statsReveal} 0.6s ease-out ${props => (props.delay || 0) * 0.1}s both;
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

const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  background: ${props =>
    props.variant === 'secondary'
      ? 'rgba(255, 255, 255, 0.1)'
      : 'linear-gradient(135deg, #22c55e, #16a34a)'};
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
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

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
    box-shadow: 0 15px 35px rgba(34, 197, 94, 0.4);
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

const Instructions = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  z-index: 30;
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 20px;
  border: 2px solid rgba(34, 197, 94, 0.5);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1.5rem;
    top: 35%;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 1rem;
    top: 30%;
  }
`;

interface PipeData {
  id: number;
  x: number;
  gapY: number;
  gapSize: number;
  passed: boolean;
}

interface CloudData {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface GameStats {
  score: number;
  bestScore: number;
  distance: number;
  survivalTime: number;
}

const GRAVITY = 0.5;
const JUMP_FORCE = -8;
const PIPE_WIDTH = 60;

const FlappyGame: React.FC = () => {
  const [gameState, setGameState] = useState<'waiting' | 'playing' | 'gameOver'>('waiting');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>(DIFFICULTIES[1]); // 보통이 기본값
  const [birdY, setBirdY] = useState(() => window.innerHeight / 2);
  const [birdVelocity, setBirdVelocity] = useState(0);
  const [pipes, setPipes] = useState<PipeData[]>([]);
  const [clouds, setClouds] = useState<CloudData[]>([]);
  const [stats, setStats] = useState<GameStats>({
    score: 0,
    bestScore: parseInt(localStorage.getItem('flappy-best-score') || '0'),
    distance: 0,
    survivalTime: 0,
  });
  const [isFlapping, setIsFlapping] = useState(false);

  const gameLoopRef = useRef<number | null>(null);
  const pipeIdRef = useRef(0);
  const cloudIdRef = useRef(0);
  const lastPipeXRef = useRef(0);
  const gameStartTimeRef = useRef(0);

  const GAME_HEIGHT = window.innerHeight - 220; // Header와 Ground 제외

  // 티어 계산 함수
  const calculateTier = (finalStats: GameStats): TierInfo => {
    const scoreBonus = finalStats.score * 100;
    const distanceBonus = Math.floor(finalStats.distance / 10) * 10;
    const timeBonus = finalStats.survivalTime * 5;
    const difficultyMultiplier =
      selectedDifficulty.name === '지옥'
        ? 2.5
        : selectedDifficulty.name === '어려움'
          ? 2
          : selectedDifficulty.name === '보통'
            ? 1.5
            : 1;

    const totalScore = (scoreBonus + distanceBonus + timeBonus) * difficultyMultiplier;

    for (const tier of TIERS) {
      if (totalScore >= tier.minScore) {
        return tier;
      }
    }
    return TIERS[TIERS.length - 1];
  };

  const jump = useCallback(() => {
    if (gameState !== 'playing') return;
    setBirdVelocity(JUMP_FORCE);
    setIsFlapping(true);
    setTimeout(() => setIsFlapping(false), 300);
  }, [gameState]);

  const checkCollision = useCallback(
    (birdY: number, pipes: PipeData[]) => {
      const birdLeft = window.innerWidth * 0.2;
      const birdRight = birdLeft + 40;
      const birdTop = birdY;
      const birdBottom = birdY + 40;

      // 땅 충돌
      if (birdBottom >= GAME_HEIGHT) {
        return true;
      }

      // 천장 충돌
      if (birdTop <= 0) {
        return true;
      }

      // 파이프 충돌
      for (const pipe of pipes) {
        const pipeLeft = pipe.x;
        const pipeRight = pipe.x + PIPE_WIDTH;

        if (birdRight > pipeLeft && birdLeft < pipeRight) {
          // 상단 파이프
          if (birdTop < pipe.gapY - pipe.gapSize / 2) {
            return true;
          }
          // 하단 파이프
          if (birdBottom > pipe.gapY + pipe.gapSize / 2) {
            return true;
          }
        }
      }

      return false;
    },
    [GAME_HEIGHT]
  );

  const updateGame = useCallback(() => {
    setBirdY(prev => {
      const newY = prev + birdVelocity;
      return Math.max(0, Math.min(GAME_HEIGHT - 40, newY));
    });

    setBirdVelocity(prev => prev + GRAVITY);

    setPipes(prev => {
      const newPipes = prev
        .map(pipe => ({ ...pipe, x: pipe.x - selectedDifficulty.pipeSpeed }))
        .filter(pipe => pipe.x > -PIPE_WIDTH);

      // 점수 계산
      newPipes.forEach(pipe => {
        if (!pipe.passed && pipe.x + PIPE_WIDTH < window.innerWidth * 0.2) {
          pipe.passed = true;
          setStats(prevStats => ({
            ...prevStats,
            score: prevStats.score + 1,
          }));
        }
      });

      return newPipes;
    });

    // 거리와 생존시간 업데이트
    setStats(prev => ({
      ...prev,
      distance: prev.distance + selectedDifficulty.pipeSpeed,
      survivalTime: Math.floor((Date.now() - gameStartTimeRef.current) / 1000),
    }));
  }, [birdVelocity, selectedDifficulty.pipeSpeed, GAME_HEIGHT]);

  const generatePipe = useCallback(() => {
    const gapSize = selectedDifficulty.pipeGap;
    const minGapY = gapSize / 2 + 50;
    const maxGapY = GAME_HEIGHT - 100 - gapSize / 2;
    const gapY = minGapY + Math.random() * (maxGapY - minGapY);

    const newPipe: PipeData = {
      id: ++pipeIdRef.current,
      x: window.innerWidth,
      gapY,
      gapSize,
      passed: false,
    };

    setPipes(prev => [...prev, newPipe]);
    lastPipeXRef.current = window.innerWidth;
  }, [selectedDifficulty.pipeGap, GAME_HEIGHT]);

  const generateCloud = useCallback(() => {
    const newCloud: CloudData = {
      id: ++cloudIdRef.current,
      x: window.innerWidth,
      y: Math.random() * (GAME_HEIGHT / 2),
      size: 60 + Math.random() * 40,
    };

    setClouds(prev => [...prev, newCloud]);
  }, [GAME_HEIGHT]);

  const startGame = () => {
    setGameState('playing');
    setBirdY(GAME_HEIGHT / 2);
    setBirdVelocity(0);
    setPipes([]);
    setClouds([]);
    setStats(prev => ({
      ...prev,
      score: 0,
      distance: 0,
      survivalTime: 0,
    }));
    lastPipeXRef.current = 0;
    gameStartTimeRef.current = Date.now();

    // 초기 구름 생성
    for (let i = 0; i < 3; i++) {
      setTimeout(() => generateCloud(), i * 1000);
    }
  };

  const gameOver = () => {
    setGameState('gameOver');

    if (stats.score > stats.bestScore) {
      const newBestScore = stats.score;
      setStats(prev => ({ ...prev, bestScore: newBestScore }));
      localStorage.setItem('flappy-best-score', newBestScore.toString());
    }

    if (gameLoopRef.current) {
      cancelAnimationFrame(gameLoopRef.current);
    }
  };

  const gameLoop = useCallback(() => {
    if (gameState === 'playing') {
      updateGame();

      // 파이프 생성 (난이도별 간격)
      if (lastPipeXRef.current <= window.innerWidth - selectedDifficulty.pipeInterval / 2) {
        generatePipe();
      }

      // 충돌 검사
      if (checkCollision(birdY, pipes)) {
        gameOver();
        return;
      }

      gameLoopRef.current = requestAnimationFrame(gameLoop);
    }
  }, [
    gameState,
    updateGame,
    generatePipe,
    checkCollision,
    birdY,
    pipes,
    selectedDifficulty.pipeInterval,
  ]);

  useEffect(() => {
    if (gameState === 'playing') {
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    }

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [gameState, gameLoop]);

  // 클릭/터치 이벤트
  useEffect(() => {
    const handleInteraction = (e: Event) => {
      e.preventDefault();
      jump();
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        jump();
      }
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [jump]);

  // 구름 생성 간격
  useEffect(() => {
    if (gameState === 'playing') {
      const interval = setInterval(generateCloud, 4000);
      return () => clearInterval(interval);
    }
  }, [gameState, generateCloud]);

  const handleBackClick = () => {
    if (gameLoopRef.current) {
      cancelAnimationFrame(gameLoopRef.current);
    }
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
        <Title>🐦 플래피 게임</Title>
        <StatsPanel>
          <Stat highlight={gameState === 'playing'}>
            <div className="stat-label">점수</div>
            <div className="stat-value">{stats.score}</div>
          </Stat>
          <Stat>
            <div className="stat-label">최고점</div>
            <div className="stat-value">{stats.bestScore}</div>
          </Stat>
          <Stat>
            <div className="stat-label">거리</div>
            <div className="stat-value">{Math.floor(stats.distance / 10)}m</div>
          </Stat>
          <Stat>
            <div className="stat-label">시간</div>
            <div className="stat-value">{stats.survivalTime}s</div>
          </Stat>
        </StatsPanel>
      </Header>

      <GameArea>
        {/* 구름들 */}
        {clouds.map(cloud => (
          <Cloud key={cloud.id} x={cloud.x} y={cloud.y} size={cloud.size} />
        ))}

        {/* 점수 표시 (게임 중일 때) */}
        {gameState === 'playing' && <ScoreDisplay>{stats.score}</ScoreDisplay>}

        {/* 게임 시작 전 안내 */}
        {gameState === 'waiting' && (
          <Instructions>
            클릭하거나 스페이스바를 눌러 점프하세요!
            <br />
            파이프를 피해 최대한 멀리 날아가세요
          </Instructions>
        )}

        {/* 새 */}
        {gameState !== 'waiting' && (
          <Bird y={birdY} velocity={birdVelocity} isFlapping={isFlapping} />
        )}

        {/* 파이프들 */}
        {pipes.map(pipe => (
          <React.Fragment key={pipe.id}>
            {/* 상단 파이프 */}
            <Pipe
              x={pipe.x}
              height={pipe.gapY - pipe.gapSize / 2}
              isTop={true}
              speed={selectedDifficulty.pipeSpeed}
            />
            {/* 하단 파이프 */}
            <Pipe
              x={pipe.x}
              height={GAME_HEIGHT - 100 - (pipe.gapY + pipe.gapSize / 2)}
              isTop={false}
              speed={selectedDifficulty.pipeSpeed}
            />
          </React.Fragment>
        ))}

        <Ground />
      </GameArea>

      <GameOverlay show={gameState === 'waiting'}>
        <OverlayContent>
          <div className="overlay-title">🐦 플래피 게임</div>
          <div className="overlay-text">
            작은 새가 파이프 사이를 날아다니는 게임입니다!
            <br />
            중력에 의해 새가 떨어지므로 클릭하여 날개를 펄럭이세요.
            <br />
            <br />
            <strong>조작법:</strong>
            <br />• PC: 클릭 또는 스페이스바 • 모바일: 화면 터치
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

          <ActionButton onClick={startGame}>
            <Play size={20} />
            게임 시작
          </ActionButton>
          <ActionButton variant="secondary" onClick={handleBackClick}>
            뒤로 가기
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
              <span className="score-label">🎯 파이프 점수</span>
              <span className="score-value">{stats.score * 100}점</span>
            </ScoreItem>
            <ScoreItem delay={2}>
              <span className="score-label">🛣️ 거리 보너스</span>
              <span className="score-value">+{Math.floor(stats.distance / 10) * 10}점</span>
            </ScoreItem>
            <ScoreItem delay={3}>
              <span className="score-label">⏱️ 생존 보너스</span>
              <span className="score-value">+{stats.survivalTime * 5}점</span>
            </ScoreItem>
            <ScoreItem delay={4}>
              <span className="score-label">🔥 난이도 배수</span>
              <span className="score-value">
                x
                {selectedDifficulty.name === '지옥'
                  ? 2.5
                  : selectedDifficulty.name === '어려움'
                    ? 2
                    : selectedDifficulty.name === '보통'
                      ? 1.5
                      : 1}
              </span>
            </ScoreItem>
            <ScoreItem delay={5}>
              <span className="score-label">💎 총 점수</span>
              <span className="score-value" style={{ color: currentTier.color }}>
                {Math.round(
                  (stats.score * 100 +
                    Math.floor(stats.distance / 10) * 10 +
                    stats.survivalTime * 5) *
                    (selectedDifficulty.name === '지옥'
                      ? 2.5
                      : selectedDifficulty.name === '어려움'
                        ? 2
                        : selectedDifficulty.name === '보통'
                          ? 1.5
                          : 1)
                )}
                점
              </span>
            </ScoreItem>
          </ScoreBreakdown>

          <StatGrid>
            <StatCard delay={6}>
              <div className="stat-title">통과한 파이프</div>
              <div className="stat-number">{stats.score}개</div>
            </StatCard>
            <StatCard delay={7}>
              <div className="stat-title">비행 거리</div>
              <div className="stat-number">{Math.floor(stats.distance / 10)}m</div>
            </StatCard>
            <StatCard delay={8}>
              <div className="stat-title">생존 시간</div>
              <div className="stat-number">{stats.survivalTime}초</div>
            </StatCard>
            <StatCard delay={9}>
              <div className="stat-title">난이도</div>
              <div className="stat-number">{selectedDifficulty.emoji}</div>
            </StatCard>
          </StatGrid>

          <PerformanceMessage delay={10}>
            {selectedDifficulty.name === '지옥' && stats.score >= 10
              ? '🔥 지옥 난이도 정복! 당신은 진정한 플라이 마스터!'
              : stats.score >= 30 && stats.survivalTime >= 60
                ? '🏆 완벽한 비행! 하늘의 제왕이군요!'
                : stats.score >= 20 && stats.survivalTime >= 40
                  ? '🎉 훌륭한 실력! 베테랑 파일럿이네요!'
                  : stats.score >= 10 && stats.survivalTime >= 20
                    ? '✈️ 좋은 비행! 꾸준히 발전하고 있어요!'
                    : stats.score >= 5
                      ? '🛩️ 괜찮은 시도! 조금 더 연습해보세요!'
                      : '🐣 처음치고 잘했어요! 계속 도전해보세요!'}
          </PerformanceMessage>

          <div style={{ marginTop: '2rem' }}>
            <ActionButton onClick={startGame}>
              <RotateCcw size={20} />
              다시 도전
            </ActionButton>
            <ActionButton variant="secondary" onClick={handleBackClick}>
              📋 게임 목록
            </ActionButton>
          </div>
        </OverlayContent>
      </GameOverlay>
    </GameContainer>
  );
};

export default FlappyGame;
