import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Icon from '@mdi/react';
import { mdiAccount, mdiChevronDown } from '@mdi/js';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import signout from '../../../utils/session';

export default function AccountMenu() {
  const currentUser = useSelector(state => state.session.currentUser);
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAccountClick = () => {
    handleClose();
    if (currentUser.isMember) {
      return history.push('/accounts/member');
    }

    return history.push('/accounts/user');
  };

  return (
    <>
      <Button
        aria-controls="account-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Icon path={mdiAccount} size="30px" />
        <Icon path={mdiChevronDown} size={1} />
      </Button>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleAccountClick}>Account</MenuItem>
        <MenuItem onClick={signout}>Sign out</MenuItem>
      </Menu>
    </>
  );
}
