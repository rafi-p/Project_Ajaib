import React, { useState, useEffect } from 'react';
import lodash from 'lodash';
import { jsx, css } from '@emotion/react';
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
  PaginationTable,
  PageOpt,
  NumberPage
} from './style';

const TablePagination = props => {

  return (

    <PaginationTable>
        <NumberPage>
          <img
            src={ Images.icons.arrowPageLeft }
            alt=''
            className={ `clicked ${props.page === 1 ? 'blocked' : ''}` }
            onClick={ () => {
              if (props.page !== 1) {

                props.setPage && props.setPage(props.page && props.page - 1);
              }
            } }
          />

          <Text
            styling={
              !isMobile
              ?
              FontStyles.mediumL
              :
              FontStyles.mediumXS
            }
            text={ `${props.page}` }
            color={ Colors.black.default }

          />

          <img
            src={ Images.icons.arrowPageRight }
            alt=''
            className={ 'clicked' }
            onClick={ () => {
              props.setPage && props.setPage(props.page && props.page + 1);
            } }
          />
        </NumberPage>
      </PaginationTable>
  );
};

export default TablePagination;
