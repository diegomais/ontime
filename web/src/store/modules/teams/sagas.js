import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import types from './types';
import actions from './actions';

export function* getTeams() {
  const response = yield call(api.get, 'teams');

  yield put(actions.getTeamsSuccess(response.data));
}

export function setTeam({ payload }) {
  api.defaults.headers.Team = payload.team.slug;
}

export function* createTeam({ payload }) {
  const { name } = payload;

  try {
    const response = yield call(api.post, 'teams', { name });

    yield put(actions.createTeamSuccess(response.data));
    yield put(actions.selectTeam(response.data));
    yield put(actions.closeTeamModal());
  } catch (error) {
    // TODO: Create notification
  }
}

export default all([
  takeLatest(types.GET_TEAMS_REQUEST, getTeams),
  takeLatest(types.SELECT_TEAM, setTeam),
  takeLatest(types.CREATE_TEAM_REQUEST, createTeam),
]);
