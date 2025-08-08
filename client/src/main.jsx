import "./index.css";
import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router";
import MyGames from "./pages/MyGames.jsx";
import Minesweeper from "./components/Minesweeper/Minesweeper.jsx";
import Layout from "./components/Layout/Layout.jsx";
import GameInfo from "./pages/GameInfo.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<App />} />
            <Route path='/games' element={<MyGames />} />
            <Route path='/games/game-info/:gameName' element={<GameInfo />} />
            <Route path='/games/minesweeper' element={<Minesweeper />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
