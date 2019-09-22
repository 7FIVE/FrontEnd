import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Chat from './pages/Chat';
import Main from './pages/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/chat" exact component={Chat} />
      </Switch>
    </BrowserRouter>
  );
}
