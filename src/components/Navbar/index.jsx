import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import lodash from 'lodash';
import { jsx, css } from '@emotion/react';
import { useHistory } from 'react-router-dom';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';

import { Images, Colors, FontStyles } from 'constant';
import {
  Text,
} from 'components';

import {
  Navbar,
  RightNavbar,
  ProfileNavbar,
  DetailProfile,
  PopOutProfile
} from './style';
import { LocalStorage } from 'helpers';

const NavbarComponent = props => {
  const dispatch = useDispatch();
  const clearTokenNow = LocalStorage.clearToken;
  const clearStorage = LocalStorage.clearStorage;
  const user = LocalStorage.getUserStorage();
  const [open, setOpen] = useState(false);
  const [userStorage, setUserStorage] = useState(user ? user : '');
  const history = useHistory();
  const token = LocalStorage.getToken();

  return (
    <Navbar>
      <img
        src={ Images.logoLogin }
        alt='logo'
        className='hoverAction logoNavbar'
        onClick={ () => { history.push('/'); } }
      />
    </Navbar>
  );
};

export default NavbarComponent;
