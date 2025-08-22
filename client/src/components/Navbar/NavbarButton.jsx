import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function NavbarButton({ item }) {
  return (
    <NavLink
      to={item.path}
      end={item.path === "/"}
      className={({ isActive }) =>
        [styles.navLink, isActive ? styles.active : ""].join(" ")
      }
    >
      <Button variant="text" color="inherit" className={styles.navButton}>
        {item.label}
      </Button>
    </NavLink>
  );
}

export default NavbarButton;
