import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/layout/Layout/Layout';
import HomePage from '@/pages/HomePage/HomePage';
import TestListPage from '@/pages/TestListPage/TestListPage';

// 체험관 페이지들 
import CursorExperience from '@/pages/InteractiveExperiencePage/CursorExperience/CursorExperience';
import BackgroundExperience from '@/pages/InteractiveExperiencePage/BackgroundExperience/BackgroundExperience';
import GameExperience from '@/pages/InteractiveExperiencePage/GameExperience/GameExperience';

// 게임들
import TargetShooter from '@/pages/games/TargetShooter/TargetShooter';
import OrbCollector from '@/pages/games/OrbCollector/OrbCollector';

// AI 분석 테스트들
import FaceAgeTestPage from '@/pages/tests/AI_Analysis/FaceAgeTest/FaceAgeTestPage';
import FaceGradeTestPage from '@/pages/tests/AI_Analysis/FaceGradeTest/FaceGradeTestPage';
import EyeTestPage from '@/pages/tests/AI_Analysis/EyeTest/EyeTestPage';
import PersonalColorTestPage from '@/pages/tests/AI_Analysis/PersonalColorTest/PersonalColorTestPage';
import HogwartsTestPage from '@/pages/tests/AI_Analysis/HogwartsTest/HogwartsTestPage';
import FlowerTestPage from '@/pages/tests/AI_Analysis/FlowerTest/FlowerTestPage';

// 성격/연애 테스트들
import MbtiCompatibilityTestPage from '@/pages/tests/Dating_personality/MbtiCompatibilityTest/MbtiCompatibilityTestPage';
import LoveStyleTestPage from '@/pages/tests/Dating_personality/LoveStyleTest/LoveStyleTestPage';
import IdealTypeTestPage from '@/pages/tests/Dating_personality/IdealTypeTest/IdealTypeTestPage';
import BreakupCopingTestPage from '@/pages/tests/Dating_personality/BreakupCopingTest/BreakupCopingTestPage';
import CommunicationStyleTestPage from '@/pages/tests/Dating_personality/CommunicationStyleTest/CommunicationStyleTestPage';
import ConflictCopingTestPage from '@/pages/tests/Dating_personality/ConflictCopingTest/ConflictCopingTestPage';
import ConflictResolutionStyleTestPage from '@/pages/tests/Dating_personality/ConflictResolutionStyleTest/ConflictResolutionStyleTestPage';
import DatingMethodTestPage from '@/pages/tests/Dating_personality/DatingMethodTest/DatingMethodTestPage';
import DatingStyleTestPage from '@/pages/tests/Dating_personality/DatingStyleTest/DatingStyleTestPage';
import DecisionMakingStyleTestPage from '@/pages/tests/Dating_personality/DecisionMakingStyleTest/DecisionMakingStyleTestPage';
import EarlyRelationshipBehaviorTestPage from '@/pages/tests/Dating_personality/EarlyRelationshipBehaviorTest/EarlyRelationshipBehaviorTestPage';
import GiftGivingStyleTestPage from '@/pages/tests/Dating_personality/GiftGivingStyleTest/GiftGivingStyleTestPage';
import DatingCharacterTestPage from '@/pages/tests/Dating_personality/datingCharacterTest/datingCharacterTestPage';

// MZ 라이프스타일 테스트들
import BurnoutLevelTestPage from '@/pages/tests/MZ_LifeStyle/BurnoutLevelTest/BurnoutLevelTestPage';
import SpendingTypeTestPage from '@/pages/tests/MZ_LifeStyle/SpendingTypeTest/SpendingTypeTestPage';
import GodsaengTypeTestPage from '@/pages/tests/MZ_LifeStyle/GodsaengTypeTest/GodsaengTypeTestPage';
import MbtiOverimmersionTestPage from '@/pages/tests/MZ_LifeStyle/MbtiOverimmersionTest/MbtiOverimmersionTestPage';
import SpendingStyleTestPage from '@/pages/tests/MZ_LifeStyle/SpendingStyleTest/SpendingStyleTestPage';
import MentalAgeTestPage from '@/pages/tests/MZ_LifeStyle/mentalAgeTest/mentalAgeTestPage';
import XGenerationTestPage from '@/pages/tests/MZ_LifeStyle/xGenerationTest/xGenerationTestPage';

