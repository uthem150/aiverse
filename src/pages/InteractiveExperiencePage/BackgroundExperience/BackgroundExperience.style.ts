import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

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
  flex: 1;
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
  opacity: ${props => (props.show ? 1 : 0)};
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
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

export const ControlBar = styled.div<{ expanded: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  border-top: 2px solid rgba(255, 255, 255, 0.2);
  z-index: 50;
  transition: all 0.3s ease;
  border-radius: ${props => (props.expanded ? '0' : '16px 16px 0 0')};

  @media (max-width: 768px) {
    border-radius: ${props => (props.expanded ? '0' : '12px 12px 0 0')};
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

  &:hover {
    background: rgba(255, 255, 255, 0.05);
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

  &:hover {
    color: rgba(255, 255, 255, 0.9);
    transform: scale(1.1);
  }
`;

export const ControlContent = styled.div<{ expanded: boolean }>`
  max-height: ${props => (props.expanded ? '300px' : '0')};
  opacity: ${props => (props.expanded ? '1' : '0')};
  overflow: hidden;
  transition: all 0.4s ease;
  padding: ${props => (props.expanded ? '1.5rem 2rem' : '0 2rem')};

  @media (max-width: 768px) {
    padding: ${props => (props.expanded ? '1rem 1.5rem' : '0 1.5rem')};
    max-height: ${props => (props.expanded ? '400px' : '0')};
  }
`;

export const ControlTitle = styled.h3`
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  text-align: center;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const BackgroundGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.8rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.6rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }
`;

export const BackgroundCard = styled.div<{ active: boolean; color: string }>`
  background: ${props =>
    props.active
      ? `linear-gradient(135deg, ${props.color}40, ${props.color}20)`
      : 'rgba(255, 255, 255, 0.05)'};
  border: 2px solid ${props => (props.active ? `${props.color}80` : 'rgba(255, 255, 255, 0.1)')};
  border-radius: 12px;
  padding: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  animation: ${props => (props.active ? pulseGlow : 'none')} 2s infinite;

  &:hover {
    background: linear-gradient(135deg, ${props => props.color}30, ${props => props.color}15);
    border-color: ${props => props.color}60;
    transform: translateY(-2px);
  }

  .bg-icon {
    font-size: 1.4rem;
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
    font-size: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .bg-description {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.65rem;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 768px) {
    padding: 0.6rem;
    gap: 0.5rem;

    .bg-icon {
      font-size: 1.2rem;
    }

    .bg-name {
      font-size: 0.75rem;
    }

    .bg-description {
      font-size: 0.6rem;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 0.3rem;
    padding: 0.5rem;

    .bg-icon {
      font-size: 1.5rem;
    }

    .bg-content {
      align-items: center;
    }

    .bg-name,
    .bg-description {
      white-space: normal;
      overflow: visible;
      text-overflow: unset;
    }

    .bg-name {
      font-size: 0.7rem;
    }

    .bg-description {
      font-size: 0.55rem;
    }
  }
`;
