import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { loveStyleTestData } from '@/data/personalityTests/loveStyleTest';

const LoveStyleTestPage = () => {
  return (
    <TestContainer title={loveStyleTestData.title} description={loveStyleTestData.description}>
      <PersonalityTest testData={loveStyleTestData} />
    </TestContainer>
  );
};

export default LoveStyleTestPage;
