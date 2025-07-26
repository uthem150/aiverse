import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/layout/Layout/Layout';
import HomePage from '@/pages/HomePage/HomePage';
import TestListPage from '@/pages/TestListPage/TestListPage';

// AI 분석 테스트들
import FaceAgeTestPage from '@/pages/tests/FaceAgeTest/FaceAgeTestPage';
import FaceGradeTestPage from '@/pages/tests/FaceGradeTest/FaceGradeTestPage';
import EyeTestPage from '@/pages/tests/EyeTest/EyeTestPage';
import PersonalColorTestPage from '@/pages/tests/PersonalColorTest/PersonalColorTestPage';
import HogwartsTestPage from '@/pages/tests/HogwartsTest/HogwartsTestPage';
import FlowerTestPage from '@/pages/tests/FlowerTest/FlowerTestPage';

// 성격/연애 테스트들
import MbtiCompatibilityTestPage from '@/pages/tests/PersonalityTest/MbtiCompatibilityTest/MbtiCompatibilityTestPage';
import LoveStyleTestPage from '@/pages/tests/PersonalityTest/LoveStyleTest/LoveStyleTestPage';
import IdealTypeTestPage from '@/pages/tests/PersonalityTest/IdealTypeTest/IdealTypeTestPage';
import BreakupCopingTestPage from '@/pages/tests/PersonalityTest/BreakupCopingTest/BreakupCopingTestPage';
import CommunicationStyleTestPage from '@/pages/tests/PersonalityTest/CommunicationStyleTest/CommunicationStyleTestPage';
import ConflictCopingTestPage from '@/pages/tests/PersonalityTest/ConflictCopingTest/ConflictCopingTestPage';
import ConflictResolutionStyleTestPage from '@/pages/tests/PersonalityTest/ConflictResolutionStyleTest/ConflictResolutionStyleTestPage';
import DatingMethodTestPage from '@/pages/tests/PersonalityTest/DatingMethodTest/DatingMethodTestPage';
import DatingStyleTestPage from '@/pages/tests/PersonalityTest/DatingStyleTest/DatingStyleTestPage';
import DecisionMakingStyleTestPage from '@/pages/tests/PersonalityTest/DecisionMakingStyleTest/DecisionMakingStyleTestPage';
import EarlyRelationshipBehaviorTestPage from '@/pages/tests/PersonalityTest/EarlyRelationshipBehaviorTest/EarlyRelationshipBehaviorTestPage';
import GiftGivingStyleTestPage from '@/pages/tests/PersonalityTest/GiftGivingStyleTest/GiftGivingStyleTestPage';

// MZ 라이프스타일 테스트들
import BurnoutLevelTestPage from '@/pages/tests/PersonalityTest/BurnoutLevelTest/BurnoutLevelTestPage';
import SpendingTypeTestPage from '@/pages/tests/PersonalityTest/SpendingTypeTest/SpendingTypeTestPage';
import GodsaengTypeTestPage from '@/pages/tests/PersonalityTest/GodsaengTypeTest/GodsaengTypeTestPage';
import MbtiOverimmersionTestPage from '@/pages/tests/PersonalityTest/MbtiOverimmersionTest/MbtiOverimmersionTestPage';
import SpendingStyleTestPage from '@/pages/tests/PersonalityTest/SpendingStyleTest/SpendingStyleTestPage';
import TravelStyleTestPage from '@/pages/tests/PersonalityTest/TravelStyleTest/TravelStyleTestPage';

// 엔터테인먼트 테스트들
import OttPreferenceTestPage from '@/pages/tests/PersonalityTest/OttPreferenceTest/OttPreferenceTestPage';
import KpopStyleTestPage from '@/pages/tests/PersonalityTest/KpopStyleTest/kpopStyleTest';
import DeokjilTypeTestPage from '@/pages/tests/PersonalityTest/DeokjilTypeTest/DeokjilTypeTestPage';
import GameTypeTestPage from '@/pages/tests/PersonalityTest/GameTypeTest/GameTypeTestPage';
import MoviePreferenceTestPage from '@/pages/tests/PersonalityTest/MoviePreferenceTest/MoviePreferenceTestPage';
import SteamGamePreferenceTestPage from '@/pages/tests/PersonalityTest/SteamGamePreferenceTest/SteamGamePreferenceTestPage';

// 테토 에겐 테스트들
import TetoEgneBasicTestPage from '@/pages/tests/TetoEgenTest/TetoEgneBasicTest/TetoEgneTestBasicPage';
import TetoEgneMzTestPage from '@/pages/tests/TetoEgenTest/TetoEgneMzTest/TetoEgneMzTestPage';

import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';
import DomesticTravelStyleTestPage from '@/pages/tests/PersonalityTest/DomesticTravelStyleTest/DomesticTravelStyleTestPage';
import OverseasTravelStyleTestPage from '@/pages/tests/PersonalityTest/OverseasTravelStyleTest/OverseasTravelStyleTestPage';

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
        path: 'test/steam-game-preference-test',
        element: <SteamGamePreferenceTestPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
