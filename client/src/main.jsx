import "./index.css";
import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import MyGames from "./pages/MyGames&MyProjects/MyGames.jsx";
import Minesweeper from "./components/Minesweeper/Minesweeper.jsx";
import Layout from "./components/Layout/Layout.jsx";
import GameInfo from "./pages/GameInfo/GameInfo.jsx";
import MyProjects from "./pages/MyGames&MyProjects/MyProjects.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { ColorModeProvider } from "./context/ColorModeContext";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ColorModeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<App />} />
            <Route path='/games' element={<MyGames />} />
            <Route path='/games/game-info/:gameName' element={<GameInfo />} />
            <Route path='/games/minesweeper' element={<Minesweeper />} />
            <Route path='/projects' element={<MyProjects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ColorModeProvider>
  </React.StrictMode>
);
