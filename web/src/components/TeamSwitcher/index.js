import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import teamsActions from '~/store/modules/teams/actions';
import authActions from '~/store/modules/auth/actions';

import Modal from '~/components/Modal';
import { Button } from '~/components/Button';
import { Container, TeamList, Team, NewTeam, Logout } from './styles';

export default function TeamSwitcher() {
  const [newTeamName, setNewTeamName] = useState('');
  const dispatch = useDispatch();
  const { data, teamModalOpen } = useSelector((state) => state.teams);

  useEffect(() => {
    function getTeams() {
      dispatch(teamsActions.getTeamsRequest());
    }

    getTeams();
  }, [dispatch]);

  function handleSelectTeam(team) {
    dispatch(teamsActions.selectTeam(team));
  }

  function handleOpenModal() {
    dispatch(teamsActions.openTeamModal());
  }

  function handleCloseModal() {
    dispatch(teamsActions.closeTeamModal());
  }

  function handleLogout() {
    dispatch(authActions.signOutRequest());
  }

  function handleSubmitNewTeam(e) {
    e.preventDefault();

    dispatch(teamsActions.createTeamRequest(newTeamName));
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

        <NewTeam onClick={handleOpenModal}>New Team</NewTeam>
      </TeamList>

      <Logout onClick={handleLogout}>Logout</Logout>

      {teamModalOpen && (
        <Modal>
          <h1>Create Team</h1>
          <form onSubmit={handleSubmitNewTeam}>
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
