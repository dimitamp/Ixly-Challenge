import React from 'react';
import styled from 'styled-components';
import {Formik} from 'formik';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {validationSchema, handleSubmit} from './form-handler';
import {TextInput} from '../common/form';
import actions from '../../actions';
import {
  StyledHeader,
  StyledBox,
  StyledButton,
  StyledContainer
} from '../common/ui';

const StyledForm = styled.form`
  width: 80%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const SignInButton = styled(StyledButton)`
  width: 80%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export const Component = ({setAuth, history: {push: pushHistory}}) => {
  return (
    <StyledContainer backgroundColor='primary'>
      <StyledBox>
        <StyledHeader>Sign in to Ixly Platform</StyledHeader>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={validationSchema}
          onSubmit={(...formikArgs) =>
            handleSubmit(...formikArgs, {setAuth, pushHistory})}
        >
          {formikProps => (
            <StyledForm onSubmit={formikProps.handleSubmit}>
              <TextInput
                name='email'
                type='email'
                leftIcon='envelope'
                placeholder='Email'
                formikProps={{...formikProps}}
                fill
              />
              <TextInput
                name='password'
                type='password'
                leftIcon='lock'
                placeholder='Password'
                formikProps={{...formikProps}}
                fill
              />
              <SignInButton
                appearance='primary'
                type='submit'
                disabled={formikProps.isSubmitting}
                loading={formikProps.isSubmitting}
                intent='primary'
              >
                Sign in
              </SignInButton>
            </StyledForm>
          )}
        </Formik>
      </StyledBox>
    </StyledContainer>
  );
};

Component.propTypes = {
  setAuth: propTypes.func.isRequired,
  history: propTypes.objectOf(propTypes.any).isRequired
};

const mapDispatch = dispatch => ({
  setAuth: data => {
    dispatch(actions.auth.set(data));
  }
});

export default connect(
  null,
  mapDispatch
)(Component);
