import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@material-ui/lab';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(3),
  },
}));

export default function AppPagination({ actionType }) {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const pagination = useSelector(state => state.pagination.pagination);
  const classes = useStyles();

  const handlePaginationChange = (e, newPage) => {
    setPage(newPage);
    dispatch({ type: actionType, payload: { page: newPage } });
  };

  return (
    <Box className={classes.container} display="flex" justifyContent="center">
      <Pagination
        count={pagination.totalPages}
        page={page}
        onChange={handlePaginationChange}
      />
    </Box>
  );
}
