import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import membersActions from '~/store/modules/members/actions';
import Modal from '~/components/Modal';
import { Button } from '~/components/Button';
import { MembersList } from './styles';

export default function Members() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.members);

  useEffect(() => {
    function getMembers() {
      dispatch(membersActions.getMembersRequest());
    }

    getMembers();
  }, [dispatch]);

  function handleCloseModal() {
    dispatch(membersActions.closeMembersModal());
  }

  return (
    <Modal size="big">
      <h1>Members</h1>

      <form>
        <MembersList>
          {data.map((member) => (
            <li key={member.id}>
              <strong>{member.user.name}</strong>
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
