import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { burnoutLevelTestData } from '@/data/personalityTests/burnoutLevelTest';

const BurnoutLevelTestPage = () => {
  return (
    <PersonalityTestContainer
      title={burnoutLevelTestData.title}
      description={burnoutLevelTestData.description}
    >
      <PersonalityTest testData={burnoutLevelTestData} />
    </PersonalityTestContainer>
  );
};

export default BurnoutLevelTestPage;
