/* eslint-disable react/jsx-no-bind */
import React from 'react';
import {
  Route,
  Redirect
 } from 'react-router-dom';

import { LocalStorage } from 'helpers';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = LocalStorage.getToken();
  return (
    <Route
      { ...rest }
      render={ props => {
        return token
          ? (
            <Component { ...props } />
        ) : (
          <Redirect
            to={ {
              pathname: '/login',
            } }
          />
        );
      } }
    />
  );
};

export default PrivateRoute;
