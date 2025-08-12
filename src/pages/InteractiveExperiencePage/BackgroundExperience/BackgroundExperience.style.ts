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

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.4);
  }
`;

export const BackgroundContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const BackgroundCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const OverlayHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
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

export const InfoToggle = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }
`;

export const InfoPanel = styled.div<{ show: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  z-index: 60;
  opacity: ${props => props.show ? 1 : 0};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  max-width: 400px;
  width: 90%;
  
  .info-content {
    text-align: center;
    color: white;
  }

  .info-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .info-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .info-description {
    font-size: 1rem;
    opacity: 0.8;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  .info-tip {
    font-size: 0.85rem;
    opacity: 0.6;
    font-style: italic;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const ControlBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  border-top: 2px solid rgba(255, 255, 255, 0.2);
  padding: 1.5rem 2rem;
  z-index: 50;
  animation: ${slideUp} 0.8s ease-out;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ControlTitle = styled.h3`
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  text-align: center;
  opacity: 0.9;
`;

export const BackgroundGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 0.6rem;
  }
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BackgroundCard = styled.div<{ active: boolean; color: string }>`
  background: ${props => props.active 
    ? `linear-gradient(135deg, ${props.color}40, ${props.color}20)`
    : 'rgba(255, 255, 255, 0.05)'
  };
  border: 2px solid ${props => props.active 
    ? `${props.color}80` 
    : 'rgba(255, 255, 255, 0.1)'
  };
  border-radius: 12px;
  padding: 0.8rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  min-width: 140px;
  animation: ${props => props.active ? pulseGlow : 'none'} 2s infinite;
  
  &:hover {
    background: linear-gradient(135deg, ${props => props.color}30, ${props => props.color}15);
    border-color: ${props => props.color}60;
    transform: translateY(-2px);
  }

  .bg-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  .bg-content {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    flex: 1;
    min-width: 0;
  }

  .bg-name {
    color: white;
    font-weight: 600;
    font-size: 0.85rem;
    white-space: nowrap;
  }

  .bg-description {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.7rem;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  @media (max-width: 768px) {
    min-width: 120px;
    padding: 0.6rem 0.8rem;
    
    .bg-icon {
      font-size: 1.3rem;
    }
    
    .bg-name {
      font-size: 0.8rem;
    }
    
    .bg-description {
      font-size: 0.65rem;
    }
  }
  
  @media (max-width: 600px) {
    min-width: 280px;
    
    .bg-description {
      white-space: normal;
      overflow: visible;
      text-overflow: unset;
    }
  }
`;
