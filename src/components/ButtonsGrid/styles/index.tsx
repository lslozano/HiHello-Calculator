import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  padding-block-end: 10px;
  gap: 5px;
  justify-content: center;
  align-content: center;
  min-height: 100%;
  grid-template-columns: repeat(4, 70px);
  grid-template-rows: minmax(70px, auto) repeat(4, 70px);
`;