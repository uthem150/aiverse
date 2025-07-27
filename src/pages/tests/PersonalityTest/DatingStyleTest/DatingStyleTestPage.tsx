import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { datingStyleTestData } from '@/data/personalityTests/datingStyleTest';

const DatingStyleTestPage = () => {
  return (
    <PersonalityTestContainer
      title={datingStyleTestData.title}
      description={datingStyleTestData.description}
    >
      <PersonalityTest testData={datingStyleTestData} />
    </PersonalityTestContainer>
  );
};

export default DatingStyleTestPage;
