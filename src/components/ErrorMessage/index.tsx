import styled from 'styled-components';
import { colors } from '../../colors';

const Message = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: ${colors.error};
  position: absolute;
  left: 15px;
  top: 5px;
}
`;

const ErrorMessage = () => {
  return (
    <Message>Please select second operand</Message>
  )
}

export default ErrorMessage;