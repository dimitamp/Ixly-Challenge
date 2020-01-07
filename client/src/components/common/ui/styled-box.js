import styled from 'styled-components';
import {Box} from 'rebass';
import {path} from 'ramda';

const StyledBox = styled(Box)`
  height: 500px;
  border-radius: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${path(['theme', 'shadows', 'small'])};
  -webkit-box-shadow: ${path(['theme', 'shadows', 'small'])};
  justify-content: space-evenly;
  background-color: ${path(['theme', 'colors', 'secondary'])};
  padding: 20px;
`;

export default StyledBox;
