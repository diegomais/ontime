import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import types from './types';
import actions from './actions';

export function* getProjects() {
  const response = yield call(api.get, 'projects');

  yield put(actions.getProjectsSuccess(response.data));
}

export function* createProject({ payload }) {
  const { title } = payload;

  try {
    const response = yield call(api.post, 'projects', { title });

    yield put(actions.createProjectSuccess(response.data));
    yield put(actions.closeProjectModal());
  } catch (error) {
    // TODO: Create notification
  }
}

export default all([
  takeLatest(types.GET_PROJECTS_REQUEST, getProjects),
  takeLatest(types.CREATE_PROJECT_REQUEST, createProject),
]);
