import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import types from './types';
import actions from './actions';

export function* getProjects() {
  const response = yield call(api.get, 'projects');

  yield put(actions.getProjectsSuccess(response.data));
}

export default all([takeLatest(types.GET_PROJECTS_REQUEST, getProjects)]);
