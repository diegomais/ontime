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
