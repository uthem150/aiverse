import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shuffle, RotateCcw, Trophy, X } from 'lucide-react';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';

const tileSlide = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.95); }
  100% { transform: scale(1); }
`;

const puzzleComplete = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 rgba(34, 197, 94, 0.5); }
  50% { transform: scale(1.02); box-shadow: 0 0 30px rgba(34, 197, 94, 0.8); }
  100% { transform: scale(1); box-shadow: 0 0 0 rgba(34, 197, 94, 0.5); }
`;

const celebrationBounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

const GameContainer = styled.div`
  height: 100%;
  flex: 1;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
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

  ${p =>
    p.highlight &&
    css`
      animation: ${celebrationBounce} 0.6s ease;
    `}

  .label {
    font-size: 0.8rem;
    opacity: 0.8;
    margin-bottom: 0.2rem;
  }
  .value {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${p => (p.highlight ? '#fbbf24' : 'white')};
  }

  @media (max-width: 768px) {
    .label {
      font-size: 0.7rem;
    }
    .value {
      font-size: 1rem;
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
  gap: 1.25rem;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }
`;

const PuzzleBoard = styled.div<{ size: number; isComplete: boolean }>`
  display: grid;
  grid-template-columns: repeat(${p => p.size}, 1fr);
  gap: 8px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

  ${p =>
    p.isComplete &&
    css`
      animation: ${puzzleComplete} 1s ease-in-out infinite;
    `}

  @media (max-width: 768px) {
    gap: 6px;
    padding: 15px;
  }
`;

const Tile = styled.div<{
  size: number;
  isEmpty: boolean;
  isMoveable: boolean;
  number: number;
}>`
  width: ${p => 100 - p.size * 5}px;
  height: ${p => 100 - p.size * 5}px;
  background: ${p =>
    p.isEmpty
      ? 'transparent'
      : `linear-gradient(135deg, ${
          p.number <= (p.size * p.size) / 3
            ? '#ef4444, #dc2626'
            : p.number <= (p.size * p.size * 2) / 3
              ? '#f59e0b, #d97706'
              : '#10b981, #059669'
        })`};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${p => (100 - p.size * 5) * 0.4}px;
  font-weight: bold;
  color: white;
  cursor: ${p => (p.isMoveable ? 'pointer' : 'default')};
  transition: all 0.25s ease;
  border: ${p => (p.isEmpty ? 'none' : '2px solid rgba(255, 255, 255, 0.3)')};
  box-shadow: ${p => (p.isEmpty ? 'none' : '0 4px 15px rgba(0, 0, 0, 0.2)')};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  user-select: none;

  ${p =>
    p.isMoveable &&
    !p.isEmpty &&
    css`
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        border-color: rgba(255, 255, 255, 0.6);
      }
    `}

  ${p =>
    !p.isEmpty &&
    css`
      &:active {
        animation: ${tileSlide} 0.2s ease;
      }
    `}

  @media (max-width: 768px) {
    width: ${p => 80 - p.size * 4}px;
    height: ${p => 80 - p.size * 4}px;
    font-size: ${p => (80 - p.size * 4) * 0.4}px;
  }
`;

const ControlPanel = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 0.6rem;
  }
`;

const ControlButton = styled.button<{ variant?: 'primary' | 'secondary' | 'success' }>`
  background: ${p => {
    switch (p.variant) {
      case 'primary':
        return 'linear-gradient(135deg, #3b82f6, #1d4ed8)';
      case 'success':
        return 'linear-gradient(135deg, #10b981, #059669)';
      default:
        return 'rgba(255, 255, 255, 0.2)';
    }
  }};
  border: 2px solid
    ${p => {
      switch (p.variant) {
        case 'primary':
          return '#3b82f6';
        case 'success':
          return '#10b981';
        default:
          return 'rgba(255, 255, 255, 0.3)';
      }
    }};
  border-radius: 8px;
  padding: 0.7rem 1.2rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
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
    padding: 0.55rem 1rem;
    font-size: 0.9rem;
  }
`;

const DifficultySelector = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    gap: 0.8rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const DifficultyButton = styled.button<{ selected?: boolean }>`
  background: ${p =>
    p.selected ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'rgba(255,255,255,0.2)'};
  border: 2px solid ${p => (p.selected ? '#f59e0b' : 'rgba(255,255,255,0.3)')};
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    background: ${p =>
      p.selected ? 'linear-gradient(135deg, #d97706, #b45309)' : 'rgba(255,255,255,0.3)'};
    transform: translateY(-2px);
  }
  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

