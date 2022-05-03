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
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const menuItems = [
  {
    label: "Proyecto",
    href: "/proyecto",
  },
  {
    label: "Texto",
    href: "/texto",
  },
  {
    label: "Índice",
    href: "/indice",
  },
  {
    label: "Altas",
    href: "/altas",
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

  const displayDesktop = () => {
    return (
      <>
        {menuItems.map((item) => (
          <Typography
            variant='body1'
            ml={1}
            as={Link}
            to={item.href}
            color='inherit'
            fontWeight='bold'
            sx={{ textDecoration: "none" }}
          >
            {item.label}
          </Typography>
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
      <AppBar position='static' sx={{ padding: "8% 2% 12% 2%" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant='h3'
            as={Link}
            to='/'
            sx={{ textDecoration: "none", color: "black" }}
          >
            Devenir <br />
            Otros <br />
            <strong>Cuerpxs</strong>
          </Typography>

          <Box>{mobileView ? displayMobile() : displayDesktop()}</Box>
        </Toolbar>

        <Grid
          container
          spacing={6}
          sx={{ marginTop: "6vh", paddingLeft: "10vw" }}
        >
          <Grid item xs={12} md={5} lg={5}>
            <Typography variant='h5'>
              <span
                style={{
                  backgroundColor: "#D6711E",
                  padding: "0.4vh 1.2vw",
                }}
              >
                Disidencias Sexuales
              </span>
            </Typography>
            <br />
            <Typography variant='h5' sx={{ fontWeight: "bold" }}>
              Prácticas artísticas y activistas que{" "}
              <span style={{ color: "#D6711E" }}>
                cuestionan la forma hegemónica{" "}
              </span>
              en que{" "}
              <span style={{ fontWeight: "lighter" }}>
                {" "}
                <em> sexo y genero</em>
              </span>{" "}
              son representados socialmente.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <img src='https://firebasestorage.googleapis.com/v0/b/devenir-otros-cuerpos.appspot.com/o/images%2Fimg-intro.png?alt=media&token=e0eb0b83-24e1-48fd-9ad0-00b61d98095e'></img>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}

export default NavMenu;
