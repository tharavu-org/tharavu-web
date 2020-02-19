import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';

import ErrorBox from '../ErrorBox';

export default function AppForm({ children }) {
  const errors = useSelector(state => state.currentForm.backendErrors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'DESTROY_CURRENT_FORM' });
  }, [dispatch]);

  return (
    <Container maxWidth="xs">
      {children}
      <ErrorBox error={errors} />
    </Container>
  );
}
