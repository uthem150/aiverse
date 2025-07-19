import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { datingMethodTestData } from '@/data/personalityTests/datingMethodTest';

const DatingMethodTestPage = () => {
  return (
    <TestContainer
      title={datingMethodTestData.title}
      description={datingMethodTestData.description}
    >
      <PersonalityTest testData={datingMethodTestData} />
    </TestContainer>
  );
};

export default DatingMethodTestPage;
