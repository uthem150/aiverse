import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { datingStyleTestData } from '@/data/personalityTests/datingStyleTest';

const DatingStyleTestPage = () => {
  return (
    <TestContainer title={datingStyleTestData.title} description={datingStyleTestData.description}>
      <PersonalityTest testData={datingStyleTestData} />
    </TestContainer>
  );
};

export default DatingStyleTestPage;
