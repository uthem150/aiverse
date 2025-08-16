import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

// 애니메이션 정의
const cardFlip = keyframes`
  0% { transform: rotateY(0deg) scale(1); }
  50% { transform: rotateY(90deg) scale(1.05); }
  100% { transform: rotateY(0deg) scale(1); }
`;

const cardAppear = keyframes`
  0%   { transform: scale(0.96) rotate(6deg);  opacity: 0; }
  60%  { transform: scale(1.02) rotate(1deg);  opacity: 0.9; }
  100% { transform: scale(1)    rotate(0deg);  opacity: 1; }
`;

const cardMatch = keyframes`
  0% { transform: scale(1); }
  25% { transform: scale(1.2) rotate(5deg); }
  50% { transform: scale(1.3) rotate(-5deg); }
  75% { transform: scale(1.2) rotate(5deg); }
  100% { transform: scale(1) rotate(0deg); }
`;

const cardWrong = keyframes`
  0%, 100% { transform: translateX(0) rotate(0deg); }
  10% { transform: translateX(-10px) rotate(-2deg); }
  20% { transform: translateX(10px) rotate(2deg); }
  30% { transform: translateX(-10px) rotate(-2deg); }
  40% { transform: translateX(10px) rotate(2deg); }
  50% { transform: translateX(-5px) rotate(-1deg); }
  60% { transform: translateX(5px) rotate(1deg); }
  70% { transform: translateX(-5px) rotate(-1deg); }
  80% { transform: translateX(5px) rotate(1deg); }
  90% { transform: translateX(-2px) rotate(0deg); }
`;

const perfectGlow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
    transform: scale(1);
  }
  50% { 
    box-shadow: 0 0 40px rgba(34, 197, 94, 0.8);
    transform: scale(1.02);
  }
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

// 난이도 설정
interface Difficulty {
  name: string;
  emoji: string;
  pairs: number;
  time: number;
  description: string;
  cols: number;
}

const DIFFICULTIES: Difficulty[] = [
  { name: '쉬움', emoji: '🐤', pairs: 6, time: 90, description: '3×4 배치, 90초', cols: 4 },
  { name: '보통', emoji: '🧠', pairs: 8, time: 120, description: '4×4 배치, 120초', cols: 4 },
  { name: '어려움', emoji: '🔥', pairs: 12, time: 150, description: '4×6 배치, 150초', cols: 6 }, // 24장 = 6열×4행
  { name: '지옥', emoji: '💀', pairs: 18, time: 180, description: '6×6 배치, 180초', cols: 6 }, // 36장 = 6열×6행
];

// 티어 시스템
interface TierInfo {
  name: string;
  emoji: string;
  color: string;
  minScore: number;
}

const TIERS: TierInfo[] = [
  { name: '레전드', emoji: '👑', color: '#FFD700', minScore: 10000 },
  { name: '마스터', emoji: '💎', color: '#00CED1', minScore: 8500 },
  { name: '다이아몬드', emoji: '💠', color: '#4169E1', minScore: 7500 },
  { name: '플래티넘', emoji: '⭐', color: '#C0C0C0', minScore: 6000 },
  { name: '골드', emoji: '🥇', color: '#FFD700', minScore: 4800 },
  { name: '실버', emoji: '🥈', color: '#C0C0C0', minScore: 3800 },
  { name: '브론즈', emoji: '🥉', color: '#CD7F32', minScore: 2000 },
  { name: '비기너', emoji: '🎯', color: '#808080', minScore: 0 },
];

const GameContainer = styled.div`
  height: 100%;
  flex: 1;
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
  border-bottom: 2px solid rgba(147, 51, 234, 0.3);
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
  background: rgba(147, 51, 234, 0.1);
  border: 2px solid rgba(147, 51, 234, 0.3);
  border-radius: 12px;
  padding: 0.8rem 1.2rem;
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
    box-shadow: 0 15px 35px rgba(147, 51, 234, 0.4);
    animation: ${buttonHover} 0.6s ease-in-out;

    &:before {
      width: 300px;
      height: 300px;
    }
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
  background: linear-gradient(45deg, #9333ea, #7c3aed);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  text-shadow: 0 0 20px rgba(147, 51, 234, 0.5);

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
      animation: ${perfectGlow} 0.8s ease;
    `}

  .stat-label {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.2rem;
  }

  .stat-value {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${props => (props.highlight ? '#fbbf24' : '#9333ea')};
    text-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
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
  margin-top: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    margin-top: 1rem;
  }
