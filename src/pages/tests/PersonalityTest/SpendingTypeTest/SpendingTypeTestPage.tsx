import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { spendingTypeTestData } from '@/data/personalityTests/spendingTypeTest';

const SpendingTypeTestPage = () => {
  return (
    <PersonalityTestContainer
      title={spendingTypeTestData.title}
      description={spendingTypeTestData.description}
    >
      <PersonalityTest testData={spendingTypeTestData} />
    </PersonalityTestContainer>
  );
};

export default SpendingTypeTestPage;
