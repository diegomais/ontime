import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import projectActions from '~/store/modules/projects/actions';
import Modal from '~/components/Modal';
import { Button } from '~/components/Button';
import { Container, Project } from './styles';

export default function Projects() {
  const [newProjectTitle, setNewProjectTitle] = useState('');
  const dispatch = useDispatch();
  const { activeTeam } = useSelector((state) => state.teams);
  const { data, projectModalOpen } = useSelector((state) => state.projects);

  useEffect(() => {
    if (activeTeam) {
      dispatch(projectActions.getProjectsRequest());
    }
  }, [activeTeam, dispatch]);

  function handleOpenModal() {
    dispatch(projectActions.openProjectModal());
  }

  function handleCloseModal() {
    dispatch(projectActions.closeProjectModal());
  }

  function handleSubmitNewProject(e) {
    e.preventDefault();

    dispatch(projectActions.createProjectRequest(newProjectTitle));

    setNewProjectTitle('');
  }

  if (!activeTeam) return null;

  return (
    <Container>
      <header>
        <h1>{activeTeam.name}</h1>
        <div>
          <Button onClick={handleOpenModal}>+ New</Button>
          <Button onClick={() => {}}>Members</Button>
        </div>
      </header>

      {data.map((project) => (
        <Project key={project.id}>
          <p>{project.title}</p>
        </Project>
      ))}

      {projectModalOpen && (
        <Modal>
          <h1>Create Team</h1>
          <form onSubmit={handleSubmitNewProject}>
            <span>Team Name</span>
            <input
              name="newProjectTitle"
              value={newProjectTitle}
              onChange={(e) => setNewProjectTitle(e.target.value)}
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
