import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import {
  Navbar,
} from 'components';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';

import {
  Container,
  Content,
} from './style';
import { LocalStorage } from 'helpers';


const ContainerComponent = props => {
  const [isNotFound, setIsNotFound] = useState(false);
  const history = useHistory();


  useEffect(() => {
    switch (history.location.pathname) {
      case '/not-found':
        setIsNotFound(true);
        break;
      default:
        break;
    }
  }, [history.location.pathname]);

  return (
    <Container  id='scroller'>
      <Navbar/>
      <Content
        isNotFound={ isNotFound }
      >
        {props.children ? props.children : <></>}
      </Content>
    </Container>
  );
};

export default ContainerComponent;
