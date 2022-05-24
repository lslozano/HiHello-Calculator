import React from 'react';
import { OutputContainer, OutputText } from './styles';
import { IOutput } from '../../Helpers';

const Output: React.FC<IOutput> = (props) => {
  const { result } = props;

  return (
    <OutputContainer>
      <OutputText>{result}</OutputText>
    </OutputContainer>
  );
};

export default Output