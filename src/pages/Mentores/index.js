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
import GlobalStyle from '../../styles/global';
import { Wrapper } from '../../styles/components';
import TopHeader from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const Mentores = () => (
  <>
    <GlobalStyle />
    <TopHeader />
    <Wrapper>
      <Sidebar />
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
    </Wrapper>
  </>
);

export default Mentores;
