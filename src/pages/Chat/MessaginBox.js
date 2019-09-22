import React, { Component } from 'react';

import { MessaginBox } from './styles';

export default class Chat extends Component {
  messageHandler = e => {
    const { getMessage } = this.props;
    if (e.keyCode === 13) {
      e.preventDefault();
      getMessage(e.target.value);
      e.target.value = '';
    }
  };

  render() {
    return (
      <MessaginBox id="messaginBox">
        <input
          onKeyDown={this.messageHandler}
          placeholder="Digite sua mensagem e aperte enter para enviar"
        />
      </MessaginBox>
    );
  }
}
