import React from 'react';

import { Container, Header, Content, Entry, Data, DataSpace } from './styles';
import { jurados } from './constants';
import Linkedin from '../../assets/images/linkedin.png';
import GlobalStyle from '../../styles/global';
import { Wrapper } from '../../styles/components';
import TopHeader from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const Jurados = () => (
  <>
    <GlobalStyle />
    <TopHeader />
    <Wrapper>
      <Sidebar />
      <Container>
        <Header>Jurors</Header>
        <Content>
          {jurados.map(jurado => (
            <Entry key={jurado.id}>
              <Data>
                <p>{jurado.name}</p>
                <p>{jurado.description}</p>
              </Data>
              <DataSpace>
                <img alt="linnkedin" src={Linkedin} />
              </DataSpace>
            </Entry>
          ))}
        </Content>
      </Container>
    </Wrapper>
  </>
);

export default Jurados;
