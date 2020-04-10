import React from 'react';
import { useDispatch } from 'react-redux';

import membersActions from '~/store/modules/members/actions';
import Modal from '~/components/Modal';
import { Button } from '~/components/Button';
import { MembersList } from './styles';

export default function Members() {
  const dispatch = useDispatch();

  function handleCloseModal() {
    dispatch(membersActions.closeMembersModal());
  }

  return (
    <Modal size="big">
      <h1>Members</h1>

      <form>
        <MembersList>
          <li>Diego Mais</li>
          <li>Laura Option</li>
          <li>Andreia More</li>
        </MembersList>

        <Button onClick={handleCloseModal} filled={false} color="gray">
          Cancel
        </Button>
      </form>
    </Modal>
  );
}
