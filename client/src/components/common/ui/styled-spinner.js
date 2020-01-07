import {Spinner} from '@blueprintjs/core';
import {path} from 'ramda';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledSpinner = styled(Spinner).attrs((props) => ({
  intent: props.intent,
  size: props.size,
  className: props.class
}))`
 color: ${path(['theme', 'colors', 'primary'])};
`;

export default StyledSpinner;

StyledSpinner.propTypes = {
  intent: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number]),
  class: propTypes.string
};

StyledSpinner.defaultProps = {
  intent: 'primary',
  size: 50,
  class: ''
};
