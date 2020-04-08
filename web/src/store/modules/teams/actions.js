export function getTeamsRequest() {
  return {
    type: '@teams/GET_TEAMS_REQUEST',
  };
}

export function getTeamsSuccess(teams) {
  return {
    type: '@teams/GET_TEAMS_SUCCESS',
    payload: { teams },
  };
}

export function getTeamsFailure() {
  return {
    type: '@teams/GET_TEAMS_FAILURE',
  };
}

export function selectTeam(team) {
  localStorage.setItem('@OnTime:Team', JSON.stringify(team));

  return {
    type: '@teams/SELECT_TEAM',
    payload: { team },
  };
}

export function openTeamModal() {
  return {
    type: '@teams/OPEN_TEAM_MODAL',
  };
}

export function closeTeamModal() {
  return {
    type: '@teams/CLOSE_TEAM_MODAL',
  };
}

export function createTeamRequest(name) {
  return {
    type: '@teams/CREATE_TEAM_REQUEST',
    payload: { name },
  };
}

export function createTeamSuccess(newTeam) {
  return {
    type: '@teams/CREATE_TEAM_SUCCESS',
    payload: { newTeam },
  };
}

export function createTeamFailure() {
  return {
    type: '@teams/CREATE_TEAM_FAILURE',
  };
}
