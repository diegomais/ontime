import produce from 'immer';

import types from './types';

const initialState = {
  membersModalOpen: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.OPEN_MEMBERS_MODAL:
      return produce(state, (draft) => {
        draft.membersModalOpen = true;
      });
    case types.CLOSE_MEMBERS_MODAL:
      return produce(state, (draft) => {
        draft.membersModalOpen = false;
      });

    default:
      return state;
  }
};
