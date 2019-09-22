import React from 'react';

import {
  Container,
  Left,
  Right,
  Expertise,
  Header,
  Content,
  Entry,
} from './styles';
import { users } from './constants';

const Times = () => (
  <Container>
    <Left>
      <Expertise>
        <p>Search for Expertise</p>
        <input type="text" name="expertise" disabled value="Developer" />
      </Expertise>
      <Expertise>
        <p>Search for Skill</p>
        <input type="text" name="expertise" disabled value="Python; Backend;" />
      </Expertise>
    </Left>
    <Right>
      <Header>
        <p>Name</p>
        <p>Expertise</p>
        <p>Skill</p>
      </Header>
      <Content>
        {users.map(user => (
          <Entry key={user.id}>
            <p>{user.name}</p>
            <p>{user.expertise}</p>
            <p>{user.skills}</p>
          </Entry>
        ))}
      </Content>
    </Right>
  </Container>
);

export default Times;
