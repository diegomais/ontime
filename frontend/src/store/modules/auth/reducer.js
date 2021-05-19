import produce from 'immer';

import types from './types';

const initialState = {
  token: null,
  signed: false,
  loading: false,
  roles: [],
  permissions: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SIGN_IN_SUCCESS:
    case types.SIGN_UP_SUCCESS:
      return produce(state, (draft) => {
        draft.token = payload.token;
        draft.signed = true;
      });
    case types.GET_PERMISSIONS_SUCCESS:
      return produce(state, (draft) => {
        draft.roles = payload.roles;
        draft.permissions = payload.permissions;
      });
    case types.SIGN_OUT_REQUEST:
      return initialState;
    default:
      return state;
  }
};
