import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { xGenerationTestData } from '@/data/personalityTests/xGenerationTest';

const XGenerationTestPage = () => {
  return (
    <PersonalityTestContainer
      title={xGenerationTestData.title}
      description={xGenerationTestData.description}
    >
      <PersonalityTest testData={xGenerationTestData} />
    </PersonalityTestContainer>
  );
};

export default XGenerationTestPage;
