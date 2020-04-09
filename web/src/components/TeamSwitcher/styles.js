import styled from 'styled-components';

export const Container = styled.aside`
  background: #fff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 20px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TeamList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Team = styled.button`
  border: 0;
  background: transparent;
  margin-bottom: 8px;

  img {
    transition: all 0.2s;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  &:hover img {
    border-radius: 30%;
  }
`;

export const NewTeam = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px dashed rgba(0, 0, 0, 0.7);
  background: transparent;
  margin-bottom: 8px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: bold;
  transition: all 0.2s;

  &:hover {
    border: 1px dashed rgba(0, 0, 0, 0.5);
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const Logout = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px dashed #e04848;
  background: transparent;
  color: #e04848;
  font-weight: bold;
  transition: all 0.2s;

  &:hover {
    border-color: #a43d3d;
    color: #a43d3d;
  }
`;
