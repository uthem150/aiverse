import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { communicationStyleTestData } from '@/data/personalityTests/communicationStyleTest';

const CommunicationStyleTestPage = () => {
  return (
    <PersonalityTestContainer
      title={communicationStyleTestData.title}
      description={communicationStyleTestData.description}
    >
      <PersonalityTest testData={communicationStyleTestData} />
    </PersonalityTestContainer>
  );
};

export default CommunicationStyleTestPage;
