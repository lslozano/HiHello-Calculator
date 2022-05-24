import styled from 'styled-components';
import { colors } from '../../../colors';

export const StyledButton = styled.button`
  padding: 10px;
  background-color: ${colors.white};
  border: none;
  border-radius: 50px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.buttonText};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;

  :focus {
    background-color: ${colors.mainPurple};
    color: ${colors.white};
    box-shadow: none;
    border: 5px solid;
    border-color: ${colors.mainPurple};
  }
`;