// 여행 테스트들
import TravelStyleTestPage from '@/pages/tests/Travel/TravelStyleTest/TravelStyleTestPage';
import DomesticTravelStyleTestPage from '@/pages/tests/Travel/DomesticTravelStyleTest/DomesticTravelStyleTestPage';
import OverseasTravelStyleTestPage from '@/pages/tests/Travel/OverseasTravelStyleTest/OverseasTravelStyleTestPage';

// 엔터테인먼트 테스트들
import OttPreferenceTestPage from '@/pages/tests/Entertainment/OttPreferenceTest/OttPreferenceTestPage';
import KpopStyleTestPage from '@/pages/tests/Entertainment/KpopStyleTest/kpopStyleTest';
import DeokjilTypeTestPage from '@/pages/tests/Entertainment/DeokjilTypeTest/DeokjilTypeTestPage';
import GameTypeTestPage from '@/pages/tests/Entertainment/GameTypeTest/GameTypeTestPage';
import MoviePreferenceTestPage from '@/pages/tests/Entertainment/MoviePreferenceTest/MoviePreferenceTestPage';
import SteamGamePreferenceTestPage from '@/pages/tests/Entertainment/SteamGamePreferenceTest/SteamGamePreferenceTestPage';
import KDramaCharacterTestPage from '@/pages/tests/Entertainment/kDramaCharacterTest/kDramaCharacterTestPage';
import AnimalFaceTestPage from '@/pages/tests/Entertainment/animalFaceTest/animalFaceTestPage';

// 스포츠 팬 테스트들
import KboTeamTestPage from '@/pages/tests/SportsFan/kboTeamTest/kboTeamTest';
import OverseasFootballTeamTestPage from '@/pages/tests/SportsFan/overseasFootballTeamTest/overseasFootballTeamTestPage';

// 테토 에겐 테스트들
import TetoEgneBasicTestPage from '@/pages/tests/TetoEgenTest/TetoEgneBasicTest/TetoEgneTestBasicPage';
import TetoEgneMzTestPage from '@/pages/tests/TetoEgenTest/TetoEgneMzTest/TetoEgneMzTestPage';

// 텐서플로우 테스트
import FaceEmotionTestPage from '@/pages/tests/FaceEmotionTest/FaceEmotionTestPage';

// 기존 인터랙티브 테스트들
import ConcentrationTestPage from '@/pages/tests/Interactive/ConcentrationTest/ConcentrationTestPage';

