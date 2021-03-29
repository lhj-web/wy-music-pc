import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import routes from './router';
import store from './store';

import HJAppHeader from '@/components/app-header';
import HJAppFooter from '@/components/app-footer';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <HJAppHeader />
          {renderRoutes(routes)}
          <HJAppFooter />
        </div>
      </BrowserRouter>
    </Provider>
  );
}
