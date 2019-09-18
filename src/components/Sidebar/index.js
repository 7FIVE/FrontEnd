import React from 'react';

import { Container, Item } from './styles';

const Sidebar = () => (
  <Container>
    <Item to="/">Hackathons</Item>
    <Item to="/">Mentores</Item>
    <Item to="/">Jurados</Item>
    <Item to="/">Times</Item>
    <Item to="/">To-do List</Item>
  </Container>
);

export default Sidebar;
