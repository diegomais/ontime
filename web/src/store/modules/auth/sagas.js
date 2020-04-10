import { call, put, all, select, fork, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import types from './types';
import actions from './actions';

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    const response = yield call(api.post, 'users', { name, email, password });

    const { token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(actions.signInSuccess(token));

    history.push('/dashboard');
  } catch (error) {
    console.tron.log(error);
  }
}

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });

    const { token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(actions.signInSuccess(token));

    history.push('/dashboard');
  } catch (error) {
    console.tron.log(error);
  }
}

export function signOut() {
  history.push('/');
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function* getPermissions() {
  const signed = yield select((state) => state.auth.signed);
  const team = yield select((state) => state.teams.activeTeam);

  if (!signed || !team) {
    return;
  }

  const response = yield call(api.get, 'permissions');

  const { roles, permissions } = response.data;

  yield put(actions.getPermissionsSuccess(roles, permissions));
}

export default all([
  fork(getPermissions),

  takeLatest(types.SIGN_UP_REQUEST, signUp),
  takeLatest(types.SIGN_IN_REQUEST, signIn),
  takeLatest(types.SIGN_OUT_REQUEST, signOut),
  takeLatest(types.PERSIST_REHYDRATE, setToken),
]);
