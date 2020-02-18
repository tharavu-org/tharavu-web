import React from 'react';
import { MenuList, MenuItem, Paper } from '@material-ui/core';

export default function Sidebar({ menu, onMenuChange }) {
  const menuOptions = ['dashboard', 'events', 'tags', 'members'];

  const renderMenuOptions = () => {
    return menuOptions.map(i => (
      <MenuItem
        key={i}
        dense
        selected={menu === i}
        onClick={() => onMenuChange(i)}
      >
        {i.toUpperCase()}
      </MenuItem>
    ));
  };
  return (
    <MenuList>
      <Paper square variant="outlined">
        {renderMenuOptions()}
      </Paper>
    </MenuList>
  );
}
