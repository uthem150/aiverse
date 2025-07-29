import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { kpopStyleTestData } from '@/data/personalityTests/kpopStyleTest';

const KpopStyleTestPage = () => {
  return (
    <PersonalityTestContainer
      title={kpopStyleTestData.title}
      description={kpopStyleTestData.description}
    >
      <PersonalityTest testData={kpopStyleTestData} />
    </PersonalityTestContainer>
  );
};

export default KpopStyleTestPage;
