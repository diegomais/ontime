import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import { getTeamsSuccess } from './actions';

export function* teams() {
  const response = yield call(api.get, 'teams');

  yield put(getTeamsSuccess(response.data));
}

export default all([takeLatest('@teams/GET_TEAMS_REQUEST', teams)]);
