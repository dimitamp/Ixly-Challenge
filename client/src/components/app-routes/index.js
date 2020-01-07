import React from 'react';
import {
  Route, Switch, Redirect
} from 'react-router-dom';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import SignInScreen from '../sign-in';
import ProfileScreen from '../profile';
import {checkIsAuthenticated} from '../../lib/utilities';

const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to='/user/login' />}
  />
);

const OnlyForGuestRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Redirect to='/user/profile' /> : <Component {...props} />}
  />
);

export const Component = ({isAuthenticated}) => (
  <Switch>
    <OnlyForGuestRoute
      path='/user/login'
      isAuthenticated={isAuthenticated}
      component={SignInScreen}
    />
    <PrivateRoute
      exact
      path='/user/profile'
      isAuthenticated={isAuthenticated}
      component={ProfileScreen}
    />
    <Redirect from='*' to='/user/login' />
  </Switch>
);

Component.propTypes = {isAuthenticated: propTypes.bool.isRequired};

const mapState = state => ({isAuthenticated: checkIsAuthenticated(state)});

export default connect(mapState)(Component);
