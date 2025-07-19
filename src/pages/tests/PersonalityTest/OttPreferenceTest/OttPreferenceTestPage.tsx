import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { ottPreferenceTestData } from '@/data/personalityTests/ottPreferenceTest';

const OttPreferenceTestPage = () => {
  return (
    <TestContainer
      title={ottPreferenceTestData.title}
      description={ottPreferenceTestData.description}
    >
      <PersonalityTest testData={ottPreferenceTestData} />
    </TestContainer>
  );
};

export default OttPreferenceTestPage;
