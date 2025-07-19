import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { steamGamePreferenceTestData } from '@/data/personalityTests/steamGamePreferenceTest';

const SteamGamePreferenceTestPage = () => {
  return (
    <TestContainer
      title={steamGamePreferenceTestData.title}
      description={steamGamePreferenceTestData.description}
    >
      <PersonalityTest testData={steamGamePreferenceTestData} />
    </TestContainer>
  );
};

export default SteamGamePreferenceTestPage;
