import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { kDramaCharacterTestData } from '@/data/personalityTests/kDramaCharacterTest';

const KDramaCharacterTestPage = () => {
  return (
    <PersonalityTestContainer
      title={kDramaCharacterTestData.title}
      description={kDramaCharacterTestData.description}
    >
      <PersonalityTest testData={kDramaCharacterTestData} />
    </PersonalityTestContainer>
  );
};

export default KDramaCharacterTestPage;
