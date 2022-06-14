import React, { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

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
    label: "Archivo",
    href: "/archivo",
  },
  {
    label: "Textos",
    href: "/texto",
  },
];

function NavMenu() {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const context = useContext(AuthContext);

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

  const addAltasMobile = () => {
    if (context.userLogin) {
      return (
        <>
          <MenuItem as={Link} onClick={handleCloseMenu} to={"/altas"}>
            {"Altas"}
          </MenuItem>
          <MenuItem as={Link} onClick={context.logoutUser} to={"/"}>
            {"Logout"}
          </MenuItem>
        </>
      );
    }
  };

  const addAltasDesktop = () => {
    if (context.userLogin) {
      return (
        <>
          <Typography
            variant='h6'
            ml={1}
            as={Link}
            to={"/altas"}
            color='inherit'
            fontWeight='bold'
            sx={{ textDecoration: "none" }}
          >
            {"Altas"}
          </Typography>
          <Typography
            variant='h6'
            ml={1}
            as={Link}
            to={"/"}
            color='inherit'
            fontWeight='bold'
            sx={{ textDecoration: "none" }}
            onClick={context.logoutUser}
          >
            {"Logout"}
          </Typography>
        </>
      );
    }
  };

  const displayDesktop = () => {
    return (
      <>
        {menuItems.map((item) => (
          <Typography
            variant='h6'
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
        {addAltasDesktop()}
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
            {addAltasMobile()}
          </Menu>
        </Box>
      </>
    );
  };

  return (
    <AuthContext.Consumer>
      {(context) => (
        <Box>
          <AppBar position='static' sx={{ padding: "2% 2% 2% 2%" }}>
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant='h5'
                as={Link}
                to='/'
                sx={{ textDecoration: "none", color: "black" }}
              >
                Devenir <br />
                Otros <br />
                <strong>Cuerpxs</strong>
              </Typography>

              <Box>{mobileView ? displayMobile() : displayDesktop()}</Box>
              {/* {context.userLogin && (
                <Box>
                  <Typography>USUARIX LOGUEADX!!!</Typography>
                </Box>
              )}
              {!context.userLogin && (
                <Box>
                  <Typography>QUERES LOGUEARTE???</Typography>
                </Box>
              )} */}
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </AuthContext.Consumer>
  );
}

export default NavMenu;
