export function getProjectsRequest() {
  return {
    type: '@projects/GET_PROJECTS_REQUEST',
  };
}

export function getProjectsSuccess(projects) {
  return {
    type: '@projects/GET_PROJECTS_SUCCESS',
    payload: { projects },
  };
}

export function getProjectsFailure() {
  return {
    type: '@projects/GET_PROJECTS_FAILURE',
  };
}
