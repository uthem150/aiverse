import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { domesticTravelStyleTestData } from '@/data/personalityTests/domesticTravelStyleTest';

const DomesticTravelStyleTestPage = () => {
  return (
    <TestContainer
      title={domesticTravelStyleTestData.title}
      description={domesticTravelStyleTestData.description}
    >
      <PersonalityTest testData={domesticTravelStyleTestData} />
    </TestContainer>
  );
};

export default DomesticTravelStyleTestPage;
