import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Basic/Header';
import Footer from './Basic/Footer';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
  },
  content: {
    marginTop: '50px',
  },
});

export default function LegalLayout(props) {
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
