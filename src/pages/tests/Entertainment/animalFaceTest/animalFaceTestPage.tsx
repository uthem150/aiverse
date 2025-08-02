import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { animalFaceTestData } from '@/data/personalityTests/animalFaceTest';

const AnimalFaceTestPage = () => {
  return (
    <PersonalityTestContainer
      title={animalFaceTestData.title}
      description={animalFaceTestData.description}
    >
      <PersonalityTest testData={animalFaceTestData} />
    </PersonalityTestContainer>
  );
};

export default AnimalFaceTestPage;
