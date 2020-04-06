import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });

    const { token } = response.data;

    localStorage.setItem('@OnTime:token', token);

    yield put(signInSuccess(token));

    history.push('/dashboard');
  } catch (error) {
    console.tron.log(error);
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
