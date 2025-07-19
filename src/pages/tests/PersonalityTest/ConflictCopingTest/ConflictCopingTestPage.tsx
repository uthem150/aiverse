import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { conflictCopingTestData } from '@/data/personalityTests/conflictCopingTest';

const ConflictCopingTestPage = () => {
  return (
    <TestContainer
      title={conflictCopingTestData.title}
      description={conflictCopingTestData.description}
    >
      <PersonalityTest testData={conflictCopingTestData} />
    </TestContainer>
  );
};

export default ConflictCopingTestPage;
