import { AppBar, Toolbar, Typography } from "@mui/material";
import NavbarButton from "./NavBarButton";
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
        <Typography variant='h6' component='div' className={styles.brand}>
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
