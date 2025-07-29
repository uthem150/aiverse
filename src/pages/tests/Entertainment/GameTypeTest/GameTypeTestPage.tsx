import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { gameTypeTestData } from '@/data/personalityTests/gameTypeTest';

const GameTypeTestPage = () => {
  return (
    <PersonalityTestContainer
      title={gameTypeTestData.title}
      description={gameTypeTestData.description}
    >
      <PersonalityTest testData={gameTypeTestData} />
    </PersonalityTestContainer>
  );
};

export default GameTypeTestPage;
