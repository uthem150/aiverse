import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { overseasTravelStyleTestData } from '@/data/personalityTests/overseasTravelStyleTest';

const OverseasTravelStyleTestPage = () => {
  return (
    <TestContainer
      title={overseasTravelStyleTestData.title}
      description={overseasTravelStyleTestData.description}
    >
      <PersonalityTest testData={overseasTravelStyleTestData} />
    </TestContainer>
  );
};

export default OverseasTravelStyleTestPage;
