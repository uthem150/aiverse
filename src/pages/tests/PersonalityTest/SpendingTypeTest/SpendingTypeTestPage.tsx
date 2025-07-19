import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { spendingTypeTestData } from '@/data/personalityTests/spendingTypeTest';

const SpendingTypeTestPage = () => {
  return (
    <TestContainer
      title={spendingTypeTestData.title}
      description={spendingTypeTestData.description}
    >
      <PersonalityTest testData={spendingTypeTestData} />
    </TestContainer>
  );
};

export default SpendingTypeTestPage;
