import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Publico from "./Routes/Publico";
import Equipo from "./Routes/Equipo";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#7c41d4",
      light: "#8646e8",
      dark: "#5016a4",
      contrastText: "#c7c5c5",
    },
    secondary: {
      main: "#63acc9",
      light: "#78b7ce",
      dark: "#46758c",
      contrastText: "rgba(230,230,230,0.87)",
    },
    background: {
      default: "#2d2d2d",
      paper: "#2e2f2f",
    },
    text: {
      primary: "rgba(255,255,255,0.87)",
      secondary: "rgba(160,160,160,0.54)",
      disabled: "rgba(27,105,88,0.75)",
      hint: "rgba(51,135,75,0.38)",
    },
    success: {
      main: "#4caf83",
      light: "#70c79b",
      dark: "#2f8a67",
    },
    divider: "rgba(158,158,158,0.12)",
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
