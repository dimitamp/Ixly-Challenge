import {Box} from 'rebass';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {space} from 'styled-system';
import {path} from 'ramda';

const StyledContainer = styled(Box).attrs(() => ({padding: [2, 3, 4]}))`
  display: flex;
  flex: 1;
  height: 100vh;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-direction: ${props => props.flexDirection};
  background-color: ${props => path(['theme', 'colors', props.backgroundColor]) || props.backgroundColor};
  ${space}
`;

StyledContainer.propTypes = {
  justifyContent: propTypes.string,
  alignItems: propTypes.string,
  flexDirection: propTypes.string,
  backgroundColor: propTypes.string
};

StyledContainer.defaultProps = {
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  backgroundColor: 'grey'
};

export default StyledContainer;
