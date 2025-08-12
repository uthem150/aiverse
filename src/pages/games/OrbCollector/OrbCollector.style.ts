import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const orbFloat = keyframes`
  0%, 100% {
    transform: translateY(0px) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-10px) scale(1.1);
    opacity: 1;
  }
`;

const orbCollect = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.8;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

const comboGlow = keyframes`
  0%, 100% {
    text-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
  }
  50% {
    text-shadow: 0 0 20px rgba(139, 92, 246, 1);
  }
`;

export const GameContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 25%, #1e1b4b 50%, #312e81 75%, #1e1b4b 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  user-select: none;
  cursor: crosshair;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(30, 27, 75, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 2px solid rgba(139, 92, 246, 0.3);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const BackButton = styled.button`
  background: rgba(139, 92, 246, 0.1);
  border: 2px solid rgba(139, 92, 246, 0.3);
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
    background: rgba(139, 92, 246, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(45deg, #8b5cf6, #a855f7);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
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
`;

export const Stat = styled.div`
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
    color: #8b5cf6;
  }
  
  @media (max-width: 768px) {
    .stat-label {
      font-size: 0.7rem;
    }
    
    .stat-value {
      font-size: 1rem;
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
`;

export const Orb = styled.div<{ 
  x: number; 
  y: number; 
  size: number; 
  color: string; 
  collecting?: boolean;
}>`
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: radial-gradient(circle at 30% 30%, ${props => props.color}ff, ${props => props.color}cc, ${props => props.color}88);
  border-radius: 50%;
  animation: ${props => props.collecting ? orbCollect : orbFloat} ${props => props.collecting ? '0.3s' : '3s'} ease-in-out ${props => props.collecting ? 'forwards' : 'infinite'};
  box-shadow: 0 0 20px ${props => props.color}88;
  border: 2px solid ${props => props.color}cc;
  z-index: 10;
  pointer-events: none;
  
  &:before {
    content: '';
    position: absolute;
    top: 15%;
    left: 25%;
    width: 25%;
    height: 25%;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    filter: blur(2px);
  }
`;

export const CollectEffect = styled.div<{ x: number; y: number }>`
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%);
  border-radius: 50%;
  animation: ${orbCollect} 0.5s ease-out forwards;
  pointer-events: none;
  z-index: 20;
`;

export const ComboDisplay = styled.div<{ show: boolean; combo: number }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${props => Math.min(4 + props.combo * 0.2, 8)}rem;
  font-weight: 700;
  color: #8b5cf6;
  animation: ${comboGlow} 0.5s ease-in-out;
  z-index: 500;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.3s ease;
  pointer-events: none;
  
  &:before {
    content: 'COMBO x${props => props.combo}';
  }
  
  @media (max-width: 768px) {
    font-size: ${props => Math.min(2 + props.combo * 0.1, 4)}rem;
  }
`;

export const GameOverlay = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: ${props => props.show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const OverlayContent = styled.div`
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1));
  backdrop-filter: blur(20px);
  border: 2px solid rgba(139, 92, 246, 0.3);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  max-width: 500px;
  width: 90%;
  
  .overlay-title {
    font-size: 2rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
  }
  
  .overlay-text {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2rem;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    
    .overlay-title {
      font-size: 1.6rem;
    }
    
    .overlay-text {
      font-size: 1rem;
    }
  }
`;

export const ActionButton = styled.button`
  background: linear-gradient(135deg, #8b5cf6, #a855f7);
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(139, 92, 246, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    margin: 0.3rem;
  }
`;

export const Countdown = styled.div<{ show: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  font-weight: 700;
  color: #8b5cf6;
  text-shadow: 0 0 20px rgba(139, 92, 246, 0.8);
  z-index: 500;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.3s ease;
  pointer-events: none;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const ProgressBar = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
  z-index: 100;
  
  @media (max-width: 768px) {
    width: 250px;
    bottom: 1rem;
  }
`;

export const ProgressFill = styled.div<{ progress: number }>`
  width: ${props => props.progress}%;
  height: 100%;
  background: linear-gradient(90deg, #8b5cf6, #a855f7);
  transition: width 0.1s linear;
  border-radius: 4px;
`;

export const CollectionRadius = styled.div<{ x: number; y: number; show: boolean }>`
  position: absolute;
  left: ${props => props.x - 75}px;
  top: ${props => props.y - 75}px;
  width: 150px;
  height: 150px;
  border: 2px solid rgba(139, 92, 246, 0.3);
  border-radius: 50%;
  pointer-events: none;
  z-index: 5;
  opacity: ${props => props.show ? 0.5 : 0};
  transition: opacity 0.3s ease;
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background: #8b5cf6;
    border-radius: 50%;
  }
`;
