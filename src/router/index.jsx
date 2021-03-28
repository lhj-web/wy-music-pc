import React from 'react';
import { Redirect } from 'react-router-dom';

import HJDiscover from '@/pages/discover';
import HJRecommend from '@/pages/discover/c-pages/recommend';
import HJAlbum from '@/pages/discover/c-pages/album';
import HJArtist from '@/pages/discover/c-pages/artist';
import HJDjRadio from '@/pages/discover/c-pages/dj-radio';
import HJSongs from '@/pages/discover/c-pages/songs';
import HJRanking from '@/pages/discover/c-pages/ranking';

import HJMine from '@/pages/mine';
import HJFriends from '@/pages/friends';

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
