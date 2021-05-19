import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 40px;
  width: ${(props) => (props.size === 'big' ? 600 : 400)}px;

  h1 {
    font-size: 26px;
    font-weight: 700;
    text-align: center;
    margin: 0 0 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    > span {
      color: #666;
      font-size: 14px;
      line-height: 16px;
      font-weight: 600;
      margin-top: 15px;
    }

    > input {
      height: 40px;
      padding: 10px;
      border-radius: 3px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      background-color: rgba(0, 0, 0, 0.1);
      color: #666;
      margin-top: 8px;
      font-size: 16px;
      transition: border 0.15s ease;

      &:focus {
        border-color: #7289da;
      }
    }

    > button {
      margin-top: 20px;
    }
  }
`;
