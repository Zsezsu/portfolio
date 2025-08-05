import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#70c1b3", // ocean teal
    },
    secondary: {
      main: "#ffe066", // pastel yellow
    },
    background: {
      default: "#f4f9f9",
    },
    text: {
      primary: "#1a1a1a",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default theme;
