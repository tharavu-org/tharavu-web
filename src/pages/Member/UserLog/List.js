import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';

import AppPagination from '../../../components/lib/AppPagination';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(3),
  },
  actionBtn: {
    marginRight: theme.spacing(1),
  },
}));

export default function List() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const rows = useSelector(state => state.userLog.logs);

  useEffect(() => {
    dispatch({ type: 'GET_USER_LOGS', payload: { page: 1 } });
  }, [dispatch]);

  return (
    <>
      <TableContainer component={Paper} className={classes.container}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User Type</TableCell>
              <TableCell>IP Address</TableCell>
              <TableCell>Browser</TableCell>
              <TableCell>Browser Ver</TableCell>
              <TableCell>Device</TableCell>
              <TableCell>Device Name</TableCell>
              <TableCell>Device Vendor</TableCell>
              <TableCell>Platform</TableCell>
              <TableCell>Language</TableCell>
              <TableCell>Timezone</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Region</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.tharavuUserId ? 'User' : 'Guest'}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.ipAddress}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.browser.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.browser.version}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.device.type}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.device.model}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.device.vendor}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.platform.name}
                  {row.device.version}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.meta.language}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.meta.timezone}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.location.city}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.location.region}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.location.country}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.createdAt}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AppPagination actionType="GET_USER_LOGS" />
    </>
  );
}
