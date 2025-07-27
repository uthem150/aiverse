import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { deokjilTypeTestData } from '@/data/personalityTests/deokjilTypeTest';

const DeokjilTypeTestPage = () => {
  return (
    <PersonalityTestContainer
      title={deokjilTypeTestData.title}
      description={deokjilTypeTestData.description}
    >
      <PersonalityTest testData={deokjilTypeTestData} />
    </PersonalityTestContainer>
  );
};

export default DeokjilTypeTestPage;
