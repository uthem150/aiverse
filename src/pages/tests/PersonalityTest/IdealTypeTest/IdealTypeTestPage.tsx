import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { idealTypeTestData } from '@/data/personalityTests/idealTypeTest';

const IdealTypeTestPage = () => {
  return (
    <TestContainer title={idealTypeTestData.title} description={idealTypeTestData.description}>
      <PersonalityTest testData={idealTypeTestData} />
    </TestContainer>
  );
};

export default IdealTypeTestPage;
