import types from './types';

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

function signFailure() {
  return {
    type: types.SIGN_IN_FAILURE,
  };
}

function signOutRequest() {
  return {
    type: types.SIGN_OUT_REQUEST,
  };
}

export default {
  signInRequest,
  signInSuccess,
  signFailure,
  signOutRequest,
};
