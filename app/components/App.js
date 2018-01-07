import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { store } from "./../index";
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  PROTECTED_TEST
} from "./../actions/actionTypes";
import Header from "./common/Header";
import Cookies from "universal-cookie";
const cookies = new Cookies();

import jwtDecode from "jwt-decode";
import index from "axios";

//import Footer from './common/Footer';

// This component handles the App template used on every page.
class App extends React.Component {
  static onEnter(nextState, replace) {
    let token = cookies.get("token");
    //FIXME: get auth status from redux store, and check valid for jwt before login
    const pathname = nextState.location.pathname;

    if (pathname == "/app/login/") {
      return true;
    } else {
      if (token) {
        let decodedToken = jwtDecode(token);
        let user = decodedToken.user;
        store.dispatch({ type: AUTH_USER, user });
        
        return true;
      } else {
        replace("/app/login/");
      }
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="">{this.props.children}</div>
        {/* <hr /> */}
        {/* <Footer/> */}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default connect()(App);
