import React from 'react';

import Button from '~/styles/components/Button';
import { Container, SignForm } from './styles';

export default function SignIn() {
  return (
    <Container>
      <SignForm onSubmit={() => {}}>
        <h1>Welcome</h1>

        <span>E-mail</span>
        <input type="email" name="email" />

        <span>Password</span>
        <input type="password" name="password" />

        <Button type="submit" size="big">
          Sign In
        </Button>
      </SignForm>
    </Container>
  );
}
