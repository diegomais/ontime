import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import { getTeamsSuccess, createTeamSuccess, closeTeamModal } from './actions';

export function* getTeams() {
  const response = yield call(api.get, 'teams');

  yield put(getTeamsSuccess(response.data));
}

export function* createTeam({ payload }) {
  const { name } = payload;

  try {
    const response = yield call(api.post, 'teams', { name });

    yield put(createTeamSuccess(response.data));
    yield put(closeTeamModal());
  } catch (error) {
    // TODO: Create notification
  }
}

export default all([
  takeLatest('@teams/GET_TEAMS_REQUEST', getTeams),
  takeLatest('@teams/CREATE_TEAM_REQUEST', createTeam),
]);
