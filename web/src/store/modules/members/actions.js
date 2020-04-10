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

export default {
  openMembersModal,
  closeMembersModal,
};
