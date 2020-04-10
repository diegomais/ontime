import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import types from './types';
import actions from './actions';

export function* getMembers() {
  const response = yield call(api.get, 'members');

  yield put(actions.getMembersSuccess(response.data));
}

export function* updateMember({ payload }) {
  const { id, roles } = payload;

  try {
    yield call(api.put, `members/${id}`, {
      roles: roles.map((role) => role.id),
    });
  } catch (err) {
    yield put(actions.getMembersRequest());
  }
}

export default all([
  takeLatest(types.GET_MEMBERS_REQUEST, getMembers),
  takeLatest(types.UPDATE_MEMBER_REQUEST, updateMember),
]);
