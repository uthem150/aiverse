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
import CommunicationStyleTestPage from '@/pages/tests/PersonalityTest/CommunicationStyleTest/CommunicationStyleTestPage'; // 추가
import ConflictCopingTestPage from '@/pages/tests/PersonalityTest/ConflictCopingTest/ConflictCopingTestPage'; // 추가
import ConflictResolutionStyleTestPage from '@/pages/tests/PersonalityTest/ConflictResolutionStyleTest/ConflictResolutionStyleTestPage'; // 추가
import DatingMethodTestPage from '@/pages/tests/PersonalityTest/DatingMethodTest/DatingMethodTestPage'; // 추가
import DatingStyleTestPage from '@/pages/tests/PersonalityTest/DatingStyleTest/DatingStyleTestPage'; // 추가
import DecisionMakingStyleTestPage from '@/pages/tests/PersonalityTest/DecisionMakingStyleTest/DecisionMakingStyleTestPage'; // 추가
import EarlyRelationshipBehaviorTestPage from '@/pages/tests/PersonalityTest/EarlyRelationshipBehaviorTest/EarlyRelationshipBehaviorTestPage'; // 추가
import GiftGivingStyleTestPage from '@/pages/tests/PersonalityTest/GiftGivingStyleTest/GiftGivingStyleTestPage'; // 추가

// MZ 라이프스타일 테스트들
import BurnoutLevelTestPage from '@/pages/tests/PersonalityTest/BurnoutLevelTest/BurnoutLevelTestPage'; // 추가
import SpendingTypeTestPage from '@/pages/tests/PersonalityTest/SpendingTypeTest/SpendingTypeTestPage'; // 추가
import GodsaengTypeTestPage from '@/pages/tests/PersonalityTest/GodsaengTypeTest/GodsaengTypeTestPage'; // 추가
import MbtiOverimmersionTestPage from '@/pages/tests/PersonalityTest/MbtiOverimmersionTest/MbtiOverimmersionTestPage'; // 추가
import SpendingStyleTestPage from '@/pages/tests/PersonalityTest/SpendingStyleTest/SpendingStyleTestPage'; // 추가
import TravelStyleTestPage from '@/pages/tests/PersonalityTest/TravelStyleTest/TravelStyleTestPage'; // 추가

// 엔터테인먼트 테스트들
import OttPreferenceTestPage from '@/pages/tests/PersonalityTest/OttPreferenceTest/OttPreferenceTestPage';
import KpopStyleTestPage from '@/pages/tests/PersonalityTest/KpopStyleTest/kpopStyleTest';
import DeokjilTypeTestPage from '@/pages/tests/PersonalityTest/DeokjilTypeTest/DeokjilTypeTestPage'; // 추가
import GameTypeTestPage from '@/pages/tests/PersonalityTest/GameTypeTest/GameTypeTestPage'; // 추가
import MoviePreferenceTestPage from '@/pages/tests/PersonalityTest/MoviePreferenceTest/MoviePreferenceTestPage'; // 추가
import SteamGamePreferenceTestPage from '@/pages/tests/PersonalityTest/SteamGamePreferenceTest/SteamGamePreferenceTestPage'; // 추가

import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';

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
        path: 'test/breakup-coping-test', // 추가
        element: <BreakupCopingTestPage />,
      },
      {
        path: 'test/communication-style-test', // 추가
        element: <CommunicationStyleTestPage />,
      },
      {
        path: 'test/conflict-coping-test', // 추가
        element: <ConflictCopingTestPage />,
      },
      {
        path: 'test/conflict-resolution-style-test', // 추가
        element: <ConflictResolutionStyleTestPage />,
      },
      {
        path: 'test/dating-method-test', // 추가
        element: <DatingMethodTestPage />,
      },
      {
        path: 'test/dating-style-test', // 추가
        element: <DatingStyleTestPage />,
      },
      {
        path: 'test/decision-making-style-test', // 추가
        element: <DecisionMakingStyleTestPage />,
      },
      {
        path: 'test/early-relationship-behavior-test', // 추가
        element: <EarlyRelationshipBehaviorTestPage />,
      },
      {
        path: 'test/gift-giving-style-test', // 추가
        element: <GiftGivingStyleTestPage />,
      },

      // MZ 라이프스타일 테스트들
      {
        path: 'test/burnout-level-test', // 추가
        element: <BurnoutLevelTestPage />,
      },
      {
        path: 'test/spending-type-test', // 추가
        element: <SpendingTypeTestPage />,
      },
      {
        path: 'test/godsaeng-type-test', // 추가
        element: <GodsaengTypeTestPage />,
      },
      {
        path: 'test/mbti-overimmersion-test', // 추가
        element: <MbtiOverimmersionTestPage />,
      },
      {
        path: 'test/spending-style-test', // 추가
        element: <SpendingStyleTestPage />,
      },
      {
        path: 'test/travel-style-test', // 추가
        element: <TravelStyleTestPage />,
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
        path: 'test/deokjil-type-test', // 추가
        element: <DeokjilTypeTestPage />,
      },
      {
        path: 'test/game-type-test', // 추가
        element: <GameTypeTestPage />,
      },
      {
        path: 'test/movie-preference-test', // 추가
        element: <MoviePreferenceTestPage />,
      },
      {
        path: 'test/steam-game-preference-test', // 추가
        element: <SteamGamePreferenceTestPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
