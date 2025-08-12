import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const cardHover = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-5px) scale(1.02);
  }
  100% {
    transform: translateY(0) scale(1);
  }
`;

const playButtonGlow = keyframes`
  0%, 100% {
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0 6px 20px rgba(255, 255, 255, 0.4);
  }
`;

export const GameContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 30%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const BackButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
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
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(45deg, #ef4444, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 2rem 2rem 2rem;
  position: relative;
  z-index: 10;
  animation: ${fadeIn} 1s ease-out;
  
  @media (max-width: 768px) {
    padding: 100px 1rem 2rem 1rem;
  }
`;

export const MainTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(45deg, #ef4444, #8b5cf6, #3b82f6);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 4s ease-in-out infinite;
  text-align: center;
  margin-bottom: 1rem;
  
  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const MainSubtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
`;

export const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const GameCard = styled.div<{ bgColor: string; delay: number }>`
  background: linear-gradient(135deg, ${props => props.bgColor}20, ${props => props.bgColor}10);
  backdrop-filter: blur(20px);
  border: 2px solid ${props => props.bgColor}40;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 1s ease-out ${props => props.delay}s both;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px ${props => props.bgColor}40;
    border-color: ${props => props.bgColor}60;
    animation: ${cardHover} 0.6s ease-in-out;
    
    &:before {
      left: 100%;
    }
    
    .game-icon {
      transform: scale(1.2) rotate(10deg);
    }
    
    .play-button {
      transform: translateY(-2px);
      animation: ${playButtonGlow} 1s ease-in-out infinite;
    }
  }

  .game-icon {
    font-size: 4rem;
    margin-bottom: 1.5rem;
    transition: all 0.4s ease;
    display: block;
    text-align: center;
  }

  .game-title {
    font-size: 2rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
    text-align: center;
  }

  .game-description {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .game-features {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    margin-bottom: 2rem;
    
    .feature-tag {
      background: rgba(255, 255, 255, 0.1);
      padding: 0.4rem 0.8rem;
      border-radius: 12px;
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.9);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
  }

  .play-button {
    background: linear-gradient(135deg, ${props => props.bgColor}, ${props => props.bgColor}dd);
    border: none;
    border-radius: 12px;
    padding: 1rem 2rem;
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    width: 100%;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
      transform: translateY(-2px);
    }
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    
    .game-icon {
      font-size: 3.5rem;
    }
    
    .game-title {
      font-size: 1.8rem;
    }
    
    .game-description {
      font-size: 1rem;
    }
  }
`;
