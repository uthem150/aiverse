import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { kpopStyleTestData } from '@/data/personalityTests/kpopStyleTest';

const KpopStyleTestPage = () => {
  return (
    <TestContainer title={kpopStyleTestData.title} description={kpopStyleTestData.description}>
      <PersonalityTest testData={kpopStyleTestData} />
    </TestContainer>
  );
};

export default KpopStyleTestPage;
