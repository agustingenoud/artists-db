import * as React from "react";

import { Link } from "react-router-dom";

import {
  AppBar,
  Box,
  Toolbar,
  Menu,
  MenuItem,
  Button,
  IconButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function NavMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorAlta, setAnchorAlta] = React.useState(null);
  const openAlta = Boolean(anchorAlta);

  const handleClickAlta = (event) => {
    setAnchorAlta(event.currentTarget);
  };
  const handleCloseAlta = () => {
    setAnchorAlta(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem as={Link} onClick={handleClose} to='/'>
              <ListItemText>Expo</ListItemText>
            </MenuItem>
            <MenuItem as={Link} onClick={handleClose} to='/archivo'>
              Archivo
            </MenuItem>
            <MenuItem as={Link} onClick={handleClose} to='/textos'>
              Textos
            </MenuItem>
            <MenuItem as={Link} onClick={handleClose} to='/equipo'>
              Equipo
            </MenuItem>
          </Menu>

          <Button
            id='alta-button'
            aria-controls='alta-button'
            aria-haspopup='true'
            aria-expanded={openAlta ? "true" : undefined}
            onClick={handleClickAlta}
            color='inherit'
          >
            Altas
          </Button>

          <Menu
            id='alta-button'
            aria-labelledby='alta-button'
            anchorEl={anchorAlta}
            open={openAlta}
            onClose={handleCloseAlta}
          >
            <MenuItem as={Link} onClick={handleCloseAlta} to='/altas/artista'>
              Artista
            </MenuItem>
          </Menu>

          <Button as={Link} to='/login' color='inherit'>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavMenu;
