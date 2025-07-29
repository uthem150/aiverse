import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { domesticTravelStyleTestData } from '@/data/personalityTests/domesticTravelStyleTest';

const DomesticTravelStyleTestPage = () => {
  return (
    <PersonalityTestContainer
      title={domesticTravelStyleTestData.title}
      description={domesticTravelStyleTestData.description}
    >
      <PersonalityTest testData={domesticTravelStyleTestData} />
    </PersonalityTestContainer>
  );
};

export default DomesticTravelStyleTestPage;
