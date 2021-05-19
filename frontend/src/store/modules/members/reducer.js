import produce from 'immer';

import types from './types';

const initialState = {
  data: [],
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
    case types.GET_MEMBERS_SUCCESS:
      return produce(state, (draft) => {
        draft.data = payload.members;
      });
    case types.UPDATE_MEMBER_REQUEST:
      return produce(state, (draft) => {
        draft.data = draft.data.map((member) =>
          member.id === payload.id
            ? { ...member, roles: payload.roles }
            : member
        );
      });
    default:
      return state;
  }
};
