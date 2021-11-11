import React, { useState, useEffect } from 'react';
import lodash from 'lodash';
// import PulseLoader from 'react-spinners/PulseLoader';
import { jsx, css } from '@emotion/react';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';

import { Images, Colors } from 'constant';

import StyledDiv from './style';

const CustomButton = props => {
  const override = css`
    display: block;
    margin: 0px;

  `;
  const [reRender, setReRender] = useState(false);

  useEffect(() => {
    setReRender(!reRender);
  }, [props.isLoading]);

  const debouncedOnClick = lodash.debounce(
    () => props.onClick ? props.onClick() : null,
    1000,
    {
      leading: true,
      trailing: false,
    }
  );

  return (
    <StyledDiv
      className={ props.className }
      styleType={ props.styleType }
      color={ props.color }
      width={ props.width }
      height={ props.height }
      bgColor={ props.bgColor }
      borderColor={ props.borderColor }
      borderRadius={ props.borderRadius }
      padding={ props.padding }
      marginTop={ props.marginTop }
      disabled={ props.disabled || props.isLoading }
      size={ props.size }
      fontWeight={ props.fontWeight }
      paddingVertical={ props.paddingVertical }
      paddingHorizontal={ props.paddingHorizontal }
      styling={ props.styling }
      isLoading={ props.isLoading }
    >
      <button onClick={ debouncedOnClick } disabled={ props.disabled } style={ props.style }>
        { /* { props.imageIcon &&
            <img src={ props.imageIcon } style={ { marginRight: '7px' } } alt=''/>
        } */ }
        <span className='text'>
          {/* {
            props.isLoading
            ?
            <PulseLoader
              color={
                props.bgColor
                ?
                Colors.black.default
                :
                Colors.black.default
              }
              loading={ true }
              css={ override }
              margin={ 2 }
              size={ isMobile ? 5 : 5 }
            />
            : */}
            props.text
          {/* } */}
        </span>

      </button>
    </StyledDiv>
  );
};

export default CustomButton;
