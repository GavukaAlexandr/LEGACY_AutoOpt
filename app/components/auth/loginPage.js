import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import autoBind from '../../lib/autoBind';
import * as loginActions from '../../actions/authActions';
import LoginForm from './loginForm';
import { loginUser } from '../../actions/authActions';

export class LoginPage extends Component {
  render() {
    return (
      <LoginForm
      loginUser={loginUser}
      />
    );
  }
}

export default LoginPage;
