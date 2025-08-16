import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Pause, Volume2 } from 'lucide-react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const buttonPress = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.95); }
  100% { transform: scale(1); }
`;

const buttonGlow = keyframes`
  0% { filter: brightness(1); box-shadow: 0 0 20px rgba(255, 255, 255, 0.3); }
  50% { filter: brightness(1.5); box-shadow: 0 0 40px rgba(255, 255, 255, 0.8); }
  100% { filter: brightness(1); box-shadow: 0 0 20px rgba(255, 255, 255, 0.3); }
`;

const levelUp = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const GameContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  display: flex;
  flex-direction: column;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
`;

const BackButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const StatsPanel = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
    justify-content: center;
  }
`;

const Stat = styled.div<{ highlight?: boolean }>`
  text-align: center;
  color: white;
  transition: all 0.3s ease;
  
  ${props => props.highlight && `
    animation: ${levelUp} 0.5s ease;
  `}

  .label {
    font-size: 0.8rem;
    opacity: 0.8;
    margin-bottom: 0.2rem;
  }

  .value {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${props => props.highlight ? '#10b981' : 'white'};
  }

  @media (max-width: 768px) {
    .label { font-size: 0.7rem; }
    .value { font-size: 1rem; }
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

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 2rem;
  }
`;

const GameBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    gap: 15px;
    padding: 15px;
  }
`;

const ColorButton = styled.button<{ 
  color: string;
  isActive: boolean;
  isDisabled: boolean;
}>`
  width: 120px;
  height: 120px;
  border: none;
  border-radius: 20px;
  background: ${props => props.color};
  cursor: ${props => props.isDisabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  opacity: ${props => props.isDisabled ? 0.5 : 1};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  
  ${props => props.isActive && `
    animation: ${buttonGlow} 0.5s ease;
    filter: brightness(1.5);
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.8);
  `}

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
  }

  &:active:not(:disabled) {
    animation: ${buttonPress} 0.1s ease;
  }

  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;

const CenterDisplay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1rem;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-align: center;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 0.7rem;
    padding: 0.5rem;
  }
`;

const StatusDisplay = styled.div`
  text-align: center;
  color: white;
  font-size: 1.2rem;
  margin-bottom: 2rem;

  .main-text {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .sub-text {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    
    .main-text {
      font-size: 1.2rem;
    }
  }
`;

