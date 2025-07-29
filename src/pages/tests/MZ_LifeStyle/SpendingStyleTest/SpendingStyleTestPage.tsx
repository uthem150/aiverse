import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { spendingStyleTestData } from '@/data/personalityTests/spendingStyleTest';

const SpendingStyleTestDataPage = () => {
  return (
    <PersonalityTestContainer
      title={spendingStyleTestData.title}
      description={spendingStyleTestData.description}
    >
      <PersonalityTest testData={spendingStyleTestData} />
    </PersonalityTestContainer>
  );
};

export default SpendingStyleTestDataPage;
