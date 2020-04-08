import produce from 'immer';

const initialState = {
  data: [],
  active: JSON.parse(localStorage.getItem('@OnTime:Team')) || null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case '@teams/GET_TEAMS_SUCCESS':
      return produce(state, (draft) => {
        draft.data = payload.teams;
      });
    case '@teams/SELECT_TEAM':
      return produce(state, (draft) => {
        draft.active = payload.team;
      });
    default:
      return state;
  }
};
