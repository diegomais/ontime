import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import actions from '~/store/modules/auth/actions';
import { Button } from '~/components/Button';
import { Container, SignForm } from './styles';

import logo from '~/assets/logo.png';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(actions.signUpRequest(name, email, password));
  }

  return (
    <Container>
      <SignForm onSubmit={handleSubmit}>
        <img src={logo} alt="OnTime" width={320} />

        <span>Name</span>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          Create Account
        </Button>
      </SignForm>
    </Container>
  );
}
