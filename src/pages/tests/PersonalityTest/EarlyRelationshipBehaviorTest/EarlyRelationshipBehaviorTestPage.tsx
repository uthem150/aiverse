import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { earlyRelationshipBehaviorTestData } from '@/data/personalityTests/earlyRelationshipBehaviorTest';

const EarlyRelationshipBehaviorTestPage = () => {
  return (
    <TestContainer
      title={earlyRelationshipBehaviorTestData.title}
      description={earlyRelationshipBehaviorTestData.description}
    >
      <PersonalityTest testData={earlyRelationshipBehaviorTestData} />
    </TestContainer>
  );
};

export default EarlyRelationshipBehaviorTestPage;
