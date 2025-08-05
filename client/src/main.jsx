import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router";
import MyGames from './pages/MyGames.jsx';
import Minesweeper from './components/Minesweeper/Minesweeper.jsx';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/games" element={<MyGames />} />
          <Route path="/games/minesweeper" element={<Minesweeper />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
