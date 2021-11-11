import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { Container } from './style';

const CustomDropdown = props => {
  const { options, defaultOption, placeholder, onSelect, openArrow, closedArrow, className, styleType, width, background, openTop, border, height, styling } = props;
  return (
    <Container
      styleType={ styleType }
      background={ background ? background : null }
      width={ width ? width : null }
      openTop={ openTop }
      border={ border }
      height={ height }
      styling={ styling }
    >
      <Dropdown
        options={ options }
        onChange={ e => onSelect(e) }
        value={ defaultOption ? defaultOption : null }
        placeholder={ placeholder ? placeholder : null }
        arrowClosed={ openArrow ? openArrow : null }
        arrowOpen={ closedArrow ? closedArrow : null }
        className={ className ? className : null }

      />
    </Container>
  );
};

export default CustomDropdown;
