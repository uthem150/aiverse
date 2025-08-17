import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

/* ===================== FX KEYFRAMES ===================== */

/* Target lifecycle */
const targetAppear = keyframes`
  0%   { transform: scale(0) rotate(0deg);   opacity: 0;   filter: blur(6px); }
  50%  { transform: scale(1.2) rotate(180deg); opacity: .9; filter: blur(1px); }
  100% { transform: scale(1) rotate(360deg); opacity: 1;   filter: blur(0); }
`;

const targetPulse = keyframes`
  0%, 100% { transform: scale(1);   box-shadow: 0 0 20px rgba(239,68,68,.5); }
  50%      { transform: scale(1.1); box-shadow: 0 0 34px rgba(239,68,68,.85); }
`;

/* Rotating scan sweep overlay */
const scanSweep = keyframes`
  0%   { transform: translate(-50%, -50%) rotate(0deg) scale(1);   opacity: .35; }
  60%  { transform: translate(-50%, -50%) rotate(180deg) scale(1.05); opacity: .5; }
  100% { transform: translate(-50%, -50%) rotate(360deg) scale(1);  opacity: .35; }
`;

/* Ring ripple used on hit and hover */
const ringRipple = keyframes`
  0%   { transform: translate(-50%, -50%) scale(.6); opacity: .9; }
  80%  { transform: translate(-50%, -50%) scale(1.6); opacity: .15; }
  100% { transform: translate(-50%, -50%) scale(1.8); opacity: 0; }
`;

/* Hit visuals */
const hitEffect = keyframes`
  0%   { transform: scale(1) rotate(0deg);   opacity: 1;   filter: brightness(1.2) saturate(1.2); }
  50%  { transform: scale(1.6) rotate(12deg); opacity: .7; filter: brightness(1.35) saturate(1.35); }
  100% { transform: scale(2.1) rotate(18deg); opacity: 0;   filter: brightness(.95) saturate(.95); }
`;

/* Floating score */
const scoreFloat = keyframes`
  0%   { transform: translateY(0) scale(1);   opacity: 1;   letter-spacing: 0px; }
  40%  { transform: translateY(-26px) scale(1.18); opacity: .95; letter-spacing: .5px; }
  100% { transform: translateY(-58px) scale(.9);  opacity: 0;   letter-spacing: 1px; }
`;

/* Result / tier cards */
const resultAppear = keyframes`
  0%   { transform: scale(.5) translateY(50px); opacity: 0; }
  50%  { transform: scale(1.05) translateY(-10px); opacity: .8; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
`;

const tierGlow = keyframes`
  0%,100% { box-shadow: 0 0 20px rgba(255,255,255,.28); }
  50%     { box-shadow: 0 0 40px rgba(255,255,255,.6); }
`;

const statsReveal = keyframes`
  0%   { transform: translateX(-30px); opacity: 0; }
  100% { transform: translateX(0);     opacity: 1; }
`;

const buttonHover = keyframes`
  0%,100% { transform: translateY(0); }
  50%     { transform: translateY(-3px); }
`;

/* Countdown pop */
const countPop = keyframes`
  0%   { transform: translate(-50%, -50%) scale(.6); opacity: 0; filter: blur(6px); }
  60%  { transform: translate(-50%, -50%) scale(1.1); opacity: 1; filter: blur(0); }
  100% { transform: translate(-50%, -50%) scale(1);   opacity: 1; }
`;

/* Background drift */
const bgDrift = keyframes`
  0%   { background-position: 0% 0%, 100% 100%; }
  50%  { background-position: 100% 0%, 0% 100%; }
  100% { background-position: 0% 0%, 100% 100%; }
`;

/* Progress sheen */
const sheenMove = keyframes`
  0%   { background-position: 0 0, 0 0; }
  100% { background-position: 200% 0, 0 0; }
`;

/* ===================== LAYOUT & UI ===================== */

export const GameContainer = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  user-select: none;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);

  /* Subtle moving lights */
  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(60rem 60rem at 10% 20%, rgba(239, 68, 68, 0.08), transparent 60%),
      radial-gradient(48rem 48rem at 90% 80%, rgba(249, 115, 22, 0.07), transparent 60%);
    animation: ${bgDrift} 18s ease-in-out infinite;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    &:after {
      animation: none;
    }
  }
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(15, 23, 42, 0.92);
  backdrop-filter: blur(20px);
  border-bottom: 2px solid rgba(239, 68, 68, 0.3);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 8px 26px rgba(0, 0, 0, 0.35);

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

