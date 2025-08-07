import { createTheme } from "@mui/material/styles";

const primary = "#70c1b3";
const secondary = "#1f7defff";
const background = "#f4f9f9";
const textPrimary = "#5fabe9ff";

document.documentElement.style.setProperty("--color-primary", primary);
document.documentElement.style.setProperty("--color-secondary", secondary);
document.documentElement.style.setProperty("--color-bg", background);
document.documentElement.style.setProperty("--color-text-primary", textPrimary);

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    background: {
      default: background,
    },
    text: {
      primary: textPrimary,
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h4: {
      marginBottom: "2rem",
      fontWeight: "bold"
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: textPrimary,
          fontSize: "0.85rem",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
            color: primary,
          },
        },
      },
    },
  },
});

export default theme;
