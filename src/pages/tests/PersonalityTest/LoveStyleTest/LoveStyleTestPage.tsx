import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import SEO from '@/components/common/SEO/SEO';
import { loveStyleTestData } from '@/data/personalityTests/loveStyleTest';
import { getTestMeta, getTestThumbnailUrl } from '@/data/testMeta';

const LoveStyleTestPage = () => {
  const testId = 'love-style-test';
  const meta = getTestMeta(testId);
  const thumbnailUrl = getTestThumbnailUrl(testId);

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        image={thumbnailUrl}
        type="article"
      />
      <TestContainer title={loveStyleTestData.title} description={loveStyleTestData.description}>
        <PersonalityTest testData={loveStyleTestData} />
      </TestContainer>
    </>
  );
};

export default LoveStyleTestPage;
