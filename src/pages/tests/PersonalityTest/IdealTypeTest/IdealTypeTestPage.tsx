import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { idealTypeTestData } from '@/data/personalityTests/idealTypeTest';

const IdealTypeTestPage = () => {
  return (
    <PersonalityTestContainer
      title={idealTypeTestData.title}
      description={idealTypeTestData.description}
    >
      <PersonalityTest testData={idealTypeTestData} />
    </PersonalityTestContainer>
  );
};

export default IdealTypeTestPage;
