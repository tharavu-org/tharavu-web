import React from 'react';
import { useDispatch } from 'react-redux';

import Form from './Form';
import AppForm from '../../lib/form/AppForm';

export default function SignIn() {
  const dispatch = useDispatch();

  const onSubmit = values => {
    dispatch({ type: 'SIGNIN', payload: values });
  };

  return (
    <AppForm>
      <Form onSubmit={onSubmit} />
    </AppForm>
  );
}
