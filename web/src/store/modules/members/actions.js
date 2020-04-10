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

function updateMemberRequest(id, roles) {
  return {
    type: types.UPDATE_MEMBER_REQUEST,
    payload: { id, roles },
  };
}

function updateMemberSuccess() {
  return {
    type: types.UPDATE_MEMBER_SUCCESS,
  };
}

function updateMemberFailure() {
  return {
    type: types.UPDATE_MEMBER_FAILURE,
  };
}

export default {
  openMembersModal,
  closeMembersModal,
  getMembersRequest,
  getMembersSuccess,
  getMembersFailure,
  updateMemberRequest,
  updateMemberSuccess,
  updateMemberFailure,
};
