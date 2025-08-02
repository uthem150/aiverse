import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { idealTypeMatchTestData } from '@/data/personalityTests/idealTypeMatchTest';

const IdealTypeMatchTestPage = () => {
  return (
    <PersonalityTestContainer
      title={idealTypeMatchTestData.title}
      description={idealTypeMatchTestData.description}
    >
      <PersonalityTest testData={idealTypeMatchTestData} />
    </PersonalityTestContainer>
  );
};

export default IdealTypeMatchTestPage;
