import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import api from '~/services/api';
import membersActions from '~/store/modules/members/actions';
import Modal from '~/components/Modal';
import { Button } from '~/components/Button';
import { MembersList } from './styles';

export default function Members() {
  const [roles, setRoles] = useState([]);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.members);

  useEffect(() => {
    function getMembers() {
      dispatch(membersActions.getMembersRequest());
    }

    getMembers();
  }, []);

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

  return (
    <Modal size="big">
      <h1>Members</h1>

      <form>
        <MembersList>
          {data.map((member) => (
            <li key={member.id}>
              <strong>{member.user.name}</strong>
              <Select
                isMulti
                options={roles}
                value={member.roles}
                getOptionLabel={(role) => role.name}
                getOptionValue={(role) => role.id}
                onChange={(value) => handleRolesChange(member.id, value)}
              />
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