/* 시작/완료 오버레이 */
const GameOverlay = styled.div<{ show: boolean }>`
  position: fixed;
  inset: 0;
  height: 100dvh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: ${p => (p.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom)
    env(safe-area-inset-left);
`;

const OverlayContent = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  color: white;
  max-width: 500px;
  width: min(92vw, 500px);
  max-height: 84dvh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;

  .title {
    font-size: clamp(1.4rem, 4.5vw, 2rem);
    font-weight: bold;
  }
  .description {
    font-size: clamp(0.95rem, 3.5vw, 1.1rem);
    line-height: 1.6;
    opacity: 0.9;
    overflow: auto;
  }
  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 16px;
  }
`;

const ButtonsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem;
  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const ActionButton = styled.button`
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border: none;
  border-radius: 10px;
  padding: 0.9rem 1.4rem;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
  }
  @media (max-width: 768px) {
    padding: 0.7rem 1.1rem;
    font-size: 0.95rem;
    border-radius: 8px;
  }
`;

/* ====== 해답 미리보기 패널 (보드를 가리지 않음) ====== */
const SolutionPanel = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.12);
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  padding: 0.75rem 0.75rem 0.9rem;
  color: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  width: min(260px, 92vw);
`;

const SolutionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const MiniBoard = styled.div<{ size: number }>`
  display: grid;
  grid-template-columns: repeat(${p => p.size}, 1fr);
  gap: 4px;
`;

const MiniTile = styled.div<{ empty?: boolean; hue: 'r' | 'o' | 'g' }>`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  font-weight: 700;
  user-select: none;
  ${p =>
    p.empty
      ? css`
          background: transparent;
          border: 2px dashed rgba(255, 255, 255, 0.25);
        `
      : css`
          background: ${p.hue === 'r'
            ? 'linear-gradient(135deg, #ef4444, #dc2626)'
            : p.hue === 'o'
              ? 'linear-gradient(135deg, #f59e0b, #d97706)'
              : 'linear-gradient(135deg, #10b981, #059669)'};
          color: white;
          text-shadow: 0 2px 3px rgba(0, 0, 0, 0.45);
          border: 2px solid rgba(255, 255, 255, 0.28);
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.18);
        `}
`;

interface GameStats {
  moves: number;
  time: number;
  bestMoves: number;
  bestTime: number;
  gamesCompleted: number;
}

type PuzzleSize = 3 | 4 | 5;

