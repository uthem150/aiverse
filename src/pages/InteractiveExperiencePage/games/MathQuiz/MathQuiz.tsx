import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, Calculator, Brain, Zap } from 'lucide-react';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';

// 애니메이션 정의
const questionAppear = keyframes`
  0% { transform: translateY(-20px) scale(0.9); opacity: 0; }
  50% { transform: translateY(-5px) scale(1.05); opacity: 0.8; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
`;

const correctAnswer = keyframes`
  0% { transform: scale(1); background: #10b981; }
  50% { transform: scale(1.1); background: #059669; box-shadow: 0 0 30px rgba(16, 185, 129, 0.8); }
  100% { transform: scale(1); background: #10b981; }
`;

const wrongAnswer = keyframes`
  0% { transform: scale(1) rotate(0deg); background: #ef4444; }
  25% { transform: scale(1.05) rotate(-2deg); background: #dc2626; }
  50% { transform: scale(1.1) rotate(2deg); background: #ef4444; }
  75% { transform: scale(1.05) rotate(-1deg); background: #dc2626; }
  100% { transform: scale(1) rotate(0deg); background: #ef4444; }
`;

const comboGlow = keyframes`
  0% { 
    box-shadow: 0 0 20px rgba(249, 115, 22, 0.5);
    transform: scale(1);
  }
  50% { 
    box-shadow: 0 0 40px rgba(249, 115, 22, 0.9);
    transform: scale(1.05);
  }
  100% { 
    box-shadow: 0 0 20px rgba(249, 115, 22, 0.5);
    transform: scale(1);
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

const inputFocus = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

// 난이도 설정 개선
interface Difficulty {
  name: string;
  emoji: string;
  timeLimit: number;
  range: [number, number];
  operations: string[];
  description: string;
  multiplier: number;
}

const DIFFICULTIES: Record<string, Difficulty> = {
  easy: {
    name: '쉬움',
    emoji: '🟢',
    timeLimit: 12,
    range: [1, 20],
    operations: ['+', '-'],
    description: '기본 덧셈, 뺄셈',
    multiplier: 1,
  },
  medium: {
    name: '보통',
    emoji: '🟡',
    timeLimit: 10,
    range: [1, 50],
    operations: ['+', '-', '×'],
    description: '덧셈, 뺄셈, 곱셈',
    multiplier: 1.5,
  },
  hard: {
    name: '어려움',
    emoji: '🟠',
    timeLimit: 8,
    range: [1, 100],
    operations: ['+', '-', '×', '÷'],
    description: '모든 사칙연산',
    multiplier: 2,
  },
  expert: {
    name: '전문가',
    emoji: '🔴',
    timeLimit: 6,
    range: [1, 200],
    operations: ['+', '-', '×', '÷'],
    description: '큰 수, 빠른 속도',
    multiplier: 3,
  },
};

// 티어 시스템
interface TierInfo {
  name: string;
  emoji: string;
  color: string;
  minScore: number;
}

const TIERS: TierInfo[] = [
  { name: '수학 천재', emoji: '🧠', color: '#FFD700', minScore: 12000 },
  { name: '계산 마스터', emoji: '🏆', color: '#00CED1', minScore: 9000 },
  { name: '수학 고수', emoji: '⚡', color: '#4169E1', minScore: 6500 },
  { name: '계산 달인', emoji: '💎', color: '#C0C0C0', minScore: 4500 },
  { name: '수학 실력자', emoji: '🥇', color: '#FFD700', minScore: 3000 },
  { name: '계산 능숙자', emoji: '🥈', color: '#C0C0C0', minScore: 1800 },
  { name: '수학 입문자', emoji: '🥉', color: '#CD7F32', minScore: 800 },
  { name: '계산 초보', emoji: '📚', color: '#808080', minScore: 0 },
];

const GameContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #3b82f6 70%, #1e40af 100%);
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
    ${css`
      animation: ${buttonHover} 0.6s ease-in-out;
    `}
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
  background: linear-gradient(45deg, #3b82f6, #1e40af);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);

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
  transition: all 0.3s ease;

  ${props =>
    props.highlight &&
    css`
      animation: ${comboGlow} 1s ease-in-out infinite;
      border-radius: 8px;
      padding: 0.5rem;
    `}

  .stat-label {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.2rem;
  }

  .stat-value {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${props => (props.highlight ? '#f97316' : '#3b82f6')};
    text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
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
  gap: 3rem;
  margin-top: 120px;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 2rem;
    margin-top: 140px;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
    margin-top: 120px;
  }
`;

