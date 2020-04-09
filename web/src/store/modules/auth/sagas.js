import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import types from './types';
import actions from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });

    const { token } = response.data;

    localStorage.setItem('@OnTime:Token', token);

    yield put(actions.signInSuccess(token));

    history.push('/dashboard');
  } catch (error) {
    console.tron.log(error);
  }
}

export function signOut() {
  localStorage.removeItem('@OnTime:Token');
  localStorage.removeItem('@OnTime:Team');

  history.push('/');
}

export default all([
  takeLatest(types.SIGN_IN_REQUEST, signIn),
  takeLatest(types.SIGN_OUT_REQUEST, signOut),
]);
