import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { earlyRelationshipBehaviorTestData } from '@/data/personalityTests/earlyRelationshipBehaviorTest';

const EarlyRelationshipBehaviorTestPage = () => {
  return (
    <PersonalityTestContainer
      title={earlyRelationshipBehaviorTestData.title}
      description={earlyRelationshipBehaviorTestData.description}
    >
      <PersonalityTest testData={earlyRelationshipBehaviorTestData} />
    </PersonalityTestContainer>
  );
};

export default EarlyRelationshipBehaviorTestPage;
