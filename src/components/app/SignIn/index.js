import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Box } from '@material-ui/core';

import Form from './Form';

export default function SignIn() {
  const errMsg = useSelector(state => state.session.signinFailedMsg);
  const dispatch = useDispatch();

  const onSubmit = values => {
    dispatch({ type: 'SIGNIN', payload: values });
  };

  return (
    <Container maxWidth="xs">
      <Form onSubmit={onSubmit} />
      {errMsg && (
        <Box color="white" bgcolor="error.main" p={2}>
          {errMsg}
        </Box>
      )}
    </Container>
  );
}
