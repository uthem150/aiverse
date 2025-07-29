import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { steamGamePreferenceTestData } from '@/data/personalityTests/steamGamePreferenceTest';

const SteamGamePreferenceTestPage = () => {
  return (
    <PersonalityTestContainer
      title={steamGamePreferenceTestData.title}
      description={steamGamePreferenceTestData.description}
    >
      <PersonalityTest testData={steamGamePreferenceTestData} />
    </PersonalityTestContainer>
  );
};

export default SteamGamePreferenceTestPage;
