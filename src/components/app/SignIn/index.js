import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';

import Form from './Form';

export default function SignIn() {
  const dispatch = useDispatch();

  const onSubmit = values => {
    dispatch({ type: 'SIGNIN', payload: values });
  };

  return (
    <Container maxWidth="xs">
      <Form onSubmit={onSubmit} />
    </Container>
  );
}
