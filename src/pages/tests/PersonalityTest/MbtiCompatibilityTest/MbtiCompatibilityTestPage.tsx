import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { mbtiCompatibilityTestData } from '@/data/personalityTests/mbtiCompatibilityTest';

const MbtiCompatibilityTestPage = () => {
  return (
    <TestContainer
      title={mbtiCompatibilityTestData.title}
      description={mbtiCompatibilityTestData.description}
    >
      <PersonalityTest testData={mbtiCompatibilityTestData} />
    </TestContainer>
  );
};

export default MbtiCompatibilityTestPage;
