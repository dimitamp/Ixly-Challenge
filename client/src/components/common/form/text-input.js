import React from 'react';
import propTypes from 'prop-types';
import {InputGroup} from '@blueprintjs/core';
import useWindowSize from '@rehooks/window-size';
import {getFormErrorsField, getInputValueByName} from '../../../lib/utilities';
import {StyledFormGroup} from '../ui';

export const Component = ({
  formikProps: {errors, touched, handleChange, handleBlur, values},
  name,
  leftIcon,
  placeholder,
  intent,
  fill,
  type,
  inline,
  disabled
}) => {
  const {innerWidth} = useWindowSize();
  const large = innerWidth > 600;
  return (
    <StyledFormGroup
      inline={inline}
      intent={getFormErrorsField(name, errors, touched) ? 'danger' : intent}
      helperText={getFormErrorsField(name, errors, touched)}
    >
      <InputGroup
        large={large}
        type={type}
        name={name}
        leftIcon={leftIcon}
        placeholder={placeholder}
        intent={getFormErrorsField(name, errors, touched) ? 'danger' : intent}
        onChange={handleChange}
        onBlur={handleBlur}
        value={getInputValueByName(values, name)}
        fill={fill}
        disabled={disabled}
      />
    </StyledFormGroup>
  );
};

Component.propTypes = {
  formikProps: propTypes.objectOf(propTypes.any).isRequired,
  name: propTypes.string.isRequired,
  leftIcon: propTypes.oneOfType([propTypes.string, propTypes.bool]),
  placeholder: propTypes.string,
  intent: propTypes.oneOf(['primary', 'success', 'warning', 'danger', 'none']),
  fill: propTypes.bool,
  type: propTypes.string,
  inline: propTypes.bool,
  disabled: propTypes.bool
};

Component.defaultProps = {
  placeholder: '',
  leftIcon: false,
  intent: 'none',
  fill: false,
  type: 'text',
  inline: false,
  disabled: false
};

export default Component;
