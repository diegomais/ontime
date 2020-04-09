import produce from 'immer';

const initialState = {
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case '@projects/GET_PROJECTS_SUCCESS':
      return produce(state, (draft) => {
        draft.data = payload.projects;
      });
    default:
      return state;
  }
};
