import React, { useState, useEffect } from 'react';
import lodash from 'lodash';
import { jsx, css } from '@emotion/react';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { Images, Colors, FontStyles } from 'constant';
import {

} from 'components';

import {

} from './style';

const HelmetComponent = props => {
  const headTitle = 'Hypefast';


  return (
    <Helmet>
      <title>{props.title ? `${headTitle} - ${props.title}` : 'Hypefast - Brand Management System' }</title>
      <meta name='title' content={ props.title ? `${headTitle} - ${props.title}` : 'Hypefast - Brand Management System' } />
      <meta property='og:title' content={ props.title ? `${headTitle} - ${props.title}` : 'Hypefast - Brand Management System' } />
      <meta property='twitter:title' content={ props.title ? `${headTitle} - ${props.title}` : 'Hypefast - Brand Management System' } />
      <meta name='description' content={ props.description ? props.description : 'Hypefast - Brand Management System' } />
      <meta property='og:description' content={ props.description ? props.description : 'Hypefast - Brand Management System' } />
      <meta property='twitter:description' content={ props.description ? props.description : 'Hypefast - Brand Management System' } />
      <link rel='canonical' href={ props.url ? props.url : '' } />
      <meta property='og:url' content={ props.url ? props.url : '' } />
      <meta property='twitter:url' content={ props.url ? props.url : '' } />
    </Helmet>
  );
};

export default HelmetComponent;
