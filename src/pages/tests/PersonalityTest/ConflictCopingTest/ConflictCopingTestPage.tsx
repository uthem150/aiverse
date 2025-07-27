import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { conflictCopingTestData } from '@/data/personalityTests/conflictCopingTest';

const ConflictCopingTestPage = () => {
  return (
    <PersonalityTestContainer
      title={conflictCopingTestData.title}
      description={conflictCopingTestData.description}
    >
      <PersonalityTest testData={conflictCopingTestData} />
    </PersonalityTestContainer>
  );
};

export default ConflictCopingTestPage;