const QuestionDisplay = styled.div<{ isCorrect?: boolean; isWrong?: boolean }>`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(30px);
  border: 3px solid rgba(59, 130, 246, 0.4);
  border-radius: 24px;
  padding: 3rem 2rem;
  text-align: center;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  min-width: 400px;
  animation: ${questionAppear} 0.6s ease-out;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);

  ${props =>
    props.isCorrect &&
    css`
      animation: ${correctAnswer} 0.6s ease;
    `}

  ${props =>
    props.isWrong &&
    css`
      animation: ${wrongAnswer} 0.6s ease;
    `}

  @media (max-width: 768px) {
    font-size: 2.2rem;
    padding: 2rem 1.5rem;
    min-width: 300px;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    padding: 1.5rem 1rem;
    min-width: 280px;
    border-radius: 16px;
  }
`;

const AnswerInput = styled.input<{ hasError?: boolean }>`
  background: rgba(255, 255, 255, 0.05);
  border: 3px solid ${props => (props.hasError ? '#ef4444' : 'rgba(59, 130, 246, 0.4)')};
  border-radius: 16px;
  padding: 1.5rem;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  outline: none;
  transition: all 0.3s ease;
  width: 200px;
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  &:focus {
    border-color: #10b981;
    box-shadow: 0 0 30px rgba(16, 185, 129, 0.4);
    ${css`
      animation: ${inputFocus} 0.3s ease;
    `}
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    width: 180px;
    font-size: 1.8rem;
    padding: 1.2rem;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    width: 160px;
    font-size: 1.5rem;
    padding: 1rem;
    border-radius: 10px;
  }
`;

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const TimerLabel = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 600;
`;

const TimerBar = styled.div`
  width: 300px;
  height: 12px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 250px;
    height: 10px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 8px;
  }
`;

const TimerFill = styled.div<{ timeLeft: number; maxTime: number }>`
  width: ${props => (props.timeLeft / props.maxTime) * 100}%;
  height: 100%;
  background: linear-gradient(
    90deg,
    ${props =>
      props.timeLeft / props.maxTime > 0.5
        ? '#10b981'
        : props.timeLeft / props.maxTime > 0.25
          ? '#f59e0b'
          : '#ef4444'}
  );
  transition: width 0.1s linear;
  border-radius: 6px;
  box-shadow: 0 0 10px
    ${props =>
      props.timeLeft / props.maxTime > 0.5
        ? 'rgba(16, 185, 129, 0.5)'
        : props.timeLeft / props.maxTime > 0.25
          ? 'rgba(245, 158, 11, 0.5)'
          : 'rgba(239, 68, 68, 0.5)'};
`;

const ComboDisplay = styled.div<{ show: boolean; combo: number }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  font-weight: bold;
  color: #f97316;
  text-shadow: 0 0 20px rgba(249, 115, 22, 0.8);
  z-index: 100;
  opacity: ${props => (props.show ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.8);
  padding: 1rem 2rem;
  border-radius: 20px;
  border: 3px solid #f97316;
  backdrop-filter: blur(10px);

  &::before {
    content: '${props => props.combo}x COMBO!';
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    padding: 0.8rem 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
    padding: 0.6rem 1rem;
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
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(30, 64, 175, 0.1));
  backdrop-filter: blur(30px);
  border: 2px solid rgba(59, 130, 246, 0.4);
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
    0 0 100px rgba(59, 130, 246, 0.2);

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
    props.selected ? 'linear-gradient(135deg, #3b82f6, #1e40af)' : 'rgba(255, 255, 255, 0.05)'};
  border: 2px solid ${props => (props.selected ? '#3b82f6' : 'rgba(255, 255, 255, 0.1)')};
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
    box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
    border-color: #3b82f6;
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
    border-top: 2px solid rgba(59, 130, 246, 0.3);
  }

  .score-label {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.95rem;
  }

  .score-value {
    color: #3b82f6;
    font-weight: 600;
    text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
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

const PerformanceMessage = styled.div<{ delay?: number }>`
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(30, 64, 175, 0.1));
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  color: #3b82f6;
  font-weight: 600;
  animation: ${statsReveal} 0.6s ease-out ${props => (props.delay || 0) * 0.1}s both;
  text-shadow: 0 0 10px rgba(59, 130, 246, 0.3);

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
      : 'linear-gradient(135deg, #3b82f6, #1e40af)'};
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

interface Question {
  expression: string;
  answer: number;
}

interface GameStats {
  score: number;
  correct: number;
  wrong: number;
  streak: number;
  maxStreak: number;
  questionsAnswered: number;
  avgTime: number;
  timeouts: number;
}

