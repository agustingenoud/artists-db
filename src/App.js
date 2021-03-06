import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Publico from "./Routes/Publico";
import Equipo from "./Routes/Equipo";

import AuthProvider from "./Context/AuthProvider";
import AuthContext from "./Context/AuthContext";

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
    h6: {
      fontFamily: "Roboto Slab",
    },
    body1: {
      fontFamily: "Roboto Slab",
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
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <AuthContext.Consumer>
            {(context) => (
              <>
                {context.userLogin && <Equipo />}
                {!context.userLogin && <Publico />}
              </>
            )}
          </AuthContext.Consumer>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
