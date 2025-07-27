import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { giftGivingStyleTestData } from '@/data/personalityTests/giftGivingStyleTest';

const GiftGivingStyleTestPage = () => {
  return (
    <PersonalityTestContainer
      title={giftGivingStyleTestData.title}
      description={giftGivingStyleTestData.description}
    >
      <PersonalityTest testData={giftGivingStyleTestData} />
    </PersonalityTestContainer>
  );
};

export default GiftGivingStyleTestPage;
