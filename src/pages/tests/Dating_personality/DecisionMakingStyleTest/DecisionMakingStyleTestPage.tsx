import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { decisionMakingStyleTestData } from '@/data/personalityTests/decisionMakingStyleTest';

const DecisionMakingStyleTestPage = () => {
  return (
    <PersonalityTestContainer
      title={decisionMakingStyleTestData.title}
      description={decisionMakingStyleTestData.description}
    >
      <PersonalityTest testData={decisionMakingStyleTestData} />
    </PersonalityTestContainer>
  );
};

export default DecisionMakingStyleTestPage;
