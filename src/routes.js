import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Chat from './pages/Chat';
import Main from './pages/Main';
import Hackathons from './pages/Hackathons';
import Mentores from './pages/Mentores';
import Jurados from './pages/Jurados';
import Times from './pages/Times';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Hackathons} />
      <Route path="/mentors" exact component={Mentores} />
      <Route path="/jurors" exact component={Jurados} />
      <Route path="/teams" exact component={Times} />
    </Switch>
  );
}
