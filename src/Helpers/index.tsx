import { Dispatch, SetStateAction } from 'react';
import { colors } from '../colors';

/* ENUMS */

// Helps determine button type
export enum ButtonTypes {
  Number = "NUMBER",
  Operator = "OPERATOR",
  Function = "FUNCTION",
  Equal = "EQUAL",
}

/* TYPES */

// Type for Calculator Button
export type IButton = React.HTMLProps<HTMLButtonElement> & {
  type: string,
  content: string,
}

// Establishes Calculator Data Type - Helps storing information
export type CalculatorData = {
  firstValue: string,
  secondValue: string,
  operator: string,
}

/* INTERFACES */

// Interface for Output of Calculator
export interface IOutput {
  result: string,
}

// Establishes the information the Calculator Buttons Grid will receive
export interface IButtonsGrid {
  calculatorData: CalculatorData,
  setCalculatorData: Dispatch<SetStateAction<CalculatorData>>,
  setShowErrorMessage: Dispatch<SetStateAction<boolean>>,
}

/* FUNCTIONS */

// Helper function to determine button styles
export const determineButtonStyles = (type: string, content: string, styles: React.CSSProperties) => {
  switch(type) {
    case 'FUNCTION':
      if (content === 'DEL') {
        styles.backgroundColor = colors.clearBtns;
        styles.color = colors.white;
      } else {
        styles.gridColumn = '2 / -2';
        styles.backgroundColor = colors.clearBtns;
        styles.color = colors.white;
      }
      break;
    case 'NUMBER':
      if (content === '0') {
        styles.gridColumn = '1 / -3';
      }
      break;
    case 'OPERATOR':
      styles.backgroundColor = colors.secondaryPurple;
      styles.color = colors.ctaBtn;
      break;
    case 'EQUAL':
      styles.backgroundColor = colors.ctaBtn;
      styles.color = colors.white;
      break;
    default:
      break;
  }

  return styles;
}