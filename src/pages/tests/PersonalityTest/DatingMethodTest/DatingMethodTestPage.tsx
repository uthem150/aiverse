import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { datingMethodTestData } from '@/data/personalityTests/datingMethodTest';

const DatingMethodTestPage = () => {
  return (
    <PersonalityTestContainer
      title={datingMethodTestData.title}
      description={datingMethodTestData.description}
    >
      <PersonalityTest testData={datingMethodTestData} />
    </PersonalityTestContainer>
  );
};

export default DatingMethodTestPage;