`;

const CardGrid = styled.div<{ cols: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 720px; /* 6열 기준 넉넉하게 */
  justify-items: center;

  @media (max-width: 768px) {
    gap: 0.8rem;
    max-width: 560px;
  }
  @media (max-width: 480px) {
    gap: 0.5rem;
    max-width: 360px;
  }
`;

const Card = styled.div<{
  isFlipped: boolean;
  isMatched: boolean;
  isWrong: boolean;
  emoji: string;
  delay?: number;
}>`
  width: 80px;
  height: 80px;
  background: ${props =>
    props.isMatched
      ? 'linear-gradient(135deg, #22c55e, #16a34a)'
      : props.isFlipped
        ? 'linear-gradient(135deg, #9333ea, #7c3aed)'
        : 'linear-gradient(135deg, #374151, #4b5563)'};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => (props.isMatched ? 'default' : 'pointer')};
  transition: all 0.3s ease;
  font-size: 2.5rem;
  user-select: none;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;

  will-change: transform, opacity;
  animation: ${cardAppear} 0.28s ease ${props => (props.delay || 0) * 0.03}s both;

  ${props =>
    props.isFlipped &&
    css`
      animation: ${cardFlip} 0.6s ease;
    `}

  ${props =>
    props.isMatched &&
    css`
      animation: ${cardMatch} 0.8s ease;
      box-shadow: 0 0 25px rgba(34, 197, 94, 0.6);
    `}
  
  ${props =>
    props.isWrong &&
    css`
      animation: ${cardWrong} 0.3s ease-out;
      background: linear-gradient(135deg, #ef4444, #dc2626) !important;
    `}

  &:hover {
    ${props =>
      !props.isMatched &&
      css`
        transform: translateY(-5px) scale(1.05);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
      `}
  }

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #9333ea, #7c3aed, #22c55e, #16a34a);
    border-radius: 18px;
    z-index: -1;
    opacity: ${props => (props.isMatched ? 0.7 : 0)};
    transition: opacity 0.3s ease;
  }
  &::after {
    content: '${props => (props.isFlipped || props.isMatched ? props.emoji : '❓')}';
    color: white;
    font-weight: bold;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    filter: ${props => (props.isMatched ? 'drop-shadow(0 0 8px rgba(34, 197, 94, 0.8))' : 'none')};
  }

  @media (max-width: 768px) {
    width: 65px;
    height: 65px;
    font-size: 2rem;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    border-radius: 10px;
  }
`;

const ComboIndicator = styled.div<{ show: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
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
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(124, 58, 237, 0.1));
  backdrop-filter: blur(30px);
  border: 2px solid rgba(147, 51, 234, 0.4);
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
    0 0 100px rgba(147, 51, 234, 0.2);

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
    props.selected ? 'linear-gradient(135deg, #9333ea, #7c3aed)' : 'rgba(255, 255, 255, 0.05)'};
  border: 2px solid ${props => (props.selected ? '#9333ea' : 'rgba(255, 255, 255, 0.1)')};
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
    box-shadow: 0 8px 16px rgba(147, 51, 234, 0.3);
    border-color: #9333ea;
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
    border-top: 2px solid rgba(147, 51, 234, 0.3);
  }

  .score-label {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.95rem;
  }

  .score-value {
    color: #9333ea;
    font-weight: 600;
    text-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
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
    color: #9333ea;
    text-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
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
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(124, 58, 237, 0.1));
  border: 1px solid rgba(147, 51, 234, 0.3);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  color: #a855f7;
  font-weight: 600;
  animation: ${statsReveal} 0.6s ease-out ${props => (props.delay || 0) * 0.1}s both;
  text-shadow: 0 0 10px rgba(168, 85, 247, 0.3);

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
      : 'linear-gradient(135deg, #9333ea, #7c3aed)'};
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
    box-shadow: 0 15px 35px rgba(147, 51, 234, 0.4);
    animation: ${buttonHover} 0.6s ease-in-out;

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

