import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { datingCharacterTestData } from '@/data/personalityTests/datingCharacterTest';

const DatingCharacterTestPage = () => {
  return (
    <PersonalityTestContainer
      title={datingCharacterTestData.title}
      description={datingCharacterTestData.description}
    >
      <PersonalityTest testData={datingCharacterTestData} />
    </PersonalityTestContainer>
  );
};

export default DatingCharacterTestPage;
