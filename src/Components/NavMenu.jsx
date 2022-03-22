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
      <Typography>OLu</Typography>
    </>
  );
};

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
