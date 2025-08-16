import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shuffle, RotateCcw, Trophy } from 'lucide-react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

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
  min-height: 100vh;
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
  
  ${props => props.highlight && `
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
    color: ${props => props.highlight ? '#fbbf24' : 'white'};
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
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1.5rem;
  }
`;

const PuzzleBoard = styled.div<{ size: number; isComplete: boolean }>`
  display: grid;
  grid-template-columns: repeat(${props => props.size}, 1fr);
  gap: 8px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  
  ${props => props.isComplete && `
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
  width: ${props => 100 - props.size * 5}px;
  height: ${props => 100 - props.size * 5}px;
  background: ${props => props.isEmpty 
    ? 'transparent' 
    : `linear-gradient(135deg, 
        ${props.number <= props.size * props.size / 3 ? '#ef4444, #dc2626' :
          props.number <= props.size * props.size * 2 / 3 ? '#f59e0b, #d97706' :
          '#10b981, #059669'})`};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => (100 - props.size * 5) * 0.4}px;
  font-weight: bold;
  color: white;
  cursor: ${props => props.isMoveable ? 'pointer' : 'default'};
  transition: all 0.3s ease;
  border: ${props => props.isEmpty ? 'none' : '2px solid rgba(255, 255, 255, 0.3)'};
  box-shadow: ${props => props.isEmpty ? 'none' : '0 4px 15px rgba(0, 0, 0, 0.2)'};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  user-select: none;

  ${props => props.isMoveable && !props.isEmpty && `
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
      border-color: rgba(255, 255, 255, 0.6);
    }
  `}

  ${props => !props.isEmpty && `
    &:active {
      animation: ${tileSlide} 0.2s ease;
    }
  `}

  @media (max-width: 768px) {
    width: ${props => 80 - props.size * 4}px;
    height: ${props => 80 - props.size * 4}px;
    font-size: ${props => (80 - props.size * 4) * 0.4}px;
  }
`;

const ControlPanel = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`;

