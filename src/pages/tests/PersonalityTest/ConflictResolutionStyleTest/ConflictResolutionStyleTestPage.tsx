import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { conflictResolutionStyleTestData } from '@/data/personalityTests/conflictResolutionStyleTest';

const ConflictResolutionStyleTestPage = () => {
  return (
    <TestContainer
      title={conflictResolutionStyleTestData.title}
      description={conflictResolutionStyleTestData.description}
    >
      <PersonalityTest testData={conflictResolutionStyleTestData} />
    </TestContainer>
  );
};

export default ConflictResolutionStyleTestPage;
