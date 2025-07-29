import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { overseasTravelStyleTestData } from '@/data/personalityTests/overseasTravelStyleTest';

const OverseasTravelStyleTestPage = () => {
  return (
    <PersonalityTestContainer
      title={overseasTravelStyleTestData.title}
      description={overseasTravelStyleTestData.description}
    >
      <PersonalityTest testData={overseasTravelStyleTestData} />
    </PersonalityTestContainer>
  );
};

export default OverseasTravelStyleTestPage;
