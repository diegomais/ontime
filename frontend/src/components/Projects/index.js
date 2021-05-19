import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import projectActions from '~/store/modules/projects/actions';
import membersActions from '~/store/modules/members/actions';
import Can from '~/components/Can';
import Modal from '~/components/Modal';
import Members from '~/components/Members';
import { Button } from '~/components/Button';
import { Container, Project } from './styles';

export default function Projects() {
  const [newProjectTitle, setNewProjectTitle] = useState('');
  const dispatch = useDispatch();
  const { activeTeam } = useSelector((state) => state.teams);
  const { data, projectModalOpen } = useSelector((state) => state.projects);
  const { membersModalOpen } = useSelector((state) => state.members);

  useEffect(() => {
    if (activeTeam) {
      dispatch(projectActions.getProjectsRequest());
    }
  }, [activeTeam, dispatch]);

  function handleOpenProjectModal() {
    dispatch(projectActions.openProjectModal());
  }

  function handleCloseProjectModal() {
    dispatch(projectActions.closeProjectModal());
  }

  function handleOpenMembersModal() {
    dispatch(membersActions.openMembersModal());
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
          <Can checkPermission="create_projects">
            <Button onClick={handleOpenProjectModal}>+ New</Button>{' '}
          </Can>
          <Button onClick={handleOpenMembersModal}>Members</Button>
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
            <Button onClick={handleCloseProjectModal} size="small" color="gray">
              Cancel
            </Button>
          </form>
        </Modal>
      )}

      {membersModalOpen && <Members />}
    </Container>
  );
}
