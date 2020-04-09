import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: scroll;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    h1 {
      font-size: 20;
    }

    div {
      button {
        margin-left: 10px;
      }
    }
  }
`;

export const Project = styled.div`
  background: #fff;
  border-radius: 5px;
  margin: 0 0 20px;
  padding: 20px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);

  p {
    font-size: 18;
  }
`;
