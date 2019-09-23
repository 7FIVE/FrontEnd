import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 100%;
  margin: 50px 100px;
  background-image: linear-gradient(#464646, #0e0e0e);
  border-radius: 30px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 70%;
  width: 25%;
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(#dedddd, #4e4d4d);
  height: 75px;
  width: 100%;
  font-size: 30px;
  border: 3px solid #000;
`;

export const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: linear-gradient(#dedddd, #4e4d4d);
  height: 100%;
  width: 100%;
  border: 3px solid #000;
`;

export const Entry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  border: 1px solid #818181;
  border-radius: 25px;
  height: 50px;
  width: 80%;
  font-size: 18px;
  cursor: pointer;
`;
