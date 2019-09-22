import React, { Component } from 'react';

import { Content } from './styles';
import DisplayConversation from './DisplayConversation';
import MessaginBox from './MessaginBox';

import Alfred from '../Alfred';

export default class Chat extends Component {
  state = {
    messages: [],
    hidden: false,
  };

  conection = new WebSocket('ws://localhost:8888/websocket');

  componentDidMount() {
    this.conection.onmessage = message => {
      const data = JSON.parse(message.data);
      console.log(data);
      this.setState({ messages: [...this.state.messages, data] });
    };
  }

  getMessage = message => {
    const data = { id: '999', user: this.props.username, message };
    this.conection.onopen = () => {
      this.conection.send(JSON.stringify('conectionON'));
    };
    this.conection.send(JSON.stringify(data));
    this.setState({ messages: [] });
  };

  handleHidden = () => {
    this.setState({ hidden: !this.state.hidden });
    console.log(this.state.hidden);
  };

  render() {
    return (
      <>
        <Content>
          <div>
            <DisplayConversation message={this.state.messages} />
            {this.state.hidden === false ? (
              <MessaginBox getMessage={this.getMessage} />
            ) : (
              <> </>
            )}
          </div>
          <button id="afs" onClick={this.handleHidden}>
            <Alfred />
          </button>
        </Content>
      </>
    );
  }
}
