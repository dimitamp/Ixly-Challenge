import React from 'react';
import {connect} from 'react-redux';
import {StyledButton, StyledContainer} from '../common/ui';
import actions from '../../actions';

export const Component = ({clearAuth}) => (
  <StyledContainer backgroundColor='grey'>
    <StyledButton
      appearance='primary'
      onClick={clearAuth}
    >
   Log out
    </StyledButton>
  </StyledContainer>
);

const mapDispatch = dispatch => ({
  clearAuth: () => {
    dispatch(actions.auth.clear());
  }
});

export default connect(null, mapDispatch)(Component);
