import React, { useState, useEffect, useMemo, useCallback }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { useLocation, useHistory } from 'react-router-dom';

import {
  Dashboard,
  Page404,
} from 'screens';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';
import { GlobalStyles, ConstData } from 'constant';

import App from './app';
import PrivateRoute from './private';
import { LocalStorage, convert } from 'helpers';

const Router = props => {
  const location = useLocation();
  const history = useHistory();

  let publicRoutes = [
    {
      path: '/',
      component: Dashboard,
    },
    {
      path: '/not-found',
      component: Page404,
    },
  ];

  return (
    <ConnectedRouter history={ props.history }>
      <GlobalStyles />
        <Switch>
          {
            publicRoutes.map(route =>
              <Route
                key={ route.path }
                exact path={ route.path }
                component={ route.component }
              />
            )
          }
          <Redirect to={ '/not-found' }/>
        </Switch>
    </ConnectedRouter>
  );
};

export default Router;
