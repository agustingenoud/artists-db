import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Publico from "./Routes/Publico";
import Equipo from "./Routes/Equipo";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    h1: {
      fontFamily: "Montserrat",
    },
    h2: {
      fontFamily: "Montserrat",
    },
    h3: {
      fontFamily: "Montserrat",
    },
    h4: {
      fontFamily: "Montserrat",
    },
    h5: {
      fontFamily: "Montserrat",
    },
    body1: {
      fontFamily: "Montserrat",
    },
    subtitle1: {
      fontFamily: "Roboto Slab",
    },
    subtitle2: {
      fontFamily: "Roboto Slab",
    },
    body2: {
      fontFamily: "Roboto Slab",
    },
    caption: {
      fontFamily: "Roboto Slab",
    },
    overline: {
      fontFamily: "Roboto Slab",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Equipo />
      </Router>
    </ThemeProvider>
  );
}

export default App;
