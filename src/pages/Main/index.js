import React, { Component } from 'react';

import Login from '../Login';
import Chat from '../interfaceChat';

export default class Main extends Component {
  state = {
    username: 'vg',
  };

  setUsername = username => {
    this.setState({ username });
  };

  render() {
    return (
      <>
        {!this.state.username ? (
          <Login setUsername={this.setUsername} />
        ) : (
          <Chat username={this.state.username} />
        )}
      </>
    );
  }
}
