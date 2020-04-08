import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getTeamsRequest,
  selectTeam,
  openTeamModal,
  closeTeamModal,
} from '~/store/modules/teams/actions';

import Modal from '~/components/Modal';
import Button from '~/styles/components/Button';
import { Container, TeamList, Team, NewTeam } from './styles';

export default function TeamSwitcher() {
  const [newTeamName, setNewTeamName] = useState('');
  const dispatch = useDispatch();
  const { data, teamModalOpen } = useSelector((state) => state.teams);

  useEffect(() => {
    function getTeams() {
      dispatch(getTeamsRequest());
    }

    getTeams();
  }, [dispatch]);

  function handleSelectTeam(team) {
    dispatch(selectTeam(team));
  }

  function handleOpenModal() {
    dispatch(openTeamModal());
  }

  function handleCloseModal() {
    dispatch(closeTeamModal());
  }

  return (
    <Container>
      <TeamList>
        {data.map((team) => (
          <Team key={team.id} onClick={() => handleSelectTeam(team)}>
            <img
              src={`https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${team.name}`}
              alt={team.name}
            />
          </Team>
        ))}

        <NewTeam onClick={handleOpenModal}>New</NewTeam>
      </TeamList>

      {teamModalOpen && (
        <Modal>
          <h1>Create Team</h1>
          <form onSubmit={() => {}}>
            <span>Team Name</span>
            <input
              name="newTeamName"
              value={newTeamName}
              onChange={(e) => setNewTeamName(e.target.value)}
            />
            <Button type="submit" size="big">
              Save
            </Button>
            <Button onClick={handleCloseModal} size="small" color="gray">
              Cancel
            </Button>
          </form>
        </Modal>
      )}
    </Container>
  );
}
