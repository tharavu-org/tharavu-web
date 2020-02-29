import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { format } from 'date-fns';

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
  notice: {
    backgroundColor: '#20232a',
    color: 'white',
    padding: theme.spacing(2),
    textAlign: 'center',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: `calc(100% - ${theme.spacing(4)}px)`,
  },
  noticeLink: {
    color: 'inherit',
  },
  noticeBtn: {
    marginLeft: theme.spacing(1),
  },
}));

export default function Footer() {
  const classes = useStyles();
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const termsNotice = window.localStorage.getItem('termsNotice');
    if (!termsNotice) {
      setShowNotice(true);
    }
  }, []);

  const handleAgreeBtnClick = () => {
    setShowNotice(false);
    localStorage.setItem('termsNotice', format(new Date(), 'yyyy-MM-dd'));
  };

  return (
    <footer className={classes.footer}>
      {showNotice && (
        <div className={classes.notice}>
          <Typography variant="subtitle1">
            By using our site, you acknowledge that you have read and understand
            our&nbsp;
            <a className={classes.noticeLink} href="/legal/privacy-policy">
              Privacy Policy
            </a>
            <span>, and our&nbsp;</span>
            <a className={classes.noticeLink} href="/legal/terms-of-service">
              Terms of Service.
            </a>
            <Button
              className={classes.noticeBtn}
              variant="contained"
              color="default"
              size="small"
              onClick={handleAgreeBtnClick}
            >
              I Agree
            </Button>
          </Typography>
        </div>
      )}
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
