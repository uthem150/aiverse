import TestContainer from '@/components/common/TestContainer/TestContainer';
import TetoEgneTest from '@/components/features/TetoEgneTest/TetoEgneTest';
import { tetoEgneTestData } from '@/data/tetoEgneTests/tetoEgneBasicTest';

const TetoEgneBasicTestPage = () => {
  return (
    <TestContainer title={tetoEgneTestData.title} description={tetoEgneTestData.description}>
      <TetoEgneTest testData={tetoEgneTestData} />
    </TestContainer>
  );
};

export default TetoEgneBasicTestPage;
