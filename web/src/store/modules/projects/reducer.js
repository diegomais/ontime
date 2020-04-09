import produce from 'immer';

import types from './types';

const initialState = {
  data: [],
  projectModalOpen: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_PROJECTS_SUCCESS:
      return produce(state, (draft) => {
        draft.data = payload.projects;
      });
    case types.OPEN_PROJECT_MODAL:
      return produce(state, (draft) => {
        draft.projectModalOpen = true;
      });
    case types.CLOSE_PROJECT_MODAL:
      return produce(state, (draft) => {
        draft.projectModalOpen = false;
      });
    case types.CREATE_PROJECT_SUCCESS:
      return produce(state, (draft) => {
        draft.data = [...state.data, payload.newProject];
      });
    default:
      return state;
  }
};
