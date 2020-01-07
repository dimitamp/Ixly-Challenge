import {FormGroup} from '@blueprintjs/core';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {layout} from 'styled-system';

const StyledFormGroup = styled(FormGroup).attrs((props) => ({height: props.height, width: props.width}))`
  ${layout};
  margin: 10px 0px;
`;

StyledFormGroup.propTypes = {
  height: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
    propTypes.arrayOf(propTypes.oneOfType([propTypes.number, propTypes.string]))
  ]),
  width: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
    propTypes.arrayOf(propTypes.oneOfType([propTypes.number, propTypes.string]))
  ])
};

StyledFormGroup.defaultProps = {height: [50, 60]};

export default StyledFormGroup;
