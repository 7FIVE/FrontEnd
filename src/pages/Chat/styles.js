import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: flex-end;
  align-items: center;
  height: 80%;
  margin-bottom: 2rem;
`;

export const MessaginBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;

  input {
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 0.7rem;
    font-size: 1rem;
  }
`;

export const AreaMessage = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  overflow-y: auto;
  .userName {
    padding: 0.2rem 0.2rem 0.2rem 1rem;
    opacity: 0.5;
    font-size: 1rem;
  }
  .msg {
    background: #aa38c8;
    border-radius: 5px;
    padding: 1rem;
    font-size: 1.2rem;
    color: #fff;
  }
`;
