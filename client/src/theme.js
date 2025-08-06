import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#70c1b3",
    },
    secondary: {
      main: "#1f7defff",
    },
    background: {
      default: "#f4f9f9",
    },
    text: {
      primary: "#5fabe9ff",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default theme;
