import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { communicationStyleTestData } from '@/data/personalityTests/communicationStyleTest';

const CommunicationStyleTestPage = () => {
  return (
    <TestContainer
      title={communicationStyleTestData.title}
      description={communicationStyleTestData.description}
    >
      <PersonalityTest testData={communicationStyleTestData} />
    </TestContainer>
  );
};

export default CommunicationStyleTestPage;
