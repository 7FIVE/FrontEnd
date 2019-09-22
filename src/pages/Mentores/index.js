import React from 'react';

import {
  Container,
  Header,
  Items,
  Space,
  Content,
  Entry,
  Data,
  DataSpace,
} from './styles';
import { mentores } from './constants';

const Mentores = () => (
  <Container>
    <Header>
      <Items>
        <p>Available Mentors</p>
        <p>Day</p>
        <p>Hour</p>
      </Items>
      <Space />
    </Header>
    <Content>
      {mentores.map(mentor => (
        <Entry key={mentor.id}>
          <Data>
            <p>{mentor.user}</p>
            <p>{mentor.date}</p>
            <p>{mentor.time}</p>
          </Data>
          <DataSpace>
            <button type="button">Schedule</button>
          </DataSpace>
        </Entry>
      ))}
    </Content>
  </Container>
);

export default Mentores;
