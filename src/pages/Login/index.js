import React, { Component } from 'react';

import { Container } from './styles';
import Logo from '../../assets/7_2.png';

class Login extends Component {
  login = e => {
    e.preventDefault();
    this.props.setUsername(e.target.username.value);
  };

  render() {
    return (
      <>
        <Container>
          <form onSubmit={this.login}>
            <img src={Logo} alt="Logo" />
            <input
              id="username"
              autoFocus
              type="text"
              placeholder="Select you Nickname"
            />
            <button>Entrar</button>
          </form>
        </Container>
      </>
    );
  }
}

export default Login;
