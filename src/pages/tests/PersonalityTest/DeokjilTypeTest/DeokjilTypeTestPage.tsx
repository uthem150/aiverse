import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { deokjilTypeTestData } from '@/data/personalityTests/deokjilTypeTest';

const DeokjilTypeTestPage = () => {
  return (
    <TestContainer title={deokjilTypeTestData.title} description={deokjilTypeTestData.description}>
      <PersonalityTest testData={deokjilTypeTestData} />
    </TestContainer>
  );
};

export default DeokjilTypeTestPage;
