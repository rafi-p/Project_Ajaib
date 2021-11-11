import styled, { css } from 'styled-components';

import { Colors, Fonts, Sizes, FontStyles, Images } from 'constant';

const primaryBtn = `
  background-color: ${Colors.black.default};
  border-style: none;

  span {
    color: ${Colors.white.pureWhite};
  }

  &:hover {
    background-color: ${Colors.yellow.primary20};


    span {
      color: ${Colors.yellow.default};
    }
  }
`;

const inversePrimaryBtn = `
  background-color: transparent;
  border: 1px solid ${Colors.black.default};

  &:hover {
    border: 1px solid ${Colors.yellow.default};

    span {
      color: ${Colors.yellow.default};
    }
  }

  span {
    color: ${Colors.black.default};
  }
`;

const disabledPrimaryBtn = `
  background-color: ${Colors.grey.lineGrey} !important;
  cursor: not-allowed;
  border-style: none;

  span {
    color: ${Colors.grey.default};
  }
`;

const disabledInversePrimaryBtn = `
  background-color: transparent;
  border: 1px solid ${Colors.grey.default} !important;
  cursor: not-allowed;
  border-style: none;

  span {
    color: ${Colors.grey.default};
  }
`;

const buttonStyle = type => {
  switch (type) {
    case 'primary': return primaryBtn;
    case 'inversePrimary': return inversePrimaryBtn;
    case 'disablePrimary': return disabledPrimaryBtn;
    case 'disableinversePrimary': return disabledInversePrimaryBtn;
    default: return primaryBtn;
  }
};


const imageBtn = `
  color: ${Colors.white.pureWhite};
`;

const imageStyle = type => {
  switch (type) {
    case 'primary': return imageBtn;
    case 'inversePrimary': return inversePrimaryBtn;
    case 'disablePrimary': return disabledPrimaryBtn;
    case 'disableinversePrimary': return disabledInversePrimaryBtn;
    default: return imageBtn;
  }
};

const StyledDiv = styled.div`
  width: ${props => props.width ? props.width : '133px'};
  button {
    ${props => buttonStyle(props.styleType)};
    ${props => css`padding: ${props => props.padding ? props.padding : 'unset'}`};
    ${props => props.bgColor && css`background-color: ${props => props.bgColor}`};
    ${props => props.borderColor && css`border: 1px solid ${props => props.borderColor}`};
    ${props => props.disabled && css`
      // background-color: ${Colors.black.default};
      // border: 1px solid ${Colors.black.default};
      opacity: 0.2;
    `}
    width: ${props => props.width ? props.width : '133px'};

    height: ${props => props.height ? props.height : '44px'};
    border-radius: ${props => props.borderRadius ? props.borderRadius : '5px'};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    white-space: nowrap;

    span {
      ${props => props.color && css`color: ${props => props.color}`};
    }

    .text {
      ${props => props.color && css`color: ${props => props.color}`};
      ${props => props.disabled && css`color: ${Colors.grey.default}`};
      transition: all 0.3s;

      font-size: ${props => (
        props.styling
        ? props.styling.size
        : props.size
          ? props.size
          : FontStyles.boldL.size
      )};
      font-weight: ${props => (
        props.styling
        ? props.styling.weight
        : props.weight
          ? props.weight
          : FontStyles.boldL.weight
      )};
      line-height: ${props => (
        props.styling
        ? props.styling.lineHeight
        : props.lineHeight
          ? props.lineHeight
          : FontStyles.boldL.lineHeight
      )};
      /* padding-top: ${props => (
        props.paddingVertical && props.isLoading &&
        props.paddingVertical
      )};
      padding-bottom:  ${props => (
        props.paddingVertical && props.isLoading &&
        props.paddingVertical
      )};
      padding-left:  ${props => (
        props.paddingHorizontal && props.isLoading &&
        props.paddingHorizontal
      )};
      padding-right: ${props => (
        props.paddingHorizontal && props.isLoading &&
        props.paddingHorizontal
      )}; */

      .loading {
        height: 35px;
        width: auto;
      }
    }



    ${props => (props.styleType !== 'disablePrimary' || props.styleType !== 'disableinversePrimary') && props.disabled !== true && `

      &:hover {
        opacity: 0.8;
      }
    `}

    &:focus {
      outline: none;

    }
  }
`;

export default StyledDiv;
