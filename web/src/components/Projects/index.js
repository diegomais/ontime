import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProjectsRequest } from '~/store/modules/projects/actions';
import { Button } from '~/styles/components/Button';
import { Container, Project } from './styles';

export default function Projects() {
  const dispatch = useDispatch();
  const { activeTeam } = useSelector((state) => state.teams);
  const { data } = useSelector((state) => state.projects);

  useEffect(() => {
    if (activeTeam) {
      dispatch(getProjectsRequest());
    }
  }, [activeTeam, dispatch]);

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

      {data.map((project) => (
        <Project key={project.id}>
          <p>{project.title}</p>
        </Project>
      ))}
    </Container>
  );
}
