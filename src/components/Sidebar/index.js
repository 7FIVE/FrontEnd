import React from 'react';

import { Container, Item } from './styles';

const Sidebar = () => (
  <Container>
    <Item to="/mentors">Mentors</Item>
    <Item to="/jurors">Jurors</Item>
    <Item to="/teams">Teams</Item>
    <Item to="/">To-do List</Item>
  </Container>
);

export default Sidebar;
