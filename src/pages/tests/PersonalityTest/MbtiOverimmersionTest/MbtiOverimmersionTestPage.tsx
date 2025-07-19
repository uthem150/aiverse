import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { mbtiOverimmersionTestData } from '@/data/personalityTests/mbtiOverimmersionTest';

const MbtiOverimmersionTestPage = () => {
  return (
    <TestContainer
      title={mbtiOverimmersionTestData.title}
      description={mbtiOverimmersionTestData.description}
    >
      <PersonalityTest testData={mbtiOverimmersionTestData} />
    </TestContainer>
  );
};

export default MbtiOverimmersionTestPage;
