import PersonalityTestContainer from '@/components/common/PersonalityTestContainer/PersonalityTestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { godsaengTypeTestData } from '@/data/personalityTests/godsaengTypeTest';

const GodsaengTypeTestPage = () => {
  return (
    <PersonalityTestContainer
      title={godsaengTypeTestData.title}
      description={godsaengTypeTestData.description}
    >
      <PersonalityTest testData={godsaengTypeTestData} />
    </PersonalityTestContainer>
  );
};

export default GodsaengTypeTestPage;
