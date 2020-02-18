import React from 'react';
import { MenuList, MenuItem } from '@material-ui/core';

export default function Sidebar({ menu, onMenuChange }) {
  const menuOptions = ['dashboard', 'events', 'tags', 'members'];

  const renderMenuOptions = () => {
    return menuOptions.map(i => (
      <MenuItem key={i} selected={menu === i} onClick={() => onMenuChange(i)}>
        {i.toUpperCase()}
      </MenuItem>
    ));
  };
  return <MenuList>{renderMenuOptions()}</MenuList>;
}
