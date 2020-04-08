import produce from 'immer';

const initialState = {
  data: [],
  active: JSON.parse(localStorage.getItem('@OnTime:Team')) || null,
  teamModalOpen: false,
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
    case '@teams/OPEN_TEAM_MODAL':
      return produce(state, (draft) => {
        draft.teamModalOpen = true;
      });
    case '@teams/CLOSE_TEAM_MODAL':
      return produce(state, (draft) => {
        draft.teamModalOpen = false;
      });
    default:
      return state;
  }
};
