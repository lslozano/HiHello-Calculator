import React from 'react';
import { GridContainer } from './styles';
import Button from '../Button';
import { ButtonTypes, IButtonsGrid, CalculatorData } from '../../Helpers';

const ButtonsGrid: React.FC<IButtonsGrid> = (props) => {
  const { calculatorData, setCalculatorData, setShowErrorMessage } = props;
  const { firstValue, secondValue, operator } = calculatorData;
  const { Number, Operator, Function, Equal } = ButtonTypes;
  const buttons = [
    'DEL', 'AC', '÷', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=',
  ];
  let number: string;

  const updateCalculatorDisplay = (number: string) => {
    // Establish first value.
    if (secondValue === '' && operator === '') {
      return setCalculatorData((prevState: CalculatorData) => {
        return { ...prevState, firstValue: number };
      });
    // When operator exists, we know we have our first value.
    } else if (operator !== '') {
      return setCalculatorData((prevState: CalculatorData) => {
        return { ...prevState, secondValue: number };
      });
    }
  }

  const calculateTotal = () => {
    // Parse float to turn into a number and account for decimals.
    const prevValue = parseFloat(firstValue);

    if (secondValue === '') {
      return setShowErrorMessage(true);
    }

    const currentValue = parseFloat(secondValue);
    let total = 0;

    switch(operator) {
      case '÷':
        total = prevValue / currentValue;
        break;
      case '*':
        total = prevValue * currentValue;
        break;
      case '-':
        total = prevValue - currentValue;
        break;
      case '+':
        total = prevValue + currentValue;
        break;
      default:
        break;
    }

    setShowErrorMessage(false);
    return setCalculatorData((prevState: CalculatorData) => {
      return { ...prevState, firstValue: total.toString(), secondValue: '' };
    })
  }

  const handleButtonClick = (type: string, operand: string) => {
    if (type === Number) {
      // First case scenario. Calculator just booted.
      if (secondValue === '' && firstValue === '0') {
        if (operand === '0') return;

        if (operand !== '0') {
          if (operand === '.') {
            number = `${firstValue}${operand}`;
            return updateCalculatorDisplay(number);
          }

          return updateCalculatorDisplay(operand);
        }
      }

      // User established first value.
      if (firstValue !== '0') {
        // Do not allow extra dots.
        if ((firstValue.includes('.') || secondValue.includes('.')) && operand === '.') return;

        // Keep adding to first value.
        if (operator === '') {
          number = `${firstValue}${operand}`;
          return updateCalculatorDisplay(number);
        } else {
          // When there's an operator, add to second value.
          if (secondValue === '0') {
            return updateCalculatorDisplay(operand);
          }

          number = `${secondValue}${operand}`;
          return updateCalculatorDisplay(number);
        }
      }
    }

    if (type === Operator) {
      if (secondValue === '' && firstValue === '0') return;

      if (secondValue === '' && firstValue !== '0') {
        return setCalculatorData((prevState: CalculatorData) => {
          return { ...prevState, operator: operand};
        })
      }

      if (operator) {
        return calculateTotal();
      }
    }

    if (type === Function) {
      if (operand === 'AC') {
        setShowErrorMessage(false);
        return setCalculatorData(() => {
          return {  firstValue: '0', secondValue: '', result: '', operator: ''};
        })
      }

      if (operand === 'DEL') {
        // Delete everything if user isn't at second step.
        if (secondValue === '') {
          setShowErrorMessage(false);
          return setCalculatorData(() => {
            return { firstValue: '0', secondValue: '', result: '', operator: '' };
          })
        }

        // Delete from second value.
        const numberSliced = secondValue.slice(0, -1);

        if (numberSliced === '') {
          return setCalculatorData((prevState: CalculatorData) => {
            return { ...prevState, secondValue: '0' };
          })
        } else {
          return setCalculatorData((prevState: CalculatorData) => {
            return { ...prevState, secondValue: numberSliced };
          })
        }
      }
    }

    if (type === Equal) {
      calculateTotal();
    }
  };

  // Creates buttons depending on their operator.
  const createButtons = (operator: string, index: number) => {
    if (operator === 'DEL' || operator === 'AC') {
      return <Button key={index} type={Function} content={operator} onClick={() => handleButtonClick(Function, operator)}/>
    }

    if (
      operator === '÷' ||
      operator === '*' ||
      operator === '-' ||
      operator === '+'
    ) {
      return <Button key={index} type={Operator} content={operator} onClick={() => handleButtonClick(Operator, operator)} />
    }

    if (operator === '=') {
      return <Button key={index} type={Equal} content={operator}  onClick={() => handleButtonClick(Equal, operator)} />
    }

    return <Button key={index} type={Number} content={operator} onClick={() => handleButtonClick(Number, operator)} />
  }

  return (
    <GridContainer>
      {buttons.map((operator: string, index: number) => createButtons(operator, index))}
    </GridContainer>
  )
}

export default ButtonsGrid;
