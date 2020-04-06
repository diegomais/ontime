import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Main from '~/pages/Main';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

export default function services() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Main} isPrivate />
    </Switch>
  );
}
