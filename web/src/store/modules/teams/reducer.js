import produce from 'immer';

import types from './types';

const initialState = {
  data: [],
  activeTeam: JSON.parse(localStorage.getItem('@OnTime:Team')) || null,
  teamModalOpen: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_TEAMS_SUCCESS:
      return produce(state, (draft) => {
        draft.data = payload.teams;
      });
    case types.SELECT_TEAM:
      return produce(state, (draft) => {
        draft.activeTeam = payload.team;
      });
    case types.OPEN_TEAM_MODAL:
      return produce(state, (draft) => {
        draft.teamModalOpen = true;
      });
    case types.CLOSE_TEAM_MODAL:
      return produce(state, (draft) => {
        draft.teamModalOpen = false;
      });
    case types.CREATE_TEAM_SUCCESS:
      return produce(state, (draft) => {
        draft.data = [...state.data, payload.newTeam];
      });
    default:
      return state;
  }
};
