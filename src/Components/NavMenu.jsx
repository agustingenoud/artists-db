import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import {
  AppBar,
  Box,
  Toolbar,
  Menu,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const menuItems = [
  {
    label: "expo",
    href: "/",
  },
  {
    label: "textos",
    href: "/textos",
  },
  {
    label: "equipo",
    href: "/equipo",
  },
  {
    label: "archivo",
    href: "/archivo",
  },
];

function NavMenu() {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const [anchorMenu, setAnchorMenu] = React.useState(null);
  const openMenu = Boolean(anchorMenu);

  const handleClickMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorMenu(null);
  };

  const [anchorAlta, setAnchorAlta] = React.useState(null);
  const openAlta = Boolean(anchorAlta);

  const handleClickAlta = (event) => {
    setAnchorAlta(event.currentTarget);
  };
  const handleCloseAlta = () => {
    setAnchorAlta(null);
  };

  const displayDesktop = () => {
    return (
      <>
        {menuItems.map((item) => (
          <Button as={Link} to={item.href} color='inherit'>
            {item.label}
          </Button>
        ))}
      </>
    );
  };

  const displayMobile = () => {
    return (
      <>
        <Box>
          <Button
            id='menu-button'
            aria-controls='menu-button'
            aria-haspopup='true'
            aria-expanded={openMenu ? "true" : undefined}
            onClick={handleClickMenu}
            color='inherit'
          >
            <MenuIcon />
          </Button>
          <Menu
            id='menu-button'
            aria-labelledby='menu-button'
            anchorEl={anchorMenu}
            open={openMenu}
            onClose={handleCloseMenu}
          >
            {menuItems.map((item) => (
              <MenuItem as={Link} onClick={handleCloseMenu} to={item.href}>
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </>
    );
  };

  return (
    <Box>
      <AppBar position='static' sx={{ padding: "8% 2% 18% 2%" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant='h3'>
            Devenir <br />
            Otrxs <br />
            Cuerpxs
          </Typography>

          <Box>
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
            {mobileView ? displayMobile() : displayDesktop()}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavMenu;
