import React, { Component } from 'react';

import GlobalStyle from '../../styles/global';
import { Wrapper } from '../../styles/components';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Items } from './styles';
import ChatBot from '../interfaceChat';
// import { Container } from './styles';

export default class Hackathons extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Wrapper>
          <Sidebar />
          <Items>
            <div id="container">
              <div id="title">
                <p>Open Hack - Hackathon</p>
                <span>Inscrições encerradas</span>
              </div>
              <div id="status">
                <span>Participando</span>
              </div>
            </div>
            <ChatBot />
          </Items>
        </Wrapper>
      </>
    );
  }
}
