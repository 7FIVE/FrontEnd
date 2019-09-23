import React from 'react';

import { Container, List, ListHeader, ListItems, Entry } from './styles';
import GlobalStyle from '../../styles/global';
import { Wrapper } from '../../styles/components';
import TopHeader from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import ChatBot from '../interfaceChat';
import { todo, progress, done } from './constants';

const TodoList = () => (
  <>
    <GlobalStyle />
    <TopHeader />
    <Wrapper>
      <Sidebar />
      <Container>
        <List>
          <ListHeader>To do</ListHeader>
          <ListItems>
            {todo.map(item => (
              <Entry key={item.id}>{item.title}</Entry>
            ))}
          </ListItems>
        </List>
        <List>
          <ListHeader>In progress</ListHeader>
          <ListItems>
            {progress.map(item => (
              <Entry key={item.id}>{item.title}</Entry>
            ))}
          </ListItems>
        </List>
        <List>
          <ListHeader>Complete</ListHeader>
          <ListItems>
            {done.map(item => (
              <Entry key={item.id}>{item.title}</Entry>
            ))}
          </ListItems>
        </List>
        <ChatBot />
      </Container>
    </Wrapper>
  </>
);

export default TodoList;
