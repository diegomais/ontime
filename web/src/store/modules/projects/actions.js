import types from './types';

function getProjectsRequest() {
  return {
    type: types.GET_PROJECTS_REQUEST,
  };
}

function getProjectsSuccess(projects) {
  return {
    type: types.GET_PROJECTS_SUCCESS,
    payload: { projects },
  };
}

function getProjectsFailure() {
  return {
    type: types.GET_PROJECTS_FAILURE,
  };
}

export default {
  getProjectsRequest,
  getProjectsSuccess,
  getProjectsFailure,
};
