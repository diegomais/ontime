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

function openProjectModal() {
  return {
    type: types.OPEN_PROJECT_MODAL,
  };
}

function closeProjectModal() {
  return {
    type: types.CLOSE_PROJECT_MODAL,
  };
}

function createProjectRequest(title) {
  return {
    type: types.CREATE_PROJECT_REQUEST,
    payload: { title },
  };
}

function createProjectSuccess(newProject) {
  return {
    type: types.CREATE_PROJECT_SUCCESS,
    payload: { newProject },
  };
}

function createProjectFailure() {
  return {
    type: types.CREATE_PROJECT_FAILURE,
  };
}

export default {
  getProjectsRequest,
  getProjectsSuccess,
  getProjectsFailure,
  openProjectModal,
  closeProjectModal,
  createProjectRequest,
  createProjectSuccess,
  createProjectFailure,
};
