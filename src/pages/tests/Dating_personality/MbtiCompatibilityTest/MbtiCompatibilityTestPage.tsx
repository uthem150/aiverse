import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { mbtiCompatibilityTestData } from '@/data/personalityTests/mbtiCompatibilityTest';

const MbtiCompatibilityTestPage = () => {
  return (
    <PersonalityTestContainer
      title={mbtiCompatibilityTestData.title}
      description={mbtiCompatibilityTestData.description}
    >
      <PersonalityTest testData={mbtiCompatibilityTestData} />
    </PersonalityTestContainer>
  );
};

export default MbtiCompatibilityTestPage;
