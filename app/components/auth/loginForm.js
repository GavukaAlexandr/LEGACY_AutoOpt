import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router";
import autoBind from "../../lib/autoBind";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Button from "material-ui/Button";
import { FormControl, FormHelperText } from "material-ui/Form";
import Input, { InputLabel, InputAdornment } from "material-ui/Input";
import Visibility from "material-ui-icons/Visibility";
import VisibilityOff from "material-ui-icons/VisibilityOff";
import IconButton from "material-ui/IconButton";
import classNames from "classnames";

import { Field, reduxForm } from "redux-form";
import TextField from "material-ui/TextField";

import * as loginActions from '../../actions/authActions';


const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  input: {
    margin: theme.spacing.unit
  }
});

class LoginForm extends Component {
  // constructor(props, context) {
  //   super(props, context);
  //   this.state = {};
  // }

  handleFormSubmit(formProps) {
    console.log(formProps);
    this.props.loginUser(formProps);
  }

  renderTextField(props) {
    return (
      <TextField
        // hintText={props.label}
        // placeholder={props.placeholder}
        // floatingLabelText={props.label}
        // errorText={props.touched && props.error}
        {...props}
      />
    );
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div>
          <span><strong>Error!</strong> {this.props.errorMessage}</span>
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;
    
    return (
      <div className={"loginForm"}>
        <Paper className={"login-form-paper"} elevation={24} square={false}>
          <h1>Войти в систему</h1>
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} noValidate autoComplete="off">
          {this.renderAlert()}
            <Field
              component={this.renderTextField}
              placeholder="Email"
              name="email"
              label="Email"
            />

            <Field
              component={this.renderTextField}
              placeholder="Password"
              name="password"
              label="Password"
            />

            <Button type="submit" className={"login-form-button"} raised color="primary">
              <h3>Войти</h3>
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

function mapStateToProps(state) {  
  return {
    errorMessage: state.auth.error,
    message: state.auth.message
  };
}

// export default withStyles(styles)(LoginForm);
export default reduxForm({
  form: "LoginMaterialUiForm" // a unique identifier for this form
  // validate,
  // asyncValidate
})(LoginForm);
