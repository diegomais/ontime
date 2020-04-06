import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signInRequest } from '~/store/modules/auth/actions';
import Button from '~/styles/components/Button';
import { Container, SignForm } from './styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <SignForm onSubmit={handleSubmit}>
        <h1>Welcome</h1>

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
          Sign In
        </Button>
      </SignForm>
    </Container>
  );
}