export const BackButton = styled.button`
  background: rgba(239, 68, 68, 0.1);
  border: 2px solid rgba(239, 68, 68, 0.3);
  border-radius: 12px;
  padding: 0.8rem 1.2rem;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.28s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  will-change: transform, box-shadow, background;

  &:hover {
    background: rgba(239, 68, 68, 0.18);
    transform: translateY(-2px);
    box-shadow: 0 10px 26px rgba(239, 68, 68, 0.45);
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

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(45deg, #ef4444, #f97316);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 24px rgba(239, 68, 68, 0.25);

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const StatsPanel = styled.div`
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

export const Stat = styled.div`
  text-align: center;
  color: #fff;

  .stat-label {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.72);
    margin-bottom: 0.2rem;
  }
  .stat-value {
    font-size: 1.2rem;
    font-weight: 800;
    color: #ef4444;
    text-shadow: 0 0 12px rgba(239, 68, 68, 0.35);
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

export const GameArea = styled.div`
  flex: 1;
  position: relative;
  margin-top: 120px;
  padding: 2rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 140px;
  }
  @media (max-width: 480px) {
    padding: 0.75rem;
    margin-top: 120px;
  }
`;

/* ===================== TARGET & EFFECTS ===================== */

export const Target = styled.div<{ x: number; y: number; size: number }>`
  position: absolute;
  left: ${p => p.x}px;
  top: ${p => p.y}px;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  border-radius: 50%;
  cursor: crosshair;
  z-index: 10;

  /* Layered look: ring + core + subtle texture */
  background:
    radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 60%),
    radial-gradient(circle, #ef4444 0%, #dc2626 55%, #b91c1c 100%);
  border: 3px solid rgba(255, 255, 255, 0.85);
  box-shadow:
    0 0 20px rgba(239, 68, 68, 0.55),
    inset 0 0 18px rgba(0, 0, 0, 0.25);
  will-change: transform, box-shadow, filter;

  animation:
    ${targetAppear} 0.35s ease-out,
    ${targetPulse} 1.8s ease-in-out infinite;

  /* Rotating scan sweep */
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 120%;
    height: 120%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: conic-gradient(
      from 0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.18) 10%,
      rgba(255, 255, 255, 0) 28% 100%
    );
    mix-blend-mode: screen;
    animation: ${scanSweep} 2.2s linear infinite;
    pointer-events: none;
  }

  /* Core dot */
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 30%;
    background: #fff;
    border-radius: 50%;
    box-shadow:
      0 0 10px rgba(255, 255, 255, 0.9),
      0 0 18px rgba(239, 68, 68, 0.5);
  }

  /* Hover = minor magnet + temp ring ripple */
  &:hover {
    transform: scale(1.08);
    filter: saturate(1.08);
  }
  &:hover::before {
    animation-duration: 1.5s;
  }

  /* Additional ripple when hovered (using an extra absolute child via outline) */
  &:active {
    box-shadow:
      0 0 26px rgba(239, 68, 68, 0.85),
      inset 0 0 22px rgba(0, 0, 0, 0.35);
  }

  @media (max-width: 480px) {
    border-width: 2px;
  }
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    &::before {
      display: none;
    }
  }
`;

/* Expanding energy disk at hit point */
export const HitEffect = styled.div<{ x: number; y: number }>`
  position: absolute;
  left: ${p => p.x}px;
  top: ${p => p.y}px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 20;
  background:
    radial-gradient(
      closest-side,
      rgba(34, 197, 94, 1) 0%,
      rgba(34, 197, 94, 0.65) 50%,
      rgba(34, 197, 94, 0) 70%
    ),
    radial-gradient(farthest-side, rgba(16, 185, 129, 0.35), rgba(16, 185, 129, 0) 60%);
  box-shadow:
    0 0 24px rgba(34, 197, 94, 0.9),
    0 0 48px rgba(34, 197, 94, 0.35);
  animation: ${hitEffect} 0.52s ease-out forwards;
  will-change: transform, opacity, filter;

  /* Extra ring + spark burst */
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
  &::before {
    width: 140%;
    height: 140%;
    border: 3px solid rgba(34, 197, 94, 0.85);
    border-radius: 50%;
    animation: ${ringRipple} 0.6s ease-out forwards;
    filter: drop-shadow(0 0 10px rgba(34, 197, 94, 0.85));
  }
  &::after {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background:
      radial-gradient(circle at 18% 20%, rgba(255, 255, 255, 0.9) 0 8%, transparent 9%),
      radial-gradient(circle at 80% 35%, rgba(255, 255, 255, 0.85) 0 8%, transparent 9%),
      radial-gradient(circle at 40% 78%, rgba(255, 255, 255, 0.8) 0 7%, transparent 8%),
      radial-gradient(circle at 70% 65%, rgba(255, 255, 255, 0.9) 0 6%, transparent 7%);
    opacity: 0.9;
    animation: ${hitEffect} 0.42s ease-out forwards;
  }

  @media (max-width: 480px) {
    width: 44px;
    height: 44px;
  }
