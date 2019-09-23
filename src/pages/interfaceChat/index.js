import React, { Component } from 'react';

import { Items } from './styles';
import Chat from '../Chat';

export default class interfaceChat extends Component {
  render() {
    return (
      <Items>
        <Chat username={this.props.username} />
      </Items>
    );
  }
}
