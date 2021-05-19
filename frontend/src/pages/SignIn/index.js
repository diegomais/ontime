import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import actions from '~/store/modules/auth/actions';
import { Button } from '~/components/Button';
import { Container, SignForm } from './styles';

import logo from '~/assets/logo.png';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(actions.signInRequest(email, password));
  }

  return (
    <Container>
      <SignForm onSubmit={handleSubmit}>
        <img src={logo} alt="OnTime" width={320} />
        <span>E-mail</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <span>Password</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" size="big">
          Log In
        </Button>
      </SignForm>
    </Container>
  );
}
