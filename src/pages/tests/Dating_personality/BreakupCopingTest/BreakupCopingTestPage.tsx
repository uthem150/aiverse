import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { breakupCopingTestData } from '@/data/personalityTests/breakupCopingTest';

const BreakupCopingTestPage = () => {
  return (
    <PersonalityTestContainer
      title={breakupCopingTestData.title}
      description={breakupCopingTestData.description}
    >
      <PersonalityTest testData={breakupCopingTestData} />
    </PersonalityTestContainer>
  );
};

export default BreakupCopingTestPage;