`;

/* Floating “+score” text */
export const ScoreFloat = styled.div<{ x: number; y: number; score: number }>`
  position: absolute;
  left: ${p => p.x}px;
  top: ${p => p.y}px;
  color: #22c55e;
  font-size: 1.55rem;
  font-weight: 800;
  pointer-events: none;
  z-index: 30;
  text-shadow:
    0 0 12px rgba(34, 197, 94, 0.85),
    0 0 22px rgba(34, 197, 94, 0.45);
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.35);
  animation: ${scoreFloat} 1s ease-out forwards;
  will-change: transform, opacity, letter-spacing;

  &:before {
    content: '+${p => p.score}';
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
  @media (prefers-reduced-motion: reduce) {
    animation-duration: 0.6s;
  }
`;

/* ===================== OVERLAYS & INFO ===================== */

export const GameOverlay = styled.div<{ show: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(15px);
  display: ${p => (p.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const OverlayContent = styled.div`
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(249, 115, 22, 0.1));
  backdrop-filter: blur(30px);
  border: 2px solid rgba(239, 68, 68, 0.4);
  border-radius: 20px; /* 더 작게 */
  padding: 1.2rem 1.5rem; /* PC 패딩 더 많이 줄임 */
  text-align: center;
  max-width: 550px; /* 최대 너비 줄임 */
  max-height: 90vh; /* 높이 여유 더 주기 */
  width: 100%;
  position: relative;
  overflow: hidden;
  animation: ${resultAppear} 0.8s ease-out;
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.5),
    0 0 100px rgba(239, 68, 68, 0.22);

  &:before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 20px;
    z-index: -1;
    animation: ${tierGlow} 3s ease-in-out infinite;
  }

  .overlay-title {
    font-size: 1.6rem; /* PC 타이틀 더 작게 */
    font-weight: 900;
    margin-bottom: 0.6rem; /* 마진 더 줄임 */
    background: linear-gradient(45deg, #fff, #f1f5f9);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.55);
  }
  .overlay-text {
    font-size: 0.9rem; /* PC 텍스트 더 작게 */
    color: rgba(255, 255, 255, 0.92);
    margin-bottom: 0.6rem; /* 마진 더 줄임 */
    line-height: 1.4; /* 라인 높이 더 줄임 */
  }

  @media (max-width: 768px) {
    padding: 1.8rem 1.3rem;
    margin: 1rem;
    border-radius: 20px;
    max-height: 85vh;
    .overlay-title {
      font-size: 1.8rem;
      margin-bottom: 1.2rem;
    }
    .overlay-text {
      font-size: 0.95rem;
      margin-bottom: 1rem;
    }
  }
  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    margin: 0.5rem;
    border-radius: 16px;
    max-height: 85vh;
    .overlay-title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    .overlay-text {
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
  }
`;

export const TierBadge = styled.div<{ color: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem; /* 간격 줄임 */
  background: linear-gradient(135deg, ${p => p.color}22, ${p => p.color}44);
  border: 2px solid ${p => p.color};
  border-radius: 12px; /* 더 작게 */
  padding: 0.4rem 0.8rem; /* PC 패딩 더 많이 줄임 */
  margin-bottom: 0.6rem; /* 마진 더 줄임 */
  font-size: 1.2rem; /* PC 폰트 더 작게 */
  font-weight: 800;
  color: ${p => p.color};
  text-shadow: 0 0 20px ${p => p.color}88;
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

export const ScoreBreakdown = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px; /* 더 작게 */
  padding: 0.8rem; /* PC 패딩 더 많이 줄임 */
  margin: 0.6rem 0; /* 마진 더 줄임 */
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

export const ScoreItem = styled.div<{ delay?: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0; /* PC 패딩 더 많이 줄임 */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${statsReveal} 0.6s ease-out ${p => (p.delay || 0) * 0.1}s both;

  &:last-child {
    border-bottom: none;
    font-size: 1rem; /* PC 폰트 더 작게 */
    font-weight: 800;
    color: #ef4444;
    margin-top: 0.3rem; /* 마진 더 줄임 */
    padding-top: 0.6rem; /* 패딩 더 줄임 */
    text-shadow: 0 0 16px rgba(239, 68, 68, 0.35);
  }

  .score-label {
    color: rgba(255, 255, 255, 0.82);
    font-size: 0.8rem; /* PC 폰트 더 작게 */
  }
  .score-value {
    color: #fff;
    font-weight: 700;
    font-size: 0.85rem; /* PC 폰트 더 작게 */
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

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem; /* PC 간격 더 줄임 */
  margin: 0.6rem 0; /* 마진 더 줄임 */

  @media (max-width: 768px) {
    gap: 0.8rem;
    margin: 1.2rem 0;
  }
  @media (max-width: 480px) {
    gap: 0.6rem;
    margin: 1rem 0;
  }
`;

export const StatCard = styled.div<{ delay?: number }>`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px; /* 더 작게 */
  padding: 0.6rem; /* PC 패딩 더 줄임 */
  text-align: center;
  animation: ${statsReveal} 0.6s ease-out ${p => (p.delay || 0) * 0.1}s both;

  .stat-title {
    font-size: 0.7rem; /* PC 폰트 더 작게 */
    color: rgba(255, 255, 255, 0.64);
    margin-bottom: 0.3rem; /* 마진 더 줄임 */
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .stat-number {
    font-size: 1rem; /* PC 폰트 더 작게 */
    font-weight: 800;
    color: #ef4444;
    text-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
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

export const PerformanceMessage = styled.div<{ delay?: number }>`
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1));
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 10px; /* 더 작게 */
  padding: 0.6rem 1rem; /* PC 패딩 더 줄임 */
  margin: 0.6rem 0; /* 마진 더 줄임 */
  color: #22c55e;
  font-weight: 700;
  font-size: 0.85rem; /* PC 폰트 더 작게 */
  text-shadow: 0 0 10px rgba(34, 197, 94, 0.3);
  animation: ${statsReveal} 0.6s ease-out ${p => (p.delay || 0) * 0.1}s both;

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

