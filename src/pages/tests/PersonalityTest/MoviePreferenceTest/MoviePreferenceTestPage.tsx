import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { moviePreferenceTestData } from '@/data/personalityTests/moviePreferenceTestData';

const MoviePreferenceTestDataPage = () => {
  return (
    <PersonalityTestContainer
      title={moviePreferenceTestData.title}
      description={moviePreferenceTestData.description}
    >
      <PersonalityTest testData={moviePreferenceTestData} />
    </PersonalityTestContainer>
  );
};

export default MoviePreferenceTestDataPage;