const GAME_DURATION = 60; // 60초

const MathQuiz: React.FC = () => {
  const [gameState, setGameState] = useState<'setup' | 'playing' | 'finished'>('setup');
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard' | 'expert'>('medium');
  const [currentQuestion, setCurrentQuestion] = useState<Question>({ expression: '', answer: 0 });
  const [userAnswer, setUserAnswer] = useState('');
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [questionTimeLeft, setQuestionTimeLeft] = useState(0);
  const [stats, setStats] = useState<GameStats>({
    score: 0,
    correct: 0,
    wrong: 0,
    streak: 0,
    maxStreak: 0,
    questionsAnswered: 0,
    avgTime: 0,
    timeouts: 0,
  });
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [showCombo, setShowCombo] = useState(false);
  const [questionStartTime, setQuestionStartTime] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const gameTimerRef = useRef<NodeJS.Timeout | null>(null);
  const questionTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 티어 계산 함수
  const calculateTier = (finalStats: GameStats): TierInfo => {
    const baseScore = finalStats.score;
    const accuracyBonus =
      finalStats.questionsAnswered > 0
        ? (finalStats.correct / finalStats.questionsAnswered) * 1000
        : 0;
    const streakBonus = finalStats.maxStreak * 50;
    const speedBonus = finalStats.avgTime > 0 ? Math.max(0, (5000 - finalStats.avgTime) / 10) : 0;
    const difficultyMultiplier = DIFFICULTIES[difficulty].multiplier;

    const totalScore =
      (baseScore + accuracyBonus + streakBonus + speedBonus) * difficultyMultiplier;

    for (const tier of TIERS) {
      if (totalScore >= tier.minScore) {
        return tier;
      }
    }
    return TIERS[TIERS.length - 1];
  };

  const generateQuestion = useCallback((difficulty: keyof typeof DIFFICULTIES): Question => {
    const config = DIFFICULTIES[difficulty];
    const [min, max] = config.range;
    const operations = config.operations;

    const operation = operations[Math.floor(Math.random() * operations.length)];
    let num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    let expression: string;
    let answer: number;

    switch (operation) {
      case '+':
        expression = `${num1} + ${num2}`;
        answer = num1 + num2;
        break;
      case '-':
        if (num2 > num1) [num1, num2] = [num2, num1]; // 음수 방지
        expression = `${num1} - ${num2}`;
        answer = num1 - num2;
        break;
      case '×':
        num1 = Math.floor(Math.random() * 20) + 1; // 곱셈은 작은 수로
        num2 = Math.floor(Math.random() * 20) + 1;
        expression = `${num1} × ${num2}`;
        answer = num1 * num2;
        break;
      case '÷':
        answer = Math.floor(Math.random() * 25) + 1;
        num1 = answer * (Math.floor(Math.random() * 15) + 1);
        expression = `${num1} ÷ ${answer}`;
        break;
      default:
        expression = `${num1} + ${num2}`;
        answer = num1 + num2;
    }

    return { expression, answer };
  }, []);

  const nextQuestion = useCallback(() => {
    const newQuestion = generateQuestion(difficulty);
    setCurrentQuestion(newQuestion);
    setUserAnswer('');
    setFeedback(null);
    setQuestionTimeLeft(DIFFICULTIES[difficulty].timeLimit);
    setQuestionStartTime(Date.now());

    // 포커스 설정
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }, [difficulty, generateQuestion]);

  const handleAnswerSubmit = useCallback(
    (answer: string) => {
      if (!answer.trim()) return;

      const numAnswer = parseInt(answer);
      const isCorrect = numAnswer === currentQuestion.answer;
      const responseTime = Date.now() - questionStartTime;

      setFeedback(isCorrect ? 'correct' : 'wrong');

      setStats(prev => {
        const newCorrect = isCorrect ? prev.correct + 1 : prev.correct;
        const newWrong = isCorrect ? prev.wrong : prev.wrong + 1;
        const newStreak = isCorrect ? prev.streak + 1 : 0;
        const newMaxStreak = Math.max(prev.maxStreak, newStreak);
        const newQuestionsAnswered = prev.questionsAnswered + 1;
        const newAvgTime =
          (prev.avgTime * prev.questionsAnswered + responseTime) / newQuestionsAnswered;

        let scoreIncrease = 0;
        if (isCorrect) {
          scoreIncrease = 10 + newStreak * 3; // 연속 정답 보너스 증가
          if (responseTime < 2000) scoreIncrease += 8; // 빠른 답변 보너스 증가
          if (responseTime < 1000) scoreIncrease += 5; // 매우 빠른 답변 추가 보너스
        }

        return {
          score: prev.score + scoreIncrease,
          correct: newCorrect,
          wrong: newWrong,
          streak: newStreak,
          maxStreak: newMaxStreak,
          questionsAnswered: newQuestionsAnswered,
          avgTime: Math.round(newAvgTime),
          timeouts: prev.timeouts,
        };
      });

      // 연속 정답 5개 이상일 때 콤보 표시
      if (isCorrect && stats.streak + 1 >= 5 && (stats.streak + 1) % 5 === 0) {
        setShowCombo(true);
        setTimeout(() => setShowCombo(false), 2000);
      }

      setTimeout(() => {
        nextQuestion();
      }, 1000);
    },
    [currentQuestion.answer, questionStartTime, nextQuestion, stats.streak]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAnswerSubmit(userAnswer);
    }
  };

  const startGame = () => {
    setGameState('playing');
    setTimeLeft(GAME_DURATION);
    setStats({
      score: 0,
      correct: 0,
      wrong: 0,
      streak: 0,
      maxStreak: 0,
      questionsAnswered: 0,
      avgTime: 0,
      timeouts: 0,
    });

    nextQuestion();

    // 게임 타이머
    gameTimerRef.current = setInterval(() => {
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
    if (gameTimerRef.current) clearInterval(gameTimerRef.current);
    if (questionTimerRef.current) clearInterval(questionTimerRef.current);
    setGameState('setup');
    setShowCombo(false);
  };

  useEffect(() => {
    if (gameState === 'playing' && questionTimeLeft > 0) {
      questionTimerRef.current = setTimeout(() => {
        setQuestionTimeLeft(prev => {
          if (prev <= 1) {
            // 시간 초과
            setStats(prevStats => ({
              ...prevStats,
              wrong: prevStats.wrong + 1,
              streak: 0,
              questionsAnswered: prevStats.questionsAnswered + 1,
              timeouts: prevStats.timeouts + 1,
            }));
            setFeedback('wrong');
            setTimeout(nextQuestion, 1000);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (questionTimerRef.current) clearTimeout(questionTimerRef.current);
    };
  }, [gameState, questionTimeLeft, nextQuestion]);

  useEffect(() => {
    return () => {
      if (gameTimerRef.current) clearInterval(gameTimerRef.current);
      if (questionTimerRef.current) clearTimeout(questionTimerRef.current);
    };
  }, []);

  const handleBackClick = () => {
    if (gameTimerRef.current) clearInterval(gameTimerRef.current);
    if (questionTimerRef.current) clearTimeout(questionTimerRef.current);
    console.log('게임 목록으로 돌아가기');
  };

  const accuracy =
    stats.questionsAnswered > 0 ? Math.round((stats.correct / stats.questionsAnswered) * 100) : 0;
  const currentTier = calculateTier(stats);

  return (
    <GameContainer>
      <Header>
        <BackButton onClick={handleBackClick}>
          <ArrowLeft size={16} />
          게임 목록
        </BackButton>
        <Title>🧮 수학 퀴즈</Title>
        <StatsPanel>
          <Stat>
            <div className="stat-label">점수</div>
            <div className="stat-value">{stats.score}</div>
          </Stat>
          <Stat highlight={stats.streak >= 5}>
            <div className="stat-label">연속</div>
            <div className="stat-value">{stats.streak}</div>
          </Stat>
          <Stat>
            <div className="stat-label">정확도</div>
            <div className="stat-value">{accuracy}%</div>
          </Stat>
          <Stat>
            <div className="stat-label">시간</div>
            <div className="stat-value">{timeLeft}s</div>
          </Stat>
        </StatsPanel>
      </Header>

      {gameState === 'playing' && (
        <GameArea>
          <QuestionDisplay isCorrect={feedback === 'correct'} isWrong={feedback === 'wrong'}>
            {currentQuestion.expression} = ?
          </QuestionDisplay>

          <AnswerInput
            ref={inputRef}
            value={userAnswer}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="답"
            hasError={feedback === 'wrong'}
            autoComplete="off"
          />

          <TimerContainer>
            <TimerLabel>문제 제한시간</TimerLabel>
            <TimerBar>
              <TimerFill timeLeft={questionTimeLeft} maxTime={DIFFICULTIES[difficulty].timeLimit} />
            </TimerBar>
          </TimerContainer>
        </GameArea>
      )}

      <ComboDisplay show={showCombo} combo={stats.streak} />

      <GameOverlay show={gameState === 'setup'}>
        <OverlayContent>
          <div className="overlay-title">🧮 수학 퀴즈</div>
          <div className="overlay-text">
            60초 동안 수학 문제를 최대한 많이 풀어보세요!
            <br />
            연속으로 맞출수록 더 높은 점수를 얻습니다.
            <br />
            각 문제는 제한 시간이 있습니다.
            <br />
            <br />
            <strong>난이도를 선택하세요:</strong>
          </div>

          <DifficultySelector>
            {Object.entries(DIFFICULTIES).map(([key, diff]) => (
              <DifficultyCard
                key={key}
                selected={difficulty === key}
                onClick={() => setDifficulty(key as 'easy' | 'medium' | 'hard' | 'expert')}
              >
                <div className="difficulty-header">
                  {diff.emoji} {diff.name}
                </div>
                <div className="difficulty-desc">
                  {diff.description} ({diff.timeLimit}초)
                </div>
              </DifficultyCard>
            ))}
          </DifficultySelector>

          <ActionButton onClick={startGame}>
            <Calculator size={20} />
            게임 시작
          </ActionButton>
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
              <span className="score-value">{stats.score}점</span>
            </ScoreItem>
            <ScoreItem delay={2}>
              <span className="score-label">🎖️ 정확도 보너스</span>
              <span className="score-value">
                +
                {Math.round(
                  stats.questionsAnswered > 0 ? (stats.correct / stats.questionsAnswered) * 1000 : 0
                )}
                점
              </span>
            </ScoreItem>
            <ScoreItem delay={3}>
              <span className="score-label">🔥 연속 보너스</span>
              <span className="score-value">+{stats.maxStreak * 50}점</span>
            </ScoreItem>
            <ScoreItem delay={4}>
              <span className="score-label">⚡ 속도 보너스</span>
              <span className="score-value">
                +{Math.round(stats.avgTime > 0 ? Math.max(0, (5000 - stats.avgTime) / 10) : 0)}점
              </span>
            </ScoreItem>
            <ScoreItem delay={5}>
              <span className="score-label">🔢 난이도 배수</span>
              <span className="score-value">x{DIFFICULTIES[difficulty].multiplier}</span>
            </ScoreItem>
            <ScoreItem delay={6}>
              <span className="score-label">💎 총 점수</span>
              <span className="score-value" style={{ color: currentTier.color }}>
                {Math.round(
                  (stats.score +
                    (stats.questionsAnswered > 0
                      ? (stats.correct / stats.questionsAnswered) * 1000
                      : 0) +
                    stats.maxStreak * 50 +
                    (stats.avgTime > 0 ? Math.max(0, (5000 - stats.avgTime) / 10) : 0)) *
                    DIFFICULTIES[difficulty].multiplier
                )}
                점
              </span>
            </ScoreItem>
          </ScoreBreakdown>

          <StatGrid>
            <StatCard delay={7}>
              <div className="stat-title">정답률</div>
              <div className="stat-number">{accuracy}%</div>
            </StatCard>
            <StatCard delay={8}>
              <div className="stat-title">평균 응답시간</div>
              <div className="stat-number">{stats.avgTime}ms</div>
            </StatCard>
            <StatCard delay={9}>
              <div className="stat-title">최고 연속</div>
              <div className="stat-number">{stats.maxStreak}개</div>
            </StatCard>
            <StatCard delay={10}>
              <div className="stat-title">총 문제 수</div>
              <div className="stat-number">{stats.questionsAnswered}개</div>
            </StatCard>
          </StatGrid>

          <PerformanceMessage delay={11}>
            {difficulty === 'expert' && stats.score >= 300
              ? '🧠 수학 천재! 전문가 난이도를 정복했군요!'
              : stats.score >= 400 && accuracy >= 90
                ? '🏆 완벽한 계산 마스터! 정확도와 속도 모두 최고예요!'
                : stats.score >= 300 && stats.maxStreak >= 10
                  ? '⚡ 연속 정답의 달인! 집중력이 대단해요!'
                  : stats.score >= 200 && stats.avgTime <= 2000
                    ? '💨 빠른 계산 고수! 순발력이 뛰어나네요!'
                    : stats.score >= 100
                      ? '👍 좋은 실력! 꾸준히 발전하고 있어요!'
                      : '💪 수학 연습을 통해 더 발전해보세요!'}
          </PerformanceMessage>

          <div style={{ marginTop: '2rem' }}>
            <ActionButton onClick={restartGame}>
              <Brain size={20} />
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

export default MathQuiz;
