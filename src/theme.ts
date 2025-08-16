import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#0a0f2c"
    },
    primary: {
      main: "#ff00ff",
    },
    secondary: {
      main: "#ff6f00",
    },
    text: {
      primary: "#ffffff",
      secondary: "#cccccc",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

export default theme;