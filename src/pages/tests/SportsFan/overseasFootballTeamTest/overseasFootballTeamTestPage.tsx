import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { overseasFootballTeamTestData } from '@/data/personalityTests/overseasFootballTeamTest';

const OverseasFootballTeamTestPage = () => {
  return (
    <PersonalityTestContainer
      title={overseasFootballTeamTestData.title}
      description={overseasFootballTeamTestData.description}
    >
      <PersonalityTest testData={overseasFootballTeamTestData} />
    </PersonalityTestContainer>
  );
};

export default OverseasFootballTeamTestPage;
