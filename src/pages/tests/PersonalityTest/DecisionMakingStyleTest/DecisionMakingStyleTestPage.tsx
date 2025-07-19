import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { decisionMakingStyleTestData } from '@/data/personalityTests/decisionMakingStyleTest';

const DecisionMakingStyleTestPage = () => {
  return (
    <TestContainer
      title={decisionMakingStyleTestData.title}
      description={decisionMakingStyleTestData.description}
    >
      <PersonalityTest testData={decisionMakingStyleTestData} />
    </TestContainer>
  );
};

export default DecisionMakingStyleTestPage;
