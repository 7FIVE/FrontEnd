import React from 'react';

import { Container } from './styles';

import img from '../../assets/images/7five.png';

const Header = () => (
  <Container>
    <img alt="logo" src={img} />
  </Container>
);

export default Header;
