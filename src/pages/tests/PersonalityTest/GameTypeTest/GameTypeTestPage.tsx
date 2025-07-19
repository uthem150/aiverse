import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { gameTypeTestData } from '@/data/personalityTests/gameTypeTest';

const GameTypeTestPage = () => {
  return (
    <TestContainer title={gameTypeTestData.title} description={gameTypeTestData.description}>
      <PersonalityTest testData={gameTypeTestData} />
    </TestContainer>
  );
};

export default GameTypeTestPage;
