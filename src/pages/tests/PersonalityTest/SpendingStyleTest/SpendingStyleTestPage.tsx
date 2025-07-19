import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { spendingStyleTestData } from '@/data/personalityTests/spendingStyleTest';

const SpendingStyleTestDataPage = () => {
  return (
    <TestContainer
      title={spendingStyleTestData.title}
      description={spendingStyleTestData.description}
    >
      <PersonalityTest testData={spendingStyleTestData} />
    </TestContainer>
  );
};

export default SpendingStyleTestDataPage;
