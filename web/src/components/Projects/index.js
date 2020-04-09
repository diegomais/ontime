import React from 'react';
import { useSelector } from 'react-redux';

import { Button } from '~/styles/components/Button';
import { Container, Project } from './styles';

export default function Projects() {
  const { activeTeam } = useSelector((state) => state.teams);

  if (!activeTeam) return null;

  return (
    <Container>
      <header>
        <h1>{activeTeam.name}</h1>
        <div>
          <Button onClick={() => {}}>+ New</Button>
          <Button onClick={() => {}}>Members</Button>
        </div>
      </header>

      <Project>
        <p>Skylab App</p>
      </Project>

      <Project>
        <p>Skylab App</p>
      </Project>

      <Project>
        <p>Skylab App</p>
      </Project>

      <Project>
        <p>Skylab App</p>
      </Project>

      <Project>
        <p>Skylab App</p>
      </Project>

      <Project>
        <p>Skylab App</p>
      </Project>

      <Project>
        <p>Skylab App</p>
      </Project>

      <Project>
        <p>Skylab App</p>
      </Project>

      <Project>
        <p>Skylab App</p>
      </Project>
    </Container>
  );
}
