import React, { Component } from 'react';

import { AreaMessage } from './styles';

export default class Chat extends Component {
  render() {
    return (
      <AreaMessage>
        {this.props.message.map(msg => (
          <>
            <div className="msg">
              <p>{msg.user === 'Alfred' ? msg.message : <></>}</p>
            </div>
          </>
        ))}
      </AreaMessage>
    );
  }
}
