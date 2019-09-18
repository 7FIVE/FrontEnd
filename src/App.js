import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';
import { Wrapper } from './styles/components';
import Sidebar from './components/Sidebar';
// import store from './store';

function App() {
  return (
    // <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Sidebar />
        <Routes />
      </Wrapper>
    </BrowserRouter>
    // </Provider>
  );
}

export default App;
