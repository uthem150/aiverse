import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { travelStyleTestData } from '@/data/personalityTests/travelStyleTest';

const TravelStyleTestPage = () => {
  return (
    <PersonalityTestContainer
      title={travelStyleTestData.title}
      description={travelStyleTestData.description}
    >
      <PersonalityTest testData={travelStyleTestData} />
    </PersonalityTestContainer>
  );
};

export default TravelStyleTestPage;
