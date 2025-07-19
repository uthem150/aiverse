import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { moviePreferenceTestData } from '@/data/personalityTests/moviePreferenceTestData';

const MoviePreferenceTestDataPage = () => {
  return (
    <TestContainer
      title={moviePreferenceTestData.title}
      description={moviePreferenceTestData.description}
    >
      <PersonalityTest testData={moviePreferenceTestData} />
    </TestContainer>
  );
};

export default MoviePreferenceTestDataPage;