const ControlPanel = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const ControlButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  background: ${props => props.variant === 'primary' 
    ? 'linear-gradient(135deg, #10b981, #059669)' 
    : 'rgba(255, 255, 255, 0.2)'};
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const GameOverlay = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: ${props => (props.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const OverlayContent = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  color: white;
  max-width: 500px;
  width: 90%;

  .title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .description {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    .title { font-size: 1.6rem; }
    .description { font-size: 1rem; }
  }
`;

const ActionButton = styled.button`
  background: linear-gradient(135deg, #1f2937, #111827);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  padding: 1rem 2rem;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    border-color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

type GameState = 'waiting' | 'showing' | 'inputting' | 'correct' | 'wrong' | 'finished';
type Color = 'red' | 'green' | 'blue' | 'yellow';

const COLORS = {
  red: '#ef4444',
  green: '#10b981',
  blue: '#3b82f6',
  yellow: '#f59e0b',
};

const FREQUENCIES = {
  red: 220,
  green: 277,
  blue: 330,
  yellow: 415,
};

interface GameStats {
  level: number;
  score: number;
  bestLevel: number;
  mistakes: number;
}

const SimonSays: React.FC = () => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState<GameState>('waiting');
  const [sequence, setSequence] = useState<Color[]>([]);
  const [playerSequence, setPlayerSequence] = useState<Color[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [activeButton, setActiveButton] = useState<Color | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [stats, setStats] = useState<GameStats>({
    level: 1,
    score: 0,
    bestLevel: parseInt(localStorage.getItem('simon-best-level') || '1'),
    mistakes: 0,
  });

  const audioContextRef = useRef<AudioContext | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Web Audio API를 사용한 소리 생성
  const playSound = useCallback((frequency: number, duration: number = 500) => {
    if (!soundEnabled) return;

    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }

      const oscillator = audioContextRef.current.createOscillator();
      const gainNode = audioContextRef.current.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContextRef.current.destination);

      oscillator.frequency.setValueAtTime(frequency, audioContextRef.current.currentTime);
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0, audioContextRef.current.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.3, audioContextRef.current.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + duration / 1000);

      oscillator.start(audioContextRef.current.currentTime);
      oscillator.stop(audioContextRef.current.currentTime + duration / 1000);
    } catch (error) {
      console.warn('오디오 재생에 실패했습니다:', error);
    }
  }, [soundEnabled]);

  const generateNewColor = useCallback((): Color => {
    const colors: Color[] = ['red', 'green', 'blue', 'yellow'];
    return colors[Math.floor(Math.random() * colors.length)];
  }, []);

  const showSequence = useCallback(async () => {
    setGameState('showing');
    setPlayerSequence([]);
    
    for (let i = 0; i < sequence.length; i++) {
      await new Promise(resolve => {
        timeoutRef.current = setTimeout(() => {
          setActiveButton(sequence[i]);
          playSound(FREQUENCIES[sequence[i]]);
          
          timeoutRef.current = setTimeout(() => {
            setActiveButton(null);
            resolve(void 0);
          }, 600);
        }, 200);
      });
    }
    
    setGameState('inputting');
  }, [sequence, playSound]);

  const startNewLevel = useCallback(() => {
    const newSequence = [...sequence, generateNewColor()];
    setSequence(newSequence);
    setCurrentStep(0);
    
    setTimeout(() => {
      showSequence();
    }, 1000);
  }, [sequence, generateNewColor, showSequence]);

  const handleColorClick = useCallback((color: Color) => {
    if (gameState !== 'inputting') return;

    playSound(FREQUENCIES[color], 300);
    setActiveButton(color);
    setTimeout(() => setActiveButton(null), 200);

    const newPlayerSequence = [...playerSequence, color];
    setPlayerSequence(newPlayerSequence);

    // 현재 단계 검증
    if (color === sequence[currentStep]) {
      // 정답
      if (currentStep === sequence.length - 1) {
        // 레벨 완료
        setGameState('correct');
        setStats(prev => ({
          ...prev,
          level: prev.level + 1,
          score: prev.score + (sequence.length * 10),
        }));
        
        setTimeout(() => {
          startNewLevel();
        }, 1500);
      } else {
        // 다음 단계로
        setCurrentStep(currentStep + 1);
      }
    } else {
      // 틀림
      setGameState('wrong');
      setStats(prev => ({
        ...prev,
        mistakes: prev.mistakes + 1,
      }));
      
      setTimeout(() => {
        setGameState('finished');
      }, 1500);
    }
  }, [gameState, playerSequence, sequence, currentStep, playSound, startNewLevel]);

  const startGame = () => {
    setSequence([generateNewColor()]);
    setPlayerSequence([]);
    setCurrentStep(0);
    setStats(prev => ({
      level: 1,
      score: 0,
      bestLevel: prev.bestLevel,
      mistakes: 0,
    }));
    
    setTimeout(() => {
      showSequence();
    }, 1000);
  };

  const restartGame = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setGameState('waiting');
    setSequence([]);
    setPlayerSequence([]);
    setCurrentStep(0);
    setActiveButton(null);
  };

  useEffect(() => {
    if (sequence.length === 1 && gameState === 'waiting') {
      showSequence();
    }
  }, [sequence, gameState, showSequence]);

  useEffect(() => {
    if (gameState === 'finished') {
      if (stats.level > stats.bestLevel) {
        const newBestLevel = stats.level;
        setStats(prev => ({ ...prev, bestLevel: newBestLevel }));
        localStorage.setItem('simon-best-level', (newBestLevel).toString());
      }
    }
  }, [gameState, stats.level, stats.bestLevel]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleBackClick = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    navigate(-1);
  };

  const getStatusMessage = () => {
    switch (gameState) {
      case 'waiting':
        return { main: '게임 시작', sub: '시작 버튼을 눌러주세요' };
      case 'showing':
        return { main: '패턴 기억', sub: '순서를 잘 기억하세요' };
      case 'inputting':
        return { main: '입력하세요', sub: `${currentStep + 1}/${sequence.length}` };
      case 'correct':
        return { main: '정답!', sub: '다음 레벨로...' };
      case 'wrong':
        return { main: '틀렸습니다!', sub: '게임 종료' };
      case 'finished':
        return { main: '게임 종료', sub: `레벨 ${stats.level} 달성` };
      default:
        return { main: '', sub: '' };
    }
  };

  const message = getStatusMessage();
  const isButtonDisabled = gameState !== 'inputting';

  return (
    <GameContainer>
      <Header>
        <BackButton onClick={handleBackClick}>
          <ArrowLeft size={16} />
          게임 목록
        </BackButton>
        <Title>🎵 사이먼 게임</Title>
        <StatsPanel>
          <Stat highlight={gameState === 'correct'}>
            <div className="label">레벨</div>
            <div className="value">{stats.level}</div>
          </Stat>
          <Stat>
            <div className="label">점수</div>
            <div className="value">{stats.score}</div>
          </Stat>
          <Stat>
            <div className="label">최고레벨</div>
            <div className="value">{stats.bestLevel}</div>
          </Stat>
          <Stat>
            <div className="label">실수</div>
            <div className="value">{stats.mistakes}</div>
          </Stat>
        </StatsPanel>
      </Header>

      {(gameState !== 'waiting' && gameState !== 'finished') && (
        <GameArea>
          <StatusDisplay>
            <div className="main-text">{message.main}</div>
            <div className="sub-text">{message.sub}</div>
          </StatusDisplay>

          <div style={{ position: 'relative' }}>
            <GameBoard>
              {Object.entries(COLORS).map(([color, colorValue]) => (
                <ColorButton
                  key={color}
                  color={colorValue}
                  isActive={activeButton === color}
                  isDisabled={isButtonDisabled}
                  onClick={() => handleColorClick(color as Color)}
                />
              ))}
            </GameBoard>
            
            <CenterDisplay>
              <div>레벨</div>
              <div>{stats.level}</div>
            </CenterDisplay>
          </div>

          <ControlPanel>
            <ControlButton onClick={restartGame}>
              <Pause size={16} />
              다시 시작
            </ControlButton>
            <ControlButton 
              onClick={() => setSoundEnabled(!soundEnabled)}
              variant={soundEnabled ? 'primary' : 'secondary'}
            >
              <Volume2 size={16} />
              소리 {soundEnabled ? 'ON' : 'OFF'}
            </ControlButton>
          </ControlPanel>
        </GameArea>
      )}

      <GameOverlay show={gameState === 'waiting'}>
        <OverlayContent>
          <div className="title">🎵 사이먼 게임</div>
          <div className="description">
            컴퓨터가 보여주는 색깔 패턴을 기억하고 똑같이 따라하세요!
            <br />
            레벨이 올라갈수록 패턴이 길어집니다.
            <br />
            <br />
            <strong>게임 방법:</strong>
            <br />
            1. 컴퓨터가 색깔 순서를 보여줍니다
            <br />
            2. 같은 순서로 색깔 버튼을 클릭하세요
            <br />
            3. 틀리면 게임이 끝납니다
            <br />
            <br />
            최고 레벨: {stats.bestLevel}
          </div>
          <ActionButton onClick={startGame}>
            <Play size={16} style={{ marginRight: '0.5rem' }} />
            게임 시작
          </ActionButton>
          <ActionButton onClick={handleBackClick}>뒤로 가기</ActionButton>
        </OverlayContent>
      </GameOverlay>

      <GameOverlay show={gameState === 'finished'}>
        <OverlayContent>
          <div className="title">🏁 게임 종료</div>
          <div className="description">
            <strong>달성 레벨: {stats.level}</strong>
            <br />
            최종 점수: {stats.score}점
            <br />
            실수 횟수: {stats.mistakes}번
            <br />
            최고 기록: 레벨 {stats.bestLevel}
            <br />
            <br />
            {stats.level > stats.bestLevel
              ? '🎉 새로운 최고 기록!'
              : stats.level >= 10
                ? '🧠 뛰어난 기억력!'
                : stats.level >= 5
                  ? '👍 좋은 실력!'
                  : '💪 더 연습해보세요!'}
          </div>
          <ActionButton onClick={restartGame}>다시 하기</ActionButton>
          <ActionButton onClick={handleBackClick}>게임 목록</ActionButton>
        </OverlayContent>
      </GameOverlay>
    </GameContainer>
  );
};

export default SimonSays;