import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Chat from './pages/Chat';
import Main from './pages/Main';
import Hackathons from './pages/Hackathons';
import Mentores from './pages/Mentores';
import Jurados from './pages/Jurados';
import Times from './pages/Times';
import TodoList from './pages/TodoList';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Hackathons} />
        <Route path="/mentors" exact component={Mentores} />
        <Route path="/jurors" exact component={Jurados} />
        <Route path="/teams" exact component={Times} />
        <Route path="/todolist" exact component={TodoList} />
      </Switch>
    </BrowserRouter>
  );
}
