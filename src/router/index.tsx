import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/layout/Layout/Layout';
import HomePage from '@/pages/HomePage/HomePage';
// import TestListPage from '@/pages/TestListPage/TestListPage';
import FaceAgeTestPage from '@/pages/tests/FaceAgeTest/FaceAgeTestPage';
import FaceGradeTestPage from '@/pages/tests/FaceGradeTest/FaceGradeTestPage';
// import MbtiPoroloPage from '@/pages/tests/MbtiPorolo/MbtiPoroloPage';
// import MbtiJewelryPage from '@/pages/tests/MbtiJewelry/MbtiJewelryPage';
// import MbtiStonePage from '@/pages/tests/MbtiStone/MbtiStonePage';
// import MbtiStoryPage from '@/pages/tests/MbtiStory/MbtiStoryPage';
// import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // {
      //   path: 'tests',
      //   element: <TestListPage />,
      // },
      // {
      //   path: 'tests/:category',
      //   element: <TestListPage />,
      // },
      {
        path: 'test/face-age-test',
        element: <FaceAgeTestPage />,
      },
      {
        path: 'test/face-grade-test',
        element: <FaceGradeTestPage />,
      },
      // {
      //   path: 'test/mbti-pororo',
      //   element: <MbtiPoroloPage />,
      // },
      // {
      //   path: 'test/mbti-jewelry',
      //   element: <MbtiJewelryPage />,
      // },
      // {
      //   path: 'test/mbti-stone',
      //   element: <MbtiStonePage />,
      // },
      // {
      //   path: 'test/mbti-story-character',
      //   element: <MbtiStoryPage />,
      // },
      // {
      //   path: '*',
      //   element: <NotFoundPage />,
      // },
    ],
  },
]);
