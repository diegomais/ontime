import produce from 'immer';

import types from './types';

const initialState = {
  token: null,
  signed: false,
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SIGN_IN_SUCCESS:
      return produce(state, (draft) => {
        draft.token = payload.token;
        draft.signed = true;
      });
    case types.SIGN_OUT_REQUEST:
      return produce(state, (draft) => {
        draft.token = null;
        draft.signed = false;
      });
    default:
      return state;
  }
};
