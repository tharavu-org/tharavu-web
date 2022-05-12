import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
  },
  content: {
    marginTop: '100px',
  },
});

export default function BasicLayout(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.content}>{children}</main>
      <Footer />
    </div>
  );
}
