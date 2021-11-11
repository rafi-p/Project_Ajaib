import styled from 'styled-components';
import { Colors, Fonts, Images, FontStyles, Sizes } from 'constant';

const primaryDropDown = `
  .Dropdown-root {
    .Dropdown-control {
      // border: 1px solid ${Colors.grey.lineGrey} !important;
      border: none !important;
      outline: none !important;

      .Dropdown-placeholder {
        color: ${Colors.black.default} !important;

      }
    }

    .Dropdown-menu {

      .Dropdown-option {
        color: ${Colors.black.default};
        font-weight: 400;

        &:hover {
          background: ${Colors.yellow.bgDropdown20};
        }
      }

      .is-selected {
        color: ${Colors.yellow.default};
      }
    }
  }
`;

const secondaryDropDown = `
  .Dropdown-root {

    .Dropdown-control {
    }

    .Dropdown-menu {

      .Dropdown-option {
        color: ${Colors.black.default};

        &:hover {
          background: ${Colors.yellow.bgDropdown20};
        }
      }

      .is-selected {
        color: ${Colors.yellow.default};
      }
    }
  }
`;

const modalDropDown = `
  .Dropdown-root {

    .Dropdown-control {
      border-radius: 10px !important;
      border: 1px solid ${Colors.grey.default} !important;
    }

    .Dropdown-menu {

      .Dropdown-option {
        color: ${Colors.black.default};

        &:hover {
          background: ${Colors.yellow.bgDropdown20};
        }
      }

      .is-selected {
        color: ${Colors.yellow.default};
      }
    }
  }
`;

const statusDropDown = `
  .Dropdown-root {

    .Dropdown-control {
      .Dropdown-placeholder {

        color: ${Colors.white.pureWhite} !important;
      }
      .Dropdown-arrow-wrapper {
        img {

          filter: invert(99%) sepia(4%) saturate(221%) hue-rotate(287deg) brightness(150%) contrast(100%) !important;
        }
      }
    }

    .Dropdown-menu {

      .Dropdown-option {
        color: ${Colors.black.default};

        &:hover {
          background: ${Colors.yellow.bgDropdown20};
        }
      }

      .is-selected {
        color: ${Colors.yellow.default};
      }
    }
  }
`;

const dropDownStyle = type => {
  switch (type) {
    case 'primary': return primaryDropDown;
    case 'secondary': return secondaryDropDown;
    case 'shipStatus': return statusDropDown;
    case 'modal': return modalDropDown;
    default: return primaryDropDown;
  }
};

const openToTop = `
    top: unset !important;
    bottom: 100% !important;
    margin-bottom: 10px !important;
`;

const openTop = () => {
  return openToTop;
};

const Container = styled.div`
  ${props => dropDownStyle(props.styleType)};


  .Dropdown-root {
    height: ${props => (props.height ? props.height : '38px')};
    font-family: ${Fonts.manrope};

    font-size: ${props => (
      props.styling
      ? props.styling.size
      : props.size
        ? props.size
        : FontStyles.mediumL.size
    )};
    font-weight: ${props => (
      props.styling
      ? props.styling.weight
      : props.weight
        ? props.weight
        : FontStyles.mediumL.weight
    )};
    line-height: ${props => (
      props.styling
      ? props.styling.lineHeight
      : props.lineHeight
        ? props.lineHeight
        : FontStyles.mediumL.lineHeight
    )};
    /* width: ${props => (props.width ? props.width : '200px')}; */
    min-width: ${props => (props.width ? props.width : '200px')};
    width: fit-content;

    border-radius: 5px;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.02);

    .Dropdown-control {
      display: flex;
      align-items: center;
      padding: 0px 20px;
      height: 100%;
      width: 100%;
      border-radius: 5px;
      border: unset;
      color: ${Colors.black.default};
      justify-content: space-between;
      cursor: pointer;
      background: ${props => (props.background ? props.background : Colors.white.pureWhite)} !important;

      @media ${Sizes.sm} {
        padding: 0px 10px;
      }

      .Dropdown-arrow-wrapper {
        display: flex;
      }

      .Dropdown-placeholder {
        color: ${Colors.grey.default};

        &.is-selected {
          color: ${Colors.black.default};

        }
      }
    }

    .Dropdown-menu {
      border-radius: 5px;
      border: unset;
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      ${props => props.openTop && openTop};

      .Dropdown-option {
        color: ${Colors.black.default};
        padding: 10px 20px;
        transition: all 0.5s;
        &.disabled {
          pointer-events: none;
          opacity: .3;
        }
      }

      .is-selected {
        background: ${Colors.yellow.bgDropdown};
        color: ${Colors.yellow.default};
        position: relative;

      }
    }
  }
`;

export {
  Container,
};
