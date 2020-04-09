import produce from 'immer';

import types from './types';

const initialState = {
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_PROJECTS_SUCCESS:
      return produce(state, (draft) => {
        draft.data = payload.projects;
      });
    default:
      return state;
  }
};