import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import {
  GameContainer,
  ContentWrapper,
  MainTitle,
  MainSubtitle,
  GameGrid,
  GameCard,
} from './GameExperience.style';

const GameExperience: React.FC = () => {
  const navigate = useNavigate();

  const games = [
    {
      id: 'target-shooter',
      icon: '🎯',
      title: '타겟 슈팅',
      description: '빠르고 정확한 클릭으로 타겟을 맞춰보세요',
      features: ['반응속도 측정', '정확성 테스트', '실시간 통계', '60초 챌린지'],
      bgColor: '#ef4444',
      path: '/game/target-shooter',
    },
    {
      id: 'orb-collector',
      icon: '🔮',
      title: '오브 컬렉터',
      description: '마우스로 떠다니는 마법의 오브들을 수집하세요',
      features: ['마우스 컨트롤', '콤보 시스템', '동적 난이도', '90초 챌린지'],
      bgColor: '#8b5cf6',
      path: '/game/orb-collector',
    },
  ];

  const handleGameClick = (path: string) => {
    navigate(path);
  };

  const handleBackClick = () => {
    navigate('/interactive-hub');
  };

  return (
    <>
      <GameContainer>
        <ContentWrapper>
          <MainTitle>🎮 인터랙티브 게임</MainTitle>
          <MainSubtitle>
            실시간 상호작용이 가능한 재미있는 게임들을 체험해보세요.
            <br />
            반응속도와 마우스 컨트롤 실력을 테스트하고 발전시켜보세요.
          </MainSubtitle>

          <GameGrid>
            {games.map((game, index) => (
              <GameCard
                key={game.id}
                bgColor={game.bgColor}
                delay={index * 0.2}
                onClick={() => handleGameClick(game.path)}
              >
                <div className="game-icon">{game.icon}</div>
                <div className="game-title">{game.title}</div>
                <div className="game-description">{game.description}</div>

                <div className="game-features">
                  {game.features.map((feature, idx) => (
                    <div key={idx} className="feature-tag">
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="play-button">게임 시작</div>
              </GameCard>
            ))}
          </GameGrid>
        </ContentWrapper>
      </GameContainer>
    </>
  );
};

export default GameExperience;
