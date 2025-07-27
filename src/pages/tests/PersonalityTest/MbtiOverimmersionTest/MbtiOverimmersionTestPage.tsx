import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { mbtiOverimmersionTestData } from '@/data/personalityTests/mbtiOverimmersionTest';

const MbtiOverimmersionTestPage = () => {
  return (
    <PersonalityTestContainer
      title={mbtiOverimmersionTestData.title}
      description={mbtiOverimmersionTestData.description}
    >
      <PersonalityTest testData={mbtiOverimmersionTestData} />
    </PersonalityTestContainer>
  );
};

export default MbtiOverimmersionTestPage;
