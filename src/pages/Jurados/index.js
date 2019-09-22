import React from 'react';

import { Container, Header, Content, Entry, Data, DataSpace } from './styles';
import { jurados } from './constants';
import Linkedin from '../../assets/images/linkedin.png';

const Jurados = () => (
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
);

export default Jurados;
