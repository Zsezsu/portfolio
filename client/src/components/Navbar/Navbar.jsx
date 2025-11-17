import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NavbarButton from "./NavbarButton";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "About me", path: "/" },
  { label: "My Games", path: "/games" },
  { label: "My projects", path: "/projects" },
];

function Navbar() {
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
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
