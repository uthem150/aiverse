import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import TetoEgneTest from '@/components/features/TetoEgneTest/TetoEgneTest';
import { tetoEgneMzTestData } from '@/data/tetoEgneTests/tetoEgneMzTest';

const TetoEgneMzTestPage = () => {
  return (
    <PersonalityTestContainer
      title={tetoEgneMzTestData.title}
      description={tetoEgneMzTestData.description}
    >
      <TetoEgneTest testData={tetoEgneMzTestData} />
    </PersonalityTestContainer>
  );
};

export default TetoEgneMzTestPage;
