import React from 'react';

import { Container, TeamList, Team } from './styles';

export default function TeamSwitcher() {
  return (
    <Container>
      <TeamList>
        <Team>
          <img
            src="https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=Rocketseat"
            alt="Rocketseat"
          />
        </Team>
        <Team>
          <img
            src="https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=Rocketseat"
            alt="Rocketseat"
          />
        </Team>
        <Team>
          <img
            src="https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=Rocketseat"
            alt="Rocketseat"
          />
        </Team>
      </TeamList>
    </Container>
  );
}
