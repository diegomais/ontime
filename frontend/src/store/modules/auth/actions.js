import types from './types';

function signUpRequest(name, email, password) {
  return {
    type: types.SIGN_UP_REQUEST,
    payload: { name, email, password },
  };
}

function signUpSuccess(token) {
  return {
    type: types.SIGN_UP_SUCCESS,
    payload: { token },
  };
}

function signUpFailure() {
  return {
    type: types.SIGN_UP_FAILURE,
  };
}

function signInRequest(email, password) {
  return {
    type: types.SIGN_IN_REQUEST,
    payload: { email, password },
  };
}

function signInSuccess(token) {
  return {
    type: types.SIGN_IN_SUCCESS,
    payload: { token },
  };
}

function signInFailure() {
  return {
    type: types.SIGN_IN_FAILURE,
  };
}

function signOutRequest() {
  return {
    type: types.SIGN_OUT_REQUEST,
  };
}

function getPermissionsSuccess(roles, permissions) {
  return {
    type: types.GET_PERMISSIONS_SUCCESS,
    payload: { roles, permissions },
  };
}

export default {
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  signInRequest,
  signInSuccess,
  signInFailure,
  signOutRequest,
  getPermissionsSuccess,
};
