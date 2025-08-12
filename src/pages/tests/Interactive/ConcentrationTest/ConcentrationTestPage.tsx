import React, { useState, useEffect, useCallback } from 'react';
import {
  ConcentrationContainer,
  GameArea,
  Target,
  ScoreBoard,
  ScoreItem,
  StartButton,
  GameInstructions,
  Timer,
  CrosshairOverlay,
  ResultsContainer,
} from './ConcentrationTest.style';

// React-bits 컴포넌트 임포트
import TargetCursor from '@/components/reactBits/TargetCursor/TargetCursor';
import Particles from '@/components/reactBits/Particles/Particles';

interface TargetData {
  id: number;
  x: number;
  y: number;
  size: number;
  hit?: boolean;
}

interface GameStats {
  score: number;
  accuracy: number;
  reactionTime: number;
  totalClicks: number;
}

type ConcentrationType = 'laser' | 'eagle' | 'monk' | 'lightning' | 'zen';

const ConcentrationTestPage: React.FC = () => {
  const [gameState, setGameState] = useState<'ready' | 'playing' | 'finished'>('ready');
  const [targets, setTargets] = useState<TargetData[]>([]);
  const [stats, setStats] = useState<GameStats>({
    score: 0,
    accuracy: 0,
    reactionTime: 0,
    totalClicks: 0,
  });
  const [timeLeft, setTimeLeft] = useState(30);
  const [targetStartTime, setTargetStartTime] = useState(0);
  const [gameArea] = useState({ width: 800, height: 500 });
  const [concentrationType, setConcentrationType] = useState<ConcentrationType | null>(null);

  // 타겟 생성
  const createTarget = useCallback(() => {
    const size = Math.random() * 30 + 40; // 40-70px
    const x = Math.random() * (gameArea.width - size);
    const y = Math.random() * (gameArea.height - size);

    const newTarget: TargetData = {
      id: Date.now() + Math.random(),
      x,
      y,
      size,
    };

    setTargets(prev => [...prev, newTarget]);
    setTargetStartTime(Date.now());

    // 2-4초 후 타겟 자동 제거
    setTimeout(
      () => {
        setTargets(prev => prev.filter(t => t.id !== newTarget.id));
      },
      Math.random() * 2000 + 2000
    );
  }, [gameArea]);

  // 타겟 클릭 처리
  const handleTargetClick = (targetId: number) => {
    const reactionTime = Date.now() - targetStartTime;

    setTargets(prev => prev.map(t => (t.id === targetId ? { ...t, hit: true } : t)));

    // 히트 애니메이션 후 제거
    setTimeout(() => {
      setTargets(prev => prev.filter(t => t.id !== targetId));
    }, 300);

    setStats(prev => ({
      score: prev.score + 10,
      totalClicks: prev.totalClicks + 1,
      accuracy: ((prev.score + 10) / ((prev.totalClicks + 1) * 10)) * 100,
      reactionTime: (prev.reactionTime + reactionTime) / 2,
    }));
  };

  // 빈 공간 클릭 처리
  const handleMiss = () => {
    setStats(prev => ({
      ...prev,
      totalClicks: prev.totalClicks + 1,
      accuracy: (prev.score / ((prev.totalClicks + 1) * 10)) * 100,
    }));
  };

  // 게임 시작
  const startGame = () => {
    setGameState('playing');
    setTimeLeft(30);
    setStats({ score: 0, accuracy: 0, reactionTime: 0, totalClicks: 0 });
    setTargets([]);
    setConcentrationType(null);
  };

  // 게임 로직
  useEffect(() => {
    if (gameState === 'playing') {
      // 타이머
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setGameState('finished');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // 타겟 생성
      const targetInterval = setInterval(createTarget, 1500);

      return () => {
        clearInterval(timer);
        clearInterval(targetInterval);
      };
    }
  }, [gameState, createTarget]);

  // 집중력 유형 분석
  useEffect(() => {
    if (gameState === 'finished') {
      const { accuracy, reactionTime } = stats;

      if (accuracy >= 90 && reactionTime < 400) {
        setConcentrationType('laser');
      } else if (accuracy >= 80 && reactionTime < 500) {
        setConcentrationType('eagle');
      } else if (accuracy >= 70 && reactionTime < 600) {
        setConcentrationType('monk');
      } else if (accuracy < 70 && reactionTime < 400) {
        setConcentrationType('lightning');
      } else {
        setConcentrationType('zen');
      }
    }
  }, [gameState, stats]);

  const concentrationResults = {
    laser: {
      title: '🎯 레이저 집중형',
      description:
        '완벽한 정확도와 빠른 반응속도를 갖춘 당신! 극도로 집중력이 뛰어나며, 압박 상황에서도 침착함을 유지합니다. 정밀함이 요구되는 일에 최적화되어 있습니다.',
    },
    eagle: {
      title: '🦅 독수리 집중형',
      description:
        '높은 정확도와 안정적인 반응속도의 소유자! 목표를 정확히 포착하고 실행하는 능력이 뛰어납니다. 전략적 사고와 실행력을 겸비했습니다.',
    },
    monk: {
      title: '🧘 수도승 집중형',
      description:
        '꾸준하고 안정적인 집중력의 소유자! 서두르지 않지만 확실하게 목표를 달성합니다. 지속적인 집중력과 인내심이 당신의 강점입니다.',
    },
    lightning: {
      title: '⚡ 번개 집중형',
      description:
        '빠른 반응속도가 특징! 순발력과 즉석 대응능력이 뛰어나지만, 때로는 정확도보다 속도를 우선시합니다. 역동적인 환경에서 빛을 발합니다.',
    },
    zen: {
      title: '🌸 선(禪) 집중형',
      description:
        '마음의 평정을 유지하며 자신만의 페이스로 집중하는 타입! 결과보다는 과정을 중시하며, 스트레스 상황에서도 평온함을 유지합니다.',
    },
  };

  return (
    <>
      <ConcentrationContainer>
        <TargetCursor />
        <Particles count={50} color="#64748b" />

        {gameState === 'ready' && (
          <>
            <GameInstructions>
              <h1>🎯 집중력 테스트</h1>
              <p>
                나타나는 타겟을 최대한 빠르고 정확하게 클릭하세요!
                <br />
                30초 동안 당신의 집중력과 반응속도를 측정합니다.
              </p>
            </GameInstructions>

            <ScoreBoard>
              <ScoreItem>
                <h3>🎯</h3>
                <p>정확한 클릭</p>
              </ScoreItem>
              <ScoreItem>
                <h3>⚡</h3>
                <p>빠른 반응</p>
              </ScoreItem>
              <ScoreItem>
                <h3>🧠</h3>
                <p>집중력 분석</p>
              </ScoreItem>
            </ScoreBoard>

            <StartButton onClick={startGame}>🎮 게임 시작하기</StartButton>
          </>
        )}

        {gameState === 'playing' && (
          <>
            <ScoreBoard>
              <ScoreItem>
                <h3>{stats.score}</h3>
                <p>점수</p>
              </ScoreItem>
              <ScoreItem>
                <h3>{Math.round(stats.accuracy)}%</h3>
                <p>정확도</p>
              </ScoreItem>
              <ScoreItem>
                <h3>{Math.round(stats.reactionTime)}ms</h3>
                <p>평균 반응속도</p>
              </ScoreItem>
            </ScoreBoard>

            <GameArea onClick={handleMiss}>
              <Timer>{timeLeft}초</Timer>
              <CrosshairOverlay />
              {targets.map(target => (
                <Target
                  key={target.id}
                  x={target.x}
                  y={target.y}
                  size={target.size}
                  hit={target.hit}
                  onClick={e => {
                    e.stopPropagation();
                    handleTargetClick(target.id);
                  }}
                />
              ))}
            </GameArea>
          </>
        )}

        {gameState === 'finished' && concentrationType && (
          <ResultsContainer>
            <h2>🎯 집중력 테스트 완료!</h2>

            <div className="result-grade">{concentrationResults[concentrationType].title}</div>

            <div className="result-description">
              {concentrationResults[concentrationType].description}
            </div>

            <ScoreBoard>
              <ScoreItem>
                <h3>{stats.score}</h3>
                <p>최종 점수</p>
              </ScoreItem>
              <ScoreItem>
                <h3>{Math.round(stats.accuracy)}%</h3>
                <p>정확도</p>
              </ScoreItem>
              <ScoreItem>
                <h3>{Math.round(stats.reactionTime)}ms</h3>
                <p>평균 반응속도</p>
              </ScoreItem>
            </ScoreBoard>

            <StartButton onClick={startGame}>🔄 다시 도전하기</StartButton>
          </ResultsContainer>
        )}
      </ConcentrationContainer>
    </>
  );
};

export default ConcentrationTestPage;
