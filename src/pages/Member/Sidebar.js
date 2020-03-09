import React from 'react';
import { MenuList, MenuItem, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  menuList: {
    height: `100%`,
  },
  paper: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    height: `calc(100% - ${theme.spacing(2)}px)`,
  },
}));

export default function Sidebar({ menu, onMenuChange }) {
  const classes = useStyles();
  const menuOptions = ['dashboard', 'events', 'tags', 'members', 'user logs'];

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
    <MenuList disablePadding className={classes.menuList}>
      <Paper className={classes.paper} square variant="elevation">
        {renderMenuOptions()}
      </Paper>
    </MenuList>
  );
}
