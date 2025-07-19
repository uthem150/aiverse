import TestContainer from '@/components/common/TestContainer/TestContainer';
import PersonalityTest from '@/components/features/PersonalityTest/PersonalityTest';
import { godsaengTypeTestData } from '@/data/personalityTests/godsaengTypeTest';

const GodsaengTypeTestPage = () => {
  return (
    <TestContainer
      title={godsaengTypeTestData.title}
      description={godsaengTypeTestData.description}
    >
      <PersonalityTest testData={godsaengTypeTestData} />
    </TestContainer>
  );
};

export default GodsaengTypeTestPage;
