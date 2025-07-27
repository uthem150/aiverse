import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { loveStyleTestData } from '@/data/personalityTests/loveStyleTest';

const LoveStyleTestPage = () => {
  return (
    <PersonalityTestContainer
      title={loveStyleTestData.title}
      description={loveStyleTestData.description}
    >
      <PersonalityTest testData={loveStyleTestData} />
    </PersonalityTestContainer>
  );
};

export default LoveStyleTestPage;
