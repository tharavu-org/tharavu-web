import React from 'react';
import Icon from '@mdi/react';
import { mdiAccount, mdiChevronDown } from '@mdi/js';
import { Button, Menu, MenuItem } from '@material-ui/core';

import signout from '../../../utils/session';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
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
        <MenuItem onClick={signout}>Sign out</MenuItem>
      </Menu>
    </div>
  );
}
