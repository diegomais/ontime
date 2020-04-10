import styled from 'styled-components';

export const MembersList = styled.ul`
  list-style: none;
  margin-top: 20px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    &:first-child {
      margin: 0;
    }

    strong {
      font-size: 18px;
    }

    > div {
      width: 320px;
      color: #666;
    }
  }
`;

export const Invite = styled.form`
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