const SlidingPuzzle: React.FC = () => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState<'setup' | 'playing' | 'completed'>('setup');
  const [puzzleSize, setPuzzleSize] = useState<PuzzleSize>(3);
  const [board, setBoard] = useState<number[]>([]);
  const [emptyIndex, setEmptyIndex] = useState<number>(0);
  const [showSolution, setShowSolution] = useState<boolean>(false);

  const [stats, setStats] = useState<GameStats>({
    moves: 0,
    time: 0,
    bestMoves: parseInt(localStorage.getItem(`puzzle-${puzzleSize}-best-moves`) || '999'),
    bestTime: parseInt(localStorage.getItem(`puzzle-${puzzleSize}-best-time`) || '999'),
    gamesCompleted: parseInt(localStorage.getItem('puzzle-games-completed') || '0'),
  });

  // 브라우저 interval id는 number 타입
  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    setGameState('setup');
  }, []);

  const createSolvedBoard = useCallback((size: PuzzleSize) => {
    const b: number[] = [];
    for (let i = 1; i < size * size; i++) b.push(i);
    b.push(0);
    return b;
  }, []);

  const shuffleBoard = useCallback((b: number[], iterations: number = 1000) => {
    const newBoard = [...b];
    let emptyPos = newBoard.indexOf(0);
    const size = Math.sqrt(newBoard.length);

    for (let i = 0; i < iterations; i++) {
      const possibleMoves: number[] = [];
      const row = Math.floor(emptyPos / size);
      const col = emptyPos % size;
      if (row > 0) possibleMoves.push(emptyPos - size);
      if (row < size - 1) possibleMoves.push(emptyPos + size);
      if (col > 0) possibleMoves.push(emptyPos - 1);
      if (col < size - 1) possibleMoves.push(emptyPos + 1);
      const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
      [newBoard[emptyPos], newBoard[randomMove]] = [newBoard[randomMove], newBoard[emptyPos]];
      emptyPos = randomMove;
    }
    return { board: newBoard, emptyIndex: emptyPos };
  }, []);

  const isSolved = useCallback((b: number[]) => {
    for (let i = 0; i < b.length - 1; i++) if (b[i] !== i + 1) return false;
    return b[b.length - 1] === 0;
  }, []);

  const canMoveTile = useCallback((index: number, emptyIdx: number, size: number) => {
    const row = Math.floor(index / size);
    const col = index % size;
    const emptyRow = Math.floor(emptyIdx / size);
    const emptyCol = emptyIdx % size;
    if (row === emptyRow && Math.abs(col - emptyCol) === 1) return true;
    if (col === emptyCol && Math.abs(row - emptyRow) === 1) return true;
    return false;
  }, []);

  const clearTimer = () => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const moveTile = useCallback(
    (index: number) => {
      if (gameState !== 'playing') return;
      if (!canMoveTile(index, emptyIndex, puzzleSize)) return;

      const newBoard = [...board];
      [newBoard[index], newBoard[emptyIndex]] = [newBoard[emptyIndex], newBoard[index]];

      const movesAfter = stats.moves + 1;

      setBoard(newBoard);
      setEmptyIndex(index);
      setStats(prev => ({ ...prev, moves: movesAfter }));

      if (isSolved(newBoard)) {
        const finalTime = Math.floor((Date.now() - startTimeRef.current) / 1000);
        clearTimer();
        setGameState('completed');

        setStats(prev => {
          const next = { ...prev, time: finalTime };
          if (movesAfter < prev.bestMoves || prev.bestMoves === 999) {
            next.bestMoves = movesAfter;
            localStorage.setItem(`puzzle-${puzzleSize}-best-moves`, movesAfter.toString());
          }
          if (finalTime < prev.bestTime || prev.bestTime === 999) {
            next.bestTime = finalTime;
            localStorage.setItem(`puzzle-${puzzleSize}-best-time`, finalTime.toString());
          }
          next.gamesCompleted = prev.gamesCompleted + 1;
          localStorage.setItem('puzzle-games-completed', next.gamesCompleted.toString());
          return next;
        });
      }
    },
    [gameState, board, emptyIndex, puzzleSize, canMoveTile, isSolved, stats.moves]
  );

  const startNewGame = () => {
    clearTimer();
    const solvedBoard = createSolvedBoard(puzzleSize);
    const { board: shuffledBoard, emptyIndex: newEmptyIndex } = shuffleBoard(solvedBoard);

    setBoard(shuffledBoard);
    setEmptyIndex(newEmptyIndex);
    setGameState('playing');
    setShowSolution(false);

    startTimeRef.current = Date.now();
    setStats(prev => ({
      ...prev,
      moves: 0,
      time: 0,
      bestMoves: parseInt(localStorage.getItem(`puzzle-${puzzleSize}-best-moves`) || '999'),
      bestTime: parseInt(localStorage.getItem(`puzzle-${puzzleSize}-best-time`) || '999'),
    }));

    timerRef.current = window.setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
      setStats(prev => ({ ...prev, time: elapsed }));
    }, 1000);
  };

  const resetGame = () => {
    clearTimer();
    setGameState('setup');
    setShowSolution(false);
  };

  // 해답 미리보기 토글 (보드/시간은 그대로)
  const toggleSolution = () => setShowSolution(s => !s);

  // Esc로 미리보기 닫기
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showSolution) setShowSolution(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showSolution]);

  // 언마운트 시 타이머 정리
  useEffect(() => () => clearTimer(), []);

  const handleBackClick = () => {
    clearTimer();
    navigate(-1);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyName = (size: PuzzleSize) => {
    switch (size) {
      case 3:
        return '쉬움 (3×3)';
      case 4:
        return '보통 (4×4)';
      case 5:
        return '어려움 (5×5)';
    }
  };

  const isCompleted = isSolved(board);
  const solved = createSolvedBoard(puzzleSize);

  return (
    <GameContainer>
      <Header>
        <BackButton onClick={handleBackClick}>
          <ArrowLeft size={16} />
          게임 목록
        </BackButton>
        <Title>🧩 슬라이딩 퍼즐</Title>
        <StatsPanel>
          <Stat>
            <div className="label">움직임</div>
            <div className="value">{stats.moves}</div>
          </Stat>
          <Stat>
            <div className="label">시간</div>
            <div className="value">{formatTime(stats.time)}</div>
          </Stat>
          <Stat>
            <div className="label">최고기록</div>
            <div className="value">{stats.bestMoves === 999 ? '-' : stats.bestMoves}</div>
          </Stat>
          <Stat highlight={gameState === 'completed'}>
            <div className="label">완료한 게임</div>
            <div className="value">{stats.gamesCompleted}</div>
          </Stat>
        </StatsPanel>
      </Header>

      {gameState !== 'setup' && (
        <GameArea>
          <PuzzleBoard size={puzzleSize} isComplete={isCompleted && gameState === 'completed'}>
            {board.map((number, index) => (
              <Tile
                key={index}
                size={puzzleSize}
                isEmpty={number === 0}
                isMoveable={canMoveTile(index, emptyIndex, puzzleSize)}
                number={number}
                onClick={() => moveTile(index)}
              >
                {number === 0 ? '' : number}
              </Tile>
            ))}
          </PuzzleBoard>

          {/* 해답 미리보기 패널 - 보드 아래, 비차단 */}
          {showSolution && (
            <SolutionPanel aria-live="polite">
              <SolutionHeader>
                <span>🔎 해답 미리보기</span>
                <button
                  onClick={() => setShowSolution(false)}
                  aria-label="해답 닫기"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <X size={18} />
                </button>
              </SolutionHeader>
              <MiniBoard size={puzzleSize}>
                {solved.map((n, i) => {
                  const sector = (idx: number) => {
                    const s2 = puzzleSize * puzzleSize;
                    if (idx <= s2 / 3) return 'r';
                    if (idx <= (s2 * 2) / 3) return 'o';
                    return 'g';
                  };
                  return (
                    <MiniTile
                      key={i}
                      empty={n === 0}
                      hue={sector(n) as 'r' | 'o' | 'g'}
                      title={n === 0 ? '빈칸' : `${n}`}
                    >
                      {n === 0 ? '' : n}
                    </MiniTile>
                  );
                })}
              </MiniBoard>
              <div style={{ marginTop: '0.6rem', fontSize: '0.85rem', opacity: 0.9 }}>
                * 현재 보드는 그대로 유지됩니다. (타이머 계속)
              </div>
            </SolutionPanel>
          )}

          <ControlPanel>
            <ControlButton onClick={startNewGame} variant="primary">
              <Shuffle size={16} /> 새 게임
            </ControlButton>
            <ControlButton onClick={resetGame}>
              <RotateCcw size={16} /> 메뉴로
            </ControlButton>
            <ControlButton onClick={toggleSolution} variant="success">
              <Trophy size={16} /> {showSolution ? '해답 닫기' : '해답 보기'}
            </ControlButton>
          </ControlPanel>
        </GameArea>
      )}

      {/* 시작 오버레이 */}
      <GameOverlay show={gameState === 'setup'}>
        <OverlayContent onClick={e => e.stopPropagation()}>
          <div className="title">🧩 슬라이딩 퍼즐</div>
          <div className="description">
            숫자 타일을 슬라이드하여 1부터 순서대로 정렬하세요!
            <br />빈 공간 옆의 타일을 클릭하여 이동할 수 있습니다.
            <br />
            <br />
            난이도를 선택하세요:
          </div>

          <DifficultySelector>
            {[3, 4, 5].map(size => (
              <DifficultyButton
                key={size}
                selected={puzzleSize === size}
                onClick={() => setPuzzleSize(size as PuzzleSize)}
              >
                {getDifficultyName(size as PuzzleSize)}
              </DifficultyButton>
            ))}
          </DifficultySelector>

          <ButtonsRow>
            <ActionButton onClick={startNewGame}>게임 시작</ActionButton>
            <ActionButton onClick={handleBackClick}>뒤로 가기</ActionButton>
          </ButtonsRow>
        </OverlayContent>
      </GameOverlay>

      {/* 승리 오버레이 (해답 미리보기는 오버레이를 사용하지 않음) */}
      <GameOverlay show={gameState === 'completed'}>
        <OverlayContent>
          <div className="title">🎉 퍼즐 완성!</div>
          <div className="description">
            <strong>축하합니다!</strong>
            <br />
            움직임: {stats.moves}번
            <br />
            시간: {formatTime(stats.time)}
            <br />
            <br />
            <strong>최고 기록:</strong>
            <br />
            최소 움직임: {stats.bestMoves === 999 ? '기록 없음' : `${stats.bestMoves}번`}
            <br />
            최단 시간: {stats.bestTime === 999 ? '기록 없음' : formatTime(stats.bestTime)}
            <br />
            <br />
            {stats.moves <= puzzleSize * puzzleSize * 2
              ? '🏆 완벽한 해결!'
              : stats.moves <= puzzleSize * puzzleSize * 4
                ? '⭐ 훌륭한 실력!'
                : '👍 잘했어요!'}
          </div>
          <ButtonsRow>
            <ActionButton onClick={startNewGame}>다시 하기</ActionButton>
            <ActionButton onClick={resetGame}>난이도 변경</ActionButton>
            <ActionButton
              onClick={() => {
                clearTimer();
                navigate(-1);
              }}
            >
              게임 목록
            </ActionButton>
          </ButtonsRow>
        </OverlayContent>
      </GameOverlay>
    </GameContainer>
  );
};

export default SlidingPuzzle;
