import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { giftGivingStyleTestData } from '@/data/personalityTests/giftGivingStyleTest';

const GiftGivingStyleTestPage = () => {
  return (
    <TestContainer
      title={giftGivingStyleTestData.title}
      description={giftGivingStyleTestData.description}
    >
      <PersonalityTest testData={giftGivingStyleTestData} />
    </TestContainer>
  );
};

export default GiftGivingStyleTestPage;
