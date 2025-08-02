import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { mentalAgeTestData } from '@/data/personalityTests/mentalAgeTest';

const MentalAgeTestPage = () => {
  return (
    <PersonalityTestContainer
      title={mentalAgeTestData.title}
      description={mentalAgeTestData.description}
    >
      <PersonalityTest testData={mentalAgeTestData} />
    </PersonalityTestContainer>
  );
};

export default MentalAgeTestPage;
