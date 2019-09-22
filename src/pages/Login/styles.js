import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00a651;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    background: #fff;
    height: 40%;
  }
  input {
    width: 80%;
    height: 20%;
    font-size: 2rem;
    margin-bottom: 0.4rem;
    padding-left: 1rem;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.4);
  }
  button {
    width: 80%;
    height: 20%;
    border: none;
    font-size: 2rem;
    background: #d0d000;
    color: #fff;
    border-radius: 10px;
  }
  img {
    width: 10rem;
    position: relative;
    margin-top: -4rem;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 1200px) {
    form {
      width: 100%;
      transition: all 0.5s ease-in-out;
    }
  }
`;
