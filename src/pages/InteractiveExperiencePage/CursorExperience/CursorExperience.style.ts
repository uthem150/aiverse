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

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(236, 72, 153, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(236, 72, 153, 0.6);
  }
`;

export const CursorContainer = styled.div`
  flex: 1;
  background: linear-gradient(
    135deg,
    #0f0f23 0%,
    #1a0a3a 25%,
    #2d1b4e 50%,
    #1a0a3a 75%,
    #0f0f23 100%
  );
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
      radial-gradient(circle at 25% 25%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const BackButton = styled.button`
  position: fixed;
  top: 6rem;
  left: 2rem;
  background: rgba(236, 72, 153, 0.1);
  border: 2px solid rgba(236, 72, 153, 0.3);
  border-radius: 12px;
  padding: 0.8rem 1.2rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 100;

  &:hover {
    background: rgba(236, 72, 153, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(236, 72, 153, 0.4);
  }

  @media (max-width: 768px) {
    top: 5.5rem;
    left: 0.5rem;
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-top: 6rem;
  padding-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    padding-top: 5rem;
    padding-bottom: 1rem;
  }
`;

export const ExperienceArea = styled.div`
  width: 100%;
  max-width: 800px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  position: relative;

  &:hover {
    border-color: rgba(236, 72, 153, 0.5);
    background: rgba(236, 72, 153, 0.05);
  }

  @media (max-width: 768px) {
    height: 300px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

export const GuideText = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  line-height: 1.6;

  .highlight {
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(45deg, #ec4899, #a855f7);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
    display: block;
  }

  @media (max-width: 768px) {
    font-size: 1rem;

    .highlight {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;

    .highlight {
      font-size: 1.4rem;
    }
  }
`;

export const ControlBar = styled.div<{ expanded: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(15, 15, 35, 0.98);
  backdrop-filter: blur(20px);
  border-top: 2px solid rgba(236, 72, 153, 0.3);
  z-index: 50;
  transform: translateY(${props => (props.expanded ? '0' : 'calc(100% - 70px)')});
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: ${props => (props.expanded ? '0' : '20px 20px 0 0')};
  will-change: transform;

  @media (max-width: 768px) {
    transform: translateY(${props => (props.expanded ? '0' : 'calc(100% - 60px)')});
    border-radius: ${props => (props.expanded ? '0' : '16px 16px 0 0')};
  }
`;

export const ControlHeader = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  min-height: 70px;

  &:hover {
    background: rgba(236, 72, 153, 0.05);
  }

  .current-effect {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: white;
  }

  .current-icon {
    font-size: 1.5rem;
  }

  .current-name {
    font-weight: 600;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    min-height: 60px;

    .current-icon {
      font-size: 1.3rem;
    }

    .current-name {
      font-size: 0.9rem;
    }
  }
`;

export const ExpandButton = styled.div`
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
  transform: scale(1);

  &:hover {
    color: rgba(236, 72, 153, 0.8);
    transform: scale(1.1);
  }
`;

export const ControlContent = styled.div<{ expanded: boolean }>`
  height: ${props => (props.expanded ? 'auto' : '0')};
  opacity: ${props => (props.expanded ? '1' : '0')};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: ${props => (props.expanded ? '0 2rem 1.5rem 2rem' : '0 2rem')};
  max-height: ${props => (props.expanded ? '60vh' : '0')};

  @media (max-width: 768px) {
    padding: ${props => (props.expanded ? '0 1.5rem 1rem 1.5rem' : '0 1.5rem')};
    max-height: ${props => (props.expanded ? '50vh' : '0')};
  }
`;

export const ControlTitle = styled.h3`
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin: 1rem 0;
  text-align: center;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin: 0.8rem 0;
  }
`;

export const ScrollContainer = styled.div`
  max-height: 40vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 8px;
  margin-right: -8px;

  /* 커스텀 스크롤바 */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(236, 72, 153, 0.5);
    border-radius: 3px;
    transition: background 0.3s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(236, 72, 153, 0.7);
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: rgba(236, 72, 153, 0.5) rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    max-height: 35vh;
  }
`;

export const CursorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`;

export const CursorCard = styled.div<{ active: boolean }>`
  background: ${props =>
    props.active
      ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(168, 85, 247, 0.2))'
      : 'rgba(255, 255, 255, 0.05)'};
  border: 2px solid
    ${props => (props.active ? 'rgba(236, 72, 153, 0.5)' : 'rgba(255, 255, 255, 0.1)')};
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  animation: ${props => (props.active ? pulseGlow : 'none')} 2s infinite;

  &:hover {
    background: linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(168, 85, 247, 0.15));
    border-color: rgba(236, 72, 153, 0.4);
    transform: translateY(-2px);
  }

  .cursor-icon {
    font-size: 1.8rem;
    flex-shrink: 0;
  }

  .cursor-content {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    flex: 1;
  }

  .cursor-name {
    color: white;
    font-weight: 600;
    font-size: 0.95rem;
  }

  .cursor-description {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.8rem;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    padding: 0.8rem;

    .cursor-icon {
      font-size: 1.5rem;
    }

    .cursor-name {
      font-size: 0.9rem;
    }

    .cursor-description {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;

    .cursor-icon {
      font-size: 2rem;
    }
  }
`;
