import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { ottPreferenceTestData } from '@/data/personalityTests/ottPreferenceTest';

const OttPreferenceTestPage = () => {
  return (
    <PersonalityTestContainer
      title={ottPreferenceTestData.title}
      description={ottPreferenceTestData.description}
    >
      <PersonalityTest testData={ottPreferenceTestData} />
    </PersonalityTestContainer>
  );
};

export default OttPreferenceTestPage;
