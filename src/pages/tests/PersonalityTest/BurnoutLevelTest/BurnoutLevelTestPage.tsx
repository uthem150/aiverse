import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { burnoutLevelTestData } from '@/data/personalityTests/burnoutLevelTest';

const BurnoutLevelTestPage = () => {
  return (
    <TestContainer
      title={burnoutLevelTestData.title}
      description={burnoutLevelTestData.description}
    >
      <PersonalityTest testData={burnoutLevelTestData} />
    </TestContainer>
  );
};

export default BurnoutLevelTestPage;
