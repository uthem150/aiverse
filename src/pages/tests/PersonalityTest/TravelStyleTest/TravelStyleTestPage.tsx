import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { travelStyleTestData } from '@/data/personalityTests/travelStyleTest';

const TravelStyleTestPage = () => {
  return (
    <TestContainer title={travelStyleTestData.title} description={travelStyleTestData.description}>
      <PersonalityTest testData={travelStyleTestData} />
    </TestContainer>
  );
};

export default TravelStyleTestPage;
