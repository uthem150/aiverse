import TestContainer from '@/components/common/TestContainer/TestContainer';
import TetoEgneTest from '@/components/features/TetoEgneTest/TetoEgneTest';
import { tetoEgneMzTestData } from '@/data/tetoEgneTests/tetoEgneMzTest';

const TetoEgneMzTestPage = () => {
  return (
    <TestContainer title={tetoEgneMzTestData.title} description={tetoEgneMzTestData.description}>
      <TetoEgneTest testData={tetoEgneMzTestData} />
    </TestContainer>
  );
};

export default TetoEgneMzTestPage;
