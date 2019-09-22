import styled from 'styled-components';

export const Items = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  flex: 1;
  justify-content: space-between;
  margin: 2rem;

  div#container {
    background-image: linear-gradient(
      to bottom,
      rgba(128, 128, 128, 1),
      rgba(0, 0, 0, 1)
    );
    display: flex;
    flex-direction: row;
    color: #fff;
    height: 10%;
    width: 30%;
    border-radius: 20px;
  }

  div#title {
    font-size: 1.3rem;
    width: 80%;
    padding: 1rem 0rem 1.5rem 2rem;
    display: flex;
    flex-direction: column;
  }

  div#title span {
    margin-top: 0.6rem;
    font-size: 0.9rem;
  }

  div#status {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 0.7rem;
  }

  div#status span {
    height: 20%;
    background: #000;
    box-shadow: 1px 1px 6px #fff;
    border-radius: 10px;
    padding: 0.6rem;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