const ControlButton = styled.button<{ variant?: 'primary' | 'secondary' | 'success' }>`
  background: ${props => {
    switch (props.variant) {
      case 'primary': return 'linear-gradient(135deg, #3b82f6, #1d4ed8)';
      case 'success': return 'linear-gradient(135deg, #10b981, #059669)';
      default: return 'rgba(255, 255, 255, 0.2)';
    }
  }};
  border: 2px solid ${props => {
    switch (props.variant) {
      case 'primary': return '#3b82f6';
      case 'success': return '#10b981';
      default: return 'rgba(255, 255, 255, 0.3)';
    }
  }};
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
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
    padding: 0.6rem 1.2rem;
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
  background: ${props => props.selected 
    ? 'linear-gradient(135deg, #f59e0b, #d97706)' 
    : 'rgba(255, 255, 255, 0.2)'};
  border: 2px solid ${props => props.selected ? '#f59e0b' : 'rgba(255, 255, 255, 0.3)'};
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.selected 
      ? 'linear-gradient(135deg, #d97706, #b45309)' 
      : 'rgba(255, 255, 255, 0.3)'};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
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
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border: none;
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
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
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
  const [stats, setStats] = useState<GameStats>({
    moves: 0,
    time: 0,
    bestMoves: parseInt(localStorage.getItem(`puzzle-${puzzleSize}-best-moves`) || '999'),
    bestTime: parseInt(localStorage.getItem(`puzzle-${puzzleSize}-best-time`) || '999'),
    gamesCompleted: parseInt(localStorage.getItem('puzzle-games-completed') || '0'),
  });
  const [startTime, setStartTime] = useState<number>(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const createSolvedBoard = useCallback((size: PuzzleSize) => {
    const board = [];
    for (let i = 1; i < size * size; i++) {
      board.push(i);
    }
    board.push(0); // 빈 공간
    return board;
  }, []);

  const shuffleBoard = useCallback((board: number[], iterations: number = 1000) => {
    const newBoard = [...board];
    let emptyPos = newBoard.indexOf(0);
    const size = Math.sqrt(newBoard.length);

    for (let i = 0; i < iterations; i++) {
      const possibleMoves = [];
      const row = Math.floor(emptyPos / size);
      const col = emptyPos % size;

      // 위
      if (row > 0) possibleMoves.push(emptyPos - size);
      // 아래
      if (row < size - 1) possibleMoves.push(emptyPos + size);
      // 왼쪽
      if (col > 0) possibleMoves.push(emptyPos - 1);
      // 오른쪽
      if (col < size - 1) possibleMoves.push(emptyPos + 1);

      const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
      
      // 타일 교환
      [newBoard[emptyPos], newBoard[randomMove]] = [newBoard[randomMove], newBoard[emptyPos]];
      emptyPos = randomMove;
    }

    return { board: newBoard, emptyIndex: emptyPos };
  }, []);

  const isSolved = useCallback((board: number[]) => {
    for (let i = 0; i < board.length - 1; i++) {
      if (board[i] !== i + 1) return false;
    }
    return board[board.length - 1] === 0;
  }, []);

  const canMoveTile = useCallback((index: number, emptyIndex: number, size: number) => {
    const row = Math.floor(index / size);
    const col = index % size;
    const emptyRow = Math.floor(emptyIndex / size);
    const emptyCol = emptyIndex % size;

    // 같은 행에서 인접한 경우
    if (row === emptyRow && Math.abs(col - emptyCol) === 1) return true;
    // 같은 열에서 인접한 경우
    if (col === emptyCol && Math.abs(row - emptyRow) === 1) return true;

    return false;
  }, []);

  const moveTile = useCallback((index: number) => {
    if (gameState !== 'playing') return;
    if (!canMoveTile(index, emptyIndex, puzzleSize)) return;

    const newBoard = [...board];
    [newBoard[index], newBoard[emptyIndex]] = [newBoard[emptyIndex], newBoard[index]];
    
    setBoard(newBoard);
    setEmptyIndex(index);
    setStats(prev => ({ ...prev, moves: prev.moves + 1 }));

    // 완료 확인
    if (isSolved(newBoard)) {
      const finalTime = Math.floor((Date.now() - startTime) / 1000);
      setStats(prev => {
        const newStats = { ...prev, time: finalTime };
        
        // 최고 기록 업데이트
        if (prev.moves < prev.bestMoves || prev.bestMoves === 999) {
          newStats.bestMoves = prev.moves;
          localStorage.setItem(`puzzle-${puzzleSize}-best-moves`, prev.moves.toString());
        }
        
        if (finalTime < prev.bestTime || prev.bestTime === 999) {
          newStats.bestTime = finalTime;
          localStorage.setItem(`puzzle-${puzzleSize}-best-time`, finalTime.toString());
        }

        newStats.gamesCompleted = prev.gamesCompleted + 1;
        localStorage.setItem('puzzle-games-completed', newStats.gamesCompleted.toString());

        return newStats;
      });
      
      setGameState('completed');
      if (timerRef.current) clearInterval(timerRef.current);
    }
  }, [gameState, board, emptyIndex, puzzleSize, canMoveTile, isSolved, startTime]);

  const startNewGame = () => {
    const solvedBoard = createSolvedBoard(puzzleSize);
    const { board: shuffledBoard, emptyIndex: newEmptyIndex } = shuffleBoard(solvedBoard);
    
    setBoard(shuffledBoard);
    setEmptyIndex(newEmptyIndex);
    setGameState('playing');
    setStartTime(Date.now());
    setStats(prev => ({
      ...prev,
      moves: 0,
      time: 0,
      bestMoves: parseInt(localStorage.getItem(`puzzle-${puzzleSize}-best-moves`) || '999'),
      bestTime: parseInt(localStorage.getItem(`puzzle-${puzzleSize}-best-time`) || '999'),
    }));

    // 타이머 시작
    timerRef.current = setInterval(() => {
      setStats(prev => ({ ...prev, time: Math.floor((Date.now() - startTime) / 1000) }));
    }, 1000);
  };

  const resetGame = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setGameState('setup');
  };

  const solvePuzzle = () => {
    const solvedBoard = createSolvedBoard(puzzleSize);
    setBoard(solvedBoard);
    setEmptyIndex(solvedBoard.indexOf(0));
    setGameState('completed');
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleBackClick = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    navigate(-1);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyName = (size: PuzzleSize) => {
    switch (size) {
      case 3: return '쉬움 (3×3)';
      case 4: return '보통 (4×4)';
      case 5: return '어려움 (5×5)';
    }
  };

  const isCompleted = isSolved(board);

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
          <PuzzleBoard size={puzzleSize} isComplete={isCompleted}>
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

          <ControlPanel>
            <ControlButton onClick={startNewGame} variant="primary">
              <Shuffle size={16} />
              새 게임
            </ControlButton>
            <ControlButton onClick={resetGame}>
              <RotateCcw size={16} />
              메뉴로
            </ControlButton>
            <ControlButton onClick={solvePuzzle} variant="success">
              <Trophy size={16} />
              해답 보기
            </ControlButton>
          </ControlPanel>
        </GameArea>
      )}

      <GameOverlay show={gameState === 'setup'}>
        <OverlayContent>
          <div className="title">🧩 슬라이딩 퍼즐</div>
          <div className="description">
            숫자 타일을 슬라이드하여 1부터 순서대로 정렬하세요!
            <br />
            빈 공간 옆의 타일을 클릭하여 이동할 수 있습니다.
            <br />
            <br />
            최소한의 움직임으로 퍼즐을 완성해보세요!
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
          
          <ActionButton onClick={startNewGame}>게임 시작</ActionButton>
          <ActionButton onClick={handleBackClick}>뒤로 가기</ActionButton>
        </OverlayContent>
      </GameOverlay>

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
          <ActionButton onClick={startNewGame}>다시 하기</ActionButton>
          <ActionButton onClick={resetGame}>난이도 변경</ActionButton>
          <ActionButton onClick={handleBackClick}>게임 목록</ActionButton>
        </OverlayContent>
      </GameOverlay>
    </GameContainer>
  );
};

export default SlidingPuzzle;