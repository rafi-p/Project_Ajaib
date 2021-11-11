import React from 'react';

import { StyledText } from './style';

/**
 * ==========================================================================================
 * @name Text
 * @param {object} props
 * @description component for rendering all text eg: h1- h6, p
 * ==========================================================================================
 */

const Text = ({ color, text, bgColor, padding, lineHeight, styling, ...props }) => {
  return (
    <StyledText
      color={ color }
      bgColor={ bgColor }
      padding={ padding }
      lineHeight= { lineHeight }
      styling= { styling }
      { ...props }
    >
      {text}
    </StyledText>
  );
};

export default Text;
