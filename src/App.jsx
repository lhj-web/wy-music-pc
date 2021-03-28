import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './router';

import HJAppHeader from '@/components/app-header';
import HJAppFooter from '@/components/app-footer';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <HJAppHeader />
        {renderRoutes(routes)}
        <HJAppFooter />
      </div>
    </BrowserRouter>
  );
}
