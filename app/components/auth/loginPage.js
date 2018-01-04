import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router";
import { bindActionCreators } from "redux";
import autoBind from "../../lib/autoBind";
// import * as loginActions from '../../actions/authActions';
import * as authActions from "../../actions/authActions";
import { debug } from "util";
class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    // this.props.dispatch(userActions.logout());

    this.state = {
      email: "",
      password: "",
      submitted: false
    };

    autoBind(this, {
    bindOnly: ['handleChange', 'handleSubmit',]
    });

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
      console.log(email + " " + password);
      this.props.actions.loginUser({ email, password });
    }
  }

  render() {
    const { authenticated } = this.props;
    const { email, password, submitted } = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Login</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div
            className={"form-group" + (submitted && !email ? " has-error" : "")}
          >
            <label htmlFor="email">email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            {submitted &&
              !email && <div className="help-block">email is required</div>}
          </div>
          <div
            className={
              "form-group" + (submitted && !password ? " has-error" : "")
            }
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            {submitted &&
              !password && (
                <div className="help-block">Password is required</div>
              )}
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
            {authenticated}
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authenticated } = state;
  return {
    authenticated
  };
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...authActions }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
