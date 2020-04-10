import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import api from '~/services/api';
import membersActions from '~/store/modules/members/actions';
import Can from '~/components/Can';
import Modal from '~/components/Modal';
import { Button } from '~/components/Button';
import { Invite, MembersList } from './styles';

export default function Members() {
  const [roles, setRoles] = useState([]);
  const [inviteEmail, setInviteEmail] = useState([]);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.members);

  useEffect(() => {
    function getMembers() {
      dispatch(membersActions.getMembersRequest());
    }

    getMembers();
  }, [dispatch]);

  useEffect(() => {
    async function getRoles() {
      const response = await api.get('roles');

      setRoles(response.data);
    }

    getRoles();
  }, []);

  function handleCloseModal() {
    dispatch(membersActions.closeMembersModal());
  }

  function handleRolesChange(id, values) {
    dispatch(membersActions.updateMemberRequest(id, values));
  }

  function handleInvite(e) {
    e.preventDefault();

    dispatch(membersActions.inviteMemberRequest(inviteEmail));

    setInviteEmail('');
  }

  return (
    <Modal size="big">
      <h1>Members</h1>

      <Can checkPermission="create_invites">
        <Invite onSubmit={handleInvite}>
          <input
            name="invite"
            placeholder="Enter email to invite to team"
            value={inviteEmail}
            onChange={(e) => setInviteEmail(e.target.value)}
          />
          <Button type="submit">Send</Button>
        </Invite>
      </Can>

      <form>
        <MembersList>
          {data.map((member) => (
            <li key={member.id}>
              <strong>{member.user.name}</strong>
              <Can checkRole="administrator">
                {(can) => (
                  <Select
                    isMulti
                    isDisabled={!can}
                    options={roles}
                    value={member.roles}
                    getOptionLabel={(role) => role.name}
                    getOptionValue={(role) => role.id}
                    onChange={(value) => handleRolesChange(member.id, value)}
                  />
                )}
              </Can>
            </li>
          ))}
        </MembersList>

        <Button onClick={handleCloseModal} filled={false} color="gray">
          Cancel
        </Button>
      </form>
    </Modal>
  );
}
