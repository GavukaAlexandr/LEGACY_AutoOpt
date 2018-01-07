import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import autoBind from "../../lib/autoBind";
import * as authActions from "../../actions/authActions";

import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import Button from "material-ui/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  menu: {}
});

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      submitted: false
    };

    autoBind(this, {
      bindOnly: ["handleChange", "handleSubmit"]
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
      this.props.actions.loginUser({ email, password });
    }
  }

  render() {
    const { authenticated } = this.props;
    const { email, password, submitted } = this.state;
    const { classes } = this.props;

    return (
      <div className={"loginForm"}>
        <Paper className={"login-form-paper"} elevation={24} square={false}>
          <form name="form" onSubmit={this.handleSubmit}>
            <TextField
              id="email"
              label="Email"
              placeholder="Email"
              className={classes.textField}
              margin="normal"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            {submitted &&
              !email && <div className="help-block">Введите email</div>}
            <TextField
              id="password"
              label="Password"
              placeholder="Password"
              className={classes.textField}
              margin="normal"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            {submitted &&
              !password && <div className="help-block">Введите пароль</div>}
            <Button
              type="submit"
              className={"login-form-button"}
              raised
              color="primary"
            >
              <h3>Войти</h3>
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

LoginPage.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string
};

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

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(LoginPage)
);