interface CardData {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

interface GameStats {
  moves: number;
  matches: number;
  time: number;
  score: number;
  combo: number;
  maxCombo: number;
  accuracy: number;
}

const EMOJIS = [
  '🐶',
  '🐱',
  '🐭',
  '🐹',
  '🐰',
  '🦊',
  '🐻',
  '🐼',
  '🐯',
  '🦁',
  '🐮',
  '🐷',
  '🐸',
  '🐵',
  '🐔',
  '🦋',
  '🐛',
  '🐝',
  '🦄',
  '🐲',
  '🌸',
  '🌺',
  '🌻',
  '🌹',
  '🌷',
  '🌼',
  '🍎',
  '🍊',
  '🍋',
  '🍌',
  '🍇',
  '🍓',
];

const MemoryCards: React.FC = () => {
  const [gameState, setGameState] = useState<'setup' | 'playing' | 'finished'>('setup');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>(DIFFICULTIES[1]);
  const [cards, setCards] = useState<CardData[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [stats, setStats] = useState<GameStats>({
    moves: 0,
    matches: 0,
    time: 0,
    score: 0,
    combo: 0,
    maxCombo: 0,
    accuracy: 0,
  });
  const [timeLeft, setTimeLeft] = useState(selectedDifficulty.time);
  const [showCombo, setShowCombo] = useState(false);
  const [wrongCards, setWrongCards] = useState<number[]>([]);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const gameStartTimeRef = useRef(0);
  const totalAttemptsRef = useRef(0);
  const navigate = useNavigate();

  // 티어 계산 함수
  const calculateTier = (finalStats: GameStats): TierInfo => {
    const baseScore = finalStats.matches * 200;
    const speedBonus = Math.max(
      0,
      (selectedDifficulty.time - (selectedDifficulty.time - timeLeft)) * 15
    );
    const accuracyBonus = finalStats.accuracy * 30;
    const comboBonus = finalStats.maxCombo * 100;
    const difficultyMultiplier =
      selectedDifficulty.name === '지옥'
        ? 2.5
        : selectedDifficulty.name === '어려움'
          ? 2
          : selectedDifficulty.name === '보통'
            ? 1.5
            : 1;

    const totalScore = (baseScore + speedBonus + accuracyBonus + comboBonus) * difficultyMultiplier;

    for (const tier of TIERS) {
      if (totalScore >= tier.minScore) {
        return tier;
      }
    }
    return TIERS[TIERS.length - 1];
  };

  const generateCards = useCallback((difficulty: Difficulty) => {
    const pairCount = difficulty.pairs;
    const selectedEmojis = EMOJIS.slice(0, pairCount);
    const cardPairs = [...selectedEmojis, ...selectedEmojis];

    const shuffledCards = cardPairs
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false,
      }));

    setCards(shuffledCards);
  }, []);

  const handleCardClick = useCallback(
    (cardId: number) => {
      if (gameState !== 'playing') return;

      const card = cards.find(c => c.id === cardId);
      if (!card || card.isFlipped || card.isMatched) return;

      if (flippedCards.length === 2) return;

      const newFlippedCards = [...flippedCards, cardId];
      setFlippedCards(newFlippedCards);

      setCards(prev => prev.map(c => (c.id === cardId ? { ...c, isFlipped: true } : c)));

      if (newFlippedCards.length === 2) {
        totalAttemptsRef.current += 1;
        setStats(prev => ({ ...prev, moves: prev.moves + 1 }));

        const [first, second] = newFlippedCards;
        const firstCard = cards.find(c => c.id === first);
        const secondCard = cards.find(c => c.id === second);

        if (firstCard?.emoji === secondCard?.emoji) {
          // 매치!
          setTimeout(() => {
            setCards(prev =>
              prev.map(c => (c.id === first || c.id === second ? { ...c, isMatched: true } : c))
            );
            setStats(prev => {
              const newMatches = prev.matches + 1;
              const newCombo = prev.combo + 1;
              const newMaxCombo = Math.max(prev.maxCombo, newCombo);
              const baseScore = 200;
              const comboBonus = newCombo > 1 ? newCombo * 50 : 0;
              const newScore = prev.score + baseScore + comboBonus;
              const accuracy =
                totalAttemptsRef.current > 0 ? (newMatches / totalAttemptsRef.current) * 100 : 100;

              if (newCombo > 1) {
                setShowCombo(true);
                setTimeout(() => setShowCombo(false), 1000);
              }

              return {
                ...prev,
                matches: newMatches,
                score: newScore,
                combo: newCombo,
                maxCombo: newMaxCombo,
                accuracy: Math.round(accuracy * 10) / 10,
              };
            });
            setFlippedCards([]);
          }, 500);
        } else {
          // 틀림
          setWrongCards([first, second]);
          setStats(prev => {
            const accuracy =
              totalAttemptsRef.current > 0 ? (prev.matches / totalAttemptsRef.current) * 100 : 100;
            return {
              ...prev,
              combo: 0,
              accuracy: Math.round(accuracy * 10) / 10,
            };
          });

          setTimeout(() => {
            setCards(prev =>
              prev.map(c => (c.id === first || c.id === second ? { ...c, isFlipped: false } : c))
            );
            setWrongCards([]);
            setFlippedCards([]);
          }, 400);
        }
      }
    },
    [cards, flippedCards, gameState]
  );

  const startGame = () => {
    generateCards(selectedDifficulty);
    setGameState('playing');
    setTimeLeft(selectedDifficulty.time);
    setStats({
      moves: 0,
      matches: 0,
      time: 0,
      score: 0,
      combo: 0,
      maxCombo: 0,
      accuracy: 100,
    });
    setFlippedCards([]);
    setWrongCards([]);
    totalAttemptsRef.current = 0;
    gameStartTimeRef.current = Date.now();

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameState('finished');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const restartGame = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setGameState('setup');
    setFlippedCards([]);
    setWrongCards([]);
    totalAttemptsRef.current = 0;
  };

  useEffect(() => {
    if (stats.matches === selectedDifficulty.pairs && gameState === 'playing') {
      setGameState('finished');
      if (timerRef.current) clearInterval(timerRef.current);

      // 최종 점수 계산
      const baseScore = stats.matches * 200;
      const timeBonus = timeLeft * 15;
      const accuracyBonus = stats.accuracy * 30;
      const comboBonus = stats.maxCombo * 100;
      const difficultyMultiplier =
        selectedDifficulty.name === '지옥'
          ? 2.5
          : selectedDifficulty.name === '어려움'
            ? 2
            : selectedDifficulty.name === '보통'
              ? 1.5
              : 1;

      const finalScore = Math.round(
        (baseScore + timeBonus + accuracyBonus + comboBonus) * difficultyMultiplier
      );

      setStats(prev => ({ ...prev, score: finalScore }));
    }
  }, [
    stats.matches,
    selectedDifficulty.pairs,
    gameState,
    timeLeft,
    stats.accuracy,
    stats.maxCombo,
    selectedDifficulty.name,
  ]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleBackClick = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    navigate(-1);
  };

  const currentTier = calculateTier(stats);

  return (
    <GameContainer>
      <Header>
        <BackButton onClick={handleBackClick}>
          <ArrowLeft size={16} />
          게임 목록
        </BackButton>
        <Title>🧠 기억력 카드</Title>
        <StatsPanel>
          <Stat>
            <div className="stat-label">움직임</div>
            <div className="stat-value">{stats.moves}</div>
          </Stat>
          <Stat highlight={stats.combo > 1}>
            <div className="stat-label">매치</div>
            <div className="stat-value">
              {stats.matches}/{selectedDifficulty.pairs}
            </div>
          </Stat>
          <Stat>
            <div className="stat-label">정확도</div>
            <div className="stat-value">{stats.accuracy}%</div>
          </Stat>
          <Stat>
            <div className="stat-label">시간</div>
            <div className="stat-value">{timeLeft}s</div>
          </Stat>
        </StatsPanel>
      </Header>

      {gameState === 'playing' && (
        <GameArea>
          <CardGrid cols={selectedDifficulty.cols}>
            {cards.map((card, index) => (
              <Card
                key={card.id}
                isFlipped={card.isFlipped}
                isMatched={card.isMatched}
                isWrong={wrongCards.includes(card.id)}
                emoji={card.emoji}
                delay={index}
                onClick={() => handleCardClick(card.id)}
              />
            ))}
          </CardGrid>

          <ComboIndicator show={showCombo}>
            🔥 {stats.combo}연속! +{stats.combo * 50}점
          </ComboIndicator>
        </GameArea>
      )}

      <GameOverlay show={gameState === 'setup'}>
        <OverlayContent>
          <div className="overlay-title">🧠 기억력 카드</div>
          <div className="overlay-text">
            같은 그림의 카드 쌍을 찾아 모든 카드를 매치시키세요!
            <br />
            연속으로 매치시키면 콤보 보너스를 얻습니다.
            <br />
            빠르고 정확하게 완성할수록 높은 점수를 얻습니다.
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

      <GameOverlay show={gameState === 'finished'}>
        <OverlayContent>
          <div className="overlay-title">🏆 게임 완료!</div>

          <TierBadge color={currentTier.color}>
            {currentTier.emoji} {currentTier.name}
          </TierBadge>

          <ScoreBreakdown>
            <ScoreItem delay={1}>
              <span className="score-label">🎯 기본 점수</span>
              <span className="score-value">{stats.matches * 200}점</span>
            </ScoreItem>
            <ScoreItem delay={2}>
              <span className="score-label">⏱️ 시간 보너스</span>
              <span className="score-value">+{timeLeft * 15}점</span>
            </ScoreItem>
            <ScoreItem delay={3}>
              <span className="score-label">🎖️ 정확도 보너스</span>
              <span className="score-value">+{Math.round(stats.accuracy * 30)}점</span>
            </ScoreItem>
            <ScoreItem delay={4}>
              <span className="score-label">🔥 콤보 보너스</span>
              <span className="score-value">+{stats.maxCombo * 100}점</span>
            </ScoreItem>
            <ScoreItem delay={5}>
              <span className="score-label">⭐ 난이도 배수</span>
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
            <ScoreItem delay={6}>
              <span className="score-label">💎 총 점수</span>
              <span className="score-value" style={{ color: currentTier.color }}>
                {stats.score}점
              </span>
            </ScoreItem>
          </ScoreBreakdown>

          <StatGrid>
            <StatCard delay={7}>
              <div className="stat-title">총 움직임</div>
              <div className="stat-number">{stats.moves}번</div>
            </StatCard>
            <StatCard delay={8}>
              <div className="stat-title">정확도</div>
              <div className="stat-number">{stats.accuracy}%</div>
            </StatCard>
            <StatCard delay={9}>
              <div className="stat-title">최대 콤보</div>
              <div className="stat-number">{stats.maxCombo}연속</div>
            </StatCard>
            <StatCard delay={10}>
              <div className="stat-title">남은 시간</div>
              <div className="stat-number">{timeLeft}초</div>
            </StatCard>
          </StatGrid>

          <PerformanceMessage delay={11}>
            {selectedDifficulty.name === '지옥' && stats.matches === selectedDifficulty.pairs
              ? '💀 지옥 난이도 정복! 당신의 기억력은 신급입니다!'
              : stats.accuracy >= 90 && stats.maxCombo >= 5
                ? '🧠 완벽한 기억력! 기억의 마스터이군요!'
                : stats.accuracy >= 80 && stats.matches === selectedDifficulty.pairs
                  ? '🎉 훌륭한 기억력! 집중력이 뛰어나네요!'
                  : stats.accuracy >= 65 && stats.matches >= selectedDifficulty.pairs * 0.8
                    ? '👍 좋은 실력! 꾸준히 발전하고 있어요!'
                    : stats.matches >= selectedDifficulty.pairs * 0.5
                      ? '💪 괜찮은 시도! 조금 더 연습해보세요!'
                      : '🎯 처음치고 잘했어요! 계속 도전해보세요!'}
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

export default MemoryCards;
