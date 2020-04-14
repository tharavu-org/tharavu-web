import React from 'react';
import { useDispatch } from 'react-redux';

import AppForm from '../../../components/lib/form/AppForm';
import Form from './Form';

export default function Edit({ tag }) {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch({ type: 'UPDATE_TAG', payload: values });
  };

  return (
    <AppForm>
      <Form onSubmit={onSubmit} initialValues={tag} edit />
    </AppForm>
  );
}
