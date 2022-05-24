import React, { useState } from 'react';
import styled from 'styled-components';
import WelcomeMessage from './components/WelcomeMessage';
import ErrorMessage from './components/ErrorMessage';
import Output from './components/Output';
import ButtonsGrid from './components/ButtonsGrid';
import { colors } from './colors';
import { breakPoints } from './breakPoints';

const MainContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  background-color: ${colors.mainPurple};

  ${breakPoints.desktop} {
    flex-direction: row;
  }
`;

export const CalculatorContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 320px;
  background-color: ${colors.white};
  border-radius: 16px;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
`;

const App: React.FC = () => {
  const [calculatorData, setCalculatorData] = useState({
    firstValue: '0',
    secondValue: '',
    operator: '',
  })
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const { firstValue, secondValue, operator } = calculatorData;

  const determineResult = () => (secondValue !== '' && operator !== '') ? secondValue : firstValue;

  return (
    <MainContainer>
      <WelcomeMessage />
      <CalculatorContainer>
        {showErrorMessage && <ErrorMessage />}
        <Output result={determineResult()} />
        <ButtonsGrid
          calculatorData={calculatorData}
          setCalculatorData={setCalculatorData}
          setShowErrorMessage={setShowErrorMessage}
        />
      </CalculatorContainer>
    </MainContainer>
  );
};

export default App;
