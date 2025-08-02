import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { kboTeamTestData } from '@/data/personalityTests/kboTeamTest';

const KboTeamTestPage = () => {
  return (
    <PersonalityTestContainer
      title={kboTeamTestData.title}
      description={kboTeamTestData.description}
    >
      <PersonalityTest testData={kboTeamTestData} />
    </PersonalityTestContainer>
  );
};

export default KboTeamTestPage;
