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
import { Text } from 'components';

import { TextInput, Container } from './style';

const CustomInput = props => {
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

  const onChange = e => {
    let re = /^[\d]+$/;
    const valid = props.validPhone || props.validAlphabet || props.validAlphanumeric || props.validAlphabetSpaces;

    if (props.validAlphabet) {
      re = /^[a-zA-Z]+$/;
    }
    if (props.validAlphabetSpaces) {
      re = /^[a-zA-Z ]*$/;
    }
    if (props.validAlphanumeric) {
      re = /^[a-z0-9]+$/i;
    }

    // if value is not blank, then test the regex

    if ((e.target.value === '' || re.test(e.target.value))) {
      props.setKeyword(e.target.value);
    }
    if (!valid) {
      props.setKeyword(e.target.value);
    }
};

  const [textFocus, setTextFocus] = useState(false);

  const handleKeyDown = e => {
    if (props.onKeyDown && e.key === 'Enter') {
      props.onKeyDown();
    } else {
      return {};
    }
  };

  return (
    <Container
      className={ props.className }
    >
      {
        !props.isSearch &&
        <Text
          styling={ FontStyles.mediumS }
          text={ props.textLabel }
          className='mb-5'
        />
      }

      {
        !props.textArea
        ?
        <TextInput
          textFocus={ textFocus }
          onFocus={ () => setTextFocus(true) }
          onBlur={ () => setTextFocus(false) }
          height={ props.height }
          width={ props.width }
          bg={ props.bg }
          error={ props.errorText }
        >

          {
            props.isSearch &&
            <img src={ textFocus ? Images.icons.searchActive : Images.icons.searchGrey } className='search' alt=''/>
          }
          <input
            value={ props.keyword }
            onChange={ e => onChange(e) }
            type={
              props.showPassword
              ? 'text'
              : props.type
                ? props.type
                : 'password'
            }
            placeholder={ props.placeholder }
            onKeyDown={ e => handleKeyDown(e) }
          />
          {
            props.type === 'password' &&
            <img
              src={ props.showPassword ? Images.icons.openEyeBlack : Images.icons.openEyeGrey }
              className='eye'
              alt=''
              onClick={ () => props.setShowPassword(!props.showPassword) }
            />
          }
          {/* {
            props.isSearch && props.keyword !== '' &&
            <Text
              text='X'
              color={ Colors.yellow.default }
              styling={ props.styling }
              onClick={ () => props.setKeyword('') }
            />
          } */}
        </TextInput>
        :
        <TextInput
          textFocus={ textFocus }
          onFocus={ () => setTextFocus(true) }
          onBlur={ () => setTextFocus(false) }
          height={ props.height }
          width={ props.width }
          bg={ props.bg }
          error={ props.errorText }
          textArea={ props.textArea }
        >
          <textarea
            name={ props.placeholder }
            id={ props.placeholder }
            cols='30'
            rows='10'
            placeholder={ props.placeholder }
            value={ props.keyword }
            onChange={ e => { props.setKeyword(e.target.value); } }
          />
        </TextInput>
      }

      {
        props.errorText &&
        <Text
          styling={ FontStyles.mediumS }
          text={ props.errorText }
          color={ Colors.red.default }
          className='mt-8'
        />
      }
    </Container>
  );
};

export default CustomInput;
