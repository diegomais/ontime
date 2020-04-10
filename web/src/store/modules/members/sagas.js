import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import types from './types';
import actions from './actions';

export function* getMembers() {
  const response = yield call(api.get, 'members');

  yield put(actions.getMembersSuccess(response.data));
}

export default all([takeLatest(types.GET_MEMBERS_REQUEST, getMembers)]);