export const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  background: ${p =>
    p.variant === 'secondary'
      ? 'rgba(255,255,255,.1)'
      : 'linear-gradient(135deg, #ef4444, #dc2626)'};
  border: ${p => (p.variant === 'secondary' ? '2px solid rgba(255,255,255,.3)' : 'none')};
  border-radius: 12px; /* 더 작게 */
  padding: 0.6rem 1.2rem; /* PC 패딩 더 줄임 */
  color: #fff;
  font-size: 0.9rem; /* PC 폰트 더 작게 */
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0.3rem; /* 마진 더 줄임 */
  position: relative;
  overflow: hidden;
  will-change: transform, box-shadow, background;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.24);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition:
      width 0.6s,
      height 0.6s;
    pointer-events: none;
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(239, 68, 68, 0.42);
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
export const Countdown = styled.div<{ show: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  font-weight: 900;
  color: #ef4444;
  text-shadow: 0 0 20px rgba(239, 68, 68, 0.85);
  z-index: 500;
  opacity: ${p => (p.show ? 1 : 0)};
  transition: opacity 0.28s ease;
  pointer-events: none;
  animation: ${countPop} 300ms ease;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

/* ===================== PROGRESS ===================== */

export const ProgressBar = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
  z-index: 100;
  background: rgba(255, 255, 255, 0.18);
  box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    width: 250px;
    bottom: 1.5rem;
    height: 8px;
  }
  @media (max-width: 480px) {
    width: 200px;
    bottom: 1rem;
    height: 6px;
  }
`;

export const ProgressFill = styled.div<{ progress: number }>`
  width: ${p => p.progress}%;
  height: 100%;
  background:
    linear-gradient(90deg, #ef4444, #f97316),
    repeating-linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.18) 0 12px,
      rgba(255, 255, 255, 0) 12px 24px
    );
  background-size:
    auto,
    200% 100%;
  animation: ${sheenMove} 1.2s linear infinite;
  border-radius: 5px;
  will-change: background-position, width;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/* ===================== DIFFICULTY ===================== */

export const DifficultySelector = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0.75rem 0 1.25rem;
`;

export const DifficultyButton = styled.button<{ selected?: boolean }>`
  padding: 0.7rem 1.2rem;
  border-radius: 12px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  border: 2px solid ${p => (p.selected ? 'rgba(239,68,68,0.9)' : 'rgba(255,255,255,0.3)')};
  background: ${p =>
    p.selected ? 'linear-gradient(135deg, #ef4444, #dc2626)' : 'rgba(255,255,255,0.1)'};
  box-shadow: ${p => (p.selected ? '0 10px 26px rgba(239,68,68,.35)' : 'none')};
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 22px rgba(239, 68, 68, 0.25);
  }

  @media (max-width: 480px) {
    padding: 0.55rem 1rem;
    font-size: 0.9rem;
    border-radius: 10px;
  }
`;
