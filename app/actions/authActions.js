import { push } from 'react-router-redux';
import axios from "axios";
import { browserHistory } from "react-router";
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  PROTECTED_TEST
} from "./actionTypes";
import jwtDecode from "jwt-decode";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const HOST = `http://${window.location.host}`;
const API_BASE_URL = `${HOST}/api`;
// const CLIENT_ROOT_URL = `${HOST}/app`;

export function errorHandler(dispatch, error, type) {
  let errorMessage = "";

  if (error.data.error) {
    errorMessage = error.data.error;
  } else if (error.data) {
    errorMessage = error.data;
  } else {
    errorMessage = error;
  }

  if (error.status === 401) {
    dispatch({
      type: type,
      payload: "You are not authorized to do this. Please login and try again."
    });
    logoutUser();
  } else {
    dispatch({
      type: type,
      payload: errorMessage
    });
  }
}
    //FIXME: create middleware for global set headers

export function loginUser({ email, password }) {
  return function(dispatch) {
    axios
      .post(`${API_BASE_URL}/login`, { email, password })
      .then(response => {
        cookies.set("token", response.data.token, { path: "/" });
        let decodedToken = jwtDecode(cookies.get("token"));
        let user = decodedToken.user;
        dispatch({ type: AUTH_USER, user });
      })
      .then(() => {
        dispatch(push("/app/orders/"));
      })
      .catch(error => {
        // errorHandler(dispatch, error.response, AUTH_ERROR);
      });
  };
}

export function logoutUser() {
  return function(dispatch) {
    dispatch({ type: UNAUTH_USER });
    cookies.remove("token", { path: "/" });
    dispatch(push("/app/login/"));
  };
}

// export function registerUser({ email, firstName, lastName, password }) {
//   return function(dispatch) {
//     axios.post(`${API_URL}/auth/register`, { email, firstName, lastName, password })
//     .then(response => {
//       cookie.save('token', response.data.token, { path: '/' });
//       dispatch({ type: AUTH_USER });
//       window.location.href = CLIENT_ROOT_URL + '/dashboard';
//     })
//     .catch((error) => {
//       errorHandler(dispatch, error.response, AUTH_ERROR)
//     });
//   }
// }
