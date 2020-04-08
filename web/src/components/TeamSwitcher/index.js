import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTeamsRequest } from '~/store/modules/teams/actions';

import { Container, TeamList, Team } from './styles';

export default function TeamSwitcher() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);

  useEffect(() => {
    function getTeams() {
      dispatch(getTeamsRequest());
    }

    getTeams();
  }, [dispatch]);

  return (
    <Container>
      <TeamList>
        {teams.map((team) => (
          <Team key={team.id}>
            <img
              src={`https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${team.name}`}
              alt={team.name}
            />
          </Team>
        ))}
      </TeamList>
    </Container>
  );
}
