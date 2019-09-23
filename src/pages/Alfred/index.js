import React, { Component } from 'react';

import { AlfredIc } from './styles';

import AlfredLogo from '../../assets/alfred-logo.png';

export default class Alfred extends Component {
  render() {
    return (
      <>
        <AlfredIc>
          <img src={AlfredLogo} alt="icon Alfred" />
        </AlfredIc>
      </>
    );
  }
}
