import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";
import NavbarButton from "./NavbarButton";
import styles from "./Navbar.module.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useColorMode } from "../../context/ColorModeContext";

const navItems = [
  { label: "About me", path: "/" },
  { label: "My Games", path: "/games" },
  { label: "My projects", path: "/projects" },
];

function Navbar() {
  const { mode, toggleMode } = useColorMode();
  return (
    <AppBar
      position='sticky'
      elevation={0}
      color='transparent'
      className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <Typography
          variant='h6'
          component={Link}
          to='/'
          className={styles.brand}
          sx={{ textDecoration: "none", color: "inherit" }}>
          Zsu Juhász
        </Typography>

        <div className={styles.nav}>
          {navItems.map((item, index) => (
            <NavbarButton key={index} item={item} />
          ))}
          <Tooltip
            title={
              mode === "light" ? "Switch to dark mode" : "Switch to light mode"
            }>
            <IconButton
              onClick={toggleMode}
              aria-label='Toggle color mode'
              className={styles.themeToggle}
              size='small'>
              {mode === "light" ? (
                <DarkModeIcon fontSize='small' />
              ) : (
                <LightModeIcon fontSize='small' />
              )}
            </IconButton>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
