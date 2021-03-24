import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';

const MenuButton = function () {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleRedirect = (event, param) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    history.push(`/${param}`);
    setOpen(false);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  return (
    <div>
      <MenuIcon
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      ></MenuIcon>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                autoFocusItem={open}
                id="menu-list-grow"
                onKeyDown={handleListKeyDown}
              >
                <MenuItem
                  onClick={() => {
                    handleRedirect(this, '');
                  }}
                >
                  Home
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleRedirect(this, 'Favorites');
                  }}
                >
                  Favorites
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleRedirect(this, 'Logout');
                  }}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        )}
      </Popper>
    </div>
  );
};

export default MenuButton;
