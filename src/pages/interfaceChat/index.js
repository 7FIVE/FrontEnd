import React, { Component } from 'react';

import GlobalStyle from '../../styles/global';
import { Wrapper } from '../../styles/components';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Items } from './styles';
import Chat from '../Chat';
// import { Container } from './styles';

export default class interfaceChat extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Wrapper>
          <Sidebar />
          <Items>
            <Chat username="Leonardo" />
          </Items>
        </Wrapper>
      </>
    );
  }
}
