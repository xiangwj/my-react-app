import React, { lazy } from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
// import Discover from '@/views/discover';
// import Download from '@/views/download';
// import Focus from '@/views/focus';
// import Mine from '@/views/mine';
const Discover = lazy(() => import('@/views/discover'));
const Recommand = lazy(() => import('@/views/discover/c-views/recommand'));
// Ensure the correct path to the module
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'));
const Songs = lazy(() => import('@/views/discover/c-views/songs'));
const Djradio = lazy(() => import('@/views/discover/c-views/djradio'));
const Artist = lazy(() => import('@/views/discover/c-views/artist'));

const Download = lazy(() => import('@/views/download'));
const Focus = lazy(() => import('@/views/focus'));
const Mine = lazy(() => import('@/views/mine'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />,
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommand" />,
      },
      {
        path: '/discover/recommand',
        element: <Recommand />,
      },
      {
        path: '/discover/ranking',
        element: <Ranking />,
      },
      {
        path: '/discover/songs',
        element: <Songs />,
      },
      {
        path: '/discover/djradio',
        element: <Djradio />,
      },
      {
        path: '/discover/artist',
        element: <Artist />,
      },
      { path: '/discover/mine', element: <Mine /> },
    ],
  },
  {
    path: '/download',
    element: <Download />,
  },
  {
    path: '/mine',
    element: <Mine />,
  },
  {
    path: '/focus',
    element: <Focus />,
  },
];
export default routes;
