import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  width: 100%;
  margin: 50px 100px;
  background-image: linear-gradient(#464646, #0e0e0e);
  border-radius: 30px;
  color: #fff;
  font-size: 30px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 70%;
`;

export const Expertise = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;

  input {
    margin-top: 20px;
    width: 100%;
    height: 40px;
    padding: 5px 5px 5px 20px;
    font-size: 20px;
    color: #000;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  height: 100%;
  border: 3px solid #737373;
  background-color: #b6b6b6;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  color: #000;
  border-bottom: 2px solid #737373;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    border-right: 2px solid #737373;
    height: 100%;

    &:last-child {
      border-right: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Entry = styled.div`
  height: 75px;
  width: 100%;
  font-size: 20px;
  display: flex;
  color: #000;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    border-right: 2px solid #737373;
    height: 100%;
  }
  &:last-child {
    border-bottom: 2px solid #737373;
  }
`;
