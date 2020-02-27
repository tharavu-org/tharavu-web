import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: '#20232a',
    color: 'white',
    padding: theme.spacing(3),
    textAlign: 'center',
  },
  link: {
    marginRight: theme.spacing(2),
    color: 'inherit',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Link className={classes.link} to="/legal/privacy-policy">
        Privacy Policy
      </Link>
      <Link className={classes.link} to="/legal/terms-of-service">
        Terms of Service
      </Link>
      <Link className={classes.link} to="/contact-us">
        Contact Us
      </Link>
    </footer>
  );
}
