import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import TetoEgneTest from '@/components/features/TetoEgneTest/TetoEgneTest';
import { tetoEgneTestData } from '@/data/tetoEgneTests/tetoEgneBasicTest';

const TetoEgneBasicTestPage = () => {
  return (
    <PersonalityTestContainer
      title={tetoEgneTestData.title}
      description={tetoEgneTestData.description}
    >
      <TetoEgneTest testData={tetoEgneTestData} />
    </PersonalityTestContainer>
  );
};

export default TetoEgneBasicTestPage;
