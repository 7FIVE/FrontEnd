import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);
  background-color: #727272;
  width: 200px;
`;

export const Item = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  text-decoration: none;
  color: #fff;
  width: 100%;

  &:hover {
    background-color: #525252;
  }

  &:active {
    background-color: #323232;
  }
`;
