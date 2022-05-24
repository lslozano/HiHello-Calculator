import React from 'react';
import { StyledButton } from './styles';
import { IButton, determineButtonStyles } from '../../Helpers';

const Button: React.FC<IButton> = (props) => {
  const { type, content, onClick } = props;

  let styles: React.CSSProperties = {};

  return (
    <StyledButton style={determineButtonStyles(type, content, styles)} onClick={onClick}>
      {content}
    </StyledButton>
  );
}

export default Button;