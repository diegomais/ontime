import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '~/pages/Main';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/dashboard" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
