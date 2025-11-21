import { createTheme } from "@mui/material/styles";

const palettes = {
  light: {
    primary: "#70c1b3",
    secondary: "#1f7defff",
    background: "#f4f9f9",
    textPrimary: "#5fabe9ff",
    textSecondary: "#555",
    surface: "#ffffff",
    bubbleText: "#ffffff",
  },
  dark: {
    primary: "#70c1b3",
    secondary: "#9ec9ff",
    background: "#0f172a",
    textPrimary: "#f4f9f9",
    textSecondary: "#cbdef7",
    surface: "#1e293b",
    bubbleText: "#0f172a",
  },
};

const cssVarMap = {
  "--color-primary": "primary",
  "--color-secondary": "secondary",
  "--color-bg": "background",
  "--color-text-primary": "textPrimary",
  "--color-bubble-text": "bubbleText",
};

export const applyCssVariables = (mode) => {
  const palette = palettes[mode];
  if (!palette) throw new Error(`Unknown color mode: ${mode}`);
  const root = document.documentElement;
  Object.entries(cssVarMap).forEach(([cssVar, token]) => {
    root.style.setProperty(cssVar, palette[token]);
  });
};

export const createAppTheme = (mode = "dark") => {
  const palette = palettes[mode];
  return createTheme({
    palette: {
      mode,
      primary: { main: palette.primary },
      secondary: { main: palette.secondary },
      background: {
        default: palette.background,
        paper: palette.surface,
      },
      text: {
        primary: palette.textPrimary,
        secondary: palette.textSecondary,
      },
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
      h4: {
        marginBottom: "2rem",
        fontWeight: "bold",
        color: palette.secondary,
      },
    },
  });
};
