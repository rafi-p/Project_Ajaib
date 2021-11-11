import styled, { css } from 'styled-components';

import { Colors, Fonts, Sizes, FontStyles, Images } from 'constant';

const TextInput = styled.div`
  height: ${props => props.height ? props.height : '40px'};
  width: ${props => props.width ? props.width : '500px'};
  border-radius: 10px;
  background: ${ props => (props.bg ? props.bg : Colors.white.pureWhite)};
  display: flex;
  align-items: center;
  border: ${props => (
    props.textFocus && !props.textArea
    ? `1px solid ${Colors.black.default}`
    : props.textArea
      ? 'unset'
      : `1px solid ${Colors.grey.default}`
  )};
  border: ${props => (props.error && !props.textArea && `1px solid ${Colors.red.default}`)};
  padding: ${ props => (
    !props.textArea
    ? '0px 20px'
    : 'unset'
    )};
  transition: all .5s;

  input {
    width: 100%;
    border-width: 0 !important;
    outline: none !important;
    font-size: ${FontStyles.mediumM.size};
    font-weight: ${ FontStyles.mediumM.weight};
    line-height: ${ FontStyles.mediumM.lineHeight};
    background: ${ props => (props.bg ? props.bg : Colors.white.pureWhite)};

    /* color: ${props => props.textFocus ? `${Colors.black.default}` : `${Colors.grey.default}`}; */

    color: ${Colors.black.default} !important;

    &:focus {
      border-width: 0 !important;
      outline: none !important;
    }
    &::placeholder {
      color: ${`${Colors.grey.default}`};
      opacity: 1; /* Firefox */
    }

    &::-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${`${Colors.grey.default}`};
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
      color: ${`${Colors.grey.default}`};
    }
  }
  .search {
    margin-right: 10px;
  }

  .eye {
    cursor: pointer;
    transition: all .3s;
    height: 20px;
    width: 20px;

    &:hover {
      opacity: .8;
    }
  }

  textarea {
    resize: none;
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '122.5px'};
    border-radius: 10px;
    outline: none;
    /* border: 1px solid ${Colors.grey.default}; */
    border: ${props => (
      props.error
      ? `1px solid ${Colors.red.default}`
      : `1px solid ${Colors.grey.default}`
      )};
    padding: 13px 20px;
    font-size: ${Fonts.sizes.xs};
    font-weight: ${Fonts.fontWeight.medium};
    line-height: ${Fonts.lineHeight.s1};
    transition: all .3s;

    &:focus-within {
        border: 1px solid ${Colors.black.default};

    }
    ::placeholder {
        color: ${Colors.grey.default};
    }
}
`;

const Container = styled.div`

  .mb-5 {
    margin-bottom: 5px !important;
  }

  .mt-8 {
      margin-top: 8px !important;
  }
`;

export {
  TextInput,
  Container
};
