import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import {
  Text,
  CustomButton,
  CustomInput,
  Breadcrumbs,
  ContainerComponent,
  NotifPopUp,
  HelmetComponent
} from 'components';
import { FontStyles, Images, Colors, Fonts, ConstData } from 'constant';

import {
  Container404
} from './style';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';
import { optionsNotif, LocalStorage } from 'helpers';


const Page404 = props => {
  const history = useHistory();
  const token = LocalStorage.getToken();
  const [role, setRole] = useState(ConstData.roleUser); // 1 = brand manager, 2 = merchandiser, 3 = store


  return (
    <ContainerComponent>
      <HelmetComponent
        title={ 'Not Found' }
        description={ 'Hypefast - Not Found' }
        url={ '' }
      />
      <Container404 token={ token }>
        <div className='container-text'>
          <div className='wrapper-img mb-30'>
            <img src={ Images.icons.notFound } alt='' />
          </div>
          <Text
            styling={
              !isMobile
              ? FontStyles.heading2
              : FontStyles.heading3
            }
            text={ 'Page Not Found' }
            className='mb-20'
          />
          <Text
            styling={
              !isMobile
              ?
              FontStyles.mediumL
              :
              FontStyles.mediumS
            }
            text={ 'We are sorry the page that you requested cannot be found. Please return to the Dashboard'
            }
            color={ Colors.grey.darkGrey }
          />
          {/* {
            !isMobile &&
            <CustomButton
              text={ 'Return to Dashboard' }
              styleType='primary'
              width='250px !important'
              onClick={ () => {
                    history.push('/');
              } }
              className='mt-58'
              styling={
                !isMobile
                ?
                ''
                :
                FontStyles.mediumM
              }
            />
          } */}

        </div>

      </Container404>
    </ContainerComponent>
  );
};

export default Page404;
