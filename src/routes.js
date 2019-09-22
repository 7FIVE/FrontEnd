import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Mentores from './pages/Mentores';
import Jurados from './pages/Jurados';
import Times from './pages/Times';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/mentors" exact component={Mentores} />
      <Route path="/jurors" exact component={Jurados} />
      <Route path="/teams" exact component={Times} />
    </Switch>
  );
}
