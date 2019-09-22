import React, { Component } from 'react';

import { AreaMessage } from './styles';

export default class Chat extends Component {
  render() {
    return (
      <AreaMessage>
        {this.props.message.map(msg => (
          <>
            <div className="userName">
              <span>{msg.user} </span>
            </div>
            <div className="msg">
              <p>{msg.message}</p>
            </div>
          </>
        ))}
      </AreaMessage>
    );
  }
}
