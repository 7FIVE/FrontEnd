import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  justify-content: flex-end;
  align-items: flex-end;
  height: 50%;
  margin-bottom: 2rem;
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  div:last-child {
    width: auto;
  }
  div.is {
    width: 100%;
  }
  #afs {
    background: none;
    border: none;
  }
  #id {
    display: none;
    transition: all 0.1s ease-in-out;
  }
`;

export const MessaginBox = styled.div`
  width: 100%;
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
  margin-bottom: 5rem;
  .msg {
    background: #fff;
    border-radius: 10px;
    padding: 1rem;
    font-size: 1.2rem;
    color: #000;
    margin-right: -1rem;
  }
  .msg:first-child {
    display: none;
  }
`;
