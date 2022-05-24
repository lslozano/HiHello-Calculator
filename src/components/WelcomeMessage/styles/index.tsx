import styled from 'styled-components';
import { colors } from '../../../colors';
import { breakPoints } from '../../../breakPoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-block-end: 18px;
  width: 100%;
  max-width: 350px;

  ${breakPoints.desktop} {
    padding-block-end: 0;
    padding-inline-end: 25px;
  }
`;

export const Message = styled.h1`
  margin: 0;
  color: ${colors.title};
  text-align: center;

  ${breakPoints.desktop} {
    font-size: 2.5rem;
  }
`;

export const Text = styled.p`
  margin: 0;
  color: ${colors.text};
  text-align: center;
  font-size: 1rem;
`;