import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';
import InteractiveHub from '@/pages/InteractiveExperiencePage/InteractiveHub/InteractiveHub';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'tests',
        element: <TestListPage />,
      },
      {
        path: 'tests/:category',
        element: <TestListPage />,
      },
      // 인터랙티브 체험관
      {
        path: 'interactive-hub',
        element: <InteractiveHub />,
      },
      {
        path: 'interactive/cursor',
        element: <CursorExperience />,
      },
      {
        path: 'interactive/background',
        element: <BackgroundExperience />,
      },
      {
        path: 'interactive/games',
        element: <GameExperience />,
      },
      // 게임들
      {
        path: 'game/target-shooter',
        element: <TargetShooter />,
      },
      {
        path: 'game/orb-collector',
        element: <OrbCollector />,
      },
      // 기존 인터랙티브 테스트들
      {
        path: 'test/focus-test',
        element: <ConcentrationTestPage />,
      },
      // 텐서플로우 테스트
      {
        path: 'test/face-emotion-test',
        element: <FaceEmotionTestPage />,
      },
      // AI 분석 테스트들
      {
        path: 'test/face-age-test',
        element: <FaceAgeTestPage />,
      },
      {
        path: 'test/face-grade-test',
        element: <FaceGradeTestPage />,
      },
      {
        path: 'test/eye-test',
        element: <EyeTestPage />,
      },
      {
        path: 'test/personal-color-test',
        element: <PersonalColorTestPage />,
      },
      {
        path: 'test/hogwarts-test',
        element: <HogwartsTestPage />,
      },
      {
        path: 'test/flower-test',
        element: <FlowerTestPage />,
      },

      // 연애/성격 테스트들
      {
        path: 'test/love-style-test',
        element: <LoveStyleTestPage />,
      },
      {
        path: 'test/ideal-type-test',
        element: <IdealTypeTestPage />,
      },
      {
        path: 'test/mbti-compatibility-test',
        element: <MbtiCompatibilityTestPage />,
      },
      {
        path: 'test/breakup-coping-test',
        element: <BreakupCopingTestPage />,
      },
      {
        path: 'test/communication-style-test',
        element: <CommunicationStyleTestPage />,
      },
      {
        path: 'test/conflict-coping-test',
        element: <ConflictCopingTestPage />,
      },
      {
        path: 'test/conflict-resolution-style-test',
        element: <ConflictResolutionStyleTestPage />,
      },
      {
        path: 'test/dating-method-test',
        element: <DatingMethodTestPage />,
      },
      {
        path: 'test/dating-style-test',
        element: <DatingStyleTestPage />,
      },
      {
        path: 'test/decision-making-style-test',
        element: <DecisionMakingStyleTestPage />,
      },
      {
        path: 'test/early-relationship-behavior-test',
        element: <EarlyRelationshipBehaviorTestPage />,
      },
      {
        path: 'test/gift-giving-style-test',
        element: <GiftGivingStyleTestPage />,
      },
      {
        path: 'test/dating-character-test',
        element: <DatingCharacterTestPage />,
      },
      {
        path: 'test/ideal-type-match-test',
        element: <IdealTypeTestPage />,
      },

      // MZ 라이프스타일 테스트들
      {
        path: 'test/burnout-level-test',
        element: <BurnoutLevelTestPage />,
      },
      {
        path: 'test/spending-type-test',
        element: <SpendingTypeTestPage />,
      },
      {
        path: 'test/godsaeng-type-test',
        element: <GodsaengTypeTestPage />,
      },
      {
        path: 'test/mbti-overimmersion-test',
        element: <MbtiOverimmersionTestPage />,
      },
      {
        path: 'test/spending-style-test',
        element: <SpendingStyleTestPage />,
      },
      {
        path: 'test/mental-age-test',
        element: <MentalAgeTestPage />,
      },
      {
        path: 'test/x-generation-test',
        element: <XGenerationTestPage />,
      },

      // 여행지 추천 테스트
      {
        path: 'test/travel-style-test',
        element: <TravelStyleTestPage />,
      },
      {
        path: 'test/overseas-travel-style-test',
        element: <OverseasTravelStyleTestPage />,
      },
      {
        path: 'test/domestic-travel-style-test',
        element: <DomesticTravelStyleTestPage />,
      },

      // 테토/에겐 테스트
      {
        path: 'test/teto-egne-basic-test',
        element: <TetoEgneBasicTestPage />,
      },
      {
        path: 'test/teto-egne-mz-test',
        element: <TetoEgneMzTestPage />,
      },

      // 엔터테인먼트 테스트들
      {
        path: 'test/kpop-style-test',
        element: <KpopStyleTestPage />,
      },
      {
        path: 'test/ott-preference-test',
        element: <OttPreferenceTestPage />,
      },
      {
        path: 'test/deokjil-type-test',
        element: <DeokjilTypeTestPage />,
      },
      {
        path: 'test/game-type-test',
        element: <GameTypeTestPage />,
      },
      {
        path: 'test/movie-preference-test',
        element: <MoviePreferenceTestPage />,
      },
      {
        path: 'test/k-drama-character-test',
        element: <KDramaCharacterTestPage />,
      },
      {
        path: 'test/animal-face-test',
        element: <AnimalFaceTestPage />,
      },
      {
        path: 'test/steam-game-preference-test',
        element: <SteamGamePreferenceTestPage />,
      },
      // 스포츠 팬
      {
        path: 'test/kbo-team-test',
        element: <KboTeamTestPage />,
      },
      {
        path: 'test/overseas-football-team-test',
        element: <OverseasFootballTeamTestPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
