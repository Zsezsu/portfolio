import { useEffect, useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { applyCssVariables, createAppTheme } from "../theme";
import { ColorModeContext } from "./ColorModeContext";

export function ColorModeProvider({ children }) {
  const [mode, setMode] = useState(
    () => localStorage.getItem("color-mode") || "dark"
  );

  useEffect(() => {
    localStorage.setItem("color-mode", mode);
    document.body.dataset.theme = mode;
    applyCssVariables(mode);
  }, [mode]);

  const muiTheme = useMemo(() => createAppTheme(mode), [mode]);

  const value = useMemo(
    () => ({
      mode,
      toggleMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
      setMode,
    }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
