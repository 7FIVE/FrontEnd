import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  width: 100%;
  margin: 50px 100px;
  background-image: linear-gradient(#464646, #0e0e0e);
  border-radius: 30px;
  color: #fff;
  font-size: 30px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 40px 0;
  width: 95%;
`;

export const Entry = styled.div`
  height: 75px;
  width: 100%;
  margin-bottom: 20px;
  background-image: linear-gradient(#000, #fff);
  display: flex;
`;

export const Data = styled.div`
  height: 100%;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  p {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const DataSpace = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    cursor: pointer;
  }
`;
