import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from 'store';

import DashboardRoutes from './dashboard';

const routes = [
  ...DashboardRoutes,
];

const AppRouter = () => {
  // eslint-disable-next-line no-undef
  const roleUser = localStorage.getItem('role');

  return (
    <ConnectedRouter history={ history }>
      <Switch>
        {
          routes.map(route => {
            const { path, exact, component, role } = route;

            if (role && !role.includes(Number(roleUser))) {
              return null;
            } else {
              return (
                <Route
                  exact={ exact !== false }
                  key={ path }
                  path={ path }
                  component={ component }
                />
              );
            }
          })
        }
      </Switch>
    </ConnectedRouter>
  );
};

export default AppRouter;
