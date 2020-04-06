import styled from 'styled-components';

export const Container = styled.div`
  background: #202225;
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SignForm = styled.form`
  background: #36393f;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 40px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  h1 {
    font-size: 26px;
    font-weight: 700;
    text-align: center;
    margin: 0 0 10px;
  }

  span {
    color: #b9bbbe;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
    margin-top: 15px;
  }

  input {
    height: 40px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: rgba(0, 0, 0, 0.1);
    color: #f6f6f6;
    margin-top: 8px;
    font-size: 16px;
    transition: border 0.15s ease;

    &:focus {
      border-color: #7289da;
    }
  }

  button {
    margin-top: 20px;
  }
`;
