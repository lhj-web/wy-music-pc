import React from 'react';
import { Redirect } from 'react-router-dom';
import HJSongs from '@/pages/discover/c-pages/songs';
import HJRanking from '@/pages/discover/c-pages/ranking';

import HJMine from '@/pages/mine';
import HJFriends from '@/pages/friends';

const HJDiscover = React.lazy(() => import('@/pages/discover'));
const HJRecommend = React.lazy(() => import('@/pages/discover/c-pages/recommend'));
const HJAlbum = React.lazy(() => import('@/pages/discover/c-pages/album'));
const HJArtist = React.lazy(() => import('@/pages/discover/c-pages/artist'));
const HJDjRadio = React.lazy(() => import('@/pages/discover/c-pages/dj-radio'));

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to='/discover' />,
  },
  {
    path: '/discover',
    component: HJDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to={'/discover/recommend'} />,
      },
      {
        path: '/discover/recommend',
        component: HJRecommend,
      },
      {
        path: '/discover/ranking',
        component: HJRanking,
      },
      {
        path: '/discover/songs',
        component: HJSongs,
      },
      {
        path: '/discover/djradio',
        exact: true,
        component: HJDjRadio,
      },
      {
        path: '/discover/artist',
        component: HJArtist,
      },
      {
        path: '/discover/album',
        component: HJAlbum,
      },
      // {
      //   path: "/discover/player",
      //   component: HJPlayer
      // }
    ],
  },
  {
    path: '/mine',
    component: HJMine,
  },
  {
    path: '/friends',
    component: HJFriends,
  },
];

export default routes;
