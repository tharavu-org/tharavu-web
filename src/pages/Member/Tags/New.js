import React from 'react';
import { useDispatch } from 'react-redux';

import Form from './Form';

export default function New() {
  const dispatch = useDispatch();

  const onSubmit = values => {
    dispatch({ type: 'CREATE_TAG', payload: values });
  };
  return <Form onSubmit={onSubmit} />;
}
