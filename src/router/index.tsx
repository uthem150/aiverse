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

// 엔터테인먼트 테스트들
import OttPreferenceTestPage from '@/pages/tests/PersonalityTest/OttPreferenceTest/OttPreferenceTestPage';
import KpopStyleTestPage from '@/pages/tests/PersonalityTest/KpopStyleTest/kpopStyleTest';

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
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
