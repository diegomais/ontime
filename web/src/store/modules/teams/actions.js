import types from './types';

function getTeamsRequest() {
  return {
    type: types.GET_TEAMS_REQUEST,
  };
}

function getTeamsSuccess(teams) {
  return {
    type: types.GET_TEAMS_SUCCESS,
    payload: { teams },
  };
}

function getTeamsFailure() {
  return {
    type: types.GET_TEAMS_FAILURE,
  };
}

function selectTeam(team) {
  localStorage.setItem('@OnTime:Team', JSON.stringify(team));

  return {
    type: types.SELECT_TEAM,
    payload: { team },
  };
}

function openTeamModal() {
  return {
    type: types.OPEN_TEAM_MODAL,
  };
}

function closeTeamModal() {
  return {
    type: types.CLOSE_TEAM_MODAL,
  };
}

function createTeamRequest(name) {
  return {
    type: types.CREATE_TEAM_REQUEST,
    payload: { name },
  };
}

function createTeamSuccess(newTeam) {
  return {
    type: types.CREATE_TEAM_SUCCESS,
    payload: { newTeam },
  };
}

function createTeamFailure() {
  return {
    type: types.CREATE_TEAM_FAILURE,
  };
}

export default {
  getTeamsRequest,
  getTeamsSuccess,
  getTeamsFailure,
  selectTeam,
  openTeamModal,
  closeTeamModal,
  createTeamRequest,
  createTeamSuccess,
  createTeamFailure,
};
