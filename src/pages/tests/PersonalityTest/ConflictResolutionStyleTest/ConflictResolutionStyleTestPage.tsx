import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { conflictResolutionStyleTestData } from '@/data/personalityTests/conflictResolutionStyleTest';

const ConflictResolutionStyleTestPage = () => {
  return (
    <PersonalityTestContainer
      title={conflictResolutionStyleTestData.title}
      description={conflictResolutionStyleTestData.description}
    >
      <PersonalityTest testData={conflictResolutionStyleTestData} />
    </PersonalityTestContainer>
  );
};

export default ConflictResolutionStyleTestPage;
