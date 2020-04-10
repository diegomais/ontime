import types from './types';

function openMembersModal() {
  return {
    type: types.OPEN_MEMBERS_MODAL,
  };
}

function closeMembersModal() {
  return {
    type: types.CLOSE_MEMBERS_MODAL,
  };
}

function getMembersRequest() {
  return {
    type: types.GET_MEMBERS_REQUEST,
  };
}

function getMembersSuccess(members) {
  return {
    type: types.GET_MEMBERS_SUCCESS,
    payload: { members },
  };
}

function getMembersFailure() {
  return {
    type: types.GET_MEMBERS_FAILURE,
  };
}

export default {
  openMembersModal,
  closeMembersModal,
  getMembersRequest,
  getMembersSuccess,
  getMembersFailure,
};
