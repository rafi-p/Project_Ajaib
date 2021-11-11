import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from 'constant';
import Router from 'router';
import { history, store } from 'store';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// console.log = () => {};

const App = () => {
  return (
    <HelmetProvider>
      <Provider store={ store }>
        <BrowserRouter>
          <GlobalStyles/>
          <Router history={ history } />
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  );
};
export default App;
