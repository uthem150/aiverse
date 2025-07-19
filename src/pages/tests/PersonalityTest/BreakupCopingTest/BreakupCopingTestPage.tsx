import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { breakupCopingTestData } from '@/data/personalityTests/breakupCopingTest';

const BreakupCopingTestPage = () => {
  return (
    <TestContainer
      title={breakupCopingTestData.title}
      description={breakupCopingTestData.description}
    >
      <PersonalityTest testData={breakupCopingTestData} />
    </TestContainer>
  );
};

export default BreakupCopingTestPage;
